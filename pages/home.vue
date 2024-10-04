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

main{
  padding-top: var(--headerHeightMobile);
  padding-left: 1rem;
  @media screen and (min-width: 768px){
    padding-top: calc(var(--headerHeightDesktop) + 1rem);
  }
}

main.active{
  @media screen and (min-width: 768px){
    padding-left:calc(var(--sideNavWidth) + 1rem);
  }
}
</style>