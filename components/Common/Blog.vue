<template>
  <section class="px-4 py-8 sm:py-14 lg:py-24 ">
        <div class="max-w-screen-2xl mx-auto">
            <div class="grid lg:grid-cols-12 sm:gap-7">
                <div class="lg:col-start-2 lg:col-span-10">
                    <div class="space-y-3 md:space-y-5   md:pb-14">
                        <div class="pr-12 sm:pr-0">
                            <h2 class="text-base sm:text-[32px] inline font-semibold uppercase leading-[1.2] text-brand-red ">Prochains événements </h2>
                            <icon-verify class="inline mb-2"></icon-verify>
                        </div>
                        <p class="text-brand-gray-900 text-xl font-medium sm:text-2xl lg:text-[28px] !leading-[1.6] pr-5 sm:pr-0">Suspendisse euismod ut sem in venenatis. Integer pellentesque dictum nisl, molestie pulvinar quam tempus non. Nam sed accumsan mauris, sit amet gravida urna. Sed placerat rutrum egestas. </p>
                    </div> 
                    <div class="space-y-5 md:space-y-8">
                        <ul class="hidden lg:flex gap-4  flex-wrap xl:gap-6 items-center">
                            <li  class="cursor-pointer group active-filter">
                                <p class="text-base font-semibold group-hover:border-b border-brand-red group-hover:text-brand-red leading-[1.4]">Tout</p>
                            </li>
                            <li  class="cursor-pointer flex gap-2 items-center group">
                                <icon-book></icon-book>
                                <p class="text-base font-semibold group-hover:border-b border-brand-red group-hover:text-brand-red leading-[1.4]">Cérémonies religieuses</p>
                            </li>
                            <li  class="cursor-pointer flex gap-2 items-center group">
                                <icon-conference></icon-conference>
                                <p class="text-base font-semibold group-hover:border-b border-brand-red group-hover:text-brand-red leading-[1.4]">Conférences</p>
                            </li>
                            <li  class="cursor-pointer flex gap-2 items-center group">
                                <icon-event></icon-event>
                                <p class="text-base font-semibold group-hover:border-b border-brand-red group-hover:text-brand-red leading-[1.4]">Evénements</p>
                            </li>
                            <li  class="cursor-pointer flex gap-2 items-center group">
                                <icon-music></icon-music>
                                <p class="text-base font-semibold group-hover:border-b border-brand-red group-hover:text-brand-red leading-[1.4]">Musique</p>
                            </li>
                            <li  class="cursor-pointer flex gap-2 items-center group">
                                <icon-users></icon-users>
                                <p class="text-base font-semibold group-hover:border-b border-brand-red group-hover:text-brand-red leading-[1.4]">Visites thématiques</p>
                            </li>
                        </ul>
                        <div class="relative lg:hidden max-w-[550px]">
                            <button type="button" @click="OpenFilter" class="px-4 w-full flex justify-between items-center py-3 border border-brand-gray">
                                <span>Toutes les catégories</span>
                                <icon-right class="rotate-90"></icon-right>
                            </button> 
                            <ul :class="open ? 'opacity-100  visible' : 'opacity-0 invisible'" class="absolute divide-y z-20 divide-gray-100 left-0 bg-white w-full rounded-md shadow-md">
                                <li class="py-3 px-4 ">Tout</li>
                                <li class="py-3 px-4 ">Cérémonies religieuses</li>
                                <li class="py-3 px-4 ">Conférences</li>
                                <li class="py-3 px-4 ">Evénements</li>
                                <li class="py-3 px-4 ">Musique</li>
                                <li class="py-3 px-4 ">Visites thématiques</li>
                            </ul> 
                        </div>
                       <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 grid">
                        <div class="relative space-y-5" v-for="blog in blogs" :key='blog.id'>
                            <a href="#" class="inset-0 z-20 w-full h-full absolute"></a>
                            <div class="relative  main-path overflow-hidden">
                                <img class="w-full" :src="blog.img_url" :alt="blog.title">
                                <div class="absolute bottom-0 left-0">
                                    <div class="path  px-10 py-2 bg-brand-red flex justify-center items-center flex-col">
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
                        <div class="flex justify-center pt-14 pb-8">
                            <img src="~/assets/images/loading.svg" alt="loading">
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'blogs',
    data() {
        return {
            open: false,
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
                    title: 'Congrès des chanoines réguliers de saint Augustin',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 4,
                    img_url: '/images/blogs/img-5.png',
                    title: 'Veillée de prière pour la profession solennelle',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 5,
                    img_url: '/images/blogs/img-6.png',
                    title: 'Voeux solennels des chanoines Simone Previte et Maurice Sessou',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 6,
                    img_url: '/images/blogs/img-7.png',
                    title: 'Archéo Atelier',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 7,
                    img_url: '/images/blogs/img-8.png',
                    title: 'Présentation du Seigneur au Temple & Journée de la vie consacrée',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 8,
                    img_url: '/images/blogs/img-9.png',
                    title: 'Visites Guidées à la lueur des bougies',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
                {
                    id: 9,
                    img_url: '/images/blogs/img-10.png',
                    title: 'Nuit des Musées 2022',
                    url: '#', 
                    author: 'Mar',
                    date: '21',
                    month: 'Juillet',
                    fulldate: 'Evénement - 16.07.2022'
                },
            ]
        }
    },
    methods: {
        OpenFilter() {
            this.open = !this.open
        }
    }
}
</script>

<style>

</style>