import { ref } from 'vue'
import { todosList } from "../todo-data";

export function useTodoItems() {
    const todos = ref(todosList);
    const todosDone = ref(0);

    const handleTodosChanged = (newTodos) => {
        todosDone.value = newTodos.filter(todo => todo.checked).length;
        todos.value = newTodos;
    };

    return {
        todos,
        todosDone,
        handleTodosChanged,
    };
}