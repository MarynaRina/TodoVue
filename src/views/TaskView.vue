<script lang="ts">
import { defineComponent } from "vue";
import type { Task } from "@/types/storeType.ts";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "TaskView",
  data() {
    return {
      task: null as Task | null,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(["getTaskById"]),
  },
  mounted() {
    const task: Task | null = this.getTaskById(Number(this.id));
    if (task) {
      this.task = task;
    } else {
      console.error(`Task with ID ${this.id} not found.`);
    }
  },
  methods: {
    editTask() {
      this.$router.push(`/edit-task/${this.id}`); // Перенаправлення на сторінку редагування
    },
  },
});
</script>

<template>
  <div>
    <!-- Відображення завдання -->
    <div class="task" v-if="task">
      <h1 class="task_name">{{ task.name }}</h1>
      <div class="task_description">{{ task.description }}</div>
      <button @click="editTask" class="edit-button">Edit</button>
    </div>

    <!-- Помилка, якщо завдання не знайдено -->
    <div class="task_error" v-else>
      <p>Task not found</p>
    </div>
  </div>
</template>

<style scoped>
/* Загальний стиль для завдання */
.task {
  background-color: #ffffff;
  color: #333333; /* Темний текст */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Тінь для "плаваючого" вигляду */
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
}

/* Заголовок задачі */
.task_name {
  font-size: 24px;
  font-weight: bold;
  color: #28a745; /* Зелений акцент */
  margin-bottom: 10px;
}

/* Опис задачі */
.task_description {
  font-size: 16px;
  line-height: 1.5;
  color: #555555;
}

/* Стиль для кнопки редагування */
.edit-button {
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #28a745; /* Синій фон */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #246834; /* Темніший синій */
}

/* Стиль для помилки */
.task_error {
  text-align: center;
  font-size: 18px;
  color: #ff4d4f; /* Червоний текст для помилки */
  padding: 20px;
  margin: 20px auto;
  background-color: #ffeaea; /* Світлий фон для помилки */
  border-radius: 10px;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Адаптивність */
@media (max-width: 768px) {
  .task,
  .task_error {
    padding: 15px;
    max-width: 90%;
  }

  .task_name {
    font-size: 20px;
  }

  .task_description {
    font-size: 14px;
  }

  .task_error {
    font-size: 16px;
  }
}
</style>
