<script lang="ts" setup>

import { ref } from "vue";
import { useRoute } from "vue-router";
import { useMemoStore } from "../stores/memo";
import { getQuery } from "../utils/router";

const text = ref<string>("");

const route = useRoute();

const { addMemo } = useMemoStore();


const handlePostButtonClick = () => {
    /* route.query.<<クエリ名>>の型 → LocationQueryValue | LocationQueryValue[] | undefined */
    addMemo(text.value, getQuery(route.query.id));
    text.value = "";
}

</script>

<style scoped>

.input {
    margin-bottom: 1%;
}

</style>

<template>
    <el-input v-model="text" placeholder="メモを入力" rows="6" type="textarea" class="input" />
    <el-button type="primary" @click="handlePostButtonClick">Post!</el-button>
</template>