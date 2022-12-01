<template>
  <div v-if="index === 3">
    <img class="w-full  bottom-0 left-0 absolute h-full lg:block hidden"  src="~/assets/images/double-border.svg" alt="double border">
        <div class="relative md:px-14 xl:px-20 pb-6 lg:pb-14 pt-6 lg:pt-14"> 
            <div class="space-y-2 lg:max-h-[500px] xl:max-h-[100%] overflow-y-auto xl:overflow-y-visible ">
                <h4 class="text-base font-semibold text-brand-red">Découvrir</h4> 
                <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Horaires</h2>
                <div class="space-y-2" v-if="show_horaires === null">
                    <ul class="divide-y pt-5 pb-5">
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMoreHoraies(1)">
                            <p class="font-semibold text-lg text-dark">Horaires de visite</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMoreHoraies(1)">
                            <p class="font-semibold text-lg text-dark">Haute saison / D'avril à octobre</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMoreHoraies(1)">
                            <p class="font-semibold text-lg text-dark">Basse-saison / En novembre et décembre</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMoreHoraies(1)">
                            <p class="font-semibold text-lg text-dark">Fermé le lundi / excepté</p>
                            <icon-down></icon-down>
                        </li>
                        <li class="flex justify-between cursor-pointer items-center py-2.5" @click="ShowMoreHoraies(1)">
                            <p class="font-semibold text-lg text-dark">Horaires spéciaux</p>
                            <icon-down></icon-down>
                        </li> 
                    </ul> 
                </div>
                <div class="space-y-14" v-if="show_horaires === 1">
                    <ul class="divide-y">
                        <li class="flex justify-between items-center py-2.5 gap-4">
                            <p class="font-semibold text-lg text-dark">Fermé le lundi / excepté</p>
                            <button @click="closeHoraies" type="button"><icon-cross></icon-cross></button>
                        </li> 
                        <li class="">
                            <ul class="grid gap-3 py-4">
                                <li class="flex xs:flex-row flex-col justify-between xs:items-center gap-2">
                                    <h3 class="text-[17px] font-semibold text-dark">Lundi de Pâques (18 avril 2022)</h3>
                                    <p class="text-[17px] leading-[28px] font-medium text-dark">10h00-17h30</p>
                                </li>
                                <li class="flex xs:flex-row flex-col justify-between xs:items-center gap-2">
                                    <h3 class="text-[17px] font-semibold text-dark">Lundi de Pentecôte (6 juin 2022)</h3>
                                    <p class="text-[17px] leading-[28px] font-medium text-dark">10h00-17h30</p>
                                </li>
                                <li class="flex xs:flex-row flex-col justify-between xs:items-center gap-2">
                                    <h3 class="text-[17px] font-semibold text-dark">Lundi du Jeûne (19 septembre 2022)</h3>
                                    <p class="text-[17px] leading-[28px] font-medium text-dark">10h00-17h30</p>
                                </li>
                            </ul>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Horires',
    props: ['index'],
  data() {
        return { 
            show_horaires: null
        }
    },
    methods: { 
        ShowMoreHoraies(index) {
            this.show_horaires = index
        },
        closeHoraies(index) {
            this.show_horaires = null
        }
    }
}
</script>

<style>

</style>