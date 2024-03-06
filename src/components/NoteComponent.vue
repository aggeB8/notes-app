<script setup lang="ts">
import { marked } from 'marked'
import { reactive } from 'vue'
import { ref } from 'vue'
import lsActions from '../composables/localstorage'

const props = defineProps({
    editId: Number
})

const noteObj = reactive({
    title: '',
    inputRaw: '',
    inputHTML: ''
})

const rawInputElement = ref()

let currentNote: number

if (props.editId === undefined) {
    currentNote = lsActions.get.latestId() + 1
} else {
    currentNote = props.editId
    noteObj.title = lsActions.get.specific(currentNote).title
    noteObj.inputRaw = lsActions.get.specific(currentNote).inputRaw
}

const handleInput = async () => {
    const html = await marked.parse(noteObj.inputRaw, {
        gfm: true,
        breaks: true
    })
    noteObj.inputHTML = html

    lsActions.save(currentNote, noteObj.title, noteObj.inputRaw)
}

const menuActions = reactive({
    undo: () => {},
    pasteTable: () => {
        const [selectionStart, selectionEnd] = [
            rawInputElement.value.selectionStart,
            rawInputElement.value.selectionEnd
        ]
        rawInputElement.value.setRangeText(
            '|  |  |\n|--|--|\n|  |  |',
            selectionStart,
            selectionEnd,
            'select'
        )
    },
    previewMode: ref(false)
})
</script>

<template>
    <div class="flex h-full w-full flex-col gap-4 md:flex-row">
        <div
            class="flex h-full w-full flex-col overflow-hidden rounded-lg bg-slate-900 p-4 text-slate-400"
        >
            <div class="flex flex-row gap-4">
                <input
                    placeholder="New note"
                    v-model="noteObj.title"
                    @input="handleInput"
                    class="flex-1 bg-slate-900 text-slate-400 focus:outline-none"
                />
                <i @click="menuActions.undo" class="ri-arrow-go-back-line cursor-pointer" />
                <i @click="menuActions.pasteTable" class="ri-table-view cursor-pointer" />
                <i
                    @click="menuActions.previewMode = !menuActions.previewMode"
                    class="ri-play-line cursor-pointer"
                />
            </div>

            <div class="py-4">
                <div class="h-px bg-slate-700" />
            </div>

            <textarea
                ref="rawInputElement"
                @input="handleInput"
                v-model="noteObj.inputRaw"
                class="h-full w-full resize-none border-none bg-inherit font-mono text-sm outline-none"
            ></textarea>
        </div>
        <div
            class="flex h-full w-full overflow-hidden rounded-lg bg-slate-900 p-4 text-slate-400"
            v-if="menuActions.previewMode"
        >
            <div
                class="flex flex-col overflow-y-scroll break-words first:pt-0 [&>*]:py-0.5"
                v-html="noteObj.inputHTML"
            ></div>
        </div>
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
