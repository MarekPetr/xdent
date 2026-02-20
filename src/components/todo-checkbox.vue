<template>
    <div class="checkbox">
        <div
            tabIndex="0"
            role="checkbox"
            aria-checked
            class="checkbox-content"
            @click="$emit('click')"
        >
            <input
                tabIndex="-1"
                type="checkbox"
                :checked="checked"
                @click.stop="$emit('click')"
            />
            <span :class="{ 'checkbox-checked': checked }">{{ label }}</span>
        </div>
        <button type="button" class="checkbox-delete" @click="$emit('delete')">
            x
        </button>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "TodoCheckbox",

    props: {
        label: String,
        checked: Boolean,
    },

    emits: ["click", "delete"],

    setup() {
        return {};
    },
});
</script>

<style scoped>
.checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    margin: 0 auto 5px;
}

.checkbox-content {
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 5px 10px 5px 5px;
    cursor: pointer;
}

.checkbox-content input {
    margin-right: 5px;
}

.checkbox-content:hover {
    background: rgb(245, 245, 245);
}

.checkbox-delete {
    background: rgb(200, 200, 200);
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}
.checkbox-delete:hover {
    background: rgb(172, 172, 172);
}

.checkbox-checked {
    text-decoration: line-through;
}
</style>
