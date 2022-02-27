npm run dev<br><br>
script -> templateの順に記述する<br><br>
defineComponentメソッドを使わないコンポーネントの書き方
```
<script setup lang="ts">

import { ref } from "vue";
import Header from "./components/header.vue";

/* Ref型の変数をscriptタグの中で使用する際には.valueが必要 */
const text = ref<string>("");
/* vscodeで"never read"になる 実行はちゃんとできる */
const handleClick = () => alert("押された!");

</script>

<template>
    <Header />
    <input v-model="text">
    <!-- templateタグの中でRef型変数を使用する場合は.valueは不要 -->
    <p>{{text}}</p>
    <button @click="handleClick">押せ！</button>
</template>
```

v-memoでメモ 数値ループは1から始まる
