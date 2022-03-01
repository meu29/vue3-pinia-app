npm run dev<br>
script -> templateの順に記述する<br>
v-memoでメモ化<br>
v-forの数値ループは1から始まる<br><br>
undefinedについて
```
type Hoge1 = {
    val?: number;
}

type Hoge2 = {
    val: number | undefined;
}

let hoge1_1: Hoge1 = {}
let hoge1_2: Hoge1 = {
    val: undefined,
}

/* hoge2_1はコンパイルエラー */
//let hoge2_1: Hoge2 = {}
let hoge2_2: Hoge2 = {
    val: undefined,
}

/* 空のオブジェクト */
console.log(hoge1_1);
/* どちらも{val: undefined} */
console.log(hoge1_2, hoge2_2);

/* num2の型もnumber | undefinedになる */
const func = (num1: number | undefined, num2?: number) => {}

const x: string | undefined = undefined;
/* コンパイルエラー */
//console.log(x as string);

```