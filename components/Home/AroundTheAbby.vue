<template>
  <section class="py-8 md:py-14 lg:py-24 px-4 bg-brand-creme">
    <div class="max-w-screen-2xl mx-auto space-y-6">
        <h2 class="text-[32px] md:text-[42px] leading-[1.2]  text-dark font-lancelot text-center md:text-left">Autour de l'Abbaye de St-Maurice</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="relative"> 
                <figure class="md:aspect-w-8 md:aspect-h-12 aspect-w-16 aspect-h-6">
                    <img src="/images/aroundtheabby/img-1.png" alt="aroundtheabby image" class="md:block hidden w-full h-full object-center object-cover" />
                    <img src="/images/aroundtheabby/img-1-mobile.png" alt="aroundtheabby image" class="md:hidden w-full h-full object-center object-cover" />
                </figure>
                <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white md:px-8 xl:px-14">Collège de l’Abbaye</h3>
                </div>
            </div>
            <div class="relative"> 
                <figure class="md:aspect-w-8 md:aspect-h-12 aspect-w-16 aspect-h-6">
                    <img src="/images/aroundtheabby/img-2.png" alt="aroundtheabby image" class="md:block hidden w-full h-full object-center object-cover" />
                    <img src="/images/aroundtheabby/img-2-mobile.png" alt="aroundtheabby image" class="md:hidden w-full h-full object-center object-cover" />
                </figure>
                <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white md:px-8 xl:px-14">Brasserie de l’Abbaye</h3>
                </div>
            </div>
            <div class="relative"> 
                <figure class="md:aspect-w-8 md:aspect-h-12 aspect-w-16 aspect-h-6">
                    <img src="/images/aroundtheabby/img-3.png" alt="aroundtheabby image" class="md:block hidden w-full h-full object-center object-cover" />
                    <img src="/images/aroundtheabby/img-3-mobile.png" alt="aroundtheabby image" class="md:hidden w-full h-full object-center object-cover" />
                </figure>
                <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white md:px-8 xl:px-14">Ressources documentaires Amatus</h3>
                </div>
            </div>
            <div class="relative"> 
                <figure class="md:aspect-w-8 md:aspect-h-12 aspect-w-16 aspect-h-6">
                    <img src="/images/aroundtheabby/img-4.png" alt="aroundtheabby image" class="md:block hidden w-full h-full object-center object-cover" />
                    <img src="/images/aroundtheabby/img-4-mobile.png" alt="aroundtheabby image" class="md:hidden w-full h-full object-center object-cover" />
                </figure>
                <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white md:px-8 xl:px-14">Théâtre du Martolet</h3>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "AroundTheAbby"
}
</script>

<style>

</style>