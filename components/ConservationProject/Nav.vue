<template>
  <section class="relative border-b border-brand-gray">
    <div class="overflow-x-auto nav">
        <div class="max-w-screen-2xl relative mx-auto">
            <ul class="flex gap-6 items-end pl-4 xl:pl-0 ">
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">Accueil</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  tab-active text-base md:text-lg font-semibold text-dark">Projet</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">Article</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">Avancée du projet</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">Revue de presse</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">Soutenez le projet</button></li> 
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">Contact</button></li> 
            </ul>
        </div>
    </div> 
    <div class="absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-[rgba(0,0,0,0)] to-white"></div>
  </section>
</template>

<script>
export default {
  name: 'ArchivesNav'
}
</script>

<style>

</style>