<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/add-task">Add task</RouterLink>
  </nav>
</template>

<style scoped>
/* Основний стиль навігації */
nav {
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #28a745; /* Зелений фон */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Стиль для посилань */
nav a {
  color: white; /* Білий текст */
  text-decoration: none; /* Прибираємо підкреслення */
  font-size: 16px;
  font-weight: bold;
  margin: 0 15px;
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 5px 10px;
  border-radius: 4px;
}

/* Ефекти при наведенні */
nav a:hover {
  color: #d4edda; /* Світліший зелений */
  background-color: #218838; /* Темніший зелений */
}

/* Активне посилання */
nav a.router-link-exact-active {
  background-color: #1e7e34; /* Темний зелений для активного */
  color: white;
}

/* Адаптивність */
@media (max-width: 768px) {
  nav {
    flex-direction: column; /* Вертикальна навігація */
    padding: 20px 0;
  }

  nav a {
    margin: 10px 0; /* Відступи між лінками */
  }
}
</style>
