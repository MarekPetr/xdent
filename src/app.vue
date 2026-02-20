<template>
    <div class="root">
        <TodoList />
        <TodoResults />
        <TodoForm />
    </div>
</template>

<script>
import TodoForm from "./components/todo-form.vue";
import { defineComponent } from "vue";
import TodoList from "./components/todo-list.vue";
import TodoResults from "./components/todo-results.vue";

export default defineComponent({
    name: "App",

    components: {
        TodoList,
        TodoForm,
        TodoResults,
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
