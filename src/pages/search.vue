<!-- import { useRoute } from "vue-router"; const route = useRoute();-->
<!--p v-if="route['query'] === undefined || memo.content.includes(req.query.keyword)">{{memo.content}}</p-->
<!-- {{route.query.keyword}} -->
    <!--div v-for="memo in memos" :key="memo.id">
        <el-card>
            {{memo.content}}
            <div>
                <el-button @click="deleteMemo(memo.id)">Delete</el-button>
            </div>
        </el-card>
    </div-->

<script lang="ts" setup>

import { useRoute } from "vue-router";
import { useMemoStore } from "../stores/memo";

const route = useRoute();

const { includeKeyword,  deleteMemo } = useMemoStore();

</script>

<template>
    <h2>{{route.query.keyword}}</h2>
    <el-table :data="includeKeyword(route.query.keyword)">
        <el-table-column fixed prop="date" label="追加日" />
        <el-table-column prop="content" label="コンテンツ" />
        <el-table-column fixed="right" prop="id" label="操作">
            <template #default="scope">
                <el-button @click.prevent="deleteMemo(scope.row.id)">Delete</el-button>
            </template>
        </el-table-column> 
    </el-table>
</template>