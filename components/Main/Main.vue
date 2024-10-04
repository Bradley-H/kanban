<template>
    <main class="flex flex-col w-svh bg-primary-background pb-12 pt-3 text-black font-primary globalTransition
            dark:bg-dark-backgroundPrimary
            overflow-auto
            ">
        <slot/>
    </main>
</template>

<style>
    main{
        @media screen and (max-width: 767px){
            height: calc(100svh - var(--headerHeightMobile));
            transform: translateY(var(--headerHeightMobile));
        }
        @media screen and (min-width: 768px){
            width: 100svw;
            transform: translateY(var(--sideNavWidth));
            height: calc(100svh - var(--headerHeightDesktop));
        }
    }

    main.active{
        @media screen and (min-width: 768px){
            transform: translateY(calc(var(--headerHeightDesktop) + var(--sideNavWidth)));
        }
    }
</style>