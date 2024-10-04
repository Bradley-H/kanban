<template>


  <nav
    class="bg-white font-primary py-5 flex flex-col globalTransition fixed transform
            sm:min-w-60 sm:rounded-lg h-auto z-10
            md:rounded-none md:h-full md:border-l-0 md:border-0
         dark:bg-dark-backgroundSecondary dark:border-neutral-light dark:text-white"
    :class="
        globalStore.sideActive
        ? 'active'
        : ''
    "
  >
    <aside class="flex-grow">
      <h1 class="text-neutral-gray mb-2 ml-4">All Boards (3)</h1>
      <ul class="max-h-36 overflow-auto md:max-h-96">
        <SidenavLink text="Board 1"/>
      </ul>
      <SidenavLink text="+ Create New Board"/>
    </aside>
    <div
      class="flex flex-col h-auto gap-4 items-center justify-center w-full md:mb-24"
    >
      <ButtonToggleDarkModeButton @clicker="globalStore.toggleDarkMode"/>
      <span
        class="hidden md:flex gap-3 text-neutral-gray font-bold cursor-pointer" @click="globalStore.toggleSideNav">
        <NuxtImg width="22" src="/icon-hide-sidebar.svg"/>
        Hide Sidebar</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
</script>



<style scoped>

nav {
  @media screen and (max-width: 767px){
    top: var(--headerHeightMobile);
  left: 0%;
  border-width: var(--borderPixel);
  transform: translate(-100%, calc(var(--headerHeightMobile) - 25%));
  }

  @media screen and (min-width: 768px){
    border-width: 0;
    left: none;
    top: calc(var(--borderPixel) + 1);
    border-right-width: var(--borderPixel);
    transform: translate(-100%, calc(var(--headerHeightDesktop)));
  }
}
/* top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */
nav.active {
  @media screen and (max-width: 767px){
    left: 50%;
    transform: translate(-50%, calc(var(--headerHeightMobile) - 25% ));
  }
  @media screen and (min-width: 768px){
    transform: translate(0, var(--headerHeightDesktop));
  }
}
</style>
