import { TodoStatusEnum } from './../enums/todo-status.enum';
import {v4 as uuidv4} from 'uuid';
import { IsIn, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import {REQUIRED_ERROR_MESSAGE , MAX_LENGTH_ERROR_MESSAGE, MIN_LENGTH_ERROR_MESSAGE} from './error-messages';

export class Todo{
    id:string;
    nom: string;
    desc:string;
    createdAt: Date;
    status:TodoStatusEnum

    constructor(nom,desc)
    {
        this.id=uuidv4();
        this.nom=nom;
        this.desc=desc;
        this.createdAt=new Date;
        this.status=TodoStatusEnum.waiting;
    }
}

export class CreateTodoDTO {
    @IsNotEmpty({message:REQUIRED_ERROR_MESSAGE})
    @MaxLength(10,{message:MAX_LENGTH_ERROR_MESSAGE})
    @MinLength(3,{message:MIN_LENGTH_ERROR_MESSAGE})
    nom : string;

    @IsNotEmpty({message:REQUIRED_ERROR_MESSAGE})
    @MinLength(10,{message:MIN_LENGTH_ERROR_MESSAGE})
    desc : string;
}

export class UpdateTodoDTO {
    @IsOptional()
    @MaxLength(10,{message:MAX_LENGTH_ERROR_MESSAGE})
    @MinLength(3,{message:MIN_LENGTH_ERROR_MESSAGE})
    nom : string;

    @IsOptional()
    @MinLength(10,{message:MIN_LENGTH_ERROR_MESSAGE})
    desc : string;
    
    @IsOptional()
    @IsIn([TodoStatusEnum.actif,TodoStatusEnum.done,TodoStatusEnum.waiting])
    status: TodoStatusEnum
}

export class SearchQueryDTO {
    @IsOptional()
    desc: string;

    @IsOptional()
    @IsIn([TodoStatusEnum.actif,TodoStatusEnum.done,TodoStatusEnum.waiting])
    status: TodoStatusEnum;
}