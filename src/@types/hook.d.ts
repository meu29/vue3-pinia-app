type UseTexts = {
    texts: import("vue").Ref<string[]>;
    addText: (text: string) => void;
}