<template>
    <section class="px-4">
        <div class="max-w-screen-2xl mx-auto space-y-6 sm:space-y-8 ">
            <h2 class="text-[32px] lg:text-[46px] leading-[1.2] text-dark font-lancelot text-left ">Rechercher un document</h2>
            <div class="bg-brand-creme px-4 lg:px-32 py-8 sm:py-14 lg:py-24  space-y-6">
                <div class="flex gap-3 items-end sm:items-start">
                    <div class="flex gap-3 flex-col sm:flex-row sm:gap-0 w-full">
                        <input type="text" placeholder="Mot-clé" class="py-5 px-4 w-full border border-[#E1E1E1] bg-white text-dark placeholder:text-brand-gray-900 text-base ">
                        <select name="" id="" class="px-4 py-5 border  w-full border-[#E1E1E1] text-dark bg-white">
                            <option value="1">Tous les fonds d’archive</option>
                            <option value="1">Tous les fonds d’archive</option>
                            <option value="1">Tous les fonds d’archive</option>
                        </select>
                    </div>
                    <button type="button" class="px-4 py-3 shrink-0 bg-brand-red"><icon-search></icon-search></button>
                </div>
                <p class="text-base font-medium text-brand-gray-900 leading-[1.7] ">Le moteur de recherche fonctionne toujours à partir d'un fonds précis, mais affiche aussi les résultats trouvés dans d'autres fonds. 
Pour faire une recherche, choisissez d'abord un fonds d'archive.</p>
                <div class="sm:border-t border-[#B9B9B9] flex gap-3 items-center sm:pt-8">
                    <img src="~assets/images/document.png" alt="document.png">
                    <p class="text-base md:text-[19px] font-medium">Accéder à <a href="#" class="underline text-brand-red">l’arborescence des archives</a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Document'
}
</script>

<style>

</style>