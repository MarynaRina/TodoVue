import { createStore } from "vuex";
import type { Task } from "@/types/storeType";
import { saveTasks, loadTasks } from "@/services/taskStorage.ts";

export default createStore({
  state: {
    tasks: loadTasks() as Task[], // Завантаження задач із localStorage при ініціалізації
  },
  getters: {
    getAllTasks(state): Task[] {
      return state.tasks;
    },
    getTaskById:
      (state) =>
      (id: number): Task | null => {
        return state.tasks.find((task: Task) => task.id === id) || null;
      },
  },
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push(task);
      saveTasks(state.tasks); // Зберегти в localStorage
    },
    deleteTask(state, taskId: number) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      saveTasks(state.tasks); // Оновити localStorage
    },
    updateTask(state, updatedTask: Task) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask); // Замінити задачу
        saveTasks(state.tasks); // Оновити localStorage
      }
    },
  },
});
