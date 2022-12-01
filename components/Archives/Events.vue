<template>
    <section class="px-4 py-5 pb-10 md:pb-24 sm:pt-10">
        <div class="max-w-screen-2xl mx-auto space-y-6 sm:space-y-8 ">
            <h2 class="text-[32px] lg:text-[46px] leading-[1.2] text-dark font-lancelot text-left ">Prochains événements</h2>
            <div class="grid-cols-1  md:grid-cols-3 gap-5 xl:gap-7 grid">
                        <div class="relative space-y-5" v-for="event in events" :key='event.id'>
                            <a href="#" class="inset-0 z-20 w-full h-full absolute"></a>
                            <div class="relative  main-path overflow-hidden">
                                <img class="w-full" :src="event.img_url" :alt="event.title">
                                <div class="absolute bottom-0 left-0">
                                    <div class="path px-10 py-6 bg-brand-red flex justify-center items-center flex-col">
                                        <p class="font-semibold text-base text-white">{{event.author}}</p>
                                        <h3 class="text-[32px] xl:text-[40px] leading-[.9] font-semibold text-white">{{ event.date }}</h3>
                                        <p class="font-semibold text-base text-white">{{ event.month }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <h2 class="text-[17px] leading-[1.3] font-semibold text-dark">{{ event.title }}</h2>
                                <div class="flex gap-2 items-center">
                                    <icon-calendar></icon-calendar>
                                    <p class="text-brand-gray-900 text-[15px] leading-none font-medium">{{ event.fulldate }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
           <div class="pt-7 sm:pt-12 flex justify-center items-center">
                <img src="~assets/images/flower-1.svg" alt="flower-1.svg">
           </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Events',
    data() {
        return {
            events: [
                {
                    id: 1,
                    img_url: '/images/archive/img-2.png',
                    title: 'Colloque international - Abbés seigneurs, abbés bâtisseurs (XIIIe siècle)',
                    url: '#',  
                    date: '25-26',
                    month: 'Juillet',
                    fulldate: 'Evénement - du 25 au 26.07.2022'
                },
               
                {
                    id: 1,
                    img_url: '/images/archive/img-3.png',
                    title: 'Journées de rencontre: Sur les traces de saint Maurice. Histoire et légende',
                    url: '#',  
                    date: '21-22',
                    month: 'Août',
                    fulldate: 'Evénement - du 25 au 26.07.2022'
                },
               
                {
                    id: 1,
                    img_url: '/images/archive/img-4.png',
                    title: 'Honneur à Saint Maurice ! 1500 ans de culte : lieux et supports de la liturgie',
                    url: '#',  
                    date: '02',
                    month: 'Sept.',
                    fulldate: 'Evénement - du 25 au 26.07.2022'
                },
               
            ]
        }
    }
}   
</script>

<style>

</style>