<template>
    <section class="sm:px-4 overflow-hidden">
        <div class="max-w-[1615px] mx-auto bg-brand-creme">
            <div class="w-full p-4 sm:p-6 relative">
                <icon-simbol class="absolute top-5 left-5"></icon-simbol>
                <icon-simbol class="absolute top-5 right-5"></icon-simbol>
                <icon-simbol class="absolute bottom-5 hidden md:block left-5"></icon-simbol>
                <icon-simbol class="absolute bottom-5  hidden md:block right-5"></icon-simbol>
                <div class="max-w-screen-2xl mx-auto  pb-6 pt-14 md:py-20  sm:space-y-6">
                    <h2 class="text-[32px] md:text-[42px] leading-[1.2] text-dark font-lancelot">Agenda</h2>
                   
                    <div class="overflow-hidden ">
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
                            <div class="slide" :index='blog.id' v-for="blog in blogs" :key='blog.id'>
                                <div class="relative space-y-5" >
                                    <a href="#" class="inset-0 z-20 w-full h-full absolute"></a>
                                    <div class="relative  main-path overflow-hidden">
                                        <img class="w-full" :src="blog.img_url" :alt="blog.title">
                                        <div class="absolute bottom-0 left-0">
                                            <div class="path  px-10 py-6 bg-brand-red flex justify-center items-center flex-col">
                                                <p class="font-semibold text-base text-white">{{blog.author}}</p>
                                                <h3 class="text-[32px] xl:text-[40px] leading-[.9] font-semibold text-white">{{ blog.date }}</h3>
                                                <p class="font-semibold text-base text-white">{{ blog.month }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space-y-3">
                                        <h2 class="text-[17px] leading-[1.3] font-semibold text-dark">{{ blog.title }}</h2>
                                        <div class="flex gap-2 items-center">
                                            <icon-calendar></icon-calendar>
                                            <p class="text-brand-gray-900 text-[15px] leading-none font-medium">{{ blog.fulldate }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </ssr-carousel> 
                        
                        <div class="flex justify-end pt-6 sm:pt-10 lg:hidden">
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
        </div>
    </section>
</template>

<script> 
export default {
    name: "Agenda",
    data() {
        return {
            page: 1,
            blogs: [
                {
                    id: 1,
                    img_url: '/images/blogs/img-1.png',
                    title: 'Festival Metanoia : un festival dans un cadre unique',
                    url: '#', 
                    author: 'Sam',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 2,
                    img_url: '/images/blogs/img-2.png',
                    title: 'Veillée de prière pour la profession solennelle du 28 août 2022',
                    url: '#', 
                    author: 'Sam',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 3,
                    img_url: '/images/blogs/img-3.png',
                    title: 'Veillée de prière pour la profession solennelle',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 4,
                    img_url: '/images/blogs/img-2.png',
                    title: 'Veillée de prière pour la profession solennelle du 28 août 2022',
                    url: '#', 
                    author: 'Sam',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
            ]
        }
    }
}
</script>

<style>

</style>