import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ExercicePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type=='body'){
      if(!value.skills) {
        return new BadRequestException();
      }
      return value.skills.map((element)=>element.toUpperCase())
        .join('-');
    }
    return value;
  }
}
