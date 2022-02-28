import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useMemoStore = defineStore("memos", {

    state: (): MemoState => {
        const id = v4();
        return {
            memos: {
                [id]: {
                    id: id,
                    content: "サンプルメモ",
                    date: new Date()
                }
            }
        }
    },

    getters: {

        similrMemos: (state) => {
            return (text: string) => {
                const x = Object.values(state.memos).filter(memo => memo.content.includes(text));
                console.log(x)
                return x;
            }
        }

    },

    actions: {

        addMemo(content: string) {
            const id = v4();
            this.memos[id] = {
                id: id,
                content: content,
                date: new Date()
            }
        },

        deleteMemo(id: string) {
            delete this.memos[id];
        }

    }

});