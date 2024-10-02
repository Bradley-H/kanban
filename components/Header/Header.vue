<template>
  <header
    class="w-full flex fixed globalTransition justify-between items-center bg-white text-black p-5 text-xl font-bold border-b-2 border-neutral-blue 
      dark:bg-dark-backgroundSecondary dark:text-white dark:border-neutral-light"
    :class="
      globalStore.sideActive && globalStore.windowWidth >= 768
        ? 'active'
        : ''
    ">
    <div class="flex gap-3 items-center">
      <NuxtImg
        class="w-auto h-6"
        :src="globalStore.windowWidth < 768 ? '/logo-mobile.svg' : `/logo-${imageMode}.svg`"
        alt="logo"
      />
      <div class="flex globalTransition translate-x-5 items-center gap-1 mt-1"
           :class="{mobile: globalStore.windowWidth < 768}"
      >
        <slot />
        <NuxtImg
        class="w-auto h-2 cursor-pointer sm:hidden"
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
let imageMode = globalStore.darkMode ? "dark" : "light";

onMounted(() => {
  //calculate the size of the window
  globalStore.handleResize();
    window.addEventListener("resize", globalStore.handleResize);
})

onUnmounted(() => {
    window.removeEventListener("resize", globalStore.handleResize);
})
</script>

<style>
header.active {
  width: calc(100% -  var(--sideNavWidth));
  transform: translateX(var(--sideNavWidth));
}

.mobile {
  width: 100%;
  transform: translateX(0);
}
</style>
