import { ref } from "vue";

export const useTexts = (): UseTexts => {

    const texts = ref<string[]>([]);

    const addText = (text: string) => texts.value.push(text);

    return {
        texts,
        addText
    }

}