<script setup lang="ts">
import { ref } from 'vue'
import lsActions from '@/composables/localstorage'

const search = ref()

const searchNotes = () => {
    console.log(search.value.value)
}

const allNotes = lsActions.get.all().lsData
</script>

<template>
    <div
        class="absolute top-8 w-80 rounded-md border border-indigo-900 bg-slate-900 p-2 text-slate-400"
    >
        <input class="w-full bg-slate-800" ref="search" @input="searchNotes" />
        <div class="mt-2 flex flex-col gap-1">
            <div v-for="item in allNotes" :key="item" class="bg-slate-800 p-1.5">
                {{ JSON.parse(item).title }}
            </div>
        </div>
    </div>
</template>
