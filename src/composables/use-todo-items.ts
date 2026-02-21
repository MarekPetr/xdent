import { computed, onMounted, ref } from 'vue'
const todos = ref([]);
const isFetched = ref(false);

export function useTodoItems() {   
    const todosDone = computed(() => {
        return todos.value.filter(todo => todo.checked).length;
    })
    
    onMounted(() => {
        if (isFetched.value) {
            return
        }
        
        try {
            fetch('/api/todos')
                .then(res => res.json())
                .then(items => todos.value = items.map((item) => ({
                    id: item.id,
                    label: item.title,
                    checked: item.completed,
                })))
            
            isFetched.value = true;
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