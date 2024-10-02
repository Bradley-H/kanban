<template>
    <Suspense>
        <Main>
        <slot/>
        </Main>
    </Suspense>
</template>



<script setup lang="ts">
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore();
onMounted(() => {
  // check if dark mode is enabled or not
  if(globalStore.darkMode){
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
});
</script>