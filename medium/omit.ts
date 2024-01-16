// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K

type MyOmit<I, K extends keyof I> = {
    [key in keyof I as (key extends K ? never : key)]: I[key]
}

interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }