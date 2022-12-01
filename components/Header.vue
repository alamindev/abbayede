<template>
  <header class="w-full  pt-3.5 md:pt-8 pb-0 lg:py-8 bg-white lg:bg-transparent lg:bg-header lg:absolute top-0 lg:px-4 z-50 right-0 left-0" v-click-outside="closeMenu">
    <div class="max-w-screen-2xl mx-auto px-4 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-3 items-center lg:items-start relative">
            <button type="button" class="w-10 absolute right-0 lg:static" @click="Menu">
                <icon-menu></icon-menu>
            </button>
            <div class="flex justify-center">
                <nuxt-link to="/" class="w-auto">
                    <img
                    class="w-full  lg:block hidden"
                    src="~/assets/images/logo-white.svg"
                    alt="logo"
                    />
                    <img
                    class="w-full lg:hidden "
                    src="~/assets/images/logo.svg"
                    alt="logo"
                    />
                </nuxt-link>
            </div>
             <ul class="gap-5 items-center justify-end hidden lg:flex">
                <li> 
                    <nuxt-link  to="/" class="flex justify-center items-stretch group focus:none" >
                        <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        <span class="border-y-2 group-hover:border-white  font-semibold text-white group-hover:text-dark bg-transparent group-hover:bg-white border-primary rounded-sm my-[0.3px] flex justify-center items-center">Shop</span>
                        <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg> 
                    </nuxt-link>
                </li> 
                <li> 
                    <nuxt-link  to="/" class="flex justify-center items-stretch group focus:none" >
                        <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        <span class="border-y-2 group-hover:border-white  font-semibold text-white group-hover:text-dark bg-transparent group-hover:bg-white border-primary rounded-sm my-[0.3px] flex justify-center items-center">Votre visite</span>
                        <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg> 
                    </nuxt-link> 
                </li> 
            </ul>
        </div> 
    </div>
    <ul class="grid divide-x divide-brand-gray border-t border-brand-gray mt-4 grid-cols-2 lg:hidden">
        <li class="px-4 py-2.5 sm:py-3 flex justify-center items-center"><a href="#" class="text-base font-semibold text-dark">Votre visite</a></li>
        <li class="px-4 py-2.5 sm:py-3 flex justify-center items-center"><a href="#" class="text-base font-semibold text-dark">Shop</a></li>
    </ul>  
    <div  @mouseleave="rightMenuClose" class="relative z-[9999]"> 
        <div :class="menu ? 'left-0' : 'left-[-999px]'"  class="fixed transition-all duration-200 top-0 bottom-0 h-full overflow-y-auto w-full md:w-[380px] lg:w-[450px] xl:w-[620px] max-w-full bg-secondary">
            <div class="w-full">
                <div class="flex gap-5 items-center justify-center relative md:justify-between py-4 md:py-6 border-b border-white border-opacity-40 px-4 lg:px-24">
                    <figure>
                        <img
                            class="w-full  h-7 sm:h-auto"
                            src="~/assets/images/logo-white-sidebar.svg"
                            alt="logo"
                            />
                    </figure>
                    <button type="button" @click="closeMenu" class="absolute right-4">
                        <icon-times></icon-times>
                    </button>
                </div>
                <div class="py-8 lg:py-14 px-4 lg:px-14 xl:px-24">
                    <SidebarMenuHover :rightmenu="rightmenu" :menus="menus" @rightMenu="rightMenu"/>
                </div>
                <div class="py-8 lg:py-14 px-4 lg:px-14 xl:px-24 space-y-8">
                    <ul class="grid gap-2">
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Brasserie</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Collège</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Théatre du Martolet</a></li>
                    </ul>
                    <ul class="grid gap-2">
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Institutions & Fondation</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Fondation des archives</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Conservation et restauration</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Fondation de l’Abbaye</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Fondation du Théatre du Martolet</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Fondation Terre de Vérolliez</a></li>
                        <li><a href="#" class="inline-block text-[17px] leading-[1.7] font-medium hover:font-semibold transition-all  text-white hover:border-b border-white">Fondation Pro-Agauno</a></li>
                    </ul>
                    <div class="flex justify-start"> 
                        <nuxt-link   to="/" class="flex justify-center items-stretch group focus:none" >
                            <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-white group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                            <span class="border-y-2 group-hover:border-white  font-semibold text-white group-hover:text-dark bg-transparent group-hover:bg-white border-white rounded-sm my-[0.3px] flex justify-center items-center">Soutenir l'Abbaye</span>
                            <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-white group-hover:fill-white group-hover:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg> 
                        </nuxt-link>
                    </div>
                </div>
            </div>  
        </div>
        <div :class="rightmenu ? 'right-0 md:right-auto md:opacity-100 md:visible' : 'md:opacity-0 md:invisible -right-[999px] md:right-auto'" class="fixed  transition-all duration-200  md:left-[380px] lg:left-[450px] xl:left-[620px] top-20 md:top-0 bottom-0 h-full bg-secondary md:bg-white px-4 lg:px-8 py-6 md:py-12 overflow-y-auto w-full md:w-[350px] lg:w-[450px] max-w-full">
                <button type="button" @click="rightMenuClose" class="text-white text-base font-semibold mb-6 flex items-center gap-3">
                    <icon-arrow-right class="rotate-180 stroke-white"></icon-arrow-right>
                    <span>Retour</span>
                </button>
                <div class="grid gap-5 justify-center">
                    <div class="relative" v-for="menudata in rightMenuDatas" :key="menudata.id">
                        <a :href="menudata.link">
                            <img :src="menudata.img_url" :alt="menudata.title">
                            <span class="absolute bottom-0 left-0 py-5 pl-4">
                                <span class="text-white z-20 text-xl font-semibold">{{ menudata.title }}</span>
                            </span>
                        </a>
                    </div>
                </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'headers',
    data() {
        return {
            menu: false,
             menus: [
                {
                    id: 1,
                     title: 'Visite & Découverte',
                    active:false,
                    details: [
                        {
                            id: 1,
                            title: '1500 ans d’histoire',
                            img_url: '/images/sidebar/img-1.png',
                            link: '#'
                        },
                        {
                            id: 2,
                            title: 'Basilique',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        {
                            id: 3,
                            title: 'Orgues',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        {
                            id: 4,
                            title: 'Clocher et carillon',
                            img_url: '/images/sidebar/img-3.png',
                            link: '#'
                        },
                        {
                            id: 5,
                            title: 'Site archéologique',
                            img_url: '/images/sidebar/img-4.png',
                            link: '#'
                        },
                        {
                            id: 6,
                            title: 'Trésor',
                            img_url: '/images/sidebar/img-5.png',
                            link: '#'
                        },
                        {
                            id: 7,
                            title: 'Cloître',
                            img_url: '/images/sidebar/img-6.png',
                            link: '#'
                        },
                        {
                            id: 8,
                            title: 'Archives & Bibliothèque',
                            img_url: '/images/sidebar/img-7.png',
                            link: '#'
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Culture et Patrimoine',
                     active:false,
                    details: [
                        {
                            id: 3,
                            title: 'Orgues',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        {
                            id: 1,
                            title: '1500 ans d’histoire',
                            img_url: '/images/sidebar/img-1.png',
                            link: '#'
                          },
                         {
                            id: 5,
                            title: 'Site archéologique',
                            img_url: '/images/sidebar/img-4.png',
                            link: '#'
                        },
                        {
                            id: 2,
                            title: 'Basilique',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        
                        {
                            id: 4,
                            title: 'Clocher et carillon',
                            img_url: '/images/sidebar/img-3.png',
                            link: '#'
                          },
                        {
                            id: 8,
                            title: 'Archives & Bibliothèque',
                            img_url: '/images/sidebar/img-7.png',
                            link: '#'
                        },
                       
                        {
                            id: 6,
                            title: 'Trésor',
                            img_url: '/images/sidebar/img-5.png',
                            link: '#'
                        },
                        {
                            id: 7,
                            title: 'Cloître',
                            img_url: '/images/sidebar/img-6.png',
                            link: '#'
                        },
                        
                    ]
                },
                {
                    id: 3,
                    title: 'Communauté',
                     active:false,
                    details: [  
                        {
                            id: 8,
                            title: 'Archives & Bibliothèque',
                            img_url: '/images/sidebar/img-7.png',
                            link: '#'
                        },
                       
                        {
                            id: 6,
                            title: 'Trésor',
                            img_url: '/images/sidebar/img-5.png',
                            link: '#'
                        },
                        {
                            id: 7,
                            title: 'Cloître',
                            img_url: '/images/sidebar/img-6.png',
                            link: '#'
                        },
                        
                    ]
                },
                {
                    id: 4,
                    title: 'Pèlerinage',
                     active:false,
                    details: [
                        {
                            id: 3,
                            title: 'Orgues',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        {
                            id: 1,
                            title: '1500 ans d’histoire',
                            img_url: '/images/sidebar/img-1.png',
                            link: '#'
                          }, 
                        
                    ]
                },
                {
                    id: 5,
                    title: 'Agenda',
                     active:false,
                    details: [
                        {
                            id: 3,
                            title: 'Orgues',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        {
                            id: 1,
                            title: '1500 ans d’histoire',
                            img_url: '/images/sidebar/img-1.png',
                            link: '#'
                          }, 
                        
                        {
                            id: 4,
                            title: 'Clocher et carillon',
                            img_url: '/images/sidebar/img-3.png',
                            link: '#'
                          }, 
                        
                    ]
                },
                {
                    id: 6,
                    title: 'Actualités',
                     active:false,
                    details: [
                        {
                            id: 3,
                            title: 'Orgues',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        {
                            id: 1,
                            title: '1500 ans d’histoire',
                            img_url: '/images/sidebar/img-1.png',
                            link: '#'
                          },
                         {
                            id: 5,
                            title: 'Site archéologique',
                            img_url: '/images/sidebar/img-4.png',
                            link: '#'
                        },
                        {
                            id: 2,
                            title: 'Basilique',
                            img_url: '/images/sidebar/img-2.png',
                            link: '#'
                        },
                        
                        {
                            id: 4,
                            title: 'Clocher et carillon',
                            img_url: '/images/sidebar/img-3.png',
                            link: '#'
                          },
                        {
                            id: 8,
                            title: 'Archives & Bibliothèque',
                            img_url: '/images/sidebar/img-7.png',
                            link: '#'
                        },
                       
                        {
                            id: 6,
                            title: 'Trésor',
                            img_url: '/images/sidebar/img-5.png',
                            link: '#'
                        },
                        {
                            id: 7,
                            title: 'Cloître',
                            img_url: '/images/sidebar/img-6.png',
                            link: '#'
                        },
                        
                    ]
                },
            ],
            rightMenuDatas: [],
            rightmenu: false
        }
    },
    methods: {
        Menu() {
            this.menu =  !this.menu;
        },
        closeMenu() {
            this.menu = false
        },
        rightMenu(id) {   
                  
            let data = [...this.menus].map(el => el.id === id && el.details).filter(e => !!e )[0]; 
            if (data.length > 0) {
                this.rightMenuDatas = data;
                this.rightmenu = true;
                this.activated(id)
            } else {
                this.rightmenu = false;
                this.deactived() 
            }
        },
        rightMenuClose() {
           this.rightMenuDatas = [];
            this.rightmenu = false;
            this.deactived() 
        },
        activated(id) {
            this.menus = [...this.menus].map(item => { 
                return {
                    ...item,
                    active: item.id === id ? true : false
                } 
            }); 
        },
        deactived() {
             this.menus = [...this.menus].map(item => { 
                return {
                    ...item,
                    active: false
                } 
            }); 
        }
    }
}
</script>

<style>

</style>