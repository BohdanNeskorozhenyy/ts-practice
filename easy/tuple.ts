// Given an array, transform it into an object type and the key/value must be in the provided array

type TupleToObject<P extends readonly any[]> = {
    [key in P[number]]: P[number] // key in P[number] = 'tesla' | 'model 3' | 'model X' | 'model Y'
}

const carsArr = ['tesla', 'model 3', 'model X', 'model Y'] as const

type Cars = TupleToObject<typeof carsArr> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const carsObj: Cars = {
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y'
} // expected error Property 'tesla' is missing in type
