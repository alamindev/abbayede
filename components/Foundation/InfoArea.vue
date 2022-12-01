<template>
    <section class="px-4 py-8 md:py-14 lg:py-24 bg-brand-red">
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-7">
            <div class="md:col-start-4 md:col-span-6 space-y-4 sm:space-y-5">
                <h2 class="text-[32px] sm:pb-3 md:text-[64px] leading-[1.2] text-white font-lancelot text-center ">Votre soutien</h2>
                <p class="lg:px-20 text-base lg:text-[19px] lg:!leading-[1.6] text-white text-center">La Fondation recherche des fonds afin de financer ses projets et nous souhaiterions vous y associer.</p>
                 <div class="flex justify-center pt-3">
                       <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                        <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-white group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        <span class="border-y-2    font-medium text-white group-hover:text-dark bg-transparent group-hover:bg-white group-hover:border-white border-white rounded-sm my-[0.3px] flex justify-center items-center">Plus d’informations</span>
                        <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-white group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg> 
                    </nuxt-link>
                 </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'InfoArea'
}
</script>

<style>

</style>