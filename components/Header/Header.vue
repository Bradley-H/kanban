<template>
  <header
    class="w-full flex fixed globalTransition justify-between items-center bg-white text-black p-5 text-xl font-bold border-neutral-blue 
      dark:bg-dark-backgroundSecondary dark:text-white dark:border-neutral-light">
    <div class="flex gap-3 md:gap-5 items-center">
      <NuxtImg
        class="w-auto h-6 md:ml-10"
        :src="globalStore.windowWidth < 768 ? '/logo-mobile.svg' : `/logo-${imageMode}.svg`"
        alt="logo"
      />
      <div class="flex globalTransition translate-x-5 items-center gap-1 mt-1"
           :class="{mobile: globalStore.windowWidth < 768}"
            @click="toggleSideNav">
        <slot />
        <NuxtImg
        class="w-auto h-2 cursor-pointer md:hidden"
        src="/icon-chevron-down.svg"
        alt="logo"
      />
      </div>
      
    </div>

    <div class="flex items-center gap-5">
      <ButtonAddTaskButton />
      <NuxtImg
        class="w-auto h-6 cursor-pointer"
        src="/icon-vertical-ellipsis.svg"
        alt="logo"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
let imageMode = computed(() => globalStore.darkMode ? 'dark' : 'light');

onMounted(() => {
  //calculate the size of the window
  globalStore.handleResize();
    window.addEventListener("resize", globalStore.handleResize);
})

onUnmounted(() => {
    window.removeEventListener("resize", globalStore.handleResize);
})

function toggleSideNav() {
  if(globalStore.windowWidth <= 768){
    globalStore.toggleSideNav();
  }
}
</script>

<style>
header{
  height: var(--headerHeightMobile);
  z-index: 2;
  border-bottom-width: var(--borderPixel);
  @media screen and (min-width: 768px){
    height: var(--headerHeightDesktop);
  }
}
.mobile {
  width: 100%;
  transform: translateX(0);
}
</style>
