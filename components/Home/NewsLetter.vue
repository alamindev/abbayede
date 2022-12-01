<template>
  <section class="px-4 py-8 md:py-14 lg:py-24 bg-brand-red">
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-7">
            <div class="md:col-start-3 md:col-span-8 space-y-4 sm:space-y-5">
                <h2 class="text-[32px] sm:pb-3 md:text-[46px] leading-[1.2] text-white font-lancelot text-center ">Abonnez-vous à notre newsletter !</h2>
                <p class="lg:px-20 text-base lg:text-[19px] lg:!leading-[1.6] text-white text-center">Restez au courant de l’actualité et des événements de notre Abbaye grâce à notre newsletter mensuelle.</p>
                <div class="max-w-[350px] flex  mx-auto">
                    <input type="text" class="text-lg font-medium w-full placeholder:text-white px-4 py-3 bg-brand-gray bg-opacity-20 text-white" placeholder="Addresse e-mail" >
                    <button type="submit" class="shrink-0 font-semibold text-base px-6 sm:px-8 py-2 bg-white text-brand-red "> <icon-right class="sm:hidden"></icon-right> <span class="sm:block hidden">S’inscrire</span></button>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'newsLetter'
}
</script>

<style>

</style>