// обозначение типов в общем виде, сами задаем типы


const getter = <T>(data: T): T => data

getter(10)
getter('10').length


function getter2<T>(data: T): T {
    return data
}

// getter2(10).length //error highlighting
getter2('10')

const ttt = (data: any): any => data

ttt(10).length // error not highlighting
ttt('10').length


const getter3 = <T>(data: T): T => data

getter3<number>(10)
getter3<string>('10')




class Usr<T> {
    constructor(public name: T, public age: T) {}

    public getPass(): string {
        return `${this.name} ${this.name}`
    }
}


const u1 = new Usr(10, 10)

console.log(u1.getPass())


class Usr2<T, K extends number> {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name} ${this.name}`
    }

    getSecret(): number {
        return this.age**2
    }
}


// const u2 = new Usr2(10, '10') error

// console.log(u2.getPass())