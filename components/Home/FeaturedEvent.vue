<template>
  <section class="sm:px-4 overflow-hidden pb-8 lg:pb-14">
        <div class="max-w-[1615px] mx-auto bg-brand-creme">
            <div class="w-full p-4 sm:p-6 relative">
                <icon-simbol class="absolute top-5 left-5"></icon-simbol>
                <icon-simbol class="absolute top-5 right-5"></icon-simbol>
                <icon-simbol class="absolute bottom-5  left-5"></icon-simbol>
                <icon-simbol class="absolute bottom-5  right-5"></icon-simbol>
                <div class="max-w-screen-2xl mx-auto py-16 md:py-20  sm:space-y-6">
                    <h2 class="text-[32px] md:text-[42px] leading-[1.2] text-dark font-lancelot">Evénement à la une</h2>
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-7">
                        <div class="md:col-span-6 lg:col-span-5">
                             <div class="relative  main-path overflow-hidden">
                                <img class="w-full" src="/images/blogs/img-4.png" alt="blog-image">
                                <div class="absolute bottom-0 left-0">
                                    <div class="path  px-10 py-6 bg-brand-red flex justify-center items-center flex-col">
                                        <p class="font-semibold text-base text-white">Sam</p>
                                        <h3 class="text-[32px] xl:text-[40px] leading-[.9] font-semibold text-white">28</h3>
                                        <p class="font-semibold text-base text-white">Juillet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-5 md:col-span-6 md:col-start-7 lg:col-start-7 lg:-ml-7">
                             <div class="space-y-4 sm:space-y-6"> 
                                <div class="space-y-2">
                                    <h4 class="text-base font-semibold text-brand-red">Musique</h4> 
                                    <h2 class="text-[32px] xl:text-[42px]  leading-[1.1] text-dark font-lancelot">10<sup>e</sup> édition du concours international pour orgue</h2>
                                </div>
                                <p class="text-[17px] font-medium text-dark leading-[28px]">La Fondation Georges Cramer est heureuse de parrainer le Concours International pour Orgue de Saint-Maurice d’Agaune qui se déroule à l’Abbaye de Saint-Maurice. Cette fondation a été créée en souvenir de l’éminent organiste Georges Cramer (1909-1981).</p>
                                <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                    <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">Plus d’informations</span>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeatureEvent'
}
</script>

<style>

</style>