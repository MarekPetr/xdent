import { useTodoItems } from '../composables/use-todo-items'

test('addTodo', () => {
  const { todos } = useTodoItems()
  todos.value = [{
    id: '1',
    label: 'label',
    checked: false,
  }]

  expect(todos.value.length).toBe(1)
})

test('checkTodosDone', () => {
  const { todos, todosDone } = useTodoItems()
  todos.value = [{
    id: '1',
    label: 'label',
    checked: true,
  }]

  expect(todosDone.value).toBe(1)

})