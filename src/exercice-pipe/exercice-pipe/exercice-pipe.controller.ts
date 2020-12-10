import { Body, Controller, Post } from '@nestjs/common';
import { ExercicePipe } from '../exercice.pipe';

@Controller('exercice-pipe')
export class ExercicePipeController {

    @Post()
    postSkill(
        @Body(ExercicePipe) skills : string
    )
    {
        return skills;
    }

}
