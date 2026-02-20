<template>
    <div class="todo-form">
        <input
            placeholder="Enter new task"
            v-model="task"
            @keyup="handleKeyUp"
        />
        <button type="button" @click="handleAddTodo">Add task</button>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "TodoForm",

    props: ["todos"],

    emits: ["todos-changed"],

    setup(props, { emit }) {
        const task = ref("");

        const handleAddTodo = () => {
            if (task.value) {
                emit("todos-changed", [
                    ...props.todos,
                    {
                        id:
                            props.todos.length > 0
                                ? props.todos[props.todos.length - 1].id + 1
                                : 0,
                        label: task.value,
                        checked: false,
                    },
                ]);
                task.value = "";
            }
        };

        const handleKeyUp = (e) => {
            if (e.keyCode === 13) {
                handleAddTodo();
            }
        };

        return {
            task,
            handleAddTodo,
            handleKeyUp,
        };
    },
});
</script>

<style scoped>
.todo-form {
    display: flex;
    justify-content: center;
    margin-top: 16px;
}

.todo-form input {
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid rgba(1, 1, 1, 0.3);
    margin-right: 5px;
    width: 250px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    font-size: 16px;
}

.todo-form button {
    cursor: pointer;
    background: #1e90ff;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    width: 110px;
}
.todo-form button:hover {
    background: #1474d2;
}
</style>
