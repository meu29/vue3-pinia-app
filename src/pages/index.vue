<script lang="ts" setup>

import { ref } from "vue";
import { useMemoStore } from "../stores/memo";
//import MemoTable from "../components/memo-table.vue";

const text = ref<string>("");

const { allMemos, addMemo, deleteMemo, } = useMemoStore();


const handleTableRowClick = (val: any) => {
    console.log(val)
}

</script>

<template>
    <h4>最近追加されたメモ</h4>
    <div v-for="memo in allMemos()" v-bind:key="memo.id">
        <el-card>
            <p>{{memo.content}}</p>
            <router-link style="text-decoration: none; color: inherit;" :to="{path: '/memo', query: {id: memo.id}}">スレッドを表示</router-link>
        </el-card>
    </div>
</template>