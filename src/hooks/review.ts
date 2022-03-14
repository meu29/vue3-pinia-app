import { ref } from "vue";
import { tokenize } from "wakachigaki";
import { fetchItunesApi, fetchItunesRss } from "../libs/itunes";

export const useReviews = () => {

    const app = ref<App>({id: "", name: "", description: ""});
    const reviews = ref<Review[]>([]);

    const searchReviews = async (app_id: string) => {

        const res = await fetchItunesApi(`https://itunes.apple.com/lookup?id=${app_id}&country=jp&lang=ja_jp`);

        if (res.resultCount === 1) {
            app.value = {
                id: res.results[0].trackId,
                name: res.results[0].trackName,
                description: res.results[0].description
            }
            const entries = await fetchItunesRss(`https://itunes.apple.com/jp/rss/customerreviews/id=${app_id}/json`);
            reviews.value = entries.map(entry => {
                const words = tokenize(entry.content.label);
                return {
                    id: entry.id,
                    title: entry.title.label,
                    content: entry.content.label,
                    rating: Number(entry["im:rating"].label),
                    relation: true
                }
            });
        }
        
    }

    return {
        app,
        reviews,
        searchReviews
    }

}