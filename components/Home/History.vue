<template>
  <section class="px-4 pt-40 pb-10 sm:py-32 md:py-40 lg:py-48  relative ">
    <img src="/images/history/img-1.png" class="absolute inset-0 h-full object-cover w-full" alt="img-1.png">
    <div class="absolute inset-0 w-full h-full bg-g2"></div>
    <div class="max-w-screen-2xl mx-auto relative z-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-7">
            <div class="lg:col-start-3 lg:col-span-8 flex justify-center flex-col gap-4 sm:gap-10 items-start sm:items-center">
                <h2 class="text-[32px] lg:text-[64px] leading-[1.2] text-white font-lancelot text-left sm:text-center ">Histoire & Patrimoine</h2>
                  <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-white group-hover:fill-transparent fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                    <span class="border-y-2 gap-4 font-medium text-dark group-hover:text-white bg-white group-hover:bg-transparent group-hover:border-white border-white rounded-sm my-[0.3px] flex justify-center items-center">
                        Plus d’informations 
                     <svg width="18" height="19" class="stroke-black group-hover:stro" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.88577 9.00586L13.8024 9.00586"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.84412 3.75586L13.8024 9.00586L8.84412 14.2559" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </span>
                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-white group-hover:fill-transparent fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    name: 'History'
}
</script>

<style>

</style>