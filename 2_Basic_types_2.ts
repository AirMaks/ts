// array type
let list: number[] = [1,2,3]

//generic type
let list2: Array<number> = [1,2,3]

// tuple
let x: [string, number] = ['hello', 10]
let y: [number, string]
y = [10, '10']

// any type
let w: [any, any] = ['hello', 10] // any type
let z: Array<any> = [10, '10']
let notSure: any = 'string'
notSure = false
console.log(notSure)
notSure = 10
console.log(notSure)

// enum type
enum Directions {
    Up = 7,
    Down = 10,
    Left,
    Right
}


console.log(Directions.Up)
console.log(Directions.Down)
console.log(Directions.Left)
console.log(Directions.Right)

enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

const enum marks {
    BMW,
    MB,
    FERRARI
}

console.log(marks.BMW)

console.log(links.facebook)
console.log(links.vk)
console.log(links.youtube)

// never type
const msg = 'hello'
const error = (msg: string): never => {
    throw new Error(msg)
}

const infinite = (): never => {
    while(true) {}
}

// object type
const create = (o: object | null | number | string): void => {}

create(1)
create('10')
create({a: 10})


// type
type Name = string
let id: Name

id = "10"
// id = 10 // error
