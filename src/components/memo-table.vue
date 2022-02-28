<script lang="ts" setup>

import { useMemoStore } from "../stores/memo";

</script>

<template>
    <el-table :data="Object.values(memos)">
        <el-table-column fixed prop="date" label="追加日" />
        <el-table-column prop="content" label="コンテンツ" />
        <el-table-column fixed="right" prop="id" label="操作">
            <template #default="scope">
                <el-button @click.prevent="deleteMemo(scope.row.id)">Delete</el-button>
            </template>
        </el-table-column> 
    </el-table>
</template>