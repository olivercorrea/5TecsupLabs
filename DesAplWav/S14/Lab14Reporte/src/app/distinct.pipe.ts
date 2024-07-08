import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'distinct' })
export class DistinctPipe implements PipeTransform {
  transform<T, K extends keyof T>(value: T[], prop: K): T[K][] {
    return value.map(item => item[prop]).filter((value, index, self) => self.indexOf(value) === index);
  }
}