<template>
    <section class="px-4 py-10 sm:pt-16 sm:pb-24">
        <div class="max-w-screen-2xl mx-auto ">
            <div class="w-[1110px] max-w-full mx-auto space-y-6 sm:space-y-8 "> 
                    <h2 class="text-[32px] lg:text-[46px] leading-[1.2] text-dark font-lancelot text-left ">Téléchargement</h2> 
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
                    <span class="flex gap-4 items-center">
                    <span class="flex justify-center items-center w-[50px] h-[50px] bg-white rounded-full"><icon-file></icon-file></span>
                    <span class="text-base font-semibold md:font-medium md:text-[23px] text-dark text-left">
                        {{ item.title }}
                    </span></span>
                    <icon-arrow-down
                        class="rotate-180"
                        :class="!item.active && 'rotate-0'"
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
                         download information
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