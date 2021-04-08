interface P {
    readonly name: string,
    age?: number,
    [propName: string]: any
}


const rom: P = {
    name: 'Rom',
    nick: 'Flash',
    num: 10
}
rom.age = 21
console.log(rom)


interface I {
    name: string,
    age: number,
    get(): string
}

class RM implements I {
    constructor(public name: string, public age: number) {
        this.name = name
        this.age = age
    }

    get() {
        return `${this.name} ${this.age}`
    }
}

const rm = new RM('Den', 22)

console.log(rm)

type T = {
    name: string,
    age: number,
    get(): void
}

class TT implements T {
    name: string = 'Roman'
    age: number = 21

    get():void {
        console.log('Yo!')
    }
}

const tt = new TT()

console.log(tt.get())

interface I1 {
    name: string,
    readonly age: number
}

interface I2 {
    get(): void
}


class MyClass implements I1, I2 {
    name: string = 'Goldman'
    age: number = 21
    get(): void {
        console.log('hey!')
    }
}

const myclass = new MyClass()
console.log(myclass)
myclass.get()


interface Parent {
    name: string,
    age: number
}

interface Child extends Parent {
    get(): void
}

class My implements Child {
    name: string = 'Gold'
    age: number = 20

    get(): void {
        console.log('yep!')
    }
}

const my = new My()
my.get()