<script lang="ts" setup>

import { ref, computed, watch } from "vue";
import { tokenize } from "wakachigaki";
import { useApps } from "../hooks/app";

import { GENRES } from "../utils";

import axios from "axios";

const term = ref<string>("出席");

const { apps, searchApps } = useApps();

const page = ref<number>(1);

const handleClick = () => {

    let counts: Record<string, number> = {}
    console.log(tokenize("勤務時間"))

    return;

    for (const app of apps.value) {
        const words = tokenize(app.description).flatMap(word => word.match(/^[ぁ-ん0-9\s]+$/) == null ? word.toLowerCase() : []);
        for (const word of words) {
            counts[word] = word in counts ? counts[word] + 1 : 1;
        }
    }

    console.log(counts)

}

const getWords = (text: string) => tokenize(text).flatMap(word => word.match(/^[ぁ-ん0-9\s]+$/) == null ? word.toLowerCase() : []);

</script>

<style scoped>

.flex-container {
    display: flex;
    flex-direction: row;
}

</style>

<template>
    <el-input v-model="term" />
    <el-button @click="searchApps(term)">アプリ検索</el-button>
    <p>ジャンルで検索</p>
    <div class="flex-container">
        <el-button type="primary" v-for="genre in GENRES" v-bind:key="genre" @click="searchApps(genre)">{{genre}}</el-button>
    </div>
    <div v-for="app in apps" v-bind:key="app.id">
        <p>{{app.name}}</p>
        <el-button @click="console.log(getWords(app.description))">おせ！</el-button>
        <router-link :to="{path: `/reviews/${app.id}`}">
            <el-button>レビューをみる</el-button>
        </router-link>
    </div>
    <el-pagination layout="prev, pager, next" :total="apps.length" v-model:currentPage="page" />
</template>