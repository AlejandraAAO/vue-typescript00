<template>
  <div class="flex flex-row justify-center">
    <p class="text-2xl text-center w-1/2 bg-indigo-50 rounded-b-2xl">Task list</p>
  </div>

<div class="p-4 ">
<ul class="pt-1 divide-y border border-dashed divide-blue-200 divide-dashed border-blue-200 ">
    <li
    class="p-1"
      @click="this.$router.push(`/tasks/${task._id}`)"
      v-for="task in tasks"
      :key="task._id"
    >
      {{ task.title }}
    </li>
  </ul>
</div>

  
</template>
<script lang="ts">
import { Task } from "@/interfaces/task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskList",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data;
      console.log(res);
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>