<template>
    <div class="flex flex-col items-center justify-center text-slate-400">
        <p class="font-mono text-lg text-slate-500">an md-note app</p>
        <div class="grid grid-cols-[auto_auto] gap-3 p-3">
            <RouterLink to="/" class="justify-self-end leading-5">Create new note</RouterLink>
            <kbd
                class="flex size-5 items-center justify-center rounded-sm border border-solid border-slate-600 bg-slate-800 text-sm"
                >N</kbd
            >
            <RouterLink to="/" class="justify-self-end leading-5">View all notes</RouterLink>
            <kbd
                class="flex size-5 items-center justify-center rounded-sm border border-solid border-slate-600 bg-slate-800 text-sm"
                >V</kbd
            >
            <RouterLink to="/" class="justify-self-end leading-5">Search notes</RouterLink>
            <kbd
                class="flex size-5 items-center justify-center rounded-sm border border-solid border-slate-600 bg-slate-800 text-sm"
                >S</kbd
            >
        </div>
        <div></div>
    </div>
</template>
