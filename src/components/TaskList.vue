<template>
    <h1>Task list</h1>
    <ul>
        <li @click="this.$router.push(`/tasks/${task._id}`)"   
        v-for="task in tasks" 
        :key="task._id">
            {{task.title}}
        </li>
    </ul>
</template>
<script lang="ts">
import { Task } from '@/interfaces/task';
import { getTasks } from '@/services/TaskService'
import {defineComponent} from 'vue'

export default defineComponent({
    name:"TaskList",
    data(){
        return {
            tasks: [] as Task[]
        }
    },
    methods:{
        async loadTasks(){
            const res = await getTasks();
            this.tasks = res.data;
            console.log(res)
        }
    },
    mounted(){
        this.loadTasks()
    }
})

</script>