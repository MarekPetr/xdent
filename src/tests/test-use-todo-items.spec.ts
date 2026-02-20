import { useTodoItems } from '../composables/use-todo-items'

test('todosFetched', () => {
  const { todos } = useTodoItems()
  todos.value = [{
    id: '1',
    label: 'label',
    checked: 'checked',
  }]

  expect(todos.value.length).toBe(1)
})