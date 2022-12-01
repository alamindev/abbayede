<template>
   <div v-if="index === 2">
        <img class="w-full  bottom-0 left-0 absolute h-full lg:block hidden"  src="~/assets/images/double-border.svg" alt="double border">
        <div class="relative md:px-14 xl:px-20 pb-6 lg:pb-14 pt-6 lg:pt-14"> 
            <div class="space-y-2 lg:max-h-[500px] xl:max-h-[100%] lg:overflow-y-auto xl:overflow-y-visible ">
                <h4 class="text-base font-semibold text-brand-red">Découvrir</h4> 
                <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Tarifs & Billets</h2>
                <div class="space-y-2" v-if="show_tarifs === null">
                    <ul class="divide-y pt-5 pb-5">
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMore(1)">
                            <p class="font-semibold text-lg text-dark">Billets individuels</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMore(1)">
                            <p class="font-semibold text-lg text-dark">Groupes</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMore(1)">
                            <p class="font-semibold text-lg text-dark">Visites guidées</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMore(1)">
                            <p class="font-semibold text-lg text-dark">Familles</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMore(1)">
                            <p class="font-semibold text-lg text-dark">Combiné Abbaye de St-Maurice + Château</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMore(1)">
                            <p class="font-semibold text-lg text-dark">Combiné Abbaye de St-Maurice + Grotte aux Fées</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMore(7)">
                            <p class="font-semibold text-lg text-dark">Moyens de payement</p>
                            <icon-down></icon-down>
                        </li>
                    </ul>
                    <div class="flex flex-col xs:flex-row gap-4 justify-between items-start">
                        <nuxt-link  to="/" class="flex justify-center items-stretch group focus:none" >
                            <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                            <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">Achetez votre billet</span>
                            <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg> 
                        </nuxt-link>
                        <nuxt-link to="/" class="text-brand-red text-[15px] font-medium flex gap-3 items-center">
                            <span>Achetez votre billet</span>
                            <icon-right></icon-right>
                        </nuxt-link>
                    </div>
                </div>
                <div class="space-y-14" v-if="show_tarifs === 1">
                    <ul class="divide-y">
                        <li class="flex justify-between items-center gap-4 py-2.5">
                            <p class="font-semibold text-lg text-dark">Combiné Abbaye de St-Maurice + Grotte aux Fées</p>
                            <button @click="closeTarifs" type="button"><icon-cross></icon-cross></button>
                        </li>
                        <li class="flex justify-between items-center py-2.5" >
                            <p class="pr-10 text-[17px] leading-[28px] font-medium text-dark">Ce billet permet de visiter à prix avantageux l’Abbaye (son Trésor, son site patrimonial et son exposition temporaire) ainsi que la Grotte aux Fées située à 15 minutes à pied de l’Abbaye.</p>
                        </li>
                        <li class="">
                            <ul class="grid gap-3 py-4  border-b">
                                <li class="flex justify-between xs:items-center flex-col xs:flex-row  gap-2">
                                    <h3 class="text-[17px] font-semibold text-dark">Adultes</h3>
                                    <p class="text-[17px] leading-[28px] font-medium text-dark">CHF 19.- (au lieu de CHF 25.-)</p>
                                </li>
                                <li class="flex justify-between xs:items-center flex-col xs:flex-row  gap-2">
                                    <h3 class="text-[17px] font-semibold text-dark">Enfants / scolaires</h3>
                                    <p class="text-[17px] leading-[28px] font-medium text-dark">CHF 12.- (au lieu de CHF 13.-)</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                        <h4 class="text-dark text-[17px] leading-[28px] font-medium">Valable du 15 mars 2022 au 15 novembre 2022. </h4>
                        <p class="text-[13px] font-medium leading-[28px]">Non cumulable avec d’autres offres promotionnelles.</p>
                        <div class="pt-6">
                            <a href="https://www.grotteauxfees.ch" target="_blank" class="px-8 py-3 border border-dark rounded-full">www.grotteauxfees.ch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tarifs',
    props: ['index'],
    data() {
        return { 
            show_tarifs: null, 
        }
    },
    methods: { 
        ShowMore(index) {
            this.show_tarifs = index
        },
        closeTarifs(index) {
            this.show_tarifs = null
        }, 
    }
}
</script>

<style>

</style>