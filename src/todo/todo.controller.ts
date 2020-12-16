import { TodoService } from './services/todo.service';
import { TodoStatusEnum } from './enums/todo-status.enum';
import {Todo,CreateTodoDTO,UpdateTodoDTO, SearchQueryDTO} from './models/todo.model'
import { Body, Controller, Delete, Get, Param, Post, Put, Patch, NotFoundException } from '@nestjs/common';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {
        
    }

    @Get()
    getTodos(){
        return this.todoService.getTodos();
    }

    @Get(':id')
    getTodoById(
    @Param('id') id: string
    ) {
        return this.todoService.getTodoById(id);
    }

    @Post()
    createTodo(@Body() body: CreateTodoDTO){
        return this.todoService.createTodo(body);
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id: string){
        return this.todoService.deleteTodo(id);
    }

    @Put('/:id')
    updateTodo(@Param('id') id, @Body()toDo: UpdateTodoDTO){
        return this.todoService.updateTodo(id,toDo);
    }

    @Get('restore/:id')
    restoreTodo(@Param('id') id:string) {
        return this.todoService.restoreTodo(id);
    }

    @Post('search')
    search(@Body() searchQuery: SearchQueryDTO) {
        return this.todoService.search(searchQuery);
    }

}




