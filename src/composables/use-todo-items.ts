import { computed, onMounted, ref } from 'vue'
const todos = ref([]);
let fetchPromise = null;

export function useTodoItems() {   
    const todosDone = computed(() => {
        return todos.value.filter(todo => todo.checked).length;
    })

    const fetchTodos = async () => {
        try {
            const res = await fetch('/api/todos')
            const items = await res.json()
            todos.value = items.map(item => ({
                id: item.id,
                label: item.title,
                checked: item.completed,
            }))
        }
        catch(e) {
            fetchPromise = null;
            console.error(e)
        }        
    }

    
    onMounted(() => {
        if (!fetchPromise) {
            fetchPromise = fetchTodos()
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