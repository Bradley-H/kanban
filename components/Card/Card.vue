<template>
  <div
    class="flex bg-white flex-col justify-center items-center border-2 globalTransition 
           p-7 shadow-lg border-neurtral-grey gap-5
           dark:bg-dark-backgroundSecondary dark:text-white w-full
           dark:border-neutral-light
           "
    :class="{rounded: 'rounded-lg'}"
           >
    <slot></slot>
  </div>
</template>
