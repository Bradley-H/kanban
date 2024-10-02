<template>
    <button class="flex min-h-10 max-h-10 text-center globalTransition items-center bg-primary-purple p-3 rounded-full overflow-hidden"
            :class="windowWidth >= 768 ? 'active' : 'hide'">           
            <div class="flex justify-center items-center">
                <NuxtImg class="translate-x-1 h-4 md:translate-x-0" src="/icon-add-task-mobile.svg" alt="logo" />
                <span class="text-white text-lg ml-2 max-h-10 min-w-20">Add Task</span>
            </div>
    </button>
</template>


<script setup lang="ts">
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();
let windowWidth = ref(globalStore.windowWidth)

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
watch(windowWidth, (newWidth) => {
    console.log('Window width changed:', newWidth);
});
console.log(windowWidth);

</script>

<style>
button.active{
    width: 8rem;
}

button.hide{
    width: 3rem;
    overflow: hidden;
}

button.hide span{
    display: none;
}
</style>