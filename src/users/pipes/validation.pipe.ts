import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(
      `The Value is:${value},and the metadata is: ${JSON.stringify(metadata)}`,
    );
    return 'Dev' + value;
  }
}
