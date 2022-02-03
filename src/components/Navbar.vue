<template>
    <nav class="w-screen fixed bottom-0">
        <ul class="py-1 flex divide-x-2 divide-gray-800 divide-dashed">
            <li class="flex-1 p-1">
                <router-link to="/" v-slot="{href,navigate}">
                <button class="w-full border-2 rounded-2xl border-blue-300 " :href="href" @click="navigate">
                    Tasks
                </button>
                </router-link>
            </li>
            <li class="flex-1 p-1">
                <router-link to="/tasks/new" v-slot="{href,navigate}">
  
                <button class="w-full border-2 rounded-2xl border-blue-300 bg-blue-50" :href="href" @click="navigate">
                    Create task
                </button>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: "Navbar"
})
</script>