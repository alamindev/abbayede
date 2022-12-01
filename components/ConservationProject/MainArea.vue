<template>
   <section class="px-4 py-7 sm:py-10 md:py-14 lg:py-20 xl:py-24">
        <div class="max-w-screen-2xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-7">
                <div class="md:col-span-8 space-y-10 md:space-y-16  "> 
                    <div class="space-y-5 md:space-y-8">
                         <div class="space-y-5 md:hidden  pb-6">
                            <div class="flex py-5 px-4 bg-brand-creme gap-3">
                                <icon-arrow-right class="text-white stroke-black"></icon-arrow-right>
                                <p class="font-semibold text-base text-dark font-lancelot">Archives</p>
                            </div>
                            <div class="flex  md:my-14">
                                <input type="text" class="px-4 py-3 border border-[#E1E1E1] w-full placeholder:text-brand-gray-900" placeholder="Rechercher...">
                                <button type="button" class="px-3 py-3 bg-brand-red shrink-0"> <icon-search></icon-search></button>
                            </div>
                        </div>
                        <h2 class="text-[32px] inline md:text-[42px] leading-[1.2] font-lancelot text-dark  ">Des reliquaires complexe en quête d’origine</h2> 
                        <h5 class="text-brand-gray-900 text-xl font-medium sm:text-2xl !leading-[1.6] ">La fondation a pour but, entre autres, d’aider l’Abbaye dans son travail de conservation et de mise en valeur de son patrimoine physique constitué de pièces très anciennes, d’un site archéologique témoin de notre histoire, de deux lieux de recueillement et d’un carillon absolument unique en Suisse. </h5>
                        <p class="text-dark font-medium text-base lg:text-[19px] !leading-[1.7] ">Les recherches historiques anciennes n’ont pas permis de clarifier les circonstances de la création de la Grande châsse de saint Maurice. Selon la plupart des historiens, elle aurait été réalisée par l’abbé Pierre Maurice Odet, au XVIIe siècle. Mais on ne peut s’empêcher de remarquer le caractère composite du reliquaire. Avec ses reliefs de style roman sur les grandes faces et son pignon gothique orné d’une figure de la Vierge en trône, avec ses nombreuses plaquettes décorées de filigranes et de pierres précieuses et semiprécieuses, dont les montures renvoient aux XIe, XIIe et XIIIe siècles, la châsse résulte plus vraisemblablement d’un remontage de la fin du premier quart du XIIIe siècle. Cette époque correspond précisément à la révélation des reliques des martyrs thébains à Saint-Maurice, accompagnée de la fabrication de la châsse de l’abbé Nantelme.</p>
                    </div>
                    <div class="relative w-[320px] mx-auto lg:w-auto pb-10 ">
                        <img class="absolute top-0 left-0 hidden lg:block" src="~assets/images/double-border-two.svg" alt="double-border-two">
                        <img class="absolute top-0 left-0 lg:hidden" src="~assets/images/double-border-two-mobile.svg" alt="double-border-two">
                        <div class="relative w-[260px] lg:w-[550px] mx-auto space-y-3 xl:space-y-5 pt-12 lg:pt-4 xl:pt-7 2xl:pt-10">
                            <h2 class="text-center font-lancelot text-2xl xl:text-[42px] !leading-none text-dark">Soutenez le projet</h2>
                            <p class="text-base lg:text-[19px] text-center !leading-[1.7] font-medium text-dark">Soyez un artisan de ces restaurations en soutenant la Fondation de l’Abbaye de Saint-Maurice</p>
                            <div class="flex justify-center">
                                <nuxt-link  to="/" class="flex justify-start items-stretch group focus:none" >
                                    <svg width="23"  height="44" viewBox="0 0 23 44" class="-mr-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 42.5L1 36.6227L1 7.74258L22 1.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg>
                                    <span class="border-y-2    font-medium text-dark group-hover:text-white bg-transparent group-hover:bg-primary group-hover:border-primary border-primary rounded-sm my-[0.3px] flex justify-center items-center">
                                    Plus d’informations
                                    </span>
                                    <svg width="23" height="44" viewBox="0 0 23 44" class="-ml-[2px] stroke-primary group-hover:fill-primary group-hover:stroke-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L22 7.37732V36.2574L1 42.5"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </svg> 
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-5 md:space-y-8">
                        <h2 class="text-[17px] font-semibold text-dark md:text-lg lg:text-2xl !leading-[1.2]">Des traces historiques à conserver, des altérations à stabiliser et une splendeur à restaurer</h2>
                        <p class="text-base lg:text-[19px] font-medium text-dark !leading-[1.7]">
                            La maîtrise des pratiques anciennes d’orfèvrerie est nécessaire pour comprendre les étapes de fabrication de ces objets complexes. La lecture des traces de fabrication permet de dénouer les longs processus de mise en forme pour comprendre les altérations d’aujourd’hui.
                                <br><br>
                            La Grande châsse de saint Maurice, constituée essentiellement de tôles en argent repoussées et partiellement dorées, est aujourd’hui ternie. Le nettoyage de ce ternissement par des techniques électrochimiques innovantes, permet de redonner l’éclat de ce reliquaire sans modifier les traces historiques de fabrication et de vénération.
                            <br> <br>
                            La Châsse de l’abbé de Nantelme est recouverte de plaques de cuivre ciselées, argentées et partiellement dorées. Si, visuellement, le ternissement semble identique à celui de la Grande châsse, il se compose d’espèces chimiques différentes. Il conviendra donc de développer un protocole de traitement spécifique et durable. Un travail préliminaire sera réalisé par une étudiante de la HE-Arc CR en 2019 dans le cadre de son travail de fin d’étude de Master pour expérimenter les dernières techniques de nettoyage par des gels de produits complexants.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <figure>
                            <img src="~assets/images/brand-star.svg" alt="brand-star.svg">
                        </figure>
                    </div>
                    <div class="space-y-5 md:space-y-8">
                        <h2 class="text-[17px] font-semibold text-dark md:text-lg lg:text-2xl !leading-[1.2]">Un processus complet d’analyse matérielle</h2>
                        <p class="text-base lg:text-[19px] font-medium text-dark !leading-[1.7]">
                           Une partie des réponses aux questions se posant sur l’histoire des châsses se trouve à l’intérieur même des matériaux utilisés. L’étude détaillée des alliages métalliques nous permet de définir finement les procédés de fabrication (métallographie), la composition (spectrométrie de fluorescence des rayons X), voire la provenance du minerai (analyse des isotopes de plomb).
                            <br><br>
                            Une fois chaque objet démonté, on pourra réaliser des études dendrochronologiques permettant de déterminer la date d’abattage du mélèze constituant l’âme des reliquaires. L’étude du revers des plaques de métal, des masses de renfort, des décors niellés, des gemmes, des authentiques de reliques, sans oublier les ossements (paléopathologie et anthropologie) sont autant de sources d’information pouvant affiner nos connaissances.
                            <br><br>
                            L’utilisation de méthodes d’imagerie permettra de mieux comprendre l’état des assemblages et des brasures en étain (radiographie X) ou de révéler les détails de surface (imagerie par transformation de la réflectance), comme des traces de fabrication ou des micro-fissurations.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <figure>
                            <img src="~assets/images/brand-star.svg" alt="brand-star.svg">
                        </figure>
                    </div>
                    <div class="space-y-5 md:space-y-8">
                        <h2 class="text-[17px] font-semibold text-dark md:text-lg lg:text-2xl !leading-[1.2]">Un objet saint dans un environnement sain</h2>
                        <p class="text-base lg:text-[19px] font-medium text-dark !leading-[1.7]">
                           L’humidité relative, l’oxygène, la lumière, les polluants atmosphériques sont parmi les agents pouvant altérer les matériaux patrimoniaux. Le soufre de l’air, par exemple, est le premier responsable du ternissement de l’argent. Son captage est donc nécessaire à l’intérieur des vitrines pour maîtriser les risques de reternissement des pièces restaurées. Un sérieux travail en ce sens a déjà été entrepris par le récent dispositif de la salle du trésor et l’équipe en place, mais cela nécessite encore des améliorations et une vigilance constante.
                            <br><br>
                            A l’occasion des célébrations de la saint Maurice – chaque 22 septembre – les châsses du trésor sont portées en procession dans les rues de la vieille ville. Le poids cumulé des reliquaires et des dispositifs de portage rend cette opération pénible pour les chanoines et n’est pas sans risque. Il est envisagé de développer, en partenariat avec la HE-Arc Ingénierie, un nouveau système léger, ergonomique et sûr pour soulager les porteurs et prévenir un incident lourd de conséquence.
                        </p>
                    </div>
                </div>
                <div class="lg:col-span-3 md:col-span-4 space-y-7 md:space-y-0 lg:col-start-10">
                    <div class="flex md:hidden py-5 px-4 bg-brand-creme gap-3">
                        <icon-arrow-right class="text-white stroke-black"></icon-arrow-right>
                        <p class="font-semibold text-base text-dark font-lancelot">Archives</p>
                    </div>
                    <div class="hidden md:flex my-6 md:my-14">
                        <input type="text" class="px-4 py-3 border border-[#E1E1E1] w-full placeholder:text-brand-gray-900" placeholder="Rechercher...">
                        <button type="button" class="px-3 py-3 bg-brand-red shrink-0"> <icon-search></icon-search></button>
                    </div>
                    <div class="relative w-full md:pt-4 pb-8 md:pb-14">
                        <div class="flex mb-6 md:mb-10 gap-4">
                            <icon-unknown-one></icon-unknown-one>
                            <h3 class="text-xl lg:text-2xl font-dark font-lancelot">Derniers articles</h3>
                        </div>
                       <div class="grid gap-8">
                            <div class="">
                                <figure>
                                    <img src="/images/conservation/img-5.png" alt="img">
                                </figure>
                                <div class="py-1">
                                    <h4 class="text-base lg:text-[17px] font-semibold text-dark">Trois petits sous trouvés derrière une « plinthe »</h4>
                                    <p class="text-[15px] text-brand-gray-900 font-medium">26.08.2022</p>
                                </div>
                            </div>
                            <div class="">
                                <figure>
                                    <img src="/images/conservation/img-6.png" alt="img">
                                </figure>
                                <div class="py-1">
                                    <h4 class="text-base lg:text-[17px] font-semibold text-dark">Une châsse digitale à étudier depuis son canapé</h4>
                                    <p class="text-[15px] text-brand-gray-900 font-medium">26.08.2022</p>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div class="relative w-full hidden md:block">
                        <icon-unknown-one class="-ml-1"></icon-unknown-one>
                        <div class="border-l mt-2 border-brand-gray py-4 px-5">
                            <ul class="grid gap-5 lg:gap-10">
                                <li><a href="#" class="font-semibold text-dark text-base">Août 2022</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Juillet 2022</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Mars 2022</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Septembre 2021</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Avril 2021</a></li>
                                <li><a href="#" class="font-semibold text-dark text-base">Mars 2021</a></li>
                                <li class="flex justify-between items-center gap-2 text-primary font-semibold text-base"> 
                                    <span>Afficher plus</span>
                                    <icon-arrow-down></icon-arrow-down>
                                </li> 
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ConservationProjectMainArea'
}
</script>

<style>

</style>