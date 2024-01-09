type MyPick<Object, Keys extends keyof Object> = {
    [key in Keys]: Object[key]
};
  
interface Todo {
    title: string
    description: string
    completed: boolean
}
  
type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}