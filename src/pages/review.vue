<script lang="ts" setup>

import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
import { useReviews } from "../hooks/review";
import { tokenize } from "wakachigaki";
import { PER_PAGE_REVIEW_NUM } from "../utils";


const condition = ref<Condition>({rating: 6, all: true});
const page = ref<number>(1);

const { app, reviews, searchReviews } = useReviews();

const filterd_reviews = computed(() => {

    //[一-龠]

    const rating_matched_reviews = condition.value.rating === 6 ? reviews.value : reviews.value.filter(review => review.rating === condition.value.rating);
    return condition.value.all === true ? rating_matched_reviews : (() => {
        console.log(tokenize(app.value.description))
        return [];
    })();

})


const route = useRoute();

onMounted(async () => {
    await searchReviews(Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
})

const handleTableRowClick = (val: any) => {
    ElMessageBox.alert(val.content, val.title, {
        confirmButtonText: "閉じる",
    });
}


</script>

<template>
    <p>{{app.name}}</p>
    <p>{{app.description}}</p>
    <p>レビューリスト</p>
    <el-select v-model="condition.rating">
        <el-option :label="`☆全て`" :value="6" />
        <el-option v-for="num in 5" :key="`rating${num}`" :label="`☆${num}`" :value="num" />
    </el-select>
    <el-select v-model="condition.all">
        <el-option label="全てのレビュー" :value="true" />
        <el-option label="無関係な内容のレビューを排除" :value="false" />
    </el-select>
    <el-table :data="filterd_reviews.slice((page - 1) * PER_PAGE_REVIEW_NUM, (page - 1) * PER_PAGE_REVIEW_NUM + PER_PAGE_REVIEW_NUM)" @row-click="handleTableRowClick">
        <el-table-column prop="rating" label="評価" />
        <el-table-column prop="title" label="タイトル" />
    </el-table>
    <el-pagination layout="prev, pager, next" :total="filterd_reviews.length" v-model:currentPage="page" />
</template>