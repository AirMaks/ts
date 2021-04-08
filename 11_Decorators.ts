const logClass = (constructor: Function) => {
    console.log(constructor)
}


@logClass
class Usr3 {
    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name} ${this.age}`
    }
}



const logProperty = (target: Object, propertyKey: string | symbol): void => {
    console.log(propertyKey)
}

class Some {

    @logProperty
    secret: number

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret
    }

    public getPass(): string {
        return `${this.name} ${this.age}`
    }
}


const logMethod = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log(propertyKey)
}

class SomeClass {
    constructor(public name: string, public age: number) {}

    @logMethod
    getPass(): string {
        return `${this.name} ${this.age}`
    }
}


const logAccessor = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => console.log(propertyKey)


class SomeThing {
    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name} ${this.age}`
    }

    @logAccessor
    set myAge(age: number) {
        this.age = age
    }
}


function factory(value: any) {
    return function(target: any) {
        console.log(target)
    }
}