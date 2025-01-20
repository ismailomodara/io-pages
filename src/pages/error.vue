<template>
    <div class="home h-[100vh] bg-primary flex flex-col items-center justify-center px-1">
        <div class="absolute h-[44px] w-[44px] rounded-full bg-white top-10 left-10 flex items-center justify-center font-bold text-lg">
            IO
        </div>
        <h1 class="text-5xl md:text-8xl leading-none text-center text-white font-bold mb-5">
            Error 404
        </h1>
        <Button type="tertiary" size="large" @click="$router.push({ name: 'index' })">
            Go Home
        </Button>
    </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>
