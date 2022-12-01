<template>
  <section class="px-4 py-8 sm:py-16 lg:py-20 xl:py-32 bg-white">
    <div class="max-w-screen-2xl mx-auto">
        <h2 class="text-[32px] hidden lg:block md:text-[42px] leading-[1.2] text-dark font-lancelot">Préparez votre visite</h2>
        <div class="grid-cols-1 lg:grid-cols-2 gap-7 lg:grid hidden pt-10"> 
            <div class="relative">
                <div class="bg-white">
                     <img class="w-full  bottom-0 left-0 absolute h-full lg:block hidden"  src="~/assets/images/double-border.svg" alt="double border">  
                    <div class="relative px-14 py-16 w-[500px] mx-auto max-w-full"> 
                        <div class="space-y-2 lg:max-h-[200px]  xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Résultats</h4> 
                                 <icon-verify></icon-verify>
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">10e édition du concours</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">Le 10e Concours International pour Orgue de Saint-Maurice d’Agaune s’est déroulé à Lausanne (Vaud) et à Saint-Maurice (Valais) en Suisse, du 10 au 15 août 2021.</p>
                        </div>
                        <ul class="grid gap-3 pt-6">
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red">1er Prix et Prix du Pulic :</span> Minjun Lee</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 2e Prix :</span> Anna Ivanova</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 3e Prix :</span> non attribué</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 justify-between gap-6">
                <div class="space-y-14 flex flex-col justify-center items-center bg-brand-creme px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-white">
                        <icon-one class="fill-primary"></icon-one>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Historique</p>
                </div>
                <div class="space-y-14 flex flex-col justify-center items-center bg-brand-creme px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-white">
                        <icon-two class="fill-primary"></icon-two>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Master classes</p>
                </div> 
                <div class="space-y-14 flex flex-col justify-center items-center bg-brand-creme px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-white">
                        <icon-three class="fill-primary"></icon-three>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Le concours</p>
                </div> 
                <div class="space-y-14 flex flex-col justify-center items-center bg-brand-creme px-4 py-8">
                    <div  class="w-[144px] h-[144px] flex justify-center items-center rounded-full bg-white">
                        <icon-four class="fill-primary"></icon-four>
                    </div> 
                    <p class="text-center font-medium text-lg text-dark">Presse</p>
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
                            <div  :class="index === 1 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-white">
                                <icon-one class="w-16 h-16" :class="index === 1 ? 'fill-white' : 'fill-primary'"></icon-one>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 1" class="relative sm:px-4 lg:px-14 py-8 lg:py-12"> 
                         <div class="space-y-2 lg:max-h-[200px]  xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Résultats</h4> 
                                 <icon-verify></icon-verify>
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">10e édition du concours</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">Le 10e Concours International pour Orgue de Saint-Maurice d’Agaune s’est déroulé à Lausanne (Vaud) et à Saint-Maurice (Valais) en Suisse, du 10 au 15 août 2021.</p>
                        </div>
                        <ul class="grid gap-3 pt-6">
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red">1er Prix et Prix du Pulic :</span> Minjun Lee</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 2e Prix :</span> Anna Ivanova</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 3e Prix :</span> non attribué</li>
                        </ul>
                    </div>
                </li> 
                <li class=" py-4" @click="Items(2)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 2 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-white">
                                <icon-two  class="w-14 h-14"  :class="index === 2 ? 'fill-white' : 'fill-primary'"></icon-two>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 2" class="relative sm:px-4 lg:px-14 py-8 lg:py-12"> 
                         <div class="space-y-2 lg:max-h-[200px]  xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Résultats</h4> 
                                 <icon-verify></icon-verify>
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">10e édition du concours</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">Le 10e Concours International pour Orgue de Saint-Maurice d’Agaune s’est déroulé à Lausanne (Vaud) et à Saint-Maurice (Valais) en Suisse, du 10 au 15 août 2021.</p>
                        </div>
                        <ul class="grid gap-3 pt-6">
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red">1er Prix et Prix du Pulic :</span> Minjun Lee</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 2e Prix :</span> Anna Ivanova</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 3e Prix :</span> non attribué</li>
                        </ul>
                    </div>
                </li> 
                <li class=" py-4" @click="Items(3)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 3 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-white">
                                <icon-three  class="w-14 h-14"  :class="index === 3 ? 'fill-white' : 'fill-primary'"></icon-three>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 3" class="relative sm:px-4 lg:px-14 py-8 lg:py-12"> 
                        <div class="space-y-2 lg:max-h-[200px]  xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Résultats</h4> 
                                 <icon-verify></icon-verify>
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">10e édition du concours</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">Le 10e Concours International pour Orgue de Saint-Maurice d’Agaune s’est déroulé à Lausanne (Vaud) et à Saint-Maurice (Valais) en Suisse, du 10 au 15 août 2021.</p>
                        </div>
                        <ul class="grid gap-3 pt-6">
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red">1er Prix et Prix du Pulic :</span> Minjun Lee</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 2e Prix :</span> Anna Ivanova</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 3e Prix :</span> non attribué</li>
                        </ul>
                    </div>
                </li> 
                <li class=" py-4" @click="Items(4)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 4 &&  '!bg-primary'" class="w-[84px] p-2 h-[84px] flex justify-center items-center rounded-full bg-white">
                                <icon-four class="w-14 h-14"  :class="index === 4 ? 'fill-white' : 'fill-primary'"></icon-four>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div> 
                    <div v-if="index === 4" class="relative sm:px-4 lg:px-44 py-8 lg:py-12"> 
                         <div class="space-y-2 lg:max-h-[200px]  xl:max-h-[100%] overflow-y-auto ">
                            <div class="flex items-center gap-1">
                                <h4 class="text-base font-semibold text-brand-red">Résultats</h4> 
                                 <icon-verify></icon-verify>
                            </div>
                            <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">10e édition du concours</h2>
                            <p class="text-[17px] font-medium text-dark leading-[28px]">Le 10e Concours International pour Orgue de Saint-Maurice d’Agaune s’est déroulé à Lausanne (Vaud) et à Saint-Maurice (Valais) en Suisse, du 10 au 15 août 2021.</p>
                        </div>
                        <ul class="grid gap-3 pt-6">
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red">1er Prix et Prix du Pulic :</span> Minjun Lee</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 2e Prix :</span> Anna Ivanova</li>
                            <li class="text-base font-medium sm:text-[17px]"><span class="text-brand-red"> 3e Prix :</span> non attribué</li>
                        </ul>
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