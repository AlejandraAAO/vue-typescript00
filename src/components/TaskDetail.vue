<template>
  <h1>Task detail</h1>
  <form @submit.prevent="handleUpdate">
    <input type="text"  v-model="currentTask.title" />
    <textarea rows="10" v-model="currentTask.description"></textarea>
    <button>Update</button>
  </form>
  <button @click="handleDelete">Delete</button>
</template>
<script lang="ts">
import { Task } from "@/interfaces/task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "task-deatil",
  data() {
    return {
      currentTask: {} as Task,
    };  
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
    
    },
    async handleUpdate() {
      if(typeof this.$route.params.id === "string"){
          updateTask(this.$route.params.id, this.currentTask);
          this.$router.push('/')
      }
    
    },
    async handleDelete() {
      if(typeof this.$route.params.id === "string"){
        const res =   deleteTask(this.$route.params.id);
        this.$router.push('/')
      }
    
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>