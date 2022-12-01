<template>
    <section class="px-4 pt-16 pb-24">
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-12 gap-7">
            <div class="lg:col-start-2 col-span-12 lg:col-span-10">
                <div class="hidden grid-cols-2 md:grid-cols-4 gap-7 sm:grid">
                    <div class="lg:px-10 px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full flex justify-center items-center p-4">
                            <icon-visit-icon-five></icon-visit-icon-five>
                        </div>
                        <div class="flex justify-center flex-col space-y-2">
                            <p class="font-medium text-center text-[17px] text-brand-gray-900">Où ?</p>
                            <p class="text-lg font-medium text-dark text-center">Dorénaz</p>
                        </div>
                    </div>
                    <div class="lg:px-10 px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full flex justify-center items-center p-4">
                            <icon-visit-icon-six></icon-visit-icon-six>
                        </div>
                        <div class="flex justify-center flex-col space-y-2">
                            <p class="font-medium text-center text-[17px] text-brand-gray-900">Quand ?</p>
                            <p class="text-lg font-medium text-dark text-center">11 - 17 juillet</p>
                        </div>
                    </div>
                    <div class="lg:px-10 px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full flex justify-center items-center p-4">
                            <icon-visit-icon-two class="fill-primary"></icon-visit-icon-two>
                        </div>
                        <div class="flex justify-center flex-col space-y-2">
                            <p class="font-medium text-center text-[17px] text-brand-gray-900">Durée ?</p>
                            <p class="text-lg font-medium text-dark text-center">8h - 18h</p>
                        </div>
                    </div>
                    <div class="lg:px-10 px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full flex justify-center items-center p-4">
                            <icon-visit-icon-three class="fill-primary"></icon-visit-icon-three>
                        </div>
                        <div class="flex justify-center flex-col space-y-2">
                            <p class="font-medium text-center text-[17px] text-brand-gray-900">Combien ?</p>
                            <p class="text-lg font-medium text-dark text-center">20 chf / jour</p>
                        </div>
                    </div>
                </div>
                <div class="sm:hidden py-7 -mx-4 sm:-mx-0 bg-brand-gray-800 bg-opacity-50">
                    <ul class="border-b border-brand-gray divide-y divide-brand-gray px-4">
                        <li class="flex justify-between items-end py-4">
                            <div class="flex gap-3.5 items-center pb-8">
                                   <icon-visit-icon-five class="w-12"></icon-visit-icon-five>
                                     <p class="font-medium text-center text-base text-dark">Où ?</p>
                            </div>
                            <p class="text-base font-semibold text-dark text-center">Dorénaz</p>
                        </li>
                        <li class="flex justify-between items-end py-4">
                            <div class="flex gap-3.5 items-center pb-8">
                                   <icon-visit-icon-six class="w-12"></icon-visit-icon-six>
                                     <p class="font-medium text-center text-base text-dark">Quand ?</p>
                            </div>
                            <p class="text-base font-semibold text-dark text-center">11 - 17 juillet</p>
                        </li>
                        <li class="flex justify-between items-end py-4">
                            <div class="flex gap-3.5 items-center pb-8">
                                   <icon-visit-icon-two class="w-12 stroke-primary"></icon-visit-icon-two>
                                     <p class="font-medium text-center text-base text-dark">Durée ?</p>
                            </div>
                            <p class="text-base font-semibold text-dark text-center">08h00 - 18h00</p>
                        </li>
                        <li class="flex justify-between items-end py-4">
                            <div class="flex gap-3.5 items-center pb-8">
                                   <icon-visit-icon-three class="w-12 stroke-primary"></icon-visit-icon-three>
                                     <p class="font-medium text-center text-base text-dark">Combien ?</p>
                            </div>
                            <p class="text-base font-semibold text-dark text-center">20 chf / jour</p>
                        </li>  
                    </ul>
                </div>
            </div>
            <div class="col-span-12 md:col-span-10 md:col-start-3 lg:col-span-8 lg:col-start-3 flex flex-wrap gap-4 items-center pt-8">
                <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                    <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">
                        Site internet du festival
                        <sup><icon-arrow-top-right></icon-arrow-top-right></sup>
                    </span>
                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg> 
                </nuxt-link>
                <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                    <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">
                        Inscriptions
                       <sup> <icon-arrow-top-right></icon-arrow-top-right></sup>
                    </span>
                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg> 
                </nuxt-link>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
 name: 'AgendaDetailsInfo'
}
</script>

<style>

</style>