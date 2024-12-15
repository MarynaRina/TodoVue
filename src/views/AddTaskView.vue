<template>
  <div class="form-container">
    <h1 class="task_title">Create task</h1>
    <form>
      <div class="form-element">
        <input v-model="taskName" type="text" placeholder="Task's name" />
      </div>
      <div class="form-element">
        <textarea
          v-model="taskDescription"
          placeholder="Describe your task"
        ></textarea>
      </div>
      <div class="form-element">
        <button v-on:click="onSubmit" type="button">Create</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: "Arial", sans-serif;
  background-color: #1e1e1e; /* Темний фон */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #f9f9f9;
}

/* Контейнер форми */
.form-container {
  text-align: center; /* Центруємо вміст */
  width: 100%;
  max-width: 400px;
  background-color: #f9f9f9; /* Білий фон */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Заголовок */
.task_title {
  margin: 0 0 20px; /* Відступ знизу, щоб заголовок був над формою */
  font-size: 28px;
  color: #28a745; /* Зелений акцент */
  font-weight: bold;
}

/* Стиль форми */
form {
  margin-top: 10px;
  width: 100%;
}

/* Елементи форми */
.form-element {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
/* Стиль для полів вводу */
input[type="text"],
textarea {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  background-color: #f9f9f9; /* Світлий фон */
  color: #333; /* Темний текст */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Фокус */
input[type="text"]:focus,
textarea:focus {
  border-color: #28a745; /* Зелений колір при фокусі */
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5); /* Зелена тінь */
  background-color: #fff; /* Яскравий фон */
}

/* Текстова область */
textarea {
  resize: vertical;
  min-height: 100px; /* Збільшена висота */
}

/* Підказка (placeholder) */
input[type="text"]::placeholder,
textarea::placeholder {
  color: #aaa;
  font-style: italic;
}

input[type="text"]:active,
textarea:active {
  transform: scale(1.01);
  transition: transform 0.1s ease;
}
/* Кнопка */
button {
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #218838;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

/* Ефект при натисканні */
button:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  box-shadow: none;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { Task } from "@/types/storeType.js";

export default defineComponent({
  name: "AddTaskView",
  data: function () {
    return {
      taskName: "",
      taskDescription: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    onSubmit() {
      const id = new Date().getTime();
      const newTask: Task = {
        id: id,
        name: this.taskName.trim(),
        description: this.taskDescription.trim(),
      };

      this.addTask(newTask);

      this.resetForm();

      this.$router.push(`/`);
    },
    resetForm() {
      this.taskName = "";
      this.taskDescription = "";
    },
  },
});
</script>
