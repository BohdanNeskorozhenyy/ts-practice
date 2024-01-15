// Implement the generic version of Array.push

type Push<Arr extends any[], item> =  [...Arr, item]

type Result = Push<[1, 2], '3'> // [1, 2, '3']