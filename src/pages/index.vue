<template>
    <div class="home h-[100vh] bg-primary flex flex-col items-center justify-center px-1">
        <div class="absolute h-[44px] w-[44px] rounded-full bg-white top-10 left-10 flex items-center justify-center font-bold text-lg">
            IO
        </div>
        <img class="absolute -z-1 max-sm:bottom-0 right-50% md:right-[100px] h-[500px] opacity-50" src="/images/illustration.svg" alt="I" />
       <div class="text-center relative z-1">
           <h1 class="text-5xl md:text-7xl leading-none text-center text-white font-[600] mb-5">
               Build simple pages  <br> in seconds.
           </h1>
           <Button type="tertiary" size="large" @click="$router.push({ name: 'pages.build' })">
               Let's Begin
           </Button>
       </div>
    </div>
</template>
<script setup>
import Button from "@/components/Button.vue";
</script>
