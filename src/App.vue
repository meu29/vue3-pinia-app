<script setup lang="ts">

import Header from "./components/header.vue";
import MemoInput from "./components/memo-input.vue";

</script>

<template>
    <div>
        <Header />
        <MemoInput />
        <router-view />
    </div>
</template>