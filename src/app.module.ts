import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ExercicePipeController } from './exercice-pipe/exercice-pipe/exercice-pipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TodoModule,
  TypeOrmModule.forRoot()
  ],
  controllers: [AppController, ExercicePipeController],
  providers: [AppService],
})
export class AppModule {}
