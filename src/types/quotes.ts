export type Quote = {
    code: string;
    content: string;
    content_id: string;
    credit: string;
};

export type ByCategoryMap = Record<string, Quote[]>;