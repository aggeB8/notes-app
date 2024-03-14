<script setup lang="ts">
import { onMounted, ref } from 'vue'
import lsActions from '@/composables/localstorage'

const carouselContainer = ref()
const carouselAnimClass = ref()
const carouselDupe = ref(1)

onMounted(() => {
    if (carouselContainer.value.scrollWidth > window.innerWidth) {
        carouselAnimClass.value = 'animate'
        carouselDupe.value = 2
    } else {
        carouselAnimClass.value = ''
        carouselDupe.value = 1
    }
})
</script>

<template>
    <div
        ref="carouselContainer"
        class="flex h-40 max-w-full justify-center overflow-hidden bg-slate-800"
    >
        <div v-for="i in carouselDupe" :key="i" ref="carousel" class="flex">
            <div
                v-for="i in 4"
                :key="i"
                :class="carouselAnimClass"
                class="h-full w-40 flex-shrink-0 px-2"
            >
                <div class="h-full w-full bg-slate-400"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate {
    animation: marquee 1s infinite linear;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}
</style>
