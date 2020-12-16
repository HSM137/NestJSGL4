import { TodoEntity } from './../entities/todo.entity';
import { CreateTodoDTO, SearchQueryDTO, Todo, UpdateTodoDTO } from './../models/todo.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class TodoService {
    private todos : Todo[]=[]

    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepository : Repository<TodoEntity>
    ) {
        this.todos.push(new Todo("Nom","Desc"));
    }

    /*getTodos(){
        return this.todos;
    }*/

    async getTodos(): Promise<TodoEntity[]> {
        return await this.todoRepository.find();
    }

    /*getTodoById(id: string) {
        const todo=this.todos.find(
            todo => todo.id==id
        );
        return todo;
    }*/

    async getTodoById(id: string): Promise<TodoEntity> {
        return await this.todoRepository.findOne(id);
    }

    /*createTodo(body: CreateTodoDTO){
        const todo = new Todo(body.nom,body.desc)
        this.todos.push(todo);
        return todo;
    }*/

    async createTodo(body: CreateTodoDTO) : Promise<TodoEntity> {
        const todo = await this.todoRepository.create(body);
        return this.todoRepository.save(todo);
    }

    /*
    deleteTodo(id: string) {
        const index= this.todos.findIndex(
            todo=> todo.id==id
        )
        if (index>=0) {
            this.todos.splice(index,1);
        }
    }*/

    async deleteTodo(id: string) {
        return await this.todoRepository.softDelete(id);
    }

    async restoreTodo(id: string) {
        return await this.todoRepository.restore(id);
    }

    /*updateTodo(id,toDo) {
        const index= this.todos.findIndex(
            todo=> todo.id==id
        )
        if (index>=0) {
            const todo=this.todos[index];
            todo.nom=toDo.nom? toDo.nom: todo.nom;
            todo.desc=toDo.desc? toDo.desc: todo.desc;
            todo.status=toDo.status? toDo.status: todo.status;
        }
    }*/

    async updateTodo(id: string, todo: UpdateTodoDTO) {
        return await this.todoRepository.update({id},{...todo});
    }

    //Recherche selon les critères disponibles
    async search(query: SearchQueryDTO): Promise<TodoEntity[]> {
        return await this.todoRepository.find(
            {
                where:[
                   (query.status && query.desc)?
                        {
                            status: query.status,
                            desc: Like(`%${query.desc}%`)
                        }:
                    query.status ?
                        {
                            status: query.status,
                            
                        }:
                    query.desc?
                        {
                            desc: Like(`%${query.desc}%`)
                        }:{}
                ],
            }
        )
    }
}
