<template>
  <Header>
    <span class="flex">
      <h2>Hello</h2>
    </span>
  </Header>
  <Sidenav/>
  <Main class="main"
        :class="{'active': globalStore.sideActive}"
  >
  <h1>Hello</h1>
  <h1>Hello</h1>
  <h1>Hello</h1>
  <h1>Hello</h1>
  <h1></h1>
  <h1></h1>
  <h1></h1>
  <h1></h1>
  <h1></h1>
  <h1></h1>
  </Main>
  <ButtonToggleSideNav/>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
</script>

<style>
.main{
  transform: translateY(var(--headerHeightMobile));
  @media screen and (min-width: 768px){
    transform: translateY(var(--headerHeightDesktop));
  }
}

main.active{
  @media screen and (min-width: 768px){
    transform: translate(var(--sideNavWidth), var(--headerHeightDesktop));
    width: calc(100% - var(--sideNavWidth));
  }
}
</style>