<template>
     <ul class="grid gap-1.5 md:gap-4 lg:gap-7">
        <li class="flex justify-between cursor-pointer items-center w-full gap-4" v-for="menu in menus" :key="menu.id" @mouseenter="rightMenu(menu.id)">
            <p class="font-lancelot text-white text-2xl xl:text-[32px] xl:!leading-[1.2] py-2 hover:border-b border-white" :class="menu.active && 'border-b'">{{ menu.title }} </p>
            <icon-arrow-right class="shrink-0 stroke-white"></icon-arrow-right>
        </li> 
    </ul>
</template>

<script>
export default {
    name: "MenuItem",
    props: ['menus','rightmenu'],
    methods: {
        rightMenu(id) {
            this.$emit('rightMenu', id)
        }, 
    } 
}
</script>

<style>

</style>