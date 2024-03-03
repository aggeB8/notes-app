<template>
    <div class="flex flex-col items-center justify-center text-slate-400">
        <p class="font-mono text-lg text-slate-500">an md-note app</p>
        <div class="grid grid-cols-[auto_auto] gap-3 p-3">
            <RouterLink to="/new-note" class="justify-self-end">Create new note</RouterLink>

            <div class="flex flex-row justify-center gap-2">
                <kbd
                    class="flex items-center justify-center rounded-sm border border-solid border-slate-600 bg-slate-800 px-1.5 text-sm"
                    >CTRL</kbd
                >
                <p>+</p>
                <kbd
                    class="flex items-center justify-center rounded-sm border border-solid border-slate-600 bg-slate-800 px-1.5 text-sm"
                    >N</kbd
                >
            </div>

            <RouterLink to="/new-note" class="justify-self-end">View notes</RouterLink>
            <div class="flex flex-row justify-center gap-2">
                <kbd
                    class="flex items-center justify-center rounded-sm border border-solid border-slate-600 bg-slate-800 px-1.5 text-sm"
                    >CTRL</kbd
                >
                <p>+</p>
                <kbd
                    class="flex items-center justify-center rounded-sm border border-solid border-slate-600 bg-slate-800 px-1.5 text-sm"
                    >V</kbd
                >
            </div>
        </div>
        <div></div>
    </div>
</template>
