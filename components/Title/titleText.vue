<template>
    <h1 class="font-bold text-2xl">{{ text }}</h1>
</template>




<script setup lang="ts">
    defineProps({
        text: String,
    })
</script>