<script setup lang="ts">
import { marked } from 'marked'
import { reactive } from 'vue'

const fog = reactive({
    top: false,
    bottom: false
})

const text = reactive({
    md: ''
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
    <div class="flex h-full w-full flex-col overflow-hidden rounded-lg bg-slate-900 p-4">
        <div class="flex flex-col text-slate-50" v-html="text.md"></div>
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

        <textarea
            @scroll="revealFog"
            @input="(event) => (text.md = marked.parse(event.target.value))"
            class="h-full w-full resize-none border-none bg-inherit text-slate-400 outline-none"
        ></textarea>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
