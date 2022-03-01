<script lang="ts" setup>

//https://twitter.com/eIGegGZqlGvRc4v/status/1498508910184992773

import { useRoute } from "vue-router";
import { useMemoStore } from "../stores/memo";

const route = useRoute();

const { threads } = useMemoStore();

</script>

<template>
    <div v-for="memo in threads(route.query.id)" v-bind:key="memo.id">
        <router-link style="text-decoration: none; color: inherit;" :to="{path: '/memo', query: {id: memo.id}}">
            <el-card>{{memo.content}}</el-card>
        </router-link>
    </div>
</template>