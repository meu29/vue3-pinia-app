type Memo = {
    id: string;
    content: string;
    time: number;
    parent_memo_id?: string;
    child_memo_id?: string;
}