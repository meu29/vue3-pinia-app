type App = {
    id: string;
    name: string;
    description: string;
}

type Review = {
    id: string;
    title: string;
    content: string;
    rating: number;
    relation: boolean;
}

type Condition = {
    rating: number;
    all: boolean;
}

type ItunesApiResponse = {
    resultCount: number;
    results: any[];
}