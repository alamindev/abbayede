<template>
  <section class="px-4 py-8 sm:py-16 lg:py-20 xl:py-32 bg-white lg:bg-brand-creme">
    <div class="max-w-screen-2xl mx-auto">
        <h2 class="text-[32px] hidden lg:block md:text-[42px] leading-[1.2] text-dark font-lancelot">Préparez votre visite</h2>
        <div class="grid-cols-1 lg:grid-cols-2 gap-7 lg:grid hidden pt-10"> 
            <div class="grid grid-cols-2 justify-between gap-6">
                <div class="space-y-14 flex flex-col justify-center items-center bg-white px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-brand-creme">
                        <icon-visit-icon-one class="fill-primary"></icon-visit-icon-one>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Accès</p>
                </div>
                <div class="space-y-14 flex flex-col justify-center items-center bg-white px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-brand-creme">
                        <icon-visit-icon-two class="fill-primary"></icon-visit-icon-two>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Tarifs & Billets</p>
                </div> 
                <div class="space-y-14 flex flex-col justify-center items-center bg-white px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-brand-creme">
                        <icon-visit-icon-three class="fill-primary"></icon-visit-icon-three>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Horaires</p>
                </div> 
                <div class="space-y-14 flex flex-col justify-center items-center bg-white px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-brand-creme">
                        <icon-visit-icon-four class="fill-primary"></icon-visit-icon-four>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Contact</p>
                </div> 
            </div> 
            <div class="relative">
                <div class="bg-white">
                    <div class="relative px-14 py-12"> 
                        <div class="space-y-2 overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Découvrir</h4> 
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Découvrez le trésor de l’Abbaye</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">L'Abbaye a ouvert au public un nouveau parcours de visite modernisé. Aujourd'hui, le visiteur peut découvrir la basilique, le site archéologique des anciennes églises et les joyaux de la nouvelle salle du trésor.</p>
                        </div>
                         <div class="w-full flex justify-center items-center">
                            <img class=""  src="/images/conservation/img-3.png" alt="captura-de-pantalla">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- start for mobile  --> 
        <div class="space-y-6 sm:space-y-10 relative lg:hidden">
            <h2 class="text-[32px] md:text-[42px] leading-[1.2] text-dark font-lancelot">Préparez votre visite</h2>
            <ul class="divide-y divide-brand-gray">
                <li class=" py-4" @click="Items(1)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 1 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-brand-creme">
                                <icon-visit-icon-one class="w-20 h-20" :class="index === 1 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-one>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 1" class="relative sm:px-4 lg:px-14 py-8 lg:py-12"> 
                        <div class="space-y-2 lg:max-h-[200px] xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Découvrir</h4> 
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Découvrez le trésor de l’Abbaye</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">L'Abbaye a ouvert au public un nouveau parcours de visite modernisé. Aujourd'hui, le visiteur peut découvrir la basilique, le site archéologique des anciennes églises et les joyaux de la nouvelle salle du trésor.</p>
                        </div>
                         <div class="w-full flex justify-center items-center">
                            <img class=""  src="/images/conservation/img-3.png" alt="captura-de-pantalla">
                        </div>
                    </div>
                </li> 
                <li class=" py-4" @click="Items(2)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 2 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-brand-creme">
                                <icon-visit-icon-two  class="w-14 h-14"  :class="index === 2 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-two>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 2" class="relative sm:px-4 lg:px-14 py-8 lg:py-12"> 
                        <div class="space-y-2 lg:max-h-[200px] xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Découvrir</h4> 
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Découvrez le trésor de l’Abbaye</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">L'Abbaye a ouvert au public un nouveau parcours de visite modernisé. Aujourd'hui, le visiteur peut découvrir la basilique, le site archéologique des anciennes églises et les joyaux de la nouvelle salle du trésor.</p>
                        </div>
                         <div class="w-full flex justify-center items-center">
                            <img class=""  src="/images/conservation/img-3.png" alt="captura-de-pantalla">
                        </div>
                    </div>
                </li> 
                <li class=" py-4" @click="Items(3)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 3 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-brand-creme">
                                <icon-visit-icon-three  class="w-14 h-14"  :class="index === 3 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-three>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 3" class="relative sm:px-4 lg:px-14 py-8 lg:py-12"> 
                        <div class="space-y-2 lg:max-h-[200px] xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Découvrir</h4> 
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Découvrez le trésor de l’Abbaye</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">L'Abbaye a ouvert au public un nouveau parcours de visite modernisé. Aujourd'hui, le visiteur peut découvrir la basilique, le site archéologique des anciennes églises et les joyaux de la nouvelle salle du trésor.</p>
                        </div>
                         <div class="w-full flex justify-center items-center">
                            <img class=""  src="/images/conservation/img-3.png" alt="captura-de-pantalla">
                        </div>
                    </div>
                </li> 
                <li class=" py-4" @click="Items(4)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 4 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-brand-creme">
                                <icon-visit-icon-four class="w-14 h-14"  :class="index === 4 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-four>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 4" class="relative sm:px-4 lg:px-44 py-8 lg:py-12"> 
                        <div class="space-y-2 lg:max-h-[200px] xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Découvrir</h4> 
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Découvrez le trésor de l’Abbaye</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">L'Abbaye a ouvert au public un nouveau parcours de visite modernisé. Aujourd'hui, le visiteur peut découvrir la basilique, le site archéologique des anciennes églises et les joyaux de la nouvelle salle du trésor.</p>
                        </div>
                         <div class="w-full flex justify-center items-center">
                            <img class=""  src="/images/conservation/img-3.png" alt="captura-de-pantalla">
                        </div>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
  </section>
</template>

<script> 
export default {
    name: 'Description', 
    data() {
        return {
            index: null,  
        }
    },
    methods: {
        Items(index) {
            this.index = index
        },  
    }
}
</script>

<style>

</style>