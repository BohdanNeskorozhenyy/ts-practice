// If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?\
// For example: if we have Promise<ExampleType> how to get ExampleType?

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? U :  never 
type MyAwaited2<T extends Promise<unknown>> = T extends Promise<infer U> ? 
    (U extends Promise<unknown> ? MyAwaited<U> : U) 
    : 
    never 

type ExampleType = Promise<string>

type Results = MyAwaited<ExampleType> // string
type Results2 = MyAwaited2<ExampleType> // string