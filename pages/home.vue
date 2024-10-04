<template>
  <Header>
    <span class="flex items-center justify-center">
      <TitleText text="Home"/>
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
  </Main>
  <ButtonToggleSideNav/>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
</script>


<style>

main{
  padding-top: calc(var(--headerHeightMobile) + 1rem);
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