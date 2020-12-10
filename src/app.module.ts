import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ExercicePipeController } from './exercice-pipe/exercice-pipe/exercice-pipe.controller';

@Module({
  imports: [TodoModule],
  controllers: [AppController, ExercicePipeController],
  providers: [AppService],
})
export class AppModule {}
