export type Quote = {
    code: string;
    content: string;
    content_id: string;
    credit: string;
};

export type ByFileMap = Record<string, Quote[]>;