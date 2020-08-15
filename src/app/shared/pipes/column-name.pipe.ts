import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnName'
})
export class ColumnNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'name':
        return 'Название';
      case 'startDate':
        return 'Дата начала мероприятия';
      case 'endDate':
        return 'Дата окончания мероприятия';
      case 'participantsCount':
        return 'Количество участников';
      case 'location':
        return 'Место проведения';
      default:
        return value;
    }
  }

}
