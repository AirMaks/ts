
type Person = {
    name: string,
    age: number,
    lastname?: string
}

let user: Person = {
    name: 'Roman',
    age: 23
}

console.log(user)

let person: {name: string, age: number} = {
    name: 'Roman',
    age: 21
}

console.log(person)

let user2: Person = {
    name: 'Roman',
    age: 21,
    lastname: 'Goldman'
}

console.log(user2)

let user3: Person = {
    name: 'Roman',
    age: 21,
}
user3.lastname = 'Fisher'
console.log(user3)
