import { v4 } from "uuid";

export const createMemo = (content: string, parent_memo_id?: string): Memo => {

    const id = v4();

    return {
        id: id,
        content: content,
        time: new Date().getTime(),
        parent_memo_id: parent_memo_id,
    }

}

export const getlatestChildMemoId = (memos: MemoState["memos"], root_memo_id: string): string => {

    let next_memo = memos[root_memo_id];

    while (true) {
        if (next_memo.child_memo_id === undefined) {
            return next_memo.id;
        }
        next_memo = memos[next_memo.child_memo_id];
    }

}

export const getRelatedMemos = (memos: MemoState["memos"], root_memo_id: string, property: "parent_memo_id" | "child_memo_id"): Memo[] => {

    let related_memos: Memo[] = [];
    let next_memo_id: string | undefined = root_memo_id;

    while (true) {
        /* メモIDが未定義でなくても、そのメモIDがメモ一覧に存在しない場合 */
        if (next_memo_id === undefined || memos[next_memo_id] === undefined) {
            break;
        }
        related_memos.push(memos[next_memo_id]);
        next_memo_id = memos[next_memo_id][property];
    }

    return related_memos

}