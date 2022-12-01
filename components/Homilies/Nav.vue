<template>
  <section class="relative border-b border-brand-gray">
    <div class="overflow-x-auto nav">
        <div class="max-w-screen-2xl relative mx-auto">
            <ul class="flex gap-6 items-end pl-4 2xl:pl-0 ">
                <li><button type="button" class="relative py-5 whitespace-nowrap tab-active  text-base md:text-lg font-semibold text-dark">2022 (année C)</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap text-base md:text-lg font-semibold text-dark">2021 (année B)</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">2020 (année A)</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">2019 (année C)</button></li>
                <li><button type="button" class="relative py-5 whitespace-nowrap  text-base md:text-lg font-semibold text-dark">2018 (année B)</button></li> 
            </ul>
        </div>
    </div> 
    <div class="absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-[rgba(0,0,0,0)] to-white"></div>
  </section>
</template>

<script>
export default {
  name: 'HomiliesNav'
}
</script>

<style>

</style>