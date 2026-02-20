<template>
    <div 
        class="todo-results" 
        :class="{'red-text': !this.todosDone, 'green-text': this.todosDone}">
        {{ todosDone }}
    </div>
</template>
<script>
import { defineComponent } from "vue";
import { useTodoItems } from "../composables/use-todo-items";

export default defineComponent({
    name: "TodoResults",

    setup() {
        const { todosDone } = useTodoItems()
        return {
            todosDone,
        }
    }
});
</script>
<style>
.todo-results {
    text-align: center;
    padding: 10px 0;
}

.red-text {
    color: red;
}

.green-text {
    color: green;
}
</style>