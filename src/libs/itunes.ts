import axios from "axios";

export const fetchItunesApi = async (url: string): Promise<ItunesApiResponse> => {
    try {
        const res = await axios.get(url);
        return res.data as ItunesApiResponse;
    } catch (err) {
        console.log(err);
        return {resultCount: 0, results: []}
    }
}

export const fetchItunesRss = async (url: string): Promise<Record<string, any>[]> => {
    try {
        const res = await axios.get(url);
        /* レビューしたユーザ名とか？　NG設定 */
        return res.data.feed.entry;
    } catch (err) {
        console.log(err);
        return [];
    }
}