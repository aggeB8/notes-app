<script setup lang="ts">
import Intro from '@/components/IntroComponent.vue'
import router from '@/router'
import { onMounted, onUnmounted } from 'vue'

const keyRoute = (keyPressEvent: KeyboardEvent) => {
    switch (keyPressEvent.key) {
        case 'n' || 'N': {
            router.push('new-note')
            break
        }
        case 'v' || 'V': {
            router.push('view-notes')
            break
        }
        case 's' || 'S': {
            router.push('search-notes')
            break
        }
    }
}

onMounted(() => {
    window.addEventListener('keypress', keyRoute)
})

onUnmounted(() => {
    window.removeEventListener('keypress', keyRoute)
})
</script>

<template>
    <Intro />
</template>
