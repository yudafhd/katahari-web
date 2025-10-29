import { NextRequest, NextResponse } from "next/server";
import {
    PutObjectCommand,
    GetObjectCommand,
    type GetObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2 } from "@/lib/r2";
import { Readable } from "node:stream";

export async function POST(req: NextRequest) {
    const { key, contentType } = await req.json();
    const url = await getSignedUrl(
        r2,
        new PutObjectCommand({
            Bucket: process.env.R2_BUCKET!,
            Key: key,
            ContentType: contentType,
        }),
        { expiresIn: 60 } // 60 detik
    );
    return Response.json({ url });
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const key = searchParams.get("key");
        if (!key) {
            return NextResponse.json({ error: "Missing `key` query param" }, { status: 400 });
        }

        const { Body } = await r2.send(
            new GetObjectCommand({
                Bucket: process.env.R2_BUCKET!,
                Key: key,
            })
        );

        if (!Body) {
            return NextResponse.json({ error: "Object has no body" }, { status: 404 });
        }

        const payload = await bodyToJSON(Body);
        return NextResponse.json(payload);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to fetch object" }, { status: 500 });
    }
}

async function bodyToJSON(body: GetObjectCommandOutput["Body"]) {
    const text = await bodyToString(body);
    return JSON.parse(text);
}

async function bodyToString(body: GetObjectCommandOutput["Body"]): Promise<string> {
    if (!body) {
        return "";
    }

    if (typeof body === "string") {
        return body;
    }

    if (body instanceof Uint8Array) {
        return Buffer.from(body).toString("utf-8");
    }

    if (typeof Blob !== "undefined" && body instanceof Blob) {
        return await body.text();
    }

    if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream) {
        const reader = body.getReader();
        const decoder = new TextDecoder();
        let result = "";

        while (true) {
            const { value, done } = await reader.read();
            if (done) {
                break;
            }
            if (value) {
                result += decoder.decode(value, { stream: true });
            }
        }

        result += decoder.decode();
        return result;
    }

    const chunks: Uint8Array[] = [];
    for await (const chunk of body as Readable) {
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks).toString("utf-8");
}
