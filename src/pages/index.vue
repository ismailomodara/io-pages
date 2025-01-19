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
           <button @click="$router.push({ name: 'pages.build' })" class="px-8 py-3 font-medium text-md text-[#000] bg-[#ffffff] rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#fff] active:translate-y-[1px] transition-transform duration-150">
               Let's Begin
           </button>
       </div>
    </div>
</template>
