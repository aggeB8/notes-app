<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const carouselContainer = ref()
const carouselAnimClass = ref()
const carouselDupe = ref(2)

const switchCarousel = () => {
    switch (carouselDupe.value) {
        case 1: {
            console.log('1', carouselContainer.value.scrollWidth)
            if (carouselContainer.value.scrollWidth > window.innerWidth) {
                carouselAnimClass.value = 'animate'
                carouselDupe.value = 2
            }
            break
        }
        case 2: {
            const actualCarouselWidth = carouselContainer.value.scrollWidth / 2
            if (actualCarouselWidth < window.innerWidth) {
                console.log('2', carouselContainer.value.scrollWidth / 2, window.innerWidth)

                carouselAnimClass.value = ''
                carouselDupe.value = 1
            }
            break
        }
    }
}

onMounted(() => {
    switchCarousel()
    window.addEventListener('resize', switchCarousel)
})

onUnmounted(() => {
    window.removeEventListener('resize', switchCarousel)
})
</script>

<template>
    <div class="flex h-40 max-w-full justify-center bg-slate-800">
        <div ref="carouselContainer" class="flex">
            <div v-for="i in carouselDupe" :key="i" class="flex flex-row flex-nowrap">
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
