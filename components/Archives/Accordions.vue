<template>
    <section class="px-4 py-10 sm:py-24">
        <div class="max-w-screen-2xl mx-auto space-y-6 sm:space-y-8 ">
            <h2 class="text-[32px] lg:text-[46px] leading-[1.2] text-dark font-lancelot text-left ">Fonds d’archive représentés</h2>
            
            <div class="grid gap-4">
            <dl
                class="grid gap-4"
                role="presentation"
                v-for="item in accordions"
                :item="item"
                :key="item.id"
            >
                <div
                :id="item.id"
                class="bg-brand-creme"
                :class="{ 'is-active': item.active }"
                >
                <dt
                    class="px-6 w-full" 
                >
                    <button
                    @click="toggle"
                    class="flex justify-between items-center w-full py-6 gap-12"
                    >
                    <span class="text-base font-semibold md:font-medium md:text-[23px] text-dark text-left">
                        {{ item.title }}
                    </span>
                    <icon-arrow-down
                        class="rotate-180"
                        :class="item.active && 'rotate-0'"
                    ></icon-arrow-down>
                    </button>
                </dt>
                <transition
                    name="accordion-item"
                    @enter="startTransition"
                    @after-enter="endTransition"
                    @before-leave="startTransition"
                    @after-leave="endTransition"
                >
                    <dd v-if="item.active" class="px-6 py-5 overflow-hidden">
                    <article
                        v-html="item.details"
                        class="
                        proze
                        md:prose-h2:text-[20px]
                        prose-h2:text-[18px]
                        prose-h2:font-semibold
                        md:prose-p:text-[19px]
                        prose-p:text-base
                        prose-h2:text-dark prose-h2:pb-3
                        prose-p:text-brand-gray-900
                        prose-a:underline
                        prose-p:pb-3
                        "
                    ></article>
                    </dd>
                </transition>
                </div>
            </dl>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
    name: 'Holdings',
    data() {
        return {
             accordions: [
                {
                id: 1,
                active: false,
                title: "Archives ecclésiastiques",
                details: `
                        <h2>Vous souhaitez vous inscrire ou inscrire une personne de votre entourage à la Résidence Plantzette?</h2>
                        <p>Merci de compléter le formulaire adhoc disponible ci-dessous.</p> 
                        <p>Pour une <a href="#">place en court séjour</a> , le formulaire d'inscription est différent et disponible également ci-dessous.</p> 
                        <p>Pour toute information nécessaire, merci d'appeler la Résidence Plantzette au <a href="#">027 452 08 60.</a></p> 
                        `,
                },
                {
                id: 2,
                active: false,
                title: "Archives de paroisses dépendant de l'Abbaye de Saint-Maurice",
                details: `
                <h2>Vous souhaitez vous inscrire ou inscrire une personne de votre entourage à la Résidence Plantzette?</h2>
                        <p>Merci de compléter le formulaire adhoc disponible ci-dessous.</p> 
                        <p>Pour une <a href="#">place en court séjour</a> , le formulaire d'inscription est différent et disponible également ci-dessous.</p> 
                        <p>Pour toute information nécessaire, merci d'appeler la Résidence Plantzette au <a href="#">027 452 08 60.</a></p> 
                        `,
                },
                {
                id: 3,
                active: false,
                title: "Archives de collectivités",
                details: `
                <h2>Vous souhaitez vous inscrire ou inscrire une personne de votre entourage à la Résidence Plantzette?</h2>
                        <p>Merci de compléter le formulaire adhoc disponible ci-dessous.</p> 
                        <p>Pour une <a href="#">place en court séjour</a> , le formulaire d'inscription est différent et disponible également ci-dessous.</p> 
                        <p>Pour toute information nécessaire, merci d'appeler la Résidence Plantzette au <a href="#">027 452 08 60.</a></p> 
                        `,
                },
                {
                id: 4,
                active: false,
                title: "Archives de familles",
                details: `
                <h2>Vous souhaitez vous inscrire ou inscrire une personne de votre entourage à la Résidence Plantzette?</h2>
                        <p>Merci de compléter le formulaire adhoc disponible ci-dessous.</p> 
                        <p>Pour une <a href="#">place en court séjour</a> , le formulaire d'inscription est différent et disponible également ci-dessous.</p> 
                        <p>Pour toute information nécessaire, merci d'appeler la Résidence Plantzette au <a href="#">027 452 08 60.</a></p> 
                        `,
                },
                {
                id: 5,
                active: false,
                title: "Archives historiques",
                details: `
                <h2>Vous souhaitez vous inscrire ou inscrire une personne de votre entourage à la Résidence Plantzette?</h2>
                        <p>Merci de compléter le formulaire adhoc disponible ci-dessous.</p> 
                        <p>Pour une <a href="#">place en court séjour</a> , le formulaire d'inscription est différent et disponible également ci-dessous.</p> 
                        <p>Pour toute information nécessaire, merci d'appeler la Résidence Plantzette au <a href="#">027 452 08 60.</a></p> 
                        `,
                }, 
            ],
        }
    },
  methods: {
    toggle(event) {
      this.accordions.forEach((item, index) => {
        if (item.id === +event.currentTarget.parentElement.parentElement.id)
          item.active = !item.active;
        else item.active = false;
      });
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    },
  },
};
</script>

<style>

</style>