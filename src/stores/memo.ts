import { defineStore } from "pinia";
import { tokenize } from "wakachigaki";
import { createMemo, getRelatedMemos } from "../utils/memo";

export const useMemoStore = defineStore("memos", {

    state: (): MemoState => {
        const content = "ちょっともやもやした部分が残っていしまいましたがひとまずアイテムベースCFの実装が終わりました。 今回は100kという規模だったので普通のPythonで終わりましたが、これがもっと大きくなってくるとSparkだのなんだのが必要になるんだろうなと感じました。 これの点検も必要ですが他のモデルも早く実装したいです。";
        const memo = createMemo(content);
        return {
            memos: {[memo.id]: memo}
        }
    },

    getters: {

        allMemos: (state) => {
            return () => Object.values(state.memos)
        },

        /* 親は別の親の子になれない　親は複数の子を持てる */

        threads: (state) => {
            return (target_memo_id: string) => {
                const parent_memos = getRelatedMemos(state.memos, target_memo_id, "parent_memo_id").reverse();
                const child_memos = getRelatedMemos(state.memos, target_memo_id, "child_memo_id");
                return parent_memos.concat(child_memos);
            }
        },

        includeKeyword: (state) => {
            return (keyword: string) => Object.values(state.memos).filter(memo => memo.content.includes(keyword));
        },

    },

    actions: {

        addMemo(content: string, parent_memo_id?: string) {
            const memo = createMemo(content, parent_memo_id);
            this.memos[memo.id] = memo;
            
        },

        deleteMemo(id: string) {
            delete this.memos[id];
        }

    }

});