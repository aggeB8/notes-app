<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import SearchComponent from '@/components/SearchComponent.vue'
import router from './router'

const { control, n, v } = useMagicKeys()

watchEffect(() => {
    if (control.value && n.value) {
        router.push('/new-note')
    }
    if (control.value && v.value) {
        searching.value = !searching.value
    }
})

const searching = ref(false)
</script>

<template>
    <SearchComponent v-if="searching" />
    <RouterView />
</template>
