<script setup lang="ts">
import { ref } from 'vue'
import lsActions from '@/composables/localstorage'

const search = ref()

const searchNotes = () => {
    console.log(search.value.value)
}
</script>

<template>
    <div
        class="absolute top-8 w-80 rounded-md border border-indigo-950 bg-slate-900 p-2 text-slate-400"
    >
        <input
            class="w-full rounded-sm border border-indigo-900 bg-slate-800 focus:outline-none"
            ref="search"
            @input="searchNotes"
        />
        <div class="mt-2 flex max-h-44 flex-col overflow-auto">
            <div v-for="note in lsActions.get.all().lsData" :key="note" class="p-1.5">
                {{ JSON.parse(note).title }}
            </div>
        </div>
    </div>
</template>
