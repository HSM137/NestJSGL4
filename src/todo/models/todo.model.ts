import { TodoStatusEnum } from './../enums/todo-status.enum';
export class Todo{
    id:string;
    nom: string;
    desc:string;
    createdAt: Date;
    status:TodoStatusEnum

    constructor(id,nom,desc,stat)
    {
        this.id=id;
        this.nom=nom;
        this.desc=desc;
        this.createdAt=new Date;
        this.status=stat;
    }
}