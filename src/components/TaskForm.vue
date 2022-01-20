<template>
  <h1>task form</h1>
  <form @submit.prevent="saveTask">
    <input v-model="task.title" type="text" placeholder="write a title" />
    <textarea v-model="task.description" rows="10" placeholder="write a desccription"></textarea>
    <button>Save</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/task"
import {createTask} from "@/services/TaskService"

export default defineComponent({
  data() {
    return {
      task: {} as Task
    };
  },
  methods:{
    async saveTask(){
      const res = await createTask(this.task);
      this.$router.push({name:'tasks'})

    }
  }
});
</script>