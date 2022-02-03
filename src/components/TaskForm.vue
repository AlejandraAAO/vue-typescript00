<template>
  <div class="flex flex-row justify-center">
    <p class="text-2xl text-center w-1/2 bg-indigo-50 rounded-b-2xl">Task form</p>
  </div>
  
  <div class="p-4">
     <form @submit.prevent="saveTask" class="p-2 flex flex-col border border-dashed border-blue-200">
    <input v-model="task.title" type="text" placeholder="write a title" />
    <textarea v-model="task.description" rows="10" placeholder="write a desccription"></textarea>
    <button class="mt-1 border-t border-dashed border-blue-200 transition duration-500 ease-in-out hover:bg-indigo-200" >Save</button>
  </form>
  </div>
 
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