class User10 {

    static secret = 12345
    constructor(public name: string, public age: number) {}

    getPass = (): string => {
        return `${this.name}${this.age}${User10.secret}`
    }
}

const roma = new User10('Roma', 21)

console.log(roma.getPass())



class Person11 {
    private nickName: string = 'webDev'
    static secret = 12345
    constructor(public name: string, public age: number) {}

    getPass = (): string => {
        return `${this.name}${User10.secret}`
    }
}

class Roman extends Person11 {
    name: string = 'Roma 20'
    constructor(age: number) {
        super( null, age);
    }

    getPass = ():string => {
        return `${this.name}`
    }
}

const roma20 = new Roman( 21)
console.log(roma20.getPass())


abstract class U {
    protected constructor(public name: string, public age: number) {}

    greet(): void {
        console.log('Hello '+this.name + ' ' + this.age)
    }

    abstract getPass(): string
}

class R extends U {

    name: string = 'Roman'
    constructor(age: number) {
        super('', age)
    }

    getPass(): string {
        return `${this.name}`
    }
}
const r = new R(21)
console.log(r)
r.greet()