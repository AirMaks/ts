// number
// string
// boolean
// null
// undefined
// object
// Symbol

const decimal: number = 10
const integer: number = 7.10
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744

const num: number = 42;
console.log(num)

let str: string = 'string'
console.log(str)

str = 'string 2'
console.log(str)

let isCompleted: boolean = false

// isCompleted = 42 error
isCompleted = true

// js typeof null // object
// js typeof undefined // undefined

// ts typeof null // null
// ts typeof undefined // undefined
const n: null = null
const u: undefined = undefined
console.log(typeof n)
console.log(typeof u)

const greetUser = ():void => {
    console.log("Hello!")
}

greetUser()

