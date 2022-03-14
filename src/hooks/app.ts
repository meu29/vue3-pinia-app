import { ref } from "vue";
import { fetchItunesApi } from "../libs/itunes";

export const useApps = () => {

    const apps = ref<App[]>([]);

    const searchApps = async (term: string) => {
           
        const result = await fetchItunesApi(`https://itunes.apple.com/search?term=${term}&media=software&entity=software&country=jp&lang=ja_jp&limit=100`);
        apps.value = result.results.map((result: any) => {
            return {
                id: result.trackId,
                name: result.trackName,
                description: result.description
            }
        });

    }

    return {
        apps,
        searchApps
    }

}