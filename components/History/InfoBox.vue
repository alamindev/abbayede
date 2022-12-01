<template>
    <section class="px-4 pt-8 pb-14">
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-12 gap-7">
            <div class="lg:col-start-2 col-span-12 lg:col-span-10">
                <div class="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-7 grid">
                    <div class="px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full w-[115px] h-[115px] shrink-0 flex justify-center items-center p-4">
                            <icon-allenmagne></icon-allenmagne>
                        </div>
                        <div class="flex justify-center flex-col space-y-2"> 
                            <p class="text-lg font-medium text-dark text-center">Allemagne</p>
                        </div>
                    </div>
                    <div class="px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full w-[115px] h-[115px] shrink-0 flex justify-center items-center p-4">
                            <icon-france></icon-france>
                        </div>
                        <div class="flex justify-center flex-col space-y-2"> 
                            <p class="text-lg font-medium text-dark text-center">France</p>
                        </div>
                    </div>
                    <div class="px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full w-[115px] h-[115px] shrink-0 flex justify-center items-center p-4">
                            <icon-italie></icon-italie>
                        </div>
                        <div class="flex justify-center flex-col space-y-2"> 
                            <p class="text-lg font-medium text-dark text-center">Italie</p>
                        </div>
                    </div>
                    <div class="px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full w-[115px] h-[115px] shrink-0 flex justify-center items-center p-4">
                            <icon-suisse></icon-suisse>
                        </div>
                        <div class="flex justify-center flex-col space-y-2"> 
                            <p class="text-lg font-medium text-dark text-center">Suisse</p>
                        </div>
                    </div>
                    <div class="px-6 py-6 lg:py-10 flex flex-col justify-center rounded-md items-center space-y-8 bg-brand-gray-800 bg-opacity-50">
                        <div class="bg-white rounded-full w-[115px] h-[115px] shrink-0 flex justify-center items-center p-4">
                            <icon-autres></icon-autres>
                        </div>
                        <div class="flex justify-center flex-col space-y-2"> 
                            <p class="text-lg font-medium text-dark text-center">Autres pays</p>
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
 name: 'AgendaDetailsInfo'
}
</script>

<style>

</style>