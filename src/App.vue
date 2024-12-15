<script setup lang="ts">
import { RouterView } from "vue-router";
import Menu from "@/components/MenuComponent.vue";
</script>

<template>
  <Menu />

  <RouterView />
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

menu {
  width: 100%;
  background-color: #28a745; /* Зелений колір меню */
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

menu li {
  margin: 0 15px;
}

menu a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
}

menu a:hover {
  color: #d4edda;
}

router-view {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  menu ul {
    flex-direction: column;
  }

  menu li {
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  menu a {
    font-size: 14px;
  }
}
</style>
