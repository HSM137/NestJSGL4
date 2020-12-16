import { TodoEntity } from './entities/todo.entity';
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './services/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [
    TypeOrmModule.forFeature([TodoEntity])
  ]
})
export class TodoModule {}
