<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
            <div class="xl:col-start-2  xl:col-span-10 space-y-6">
                 <h2 class="text-[32px] md:text-[42px] leading-[1.2]  max-w-[400px] md:max-w-none mx-auto text-dark font-lancelot text-left">Communauté</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[400px] md:max-w-none mx-auto">
                    <div class="relative"> 
                        <figure class="md:aspect-w-8 md:aspect-h-12 aspect-w-16 aspect-h-7">
                            <img src="/images/comunity/img-1.png" alt="comunity image" class="md:block hidden w-full h-full object-center object-cover" />
                            <img src="/images/comunity/img-1-mobile.png" alt="comunity image" class="md:hidden w-full h-full object-center object-cover" />
                        </figure>
                        <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                            <h3 class="text-3xl font-semibold text-center text-white">Prière</h3>
                        </div>
                    </div>
                    <div class="relative"> 
                        <figure class="md:aspect-w-8 md:aspect-h-12 aspect-w-16 aspect-h-7">
                             <img src="/images/comunity/img-2.png" alt="comunity image" class="md:block hidden w-full h-full object-center object-cover" />
                            <img src="/images/comunity/img-2-mobile.png" alt="comunity image" class="md:hidden w-full h-full object-center object-cover" />
                        </figure>
                        <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                            <h3 class="text-3xl font-semibold text-center text-white">Pèlerinage</h3>
                        </div>
                    </div>
                    <div class="relative"> 
                        <figure class="md:aspect-w-8 md:aspect-h-12 aspect-w-16 aspect-h-7">
                              <img src="/images/comunity/img-3.png" alt="comunity image" class="md:block hidden w-full h-full object-center object-cover" />
                            <img src="/images/comunity/img-3-mobile.png" alt="comunity image" class="md:hidden w-full h-full object-center object-cover" />
                        </figure>
                        <div class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                            <h3 class="text-3xl font-semibold text-center text-white">Communauté</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Community'
}
</script>

<style>

</style>