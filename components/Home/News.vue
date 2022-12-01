<template>
  <section class="sm:px-4 overflow-hidden pb-5  md:pt-20">
        <div class="max-w-[1615px] mx-auto bg-brand-creme">
            <div class="w-full p-4 sm:p-6 relative"> 
                <div class="max-w-screen-2xl mx-auto py-7 md:py-14  space-y-7">
                    <div class="flex  flex-row gap-5 sm:justify-between items-center">
                        <h2 class="text-[32px] md:text-[42px] leading-[1.2] text-dark font-lancelot">Actualités</h2>
                        <nuxt-link to="/" class="text-[15px] font-medium text-brand-gray-900 flex items-center gap-3"> <span class="hidden sm:inline">Toutes les actualités</span> <icon-right></icon-right></nuxt-link>
                    </div>
                    <div class="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 lg:gap-7">
                        <div class="space-y-3.5" v-for="news in newses" :key="news.id" >
                            <div class="relative">
                                <img class="w-full" :src="news.image" :alt="news.title">
                                <div class="absolute flex justify-center items-center inset-0 hover:opacity-100 opacity-0 transition-all hover:bg-dark hover:bg-opacity-50">
                                    <icon-youtube></icon-youtube>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <h2 class="text-[17px] font-semibold text-dark xl:pr-10">{{news.title}}</h2>
                                 <div class="flex gap-2 items-center">
                                    <icon-calendar></icon-calendar>
                                    <p class="text-brand-gray-900 text-[15px] leading-none font-medium">{{ news.date }}</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                     <div class="lg:hidden overflow-hidden w-full">
                        <ssr-carousel v-model='page' 
                            :slides-per-page='3'
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
                            <div class="space-y-3.5 slide w-full" v-for="news in newses" :key="news.id" >
                                <div class="relative">
                                    <img class="w-full" :src="news.image" :alt="news.title">
                                    <div class="absolute flex justify-center items-center inset-0 hover:opacity-100 opacity-0 transition-all hover:bg-dark hover:bg-opacity-50">
                                        <icon-youtube></icon-youtube>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <h2 class="text-[17px] font-semibold text-dark xl:pr-10">{{news.title}}</h2>
                                    <div class="flex gap-2 items-center">
                                        <icon-calendar></icon-calendar>
                                        <p class="text-brand-gray-900 text-[15px] leading-none font-medium">{{ news.date }}</p>
                                    </div>
                                </div> 
                            </div> 
                        </ssr-carousel>  
                    </div>
                    <div class="flex justify-center lg:pt-10 md:px-10">
                        <img class="md:block hidden" src="/images/news/SEP.png" alt="SEP">
                        <img class="md:hidden" src="/images/news/sep-mobile.png" alt="SEP">
                    </div>
                    <div class="flex justify-end   lg:hidden">
                            <div class="flex gap-4 items-center">
                                <button type="button" class="flex justify-center items-stretch group" @click='page--'>
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-white  fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                   <div class="flex items-center bg-white group-hover:bg-brand-red">
                                        <svg class="stroke-dark rotate-180 group-hover:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L19 12"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12 5L19 12L12 19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                   </div>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-white fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </button>
                                <button type="button" class="flex justify-center items-stretch group" @click='page++'>
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-white  fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                   <div class="flex items-center bg-white group-hover:bg-brand-red">
                                        <svg class="stroke-dark group-hover:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L19 12"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12 5L19 12L12 19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                   </div>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-white fill-white group-hover:fill-brand-red group-hover:stroke-brand-red" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </button>
                            </div>
                        </div>  
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            page: 1,
            newses: [
                {
                    id: 1,
                    title: 'La Semaine Romande de Musique et de Liturgie',
                    image: '/images/news/news-img-1.png',
                    date: 'Actualité - 16.07.2022'
                },
                {
                    id: 2,
                    title: 'Changement des horaires de visite du Trésor durant la Pentecôte',
                    image: '/images/news/news-img-2.png',
                    date: 'Actualité - 02.07.2022'
                },
                {
                    id: 3,
                    title: 'Participez aux veillées de prière pour la profession solennelle',
                    image: '/images/news/news-img-3.png',
                    date: 'Actualité - 21.06.2022'
                },
            ]
        }
    }
}
</script>

<style>

</style>