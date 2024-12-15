<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import type { Task } from "@/types/storeType.ts";

export default defineComponent({
  name: "HomeView",
  data: function () {
    return {
      tasks: [] as Task[],
      searchQuery: "",
    };
  },
  components: {},
  methods: {
    ...mapGetters(["getAllTasks"]),
    ...mapMutations(["deleteTask"]),
    onDeleteTask(taskId: number) {
      this.deleteTask(taskId);
      this.tasks = this.getAllTasks();
    },
    filteredTasks() {
      return this.tasks.filter((task) =>
        task.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    this.tasks = this.getAllTasks();
  },
});
</script>

<template>
  <div class="home">
    <!-- Поле пошуку -->
    <input
      v-model="searchQuery"
      placeholder="Search tasks..."
      class="search-input"
    />

    <!-- Список задач -->
    <div class="task-card" v-for="task in filteredTasks()" :key="task.id">
      <h4>
        <RouterLink :to="`/task/${task.id}`" class="task-link">
          {{ task.name }}
        </RouterLink>
      </h4>
      <button @click="onDeleteTask(task.id)" class="delete-button">
        Delete
      </button>
    </div>

    <!-- Повідомлення, якщо задач немає -->
    <div class="empty" v-if="filteredTasks().length === 0">
      Can't find tasks
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;
  border-radius: 8px;
  background-color: #1e1e1e; /* Темний фон */
  color: #f9f9f9; /* Світлий текст */
  padding: 20px;
  box-sizing: border-box;
}

/* Карточка задачі */
.task-card {
  background-color: #ffffff; /* Білий фон */
  color: #333333; /* Темний текст */
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-card:hover {
  transform: translateY(-5px); /* Легкий підйом */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Посилання на задачу */
.task-link {
  text-decoration: none;
  color: #28a745; /* Зелений текст */
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.task-link:hover {
  color: #1e7e34; /* Темніший зелений */
}

/* Кнопка видалення */
.delete-button {
  background-color: #dc3545; /* Червона кнопка */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c82333; /* Темніший червоний */
}

.empty {
  font-size: 18px;
  color: #cf1f21; /* Червоний текст */
  margin-top: 20px;
  text-align: center;
}
.search-input {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 500px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #28a745; /* Зелений акцент */
}
</style>
