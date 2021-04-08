interface IUser {
    name: string
}

const useer: Readonly<IUser> = {
    name: 'Goldman'
}

// useer.name = '987ytgfvbn' // error
console.log(useer.name)
// required

interface IUser2 {
    name?: string,
    age?: number
}

const obj: Required<IUser2> = {
    name: 'Roman',
    age: 21
}

// Record
interface PageInfo {
    title: string
}

type Page = 'home' | 'contacts' | 'about'

const x2: Record<Page, PageInfo> = {
    about: {title: 'about'},
    contacts: {title: 'contacts'},
    home: {title: 'home'}
}

// Pick
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean Room',
    completed: false
}

// Omit
interface Todo2 {
    title: string
    description: string
    completed: boolean
}

type TodoPreview2 = Omit<Todo2, 'description'>

const todo2: TodoPreview2 = {
    title: 'Clean Room',
    completed: false
}

console.log(todo2)