<template>
  <main>
    <section class="relative bg-white sm:bg-dark pt-20 pb-20 sm:pt-48 xl:pt-64 2xl:pt-72 sm:pb-40 xl:pb-48 2xl:pb-64 px-4">
        <div class="absolute bottom-0 left-0 h-[500px] w-full bg-g2 hidden sm:block"></div>
        <div class="w-[980px] max-w-full mx-auto flex relative flex-col justify-center items-center space-y-4">
             <figure>
                <img src="~assets/images/404-logo.png" alt="404-logo.png">
             </figure>
             <h1 class="text-center font-lancelot text-secondary text-[32px] md:text-[46px]">Page non trouvée</h1>
             <p class="text-center text-xl md:text-2xl leading-[1.7] text-secondary">La page que vous recherchez n'a pas été trouvée, elle a pu être déplacée, supprimée, renommée ou est temporairement non disponible.</p>
             <div class="flex justify-center pt-10">
                     <nuxt-link  to="/" class="flex justify-center items-stretch group focus:none" >
                        <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-secondary group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        <span class="border-y-2 group-hover:border-white  font-semibold text-secondary group-hover:text-dark bg-transparent group-hover:bg-white border-secondary rounded-sm my-[0.3px] flex justify-center items-center">Retour à l’accueil</span>
                        <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-secondary group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg> 
                    </nuxt-link>
             </div>
        </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ErrorPage",
  data() {
    return {
    
    };
  },
};
</script>
