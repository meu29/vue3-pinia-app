import { ref } from "vue";

export const useTextEditState = () => {

    const editTextState = ref<EditTextState>({
        text: "",
        index: null
    });

    const setExistingText = (index: number, text: string) => {
        editTextState.value.index = index;
        editTextState.value.text = text;
    }

    return {
        editTextState,
        setExistingText
    }

}