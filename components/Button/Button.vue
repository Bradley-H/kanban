<template>
  <div class="w-full" v-if="!href">
    <button @click.prevent="$emit('clicker')" :class="primary">
      {{ text }}
    </button>
  </div>

  <div class="w-full" v-else>
        <NuxtLink :to="href"><button :class="primary">{{ text }}</button>
        </NuxtLink>
  </div>
</template>

<script setup lang="ts">

const primary = `bg-primary-purple w-full p-3 rounded-full rounded-full text-white
                     text-white font-bold bg-primary-purple w-full p-3 `;
const secondary = `bg-primary-white w-full p-3 rounded-full rounded-full text-black
                     text-black font-bold bg-primary-white w-full p-3 `;

const teritary = `bg-primary-white w-full p-3 rounded-full rounded-full text-black
                     text-black font-bold bg-primary-white w-full p-3 `;
defineProps({
  text: String,
  variant :{
    type: String,
    required: false,
    default: "primary",
  },
  href: {
    type: String,
    required: false,
  },
});
</script>
