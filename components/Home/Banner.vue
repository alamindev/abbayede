<template>
   <section class="relative">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative"> 
                <figure>
                    <img class="w-full"  src="~/assets/images/banner-img-1.png" alt="banner-img-1">
                </figure>
                  <div class="absolute inset-0 bg-black bg-opacity-0 lg:bg-opacity-30"></div>
                <div class="w-full h-1/2 bg-g2 absolute bottom-0 flex items-end pb-10 md:pb-14 pl-4 md:pl-14 lg:pl-20 xl:pl-40">
                    <h2 class="text-[42px] xl:text-[64px] leading-[1.2] text-white font-lancelot">Culture  <br> & Patrimoine</h2>
                </div>
            </div>
            <div class="relative">
                <figure>
                    <img class="w-full"  src="~/assets/images/banner-img-2.png" alt="banner-img-2">
                </figure>
                <div class="w-full h-1/2 bg-g2 absolute bottom-0 flex items-end pb-10 md:pb-14 pl-4 md:pl-14 lg:pl-20 xl:pl-40">
                    <h2 class="text-[42px] xl:text-[64px] leading-[1.2] text-white font-lancelot">Communauté</h2>
                </div>
                   <div class="absolute inset-0 bg-black bg-opacity-0 lg:bg-opacity-30"></div>
            </div>
        </div>
   </section>
</template>

<script>
export default {
    name: 'HomeBanner'
};
</script>

<style>
</style>