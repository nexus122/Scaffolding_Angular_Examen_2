import { Pipe, PipeTransform } from '@angular/core';
import Thumbnail from '../models/Thumbnail';
@Pipe({
  name: 'imageConcat',
})
export class ImageConcatPipe implements PipeTransform {
  transform(thumbnail: Thumbnail): string {
    const url: string = thumbnail.path + '.' + thumbnail.extension;
    return url;
  }
}
