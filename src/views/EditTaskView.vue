<script lang="ts">
import { defineComponent } from "vue";
import type { Task } from "@/types/storeType.ts";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "EditTaskView",
  data() {
    return {
      taskName: "",
      taskDescription: "",
    };
  },
  computed: {
    ...mapGetters(["getTaskById"]),
    task() {
      return this.getTaskById(Number(this.$route.params.id));
    },
  },
  methods: {
    ...mapMutations(["updateTask"]),
    onSubmit() {
      const updatedTask: Task = {
        id: this.task.id,
        name: this.taskName.trim(),
        description: this.taskDescription.trim(),
      };
      this.updateTask(updatedTask); // Оновлюємо задачу
      this.$router.push(`/task/${this.task.id}`); // Повертаємося до перегляду задачі
    },
  },
  mounted() {
    if (this.task) {
      this.taskName = this.task.name;
      this.taskDescription = this.task.description;
    }
  },
});
</script>

<template>
  <div class="form-container">
    <h1>Edit Task</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <input v-model="taskName" type="text" placeholder="Task Name" />
      </div>
      <div>
        <textarea
          v-model="taskDescription"
          placeholder="Task Description"
        ></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>
<style scoped>
/* Контейнер форми */
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 500px;
  background-color: #1e1e1e; /* Темний фон */
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin: 50px auto;
}

/* Заголовок */
.task_title {
  margin: 0 0 20px;
  font-size: 26px;
  color: #28a745; /* Зелений акцент */
}

/* Елементи форми */
.form-element {
  margin-bottom: 15px;
  width: 100%;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #444; /* Темний контур */
  border-radius: 8px;
  outline: none;
  background-color: #2c2c2c; /* Темно-сірий фон */
  color: #f9f9f9; /* Світлий текст */
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
textarea:focus {
  border-color: #28a745; /* Зелений контур при фокусі */
}

/* Текстова область */
textarea {
  resize: vertical;
  min-height: 100px;
}

/* Кнопка збереження */
button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: #fff;
  background-color: #28a745; /* Основний зелений */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1e7e34; /* Темніший зелений */
}

button:disabled {
  background-color: #444; /* Деактивована кнопка */
  cursor: not-allowed;
}
</style>
