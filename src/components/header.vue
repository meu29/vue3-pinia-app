<script setup lang="ts">

import { ref } from "vue";
import { useRouter } from "vue-router";
import { Search } from "@element-plus/icons";

const router = useRouter();

const keyword = ref<string>("");

</script>

<style scoped>

.keyword-input {
    width: 20%;
}

</style>

<template>
    <el-header style="margin-bottom:4%">
        <router-link to="/">タイトル未定</router-link>
        <el-input v-model="keyword" class="keyword-input" />
        <el-button type="primary" :icon="Search" @click="router.push(`/search?keyword=${keyword}`)" />
    </el-header>
</template>