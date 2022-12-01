<template>
  <section class="overflow-hidden relative pt-14 sm:pt-24"> 
          <picture class="absolute right-0 "> 
              <source class="h-[500px] md:h-[600px] xl:h-[700px] 2xl:h-auto object-cover object-top"
                media="(min-width: 640px)"
                srcset="~/assets/images/bienvenue.png" />  
              <img class="h-[500px] md:h-[600px] xl:h-[700px] 2xl:h-auto object-cover object-top"  src="~/assets/images/bienvenue-mobile.png" alt="bienvenue.png"/>
          </picture>  
     <div class="w-full  px-4 pt-8 sm:pt-20 md:pt-40 pb-8 sm:pb-20 md:pb-64 xl:pt-72 xl:pb-72">
        <div class="max-w-screen-2xl mx-auto">
        <div class="w-[980px] max-w-full space-y-3 md:space-y-5">
            <div class="pr-12 sm:pr-0">
                <h2 class="text-[32px] inline  leading-[1.2] font-semibold text-brand-red ">Bienvenue à l’Abbaye </h2>
                <icon-verify class="inline mb-2"></icon-verify>
            </div>
            <p class="text-brand-gray-900 text-xl  sm:text-2xl !leading-[1.6]"> La visite du trésor raconte une histoire exceptionnelle: celle d’une communauté religieuse vivante, miraculeusement préservée et constituant le témoignage unique d’une activité spirituelle et culturelle sans équivalent dans le monde occidental chrétien.</p>
            <div class="pt-3">
                <img src="~assets/images/arrow-bottom.svg" alt="arrow-bottom.svg">
            </div>
        </div>
     </div>
     </div>
  </section>
</template>

<script>
export default {
    name: 'Engraving'
}
</script>

<style>

</style>