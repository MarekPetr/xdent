<template>
    <div 
        class="todo-results" 
        :class="{'red-text': !this.count, 'green-text': this.count}">
        {{ count }}
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "TodoResults",

    props: ["count"],
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