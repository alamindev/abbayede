<template>
  <main>
       <section class="relative">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="relative"> 
                    <figure>
                        <img class="w-full h-[300px] sm:h-[400px] md:h-auto object-cover "  src="/images/page-shop/img-1.png" alt="img-1">
                    </figure>
                    <div class="absolute inset-0 bg-black bg-opacity-0 lg:bg-opacity-30"></div>
                    <div class="w-full h-full bg-g2 absolute bottom-0 flex flex-col justify-end md:justify-center gap-4 md:items-center pb-10 md:pb-14 pl-4 md:pl-14 lg:pl-20 xl:pl-40">
                        <h2 class="text-[42px] 2xl:text-[64px] leading-[1.2] text-white font-lancelot">Boutique</h2>
                        <div class="flex justify-start md:justify-center"> 
                             <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-white group-hover:fill-transparent fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                                <span class="border-y-2 gap-4 font-semibold text-dark group-hover:text-white bg-white group-hover:bg-transparent group-hover:border-white border-white rounded-sm my-[0.3px] flex justify-center items-center">
                                   <icon-lock></icon-lock>
                                   Visiter la boutique
                                </span>
                                <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-white group-hover:fill-transparent fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg> 
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <figure>
                        <img class="w-full h-[300px] sm:h-[400px] md:h-auto object-cover "  src="/images/page-shop/img-2.png" alt="img-2">
                    </figure>
                    <div class="w-full h-full bg-g2 absolute bottom-0 flex flex-col justify-end md:justify-center gap-4 md:items-center pb-10 md:pb-14 pl-4 md:pl-14 lg:pl-20 xl:pl-40">
                        <h2 class="text-[42px] 2xl:text-[64px] leading-[1.2] text-white font-lancelot">Visite du trésor</h2>
                        <div class="flex justify-start md:justify-center">
                             
                             <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-white group-hover:fill-transparent fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                                <span class="border-y-2 gap-4 font-semibold text-dark group-hover:text-white bg-white group-hover:bg-transparent group-hover:border-white border-white rounded-sm my-[0.3px] flex justify-center items-center">
                                  <icon-tag></icon-tag>
                                Acheter votre billet
                                </span>
                                <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-white group-hover:fill-transparent fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg> 
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="absolute inset-0 bg-black bg-opacity-0 lg:bg-opacity-30"></div>
                </div>
            </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "PageShop",
  data() {
    return {
    
    };
  },
};
</script>
