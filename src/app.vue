<template>
    <div class="root">
        <TodoList :todos="todos" @todos-changed="handleTodosChanged" />
        <TodoForm :todos="todos" @todos-changed="handleTodosChanged" />
    </div>
</template>

<script>
import TodoForm from "./components/todo-form.vue";
import { defineComponent, ref } from "vue";
import TodoList from "./components/todo-list.vue";
import { todosList } from "./todo-data";

export default defineComponent({
    name: "App",

    components: {
        TodoList,
        TodoForm,
    },

    setup() {
        const todos = ref(todosList);

        const handleTodosChanged = (newTodos) => {
            todos.value = newTodos;
        };

        return {
            todos,
            handleTodosChanged,
        };
    },
});
</script>

<style>
body {
    margin: 20px 0 0 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.root {
    width: 600px;
    margin: auto;
}
</style>
