import { computed, onMounted, ref } from 'vue'
const todos = ref([]);

export function useTodoItems() {   
    const todosDone = computed(() => {
        return todos.value.filter(todo => todo.checked).length;
    })
    
    onMounted(async() => {
        try {
            const result = await fetch('/api/todos')
            const items = await result.json()
            todos.value = items.map((item) => ({
                id: item.id,
                label: item.title,
                checked: item.completed,
            }))
        }
        catch (e) {
            console.error(e)
        }
    })

    const handleTodosChanged = (newTodos) => {
        todos.value = newTodos;
    };

    return {
        todos,
        todosDone,
        handleTodosChanged,
    };
}