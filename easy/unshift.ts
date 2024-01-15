// Implement the type version of Array.unshift

type  Unshift<Arr extends unknown[], Item> = [Item, ...Arr]

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]