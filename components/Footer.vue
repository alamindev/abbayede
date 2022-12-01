<template>
  <footer class="bg-white px-4 py-8 md:py-14 lg:py-20">
    <div class="max-w-screen-2xl mx-auto">
      <div class="flex flex-col gap-8 md:flex-row justify-between md:items-center pb-8 sm:pb-10 border-b border-black border-opacity-10">
        <nuxt-link to="/">
          <figure>
            <img src="~/assets/images/logo.svg" alt="logo">
          </figure>
        </nuxt-link>
        <ul class="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
          <li><nuxt-link to="/" class="inline-block font-semibold text-[17px] text-dark">Contact</nuxt-link></li>
          <li><nuxt-link to="/" class="inline-block font-semibold text-[17px] text-dark">Médias</nuxt-link></li>
          <li><nuxt-link to="/" class="inline-block font-semibold text-[17px] text-dark">Médias</nuxt-link></li>
          <li><nuxt-link to="/" class="inline-block font-semibold text-[17px] text-dark">Newsletter</nuxt-link></li> 
        </ul>
      </div>
      <div class="flex justify-between flex-col md:flex-row gap-4 md:items-end pt-7 sm:pt-10">
        <div class="pb-7 md:pb-14 flex gap-7 sm:gap-8 flex-col sm:flex-row lg:gap-20 items-start">
          <div class="space-y-4 max-w-[310px]">
            <p class="text-[17px] font-medium text-dark leading-[1.8]">Monastères - Communauté - Pèlerinage - Paroisse</p>
            <nuxt-link to="/" class="flex text-brand-gray-900 font-medium text-[17px]  items-start">
              <span>Contact</span>
              <icon-arrow-top-right></icon-arrow-top-right>
            </nuxt-link>
          </div>
          <div class="space-y-4 max-w-[310px]">
            <p class="text-[17px] font-medium text-dark leading-[1.8]">Trésor - Boutique - 
Site Culturel et Patrimonial</p>
            <nuxt-link to="/" class="flex text-brand-gray-900 font-medium text-[17px]  items-start">
              <span>Contact</span>
              <icon-arrow-top-right></icon-arrow-top-right>
            </nuxt-link>
          </div>
        </div>
        <div class="space-y-6 md:space-y-8">
          <ul class="flex gap-4 items-center justify-start md:justify-end">
            <li><a href="#"><icon-facebook></icon-facebook></a></li>
            <li><a href="#"><icon-instagram></icon-instagram></a></li>
            <li><a href="#"><icon-unknown></icon-unknown></a></li>
          </ul>
          <p class="text-sm text-brand-gray-900 text-left md:text-right">powered by <a href="#">iomedia</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      
    };
  }, 
};
</script>

<style>
</style>