import type { Task } from "@/types/storeType.ts";

const TASKS_STORAGE_KEY = "tasks";
export const loadTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY) || "[]");
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};
