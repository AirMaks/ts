const createPassword = (name: string, age: number | string): string => `${name}${age}`
const createPassword2 = (name: string = 'Max', age: number | string = 21): string => `${name}${age}`

console.log(createPassword('Roman', 23))
console.log(createPassword2())


const createNumber = (num1: number, num2: number): string => `${num1}${num2}`
console.log(typeof parseInt(createNumber(1, 2)))

const createFullName = (name: string, lastname?: string): string => `${name}${lastname}`

createFullName('Roman')

const skills = (name: string, ...skills: Array<string>) => {
    const str = `${name}: ${skills.join(', ')}`
    console.log(str)
}

skills('Roman', 'intelligence', 'strong', 'react', 'ts', 'redux', 'nest')

let myFunc: (arg1: string) => void;

function oldFunc(name: string): void {
    alert(`Hello ${name}`)
}