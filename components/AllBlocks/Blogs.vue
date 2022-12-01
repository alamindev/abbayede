<template>
  <section class="sm:px-4 py-8 pb-24 ">
        <div class="max-w-screen-2xl mx-auto">
            <div class="grid lg:grid-cols-12 sm:gap-7">
                <div class="lg:col-start-2 lg:col-span-10 space-y-8 md:space-y-14 xl:space-y-32">
                    <div class="lg:w-[880px] px-4 lg:px-0 max-w-full mx-auto space-y-14">
                        <div class="flex flex-col  w-full" v-for="data in datas" :key="data.id">
                            <figure class="shrink-0 w-full">
                                <img class="h-full w-full object-cover" :src="data.img_url" :alt="data.title">
                            </figure>
                            <div class="p-5 bg-brand-creme space-y-4  ">
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
                    <div class="bg-brand-creme path-five ">
                        <div class="lg:w-[890px] max-w-full mx-auto px-4 py-7 md:py-10">
                        <div class="flex justify-start pb-2">
                            <icon-comma-top></icon-comma-top>
                        </div>
                            <h2 class="text-xl md:text-2xl text-dark font-lancelot lg:leading-[0.9]">L’Ascension de Jésus n’est pas une évasion de notre condition humaine, mais une promesse de demeurer avec tous les hommes jusqu’à la fin du monde</h2>
                         <div class="flex justify-end pt-2">
                            <icon-comma-bottom></icon-comma-bottom>
                        </div>
                        </div>
                    </div>
                    <div class="relative w-[320px] mx-auto lg:w-[880px] pb-10 mt-14">
                        <img class="absolute top-0 left-0 hidden lg:block" src="~assets/images/double-border-two.svg" alt="double-border-two">
                        <img class="absolute top-0 left-0 lg:hidden" src="~assets/images/double-border-two-mobile.svg" alt="double-border-two">
                        <div class="relative w-[260px] lg:w-[550px] mx-auto space-y-3 xl:space-y-5 pt-12 lg:pt-4 xl:pt-7 2xl:pt-10">
                            <h2 class="text-center font-lancelot text-2xl xl:text-[42px] !leading-none text-dark">Soutenez le projet</h2>
                            <p class="text-base lg:text-[19px] text-center !leading-[1.7] font-medium text-dark">Soyez un artisan de ces restaurations en soutenant la Fondation de l’Abbaye de Saint-Maurice</p>
                            <div class="flex justify-center">
                                <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                    <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">
                                    Plus d’informations
                                    </span>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="flex px-4 lg:px-0 flex-wrap gap-4 items-center ">
                            <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                                <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">
                                   Télécharger l’homélie
                                    <sup><icon-arrow-top-right></icon-arrow-top-right></sup>
                                </span>
                                <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg> 
                            </nuxt-link>
                            <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                                <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">
                                Lien vers d’autres ressources
                                <sup> <icon-arrow-top-right></icon-arrow-top-right></sup>
                                </span>
                                <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg> 
                            </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainArea', 
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