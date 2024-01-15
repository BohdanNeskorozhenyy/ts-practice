// Implement the built-in Parameters generic without using it.

const foo = (arg1: string, arg2: number): void => {}

type MyParameters<Func> = Func extends (...any: infer Args) => any ? Args : never

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]