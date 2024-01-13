// Implement the built-in Exclude<T, U>
// Exclude from T those types that are assignable to U

type MyExclude<allTypes, excludeTypes> = allTypes extends excludeTypes ? never : allTypes  // ---> Exclude<allTypes, excludeTypes>


type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'