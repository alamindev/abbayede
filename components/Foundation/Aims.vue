<template>
    <section class="px-4 py-10 lg:py-20">
        <div class="max-w-screen-2xl mx-auto ">
             <div class="grid lg:grid-cols-12 sm:gap-7">
                <div class="lg:col-start-2 lg:col-span-10  space-y-6 sm:space-y-8">
                      <h2 class="text-[32px] lg:text-[46px] leading-[1.2] text-dark font-lancelot text-left ">Buts de la Fondation</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
                        <div class="py-10 px-5 flex flex-col justify-center items-center bg-brand-creme space-y-6">
                            <div class="w-[144px] p-4 h-[144px] bg-white rounded-full flex justify-center items-center">
                                <icon-love></icon-love>
                            </div>
                            <h3 class="text-center font-semibold text-[17px] lg:text-lg">Promouvoir</h3>
                            <p class="text-dark text-base lg:text-[19px] font-medium text-center !leading-[1.7] ">Promouvoir l’Abbaye dans son travail de conservation et de la mise en valeur du patrimoine tant physique que culturel.</p>
                            <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                                <span class="border-y-2    font-medium text-primary group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">En savoir plus</span>
                                <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg> 
                            </nuxt-link>
                        </div>
                        <div class="py-10 px-5 flex flex-col justify-center items-center bg-brand-creme space-y-6">
                            <div class="w-[144px] p-4 h-[144px] bg-white rounded-full flex justify-center items-center">
                                <icon-star></icon-star>
                            </div>
                            <h3 class="text-center font-semibold text-[17px] lg:text-lg">Contribuer</h3>
                            <p class="text-dark text-base lg:text-[19px] font-medium text-center !leading-[1.7]">Contribuer au rayonnement culturel et spirituel de l’Abbaye: la musique, le chant, l’enseignement, l’édition, ...</p>
                            <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                                <span class="border-y-2    font-medium text-primary group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">En savoir plus</span>
                                <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg> 
                            </nuxt-link>
                        </div>
                        <div class="py-10 px-5 flex flex-col justify-center items-center bg-brand-creme space-y-6">
                            <div class="w-[144px] p-4 h-[144px] bg-white rounded-full flex justify-center items-center">
                                <icon-user-big></icon-user-big>
                            </div>
                            <h3 class="text-center font-semibold text-[17px] lg:text-lg">Soutenir</h3>
                            <p class="text-dark text-base lg:text-[19px] font-medium text-center !leading-[1.7]">Soutenir les œuvres humanitaires et sociales de l’Abbaye que ce soit au plan ré gional, ou international.</p>
                            <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                                <span class="border-y-2    font-medium text-primary group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">En savoir plus</span>
                                <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg> 
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
    name: 'Aims',
    data() {
        return {
             page: 1 
        }
    }
}   
</script>

<style>

</style>