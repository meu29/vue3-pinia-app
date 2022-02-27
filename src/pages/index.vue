<script lang="ts" setup>

import { ref } from "vue";
import { useTexts } from "../hooks/text";

const { texts, addText } = useTexts();

/* refは単一のプロパティ(文字列や数値など) reactiveは複数のプロパティ(オブジェクトなど) 配列は? */

const editTextState = ref<EditTextState>({
    text: "",
    index: null
})

const handleClick = () => {
    addText(editTextState.value.text);
    editTextState.value.text = "";
}

const handleClick2 = (index: number) => {
    editTextState.value.index = index;
    editTextState.value.text = texts.value[index];
    //edited_text.value = texts.value[i]
}

</script>

<template>
    <el-input v-model="editTextState.text" placeholder="文章を入力" rows="6" type="textarea" />
    <el-button @click="handleClick()">追加/更新</el-button>
    <!--el-table v-for="(text, i) in texts" :key="'input-text-' + i">
        <el-table-column label="入力された文章">
            <template :slot-scope="scope">{{text}}</template>
        </el-table-column>
    </el-table-->
    <div v-for="(text, index) in texts" :key="'input-text-' + index">
        <button @Click="handleClick2(index)">Select</button>
        <p>{{text}}</p>
    </div>
</template>