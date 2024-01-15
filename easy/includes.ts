// Implement the JavaScript Array.includes function in the type system. 
// A type takes the two arguments. The output should be a boolean true or false.

type Includes<Arr extends readonly string[], Value extends string> = {
    [Item in Arr[number]]: true
}[Value] extends true ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`