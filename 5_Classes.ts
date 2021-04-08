class User {

    public name: string
    private age: number
    protected lastname: string
    readonly pass: number

    constructor(name: string, age: number, lastname: string, pass: number) {
        this.name = name
        this.age = age
        this.lastname = lastname
        this.pass = pass
    }
}


const roman = new User('Roman', 21, 'Goldman', 1234567890)

console.log(roman.pass)
console.log(roman)

class User2 {

    public name: string
    private age: number = 21
    protected lastname: string
    readonly pass: number = 1234567890

    constructor(name: string, lastname: string) {
        this.name = name
        this.lastname = lastname
    }
}


const roman2 = new User2('Roman2',  'Goldman2')


class User3 {

    constructor(public name: string, public age: number, public lastname: string, public pass: number) {
        // this.name = name
        // this.age = age
        // this.lastname = lastname
        // this.pass = pass
    }

    getName = () => {
        console.log(this.name)
    }
}


const roman3 = new User3('Roman3',21,  'Goldman3', 123456789)
console.log(roman3)
roman3.getName()



class Man {
    private age: number = 20

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age
    }

    set myAge(age: number) {
        this.age = age
    }
}

const robin = new Man('Robin')
console.log(robin)
robin.myAge = 21

console.log(robin)
robin.setAge(21)
console.log(robin)

