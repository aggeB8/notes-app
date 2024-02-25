<script setup lang="ts">
import { reactive } from 'vue'

const fog = reactive({
    top: false,
    bottom: false
})

const revealFog = (scrollEvent: any) => {
    const scrollTopRem = scrollEvent.target.scrollTop / 16
    const scrollHeightRem = scrollEvent.target.scrollHeight / 16
    const clientHeightRem = scrollEvent.target.clientHeight / 16

    const revealAtRem = 5

    if (scrollTopRem < revealAtRem) {
        fog.top = false
    } else if (scrollHeightRem - scrollTopRem - clientHeightRem < revealAtRem) {
        fog.bottom = false
    } else {
        fog.top = true
        fog.bottom = true
    }
}
</script>

<template>
    <TransitionGroup>
        <div
            v-if="fog.top"
            class="fixed h-20 w-[calc(100%-4rem)] flex-shrink-0 bg-slate-900 gradient-mask-b-0"
        />

        <div
            v-if="fog.bottom"
            class="fixed bottom-8 h-20 w-[calc(100%-4rem)] flex-shrink-0 bg-slate-900 gradient-mask-t-0"
        />
    </TransitionGroup>
</template>
