<template>
    <li class="flex items-center gap-4 rounded-e-full transition-colors p-2 cursor-pointer
    hover:text-white max-w-52 hover:bg-primary-purple
    dark:text-white  ">
          <NuxtImg
            width="17"
            src="/icon-board.svg"
            alt="board icon"/>
            {{ text }}
        </li>
</template>

<script setup lang="ts">
defineProps({
    text: String,
})
</script>