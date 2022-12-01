
<template>
  <section class="sm:px-4 py-8 sm:py-14 lg:py-32 ">
        <div class="max-w-screen-2xl mx-auto">
             <div class="w-[1110px] max-w-full mx-auto space-y-8"> 
                <h2 class="text-[32px] leading-[1.2] md:text-[42px] text-dark font-lancelot px-4 lg:px-0">Bloc de texte</h2>
                <div class="bg-brand-creme px-4 py-6 sm:py-12 lg:px-16 xl:px-20 2xl:px-32 md:py-14 space-y-8">
                    <h3 class="text-lg md:text-[21px] font-semibold text-dark">Audioguides pour les adultes et les enfants </h3>
                    <p class="font-medium text-base md:text-[19px] text-dark md:!leading-[33px]">Compris dans le prix d’entrée, l’audioguide vous permet une visite autonome. Vous sélectionnez les commentaires et visitez à votre rythme. Au travers de 27 numéros, vous découvrez les 1500 ans d’histoire du lieu. Nous proposons aussi un audioguide spécialement conçu pour les enfants. Très simple d’utilisation, il accompagne les plus petits de manière ludique.</p>
                    <div class="pt-3">
                        <ul class="divide-y divide-[#e7e7e7] border-y border-[#e7e7e7]">
                            <li class="flex justify-between flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 py-2.5">
                                <div class="flex gap-3 items-center">
                                    <icon-clock class="shrink-0 w-10"></icon-clock>
                                    <p class="text-base md:text-[19px] text-dark">Durée</p>
                                </div>
                                <p class="text-right text-base md:text-[19px] text-dark">Environ 1h30</p>
                            </li>
                            <li class="flex justify-between flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 py-2.5">
                                <div class="flex gap-3 items-center">
                                    <icon-globe class="shrink-0 w-10"></icon-globe>
                                    <p class="text-base md:text-[19px] text-dark">Langues</p>
                                </div>
                                <p class="text-right text-base md:text-[19px] text-dark">Français, allemand, italien, anglais</p>
                            </li>
                            <li class="flex justify-between flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 py-2.5">
                                <div class="flex gap-3 items-center">
                                    <icon-calendar-big class="shrink-0 w-10"></icon-calendar-big>
                                    <p class="text-base md:text-[19px] text-dark">Durée</p>
                                </div>
                                <p class="text-right text-base md:text-[19px] text-dark">Pour les groupes (dès 10 personnes), <a href="#" class="text-brand-red underline">réservation indispensable</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
    name: 'ColorFull', 
}
</script>

<style>

</style>