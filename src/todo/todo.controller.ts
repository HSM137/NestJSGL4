import { TodoStatusEnum } from './enums/todo-status.enum';
import {Todo} from './models/todo.model'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

@Controller('todo')
export class TodoController {
    private todos=[]
    @Get()
    getTodos(){
        return this.todos;
    }

    @Post()
    createTodo(@Body() body){
        this.todos.push(new Todo(uuidv4(),body.nom,body.desc,TodoStatusEnum.waiting));
    }

    @Delete('/:nom')
    deleteTodo(@Param('nom') nom){
        this.todos=this.todos.filter(x=>x.nom!=nom);
    }

    @Put('/:nom/:status')
    updateTodo(@Param('nom') nom, @Param('status')status){
        let todo=this.todos.filter(x=>x.nom==nom);
        if(todo.length>0)
        {
            switch(status)
            {
                case "0":
                    todo[0].status=TodoStatusEnum.waiting;
                    break;
                
                case "1":
                    todo[0].status=TodoStatusEnum.actif;
                    break;
                case "2":
                    todo[0].status=TodoStatusEnum.done;
                    break;
                default: 
                console.log("error");
            }
        }
    }

}




