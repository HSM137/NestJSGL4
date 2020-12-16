import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TodoStatusEnum } from "../enums/todo-status.enum";

@Entity('todo')
export class TodoEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nom: string;

    @Column()
    desc: string;

    @CreateDateColumn({update:false})
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({type:'enum',enum:TodoStatusEnum, default:TodoStatusEnum.waiting})
    status:TodoStatusEnum
}