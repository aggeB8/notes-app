<script setup lang="ts">
import { marked } from 'marked'
import { reactive } from 'vue'

interface Text {
    md: string | Promise<string>
    rawInput: string
}

const text: Text = reactive({
    rawInput: '',
    md: ''
})

const textToHTML = () => {
    const html = marked.parse(text.rawInput)
    text.md = html
}
</script>

<template>
    <div class="flex h-full w-full flex-col overflow-hidden rounded-lg bg-slate-900 p-4">
        <!-- <div class="flex flex-col text-slate-50" v-html="text.md"></div> -->
        <div class="h-10 w-full bg-slate-700">
            <input placeholder="New note (2)" />
            <button>Save</button>
        </div>

        <textarea
            @input="textToHTML"
            v-model="text.rawInput"
            class="mt-2 h-full w-full resize-none border-none bg-inherit text-slate-400 outline-none"
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
