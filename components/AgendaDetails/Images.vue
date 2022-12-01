<template>
   <section class="px-4 pt-8 sm:pt-14 pb-10">
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 sm:gap-7"> 
            <div class="lg:col-span-8 space-y-6 sm:space-y-8 lg:col-start-3"> 
                <h2 class="text-[32px] md:text-[46px] leading-[1.1] text-dark font-lancelot">En images</h2>
                <div class="relative overflow-hidden -mx-4 sm:-mx-0 image-slider">
                    <ssr-carousel v-model='page' 
                        :slides-per-page='1'  show-dots>
                        <div class="relative" > 
                            <figure>
                                <img class="w-full"  src="/images/agenda/img-4.png" alt="img-4.png">
                            </figure>
                            <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/agenda/img-4.png" alt="img-4.png">
                            </figure>
                             <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/agenda/img-4.png" alt="img-4.png">
                            </figure>
                             <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                    </ssr-carousel> 
                    <div class="hidden sm:flex justify-between absolute left-0 w-full px-8 top-1/2 -translate-y-1/2">
                        <button type="button" @click='page--'>
                           <svg class="stroke-white rotate-180 group-hover:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12L19 12"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 5L19 12L12 19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </button>
                        <button type="button" @click='page++'>
                            <svg class="stroke-white group-hover:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12L19 12"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 5L19 12L12 19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </button>
                    </div>
                      <div class="flex justify-end pt-6 sm:hidden px-4 sm:px-0">
                            <div class="flex gap-4 items-center">
                                <button type="button" class="flex justify-center items-stretch group" @click='page--'>
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary  fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                   <div class="flex items-center bg-white group-hover:bg-brand-red border-y-[2px] border-primary hover:border-brand-red">
                                        <svg class="stroke-dark rotate-180 group-hover:stroke-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L19 12"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12 5L19 12L12 19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                   </div>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </button>
                                <button type="button" class="flex justify-center items-stretch group" @click='page++'>
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary  fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                   <div class="flex items-center bg-white group-hover:bg-brand-red border-y-[2px] border-primary hover:border-brand-red">
                                        <svg class="stroke-dark group-hover:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L19 12"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12 5L19 12L12 19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                   </div>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </button>
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
    name: 'Images',
    data() {
        return {
            page: 1
        }
   }
}
</script>

<style>

</style>