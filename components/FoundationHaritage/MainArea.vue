<template>
    <section class="px-4 py-7 sm:py-10 md:py-14 lg:py-20 xl:py-24">
        <div class="max-w-screen-2xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7">
                <div class="md:col-span-8 space-y-14 order-2 md:order-1">
                    <div class="space-y-3 md:space-y-5 ">
                        <div class="pr-12 sm:pr-0">
                            <h2 class="text-[32px] inline md:text-[42px] leading-[1.2] font-lancelot text-brand-red  ">Patrimoinen</h2> 
                        </div>
                        <p class="text-brand-gray-900 text-xl font-medium sm:text-2xl !leading-[1.6] ">La fondation a pour but, entre autres, d’aider l’Abbaye dans son travail de conservation et de mise en valeur de son patrimoine physique constitué de pièces très anciennes, d’un site archéologique témoin de notre histoire, de deux lieux de recueillement et d’un carillon absolument unique en Suisse. </p>
                    </div>  
                    <div class="grid gap-10">
                        <div class="flex flex-col lg:flex-row w-full" v-for="data in datas" :key="data.id">
                            <figure class="shrink-0 lg:h-full lg:w-1/2">
                                <img class="h-full w-full object-cover" :src="data.img_url" :alt="data.title">
                            </figure>
                            <div class="p-5 bg-brand-creme space-y-4 lg:w-1/2">
                                <h2 class="text-xl lg:text-2xl text-dark font-semibold"> {{data.title}}</h2>
                                <p class="text-dark text-base lg:text-[17px] !leading-[1.7]">{{data.details}}</p>
                                 <nuxt-link  :to="data.link" class="flex justify-start items-stretch group focus:none" >
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                    <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">
                                        En savoir plus
                                    </span>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-3 md:col-span-4  order-1 md:order-2 lg:col-start-10">
                    <div class="flex md:hidden py-5 px-4 bg-brand-creme gap-3">
                        <icon-arrow-right class="text-white stroke-black"></icon-arrow-right>
                        <p class="font-semibold text-base text-dark font-lancelot">Archives</p>
                    </div>
                    <div class="relative w-full hidden md:block">
                        <icon-unknown-one class="-ml-1"></icon-unknown-one>
                        <div class="border-l mt-2 border-brand-gray py-4 px-5">
                            <ul class="grid gap-5 lg:gap-10">
                                <li><a href="#" class="font-semibold text-dark text-base">Reliquaires & Trésor de l’Abbaye</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Atelier de restauration</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Site archéologique</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Chapelle de Vérolliez</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Notre-Dame du Scex</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Carillon de l’Abbaye</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainContent',
    data() {
        return {
            datas: [
                {
                    id: 1,
                    title: 'Reliquaires & Trésor de l’Abbaye ',
                    details: 'Les pièces très anciennes conservées par l’Abbaye remontent à l’époque carolingienne. ',
                    link: '#',
                    img_url: '/images/heritage/img-1.png'
                },
                {
                    id: 2,
                    title: 'Atelier de restauration ',
                    details: 'L’élément qui sous-tend tout le travail qui se fait en restauration et conservation du patrimoine est l’atelier de restauration qu’abrite l’Abbaye.',
                    link: '#',
                    img_url: '/images/heritage/img-2.png'
                },
                {
                    id: 3,
                    title: 'Site archéologique dit « du Martolet » ',
                    details: 'Aux environs de l’an 315, en pleine colonisation romaine, une première église de très petites dimensions a été bâtie par saint Théodule. Elle a été agrandie puis transformée pour devenir ce qui est aujourd’hui la basilique.',
                    link: '#',
                    img_url: '/images/heritage/img-3.png'
                },
                {
                    id: 4,
                    title: 'Chapelle de Vérolliez ',
                    details: 'C’est à l’intérieur de cette chapelle où saint Maurice aurait été exécuté vers l’an 300, d’où le nom de « vrai lieu du martyre » qui en langage local pourrait se traduire par « Vero Liez » qui a donné de nos jours Vérolliez. ',
                    link: '#',
                    img_url: '/images/heritage/img-4.png'
                },
                {
                    id: 5,
                    title: 'Notre-Dame du Scex  ',
                    details: 'Cette chapelle est suspendue à la falaise, à près de 100m au-dessus du niveau de l’Abbaye, un endroit où l’ermite saint Aimé vécu au 7e siècle.  ',
                    link: '#',
                    img_url: '/images/heritage/img-5.png'
                } 
            ]
        }
    }
}
</script>

<style>

</style>