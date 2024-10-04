<template>
    <div v-if="type == 'text'">
        <input
            class="p-2 rounded-lg w-full border-2 border-neutral-grey focus:outline-none
            dark:bg-dark-backgroundSecondary dark:focus:border-white dark:border-neutral-light
            placeholder:focus:text-white globalTransition
            "
            type="text"
            :placeholder="placeholder"
            required
        />
    </div>

    <div v-else-if="type == 'password'">
        <input
            class="p-2 rounded-lg w-full border-2 border-neutral-grey focus:outline-none
            dark:bg-dark-backgroundSecondary dark:focus:border-white dark:border-neutral-light
            placeholder:focus:text-white globalTransition
            "
            type="password"
            :placeholder="placeholder"
            required
        />
    </div>


    <div v-else-if="type == 'textarea'">
        <textarea
            class="p-2 rounded-md w-full border-2 border-neutral-grey dark:border-neutral-light
            dark:bg-dark-backgroundSecondary focus:outline-none dark:focus:border-white"
            :placeholder="placeholder"
            required
        >
        </textarea>
        
    </div>
</template>


<script setup lang="ts">
defineProps({
    type: String,
    placeholder: String,
})
</script>