<template>
  <section class="px-4 py-14 sm:py-16 lg:py-20 xl:py-32">
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid-cols-1 lg:grid-cols-2 gap-7 lg:grid hidden">
            <div class="space-y-14">
                <h2 class="text-[32px] md:text-[42px] leading-[1.2] text-dark font-lancelot">Préparez votre visite</h2>
                <div class="px-14 py-10 grid grid-cols-2 justify-between gap-x-14 xl:gap-x-24 gap-y-20">
                    <div class="max-w-[170px] space-y-8 flex flex-col justify-center items-center">
                        <div @click="Items(1)"  :class="index === 1 &&  '!bg-primary'" class="w-[170px] cursor-pointer h-[170px] flex justify-center items-center rounded-full bg-brand-creme">
                            <icon-visit-icon-one :class="index === 1 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-one>
                        </div> 
                         <button type="button" @click="Items(1)" class="flex justify-center items-stretch group focus:none" >
                            <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                            <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">Accès</span>
                            <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg> 
                        </button>
                    </div>
                    <div class="max-w-[170px] space-y-8 flex flex-col justify-center items-center">
                        <div @click="Items(2)"  :class="index === 2 &&  '!bg-primary'" class="w-[170px] cursor-pointer h-[170px] flex justify-center items-center rounded-full bg-brand-creme">
                            <icon-visit-icon-two :class="index === 2 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-two>
                        </div> 
                         <button type="button" @click="Items(2)" class="flex justify-center items-stretch group focus:none" >
                            <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                            <span class="border-y-2 backdrop:font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">Tarifs & Billets</span>
                            <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg> 
                        </button>
                    </div>
                    <div class="max-w-[170px] space-y-8 flex flex-col justify-center items-center">
                        <div @click="Items(3)"  :class="index === 3 &&  '!bg-primary'" class="w-[170px] cursor-pointer h-[170px] flex justify-center items-center rounded-full bg-brand-creme">
                            <icon-visit-icon-three :class="index === 3 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-three>
                        </div> 
                         <button type="button" @click="Items(3)" class="flex justify-center items-stretch group focus:none" >
                            <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                            <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">Horaires</span>
                            <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg> 
                        </button>
                    </div>
                    <div class="max-w-[170px] space-y-8 flex flex-col justify-center items-center">
                        <div  @click="Items(4)"  :class="index === 4 &&  '!bg-primary'" class="cursor-pointer w-[170px] h-[170px] flex justify-center items-center rounded-full bg-brand-creme">
                            <icon-visit-icon-four :class="index === 4 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-four>
                        </div> 
                         <button type="button" @click="Items(4)" class="flex justify-center items-stretch group focus:none" >
                            <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                            <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">Contact</span>
                            <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg> 
                        </button>
                    </div>
                </div>
            </div>
            <div class="relative lg:mt-24">
                <Acces :index="index"/>
                <Tarifs :index="index"/>
                <Horires :index="index"/> 
                <Contact :index="index"/> 
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
                                <icon-visit-icon-one :class="index === 1 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-one>
                            </div> 
                            <p class="font-semibold text-base text-dark">Accès</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div>
                    <Acces :index="index"/> 
                </li>
                <li class="py-4" @click="Items(2)">
                      <div class="flex justify-between items-center cursor-pointer  w-full">
                            <div class="flex gap-4 items-center">
                                <div  :class="index === 2 &&  '!bg-primary'" class="w-[84px] p-5 h-[84px] flex justify-center items-center rounded-full bg-brand-creme">
                                    <icon-visit-icon-two :class="index === 2 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-two>
                                </div> 
                                <p class="font-semibold text-base text-dark">Tarifs & billets</p>
                            </div>
                            <icon-arrow-down></icon-arrow-down>
                    </div>
                    <Tarifs :index="index"/>
                </li>
                <li class="py-4" @click="Items(3)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 3 &&  '!bg-primary'" class="w-[84px] p-6 h-[84px] flex justify-center items-center rounded-full bg-brand-creme">
                                <icon-visit-icon-three :class="index === 3 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-three>
                            </div> 
                            <p class="font-semibold text-base text-dark">Horaires</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div>
                    
                    <Horires :index="index"/> 
                 
                </li>
                <li class="py-4" @click="Items(4)">
                    <div class="flex justify-between items-center cursor-pointer  w-full">
                        <div class="flex gap-4 items-center">
                            <div  :class="index === 4 &&  '!bg-primary'" class="w-[84px] p-5 h-[84px] flex justify-center items-center rounded-full bg-brand-creme">
                                <icon-visit-icon-four :class="index === 4 ? 'fill-white' : 'fill-primary'"></icon-visit-icon-four>
                            </div> 
                            <p class="font-semibold text-base text-dark">Contact</p>
                        </div>
                        <icon-arrow-down></icon-arrow-down>
                    </div>
                       <Contact :index="index"/> 
                </li>
            </ul>
        </div>
    </div>
  </section>
</template>

<script>
import Acces from './Acces.vue'
import Tarifs from './Tarifs.vue'
import Horires from './Horires.vue'
import Contact from './Contact.vue'
export default {
    name: 'PrepareVisit',
    components: {
        Acces,
        Tarifs,
        Horires,
        Contact,
    },
    data() {
        return {
            index: 1,  
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