import type { LocationQueryValue } from "vue-router";

export const getQuery = (query_value: LocationQueryValue | LocationQueryValue[] | undefined): string | undefined => {
    if (query_value === undefined) {
        return query_value;
    } else if (Array.isArray(query_value)) {
        return query_value[0] as string;
    } else {
        return query_value as string;
    }
}