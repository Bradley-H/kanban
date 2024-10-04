<template>
    <div class="w-14 rounded-e-full bg-primary-purple fixed bottom-10 left-0
                hidden p-4 text-white md:flex items-center justify-center
                cursor-pointer
    " @click="globalStore.toggleSideNav">
    <NuxtImg class="-translate-x-1" width="25" src="/icon-show-sidebar.svg"/>
    </div>
</template>


<script setup lang="ts">
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();
</script>