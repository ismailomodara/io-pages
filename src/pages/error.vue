<template>
    <div class="home h-[100vh] bg-primary flex flex-col items-center justify-center px-1">
        <div class="absolute h-[44px] w-[44px] rounded-full bg-white top-10 left-10 flex items-center justify-center font-bold text-lg">
            IO
        </div>
        <h1 class="text-5xl md:text-8xl leading-none text-center text-white font-bold mb-5">
            Error 404
        </h1>
        <button @click="$router.push({ name: 'index' })" class="px-8 py-3 font-medium text-md text-[#000] bg-[#ffffff] rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#fff] active:translate-y-[1px] transition-transform duration-150">
            Go home
        </button>
    </div>
</template>
