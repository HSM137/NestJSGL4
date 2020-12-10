import { Test, TestingModule } from '@nestjs/testing';
import { ExercicePipeController } from './exercice-pipe.controller';

describe('ExercicePipeController', () => {
  let controller: ExercicePipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercicePipeController],
    }).compile();

    controller = module.get<ExercicePipeController>(ExercicePipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
