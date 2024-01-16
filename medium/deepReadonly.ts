// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.


type DeepReadonly<Obj> = {
    readonly [key in keyof Obj]: Obj[key] extends Record<any, any> ?  DeepReadonly<Obj[key]> : Obj[key]
}

type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
}

type Todo = DeepReadonly<X> 

const Example: Todo = { 
     x: { 
        a: 1,
        b: 'hi',
    },
    y: 'hey' 
}


Example.x.a = 1 // Cannot assign to 'a' because it is a read-only property.ts(2540)


