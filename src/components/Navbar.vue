<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Tasks</router-link>
            </li>
            <li>
                <router-link to="/tasks/new">Create task</router-link>
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