<script setup lang="ts">

import { ref } from "vue";


</script>

<style scoped>
/*
#header {
    text-align: right; 
    font-size: 12px;
}
*/

</style>

<template>
    <el-header>
        重要語抽出(仮)
        <el-button @click="open = true">メニュー</el-button>
        <el-dialog v-model="open">
            <p>種類</p>
            <!-- 値は更新されるが表示が変わらない ダイアログを開き直すと変わってる -->
            <el-select class="m-2" v-model="noodle_type">
                <el-option v-for="type in noodle_types" :key="type" :label="type" :value="type" />
            </el-select>
            <p>解答可能数</p>
            <el-input v-model.number="answer_num" />
        </el-dialog>
    </el-header>
</template>