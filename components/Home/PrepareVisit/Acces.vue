<template>
  <div v-if="index === 1">
        <img class="w-full  bottom-0 left-0 absolute h-full lg:block hidden"  src="~/assets/images/double-border.svg" alt="double border">
        <div class="relative md:px-14 pb-6 lg:pb-14 pt-6 lg:pt-0">
            <div class="w-full flex justify-center items-center lg:-mt-32 pb-4">
                <img class=""  src="~/assets/images/captura-de-pantalla.png" alt="captura-de-pantalla">
            </div>
            <div class="space-y-2 lg:max-h-[200px] xl:max-h-[100%] overflow-y-auto ">
                <div class="flex items-center gap-1">
                    <h4 class="text-base font-semibold text-brand-red">Découvrir</h4>
                    <icon-verify></icon-verify>
                </div>
                <h2 class="text-[32px] xl:text-[42px] leading-[46px] 2xl:text-[46px] 2xl:leading-[52px] text-dark font-lancelot pb-1.5">Découvrez le trésor de l’Abbaye</h2>
                <p class="text-[17px] font-medium text-dark leading-[28px]">L'Abbaye a ouvert au public un nouveau parcours de visite modernisé. Aujourd'hui, le visiteur peut découvrir la basilique, le site archéologique des anciennes églises et les joyaux de la nouvelle salle du trésor.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Acces',
    props: ['index']
}
</script>

<style>

</style>