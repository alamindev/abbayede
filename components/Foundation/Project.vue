<template>
    <section class="px-4 py-5 pb-10 md:pb-24 sm:pt-10">
        <div class="max-w-screen-2xl mx-auto ">
              <div class="grid lg:grid-cols-12 sm:gap-7">
                <div class="lg:col-start-2 lg:col-span-10 space-y-6 sm:space-y-8 ">
                        <h2 class="text-[32px] lg:text-[46px] leading-[1.2] text-dark font-lancelot text-left ">Projets en cours</h2>
                    <div class="relative overflow-x-clip project-slider ">
                    <ssr-carousel v-model='page' 
                        :slides-per-page='3' 
                         show-dots  
                         :responsive='[ 
                                {
                                    maxWidth: 1024,
                                    slidesPerPage: 2,
                                },
                                {
                                    maxWidth: 767,
                                    slidesPerPage: 1.5
    },
                                 {
                                    maxWidth: 600,
                                    slidesPerPage: 1
                                }
                            ]'>
                        <div class="relative" > 
                            <figure>
                                <img class="w-full"  src="/images/foundation/img-2.png" alt="img-2.png">
                            </figure>
                            <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/foundation/img-3.png" alt="img-3.png">
                            </figure>
                             <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/foundation/img-4.png" alt="img-4.png">
                            </figure>
                             <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img class="w-full"  src="/images/foundation/img-2.png" alt="img-2.png">
                            </figure>
                            <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/foundation/img-3.png" alt="img-3.png">
                            </figure>
                             <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img class="w-full"  src="/images/foundation/img-2.png" alt="img-2.png">
                            </figure>
                            <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/foundation/img-3.png" alt="img-3.png">
                            </figure>
                             <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img class="w-full"  src="/images/foundation/img-2.png" alt="img-2.png">
                            </figure>
                            <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/foundation/img-3.png" alt="img-3.png">
                            </figure>
                             <div class="inset-0 bg-dark bg-opacity-30 absolute w-full h-full"></div>
                        </div> 
                        <div class="relative" > 
                            <figure>
                                <img  class="w-full" src="/images/foundation/img-4.png" alt="img-4.png">
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
    name: 'Project',
    data() {
        return {
             page: 1 
        }
    }
}   
</script>

<style>

</style>