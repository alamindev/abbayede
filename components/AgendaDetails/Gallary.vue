<template>
    <section class="px-4 relative pb-5 pt-10 md:pt-20 bg-black gallary overflow-hidden">
    <div class="max-w-screen-2xl mx-auto">
        <header class="flex justify-center flex-col gap-3 items-center">
            <icon-verify-white></icon-verify-white>
            <h2 class="text-[32px] md:text-[42px] leading-[1.2] text-white font-lancelot text-center">En images</h2>
        </header> 
        <div class="pt-10 relative  flex justify-center">
             <no-ssr>
                <div  class="masonry-container"
                    v-masonry
                    transition-duration="0.3s"
                    item-selector=".masonry-container > .item"
                    fit-width="true">
                    <div v-masonry-tile class="item p-1.5 sm:p-3 max-w-[158px] sm:max-w-[300px] xl:max-w-[400px] 2xl:max-w-[426px]" :key="index" v-for="(item, index) in items">
                     <figure>
                        <img :src="item.image" alt="">
                     </figure>
                </div>
                </div>
            </no-ssr>
            <div class="h-[200px] sm:h-[250px] xl:h-[400px]  w-full absolute flex justify-center  items-end left-0 bottom-0 pb-6 sm:pb-14 bg-gradient-to-b to-black from-[rgba(0,0,0,0.1)]">
                 <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                    <span class="border-y-2    font-medium text-primary group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">Plus d’informations</span>
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
  import NoSSR from 'vue-no-ssr'
  export default {
    name: "AgendaDetailsGallary", 
    data() {
      return { 
        items: [
          { 
            image: '/images/agenda/img-5.png'
          }, 
          { 
            image: '/images/agenda/img-6.png'
          }, 
          { 
            image: '/images/agenda/img-7.png'
          }, 
          { 
            image: '/images/agenda/img-8.png'
          }, 
          { 
            image: '/images/agenda/img-9.png'
          }, 
          { 
            image: '/images/agenda/img-10.png'
          }, 
          { 
            image: '/images/agenda/img-11.png'
          }, 
          { 
            image: '/images/agenda/img-12.png'
          }, 
          { 
            image: '/images/agenda/img-13.png'
          }, 
          { 
            image: '/images/agenda/img-14.png'
          }, 
        ]
      }
    }, 
    mounted () {
        if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
        }
    },
    components: { 
        'no-ssr': NoSSR
    }
  }
</script>
 