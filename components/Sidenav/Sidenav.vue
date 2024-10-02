<template>
    <nav class="bg-white h-screen p-5 flex flex-col globalTransition fixed border-2"
        :class="(globalStore.windowWidth <= 768 && globalStore.sideActive) ? 'mobile' :
                (globalStore.windowWidth >= 768 && globalStore.sideActive) ? 'active' : ''"
        >
        <header>
            <!--  -->
        </header>
        <aside>
            <h1>Hello</h1>
        </aside>
    </nav>
</template>


<script setup lang="ts">
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();
// 
</script>

<style scoped>
    .active {
        transform: translateX(0);
    }
    nav {
        transform: translateX(-100%);
        width: var(--sideNavWidth);
    }

    .mobile{
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
</style>