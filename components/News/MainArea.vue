<template>
  <section class="px-4 py-8 sm:py-14 lg:py-24 ">
        <div class="max-w-screen-2xl mx-auto">
            <div class="grid lg:grid-cols-12 sm:gap-7">
                <div class="lg:col-start-2 lg:col-span-10">
                    <div class="space-y-3 md:space-y-5 pb-7  md:pb-14">
                        <div class="pr-12 sm:pr-0">
                            <h2 class="text-base sm:text-[32px] inline   leading-[1.2] font-semibold uppercase text-brand-red ">Toutes les actualités</h2>
                            <icon-verify class="inline mb-2"></icon-verify>
                        </div>
                        <p class="text-brand-gray-900 text-xl md:text-2xl font-normal sm:text-2xl !leading-[1.6]">Sed placerat rutrum egestas. Suspendisse euismod ut sem in venenatis. Integer pellentesque dictum nisl, molestie pulvinar quam tempus non. 
Nam sed accumsan mauris, sit amet gravida urna.</p>
                    </div> 
                    <div class="space-y-5 md:space-y-8"> 
                       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 lg:gap-7">
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
                        <div class="flex justify-center pt-8 pb-8">
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
    name: 'News',
    data() {
        return { 
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
                {
                    id: 4,
                    title: 'Synode 2021-2023 : Pour une Église synodale',
                    image: '/images/news/news-img-4.png',
                    date: 'Actualité - 21.06.2022'
                },
                {
                    id: 5,
                    title: 'Lisez le dernier numéro des Echos de Saint-Maurice',
                    image: '/images/news/news-img-5.png',
                    date: 'Actualité - 21.06.2022'
                },
                {
                    id: 6,
                    title: 'Découvrez la crèche provençale de l\'Abbaye',
                    image: '/images/news/news-img-6.png',
                    date: 'Actualité - 21.06.2022'
                },
                {
                    id: 7,
                    title: 'Vernissage commun de 4 lieux emblématiques de Saint-Maurice',
                    image: '/images/news/news-img-7.png',
                    date: 'Actualité - 21.06.2022'
                },
                {
                    id: 8,
                    title: '"Contrastes" Photographies de Guillaume Allet & Alexandre Derivaz',
                    image: '/images/news/news-img-8.png',
                    date: 'Actualité - 21.06.2022'
                },
                {
                    id: 9,
                    title: 'Exposition sur le chanoine Bourban fermée temporairement',
                    image: '/images/news/news-img-9.png',
                    date: 'Actualité - 21.06.2022'
                },
            ]
        }
    }, 
}
</script>

<style>

</style>