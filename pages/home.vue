<template>
    <Sidenav/>
  <Header>
    <span class="flex">
      <h2>Hello</h2>
    </span>
  </Header>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
</script>
