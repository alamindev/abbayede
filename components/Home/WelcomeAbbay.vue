<template>
  <section class="overflow-hidden relative"> 
          <picture class="absolute right-0 "> 
              <source class="h-[500px] md:h-[600px] xl:h-[800px] 2xl:h-auto object-cover object-right"
                media="(min-width: 640px)"
                srcset="~/assets/images/bienvenue.png" />  
              <img class="h-[500px] md:h-[600px] xl:h-[800px] 2xl:h-auto object-cover object-right"  src="~/assets/images/bienvenue-mobile.png" alt="bienvenue.png"/>
          </picture>  
     <div class="w-full relative px-4 pt-8 sm:pt-20 md:pt-40 pb-8 sm:pb-20 md:pb-64 xl:pt-72 xl:pb-72">
        <div class="max-w-screen-2xl mx-auto">
        <div class="w-[980px] max-w-full space-y-3 md:space-y-5">
            <div class="pr-12 sm:pr-0">
                <h2 class="text-[32px] inline md:text-[42px] leading-[1.2] font-lancelot text-brand-red ">Bienvenue à l’Abbaye </h2>
                <icon-verify class="inline mb-2"></icon-verify>
            </div>
            <p class="text-brand-gray-900 text-xl font-medium sm:text-2xl !leading-[1.6] pr-5 sm:pr-0">Il y a toujours une bonne raison de visiter l’Abbaye de Saint-Maurice. <br> 
            <a href="#" class="text-dark underline">Le œuvres du trésor</a>,  <a href="#" class="text-dark underline">la vie monastique</a>, <a href="#" class="text-dark underline">les chapelles environnantes</a>, les 1500 ans <a href="#" class="text-dark underline">d’histoire</a>, ou notre  <a href="#" class="text-dark underline">communauté</a>. Besoin d’inspiration? Préparez <a href="#" class="text-dark underline">votre visite </a> et découvrez les lieux emblématiques.</p>
        </div>
     </div>
     </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>