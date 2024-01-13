// For given a tuple, you need create a generic Length, pick the length of the tuple

type Length<arr extends readonly any[]> = arr['length'];

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

const  teslaArr = ['tesla', 'model 3', 'model X', 'model Y'] as const 
const  spaceXArr = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

type teslaLength2 = Length<typeof teslaArr>  // expected 4
type spaceXLength2 = Length<typeof spaceXArr> // expected 5