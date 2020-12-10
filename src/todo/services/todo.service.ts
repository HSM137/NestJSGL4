import { CreateTodoDTO, Todo } from './../models/todo.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
    private todos : Todo[]=[]

    constructor() {
        this.todos.push(new Todo("Nom","Desc"));
    }

    getTodos(){
        return this.todos;
    }

    getTodoById(id: string) {
        const todo=this.todos.find(
            todo => todo.id==id
        );
        return todo;
    }

    createTodo(body: CreateTodoDTO){
        const todo = new Todo(body.nom,body.desc)
        this.todos.push(todo);
        return todo;
    }

    deleteTodo(id: string) {
        const index= this.todos.findIndex(
            todo=> todo.id==id
        )
        if (index>=0) {
            this.todos.splice(index,1);
        }
    }

    updateTodo(id,toDo) {
        const index= this.todos.findIndex(
            todo=> todo.id==id
        )
        if (index>=0) {
            const todo=this.todos[index];
            todo.nom=toDo.nom? toDo.nom: todo.nom;
            todo.desc=toDo.desc? toDo.desc: todo.desc;
            todo.status=toDo.status? toDo.status: todo.status;
        }
    }
}
