import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddTaskView from "@/views/AddTaskView.vue";
import TaskView from "@/views/TaskView.vue";
import EditTaskView from "@/views/EditTaskView.vue"; // Імпорт сторінки редагування

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add-task",
      name: "add-task",
      component: AddTaskView,
    },
    {
      path: "/task/:id",
      name: "task",
      component: TaskView,
    },
    {
      path: "/edit-task/:id",
      name: "edit-task",
      component: EditTaskView, // Сторінка редагування
      props: true, // Передача параметра id у вигляді props
    },
  ],
});

export default router;
