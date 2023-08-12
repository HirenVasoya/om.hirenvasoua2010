import { Component } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
  TimelineViewsService, AgendaService, GroupModel, EventSettingsModel, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';

import { resourceData, timelineResourceData } from 'src/app/shared/data';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [TimelineViewsService, AgendaService, ResizeService, DragAndDropService]
})
export class CalendarComponent {
  public selectedDate: Date = new Date(2023, 0, 4);
  public workDays: number[] = [0, 1, 2, 3, 4, 5];
  public group: GroupModel = {
    resources: ['Projects', 'Categories']
  };
  public projectDataSource: Record<string, any>[] = [
    { text: 'Los Angeles', id: 1, color: '#cb6bb2' },
    { text: 'San Diego ', id: 2, color: '#56ca85' }
  ];
  public categoryDataSource: Record<string, any>[] = [
    { text: 'Alex Anderson', id: 1, groupId: 1, cssClass: 'id1' },
    { text: 'John Doe', id: 2, groupId: 1, cssClass: 'id2'},
    { text: 'John Vincent', id: 3, groupId: 1, cssClass: 'id3' },
    
    { text: 'Annie Leonhart', id: 4, groupId: 2, cssClass: 'id4' },
    { text: 'Levi Ackerman', id: 5, groupId: 2, cssClass: 'id5' },
  ];
  public allowMultiple = true;
  public eventSettings: EventSettingsModel = {
    dataSource: extend([], resourceData.concat(timelineResourceData), true) as Record<string, any>[]
  };
  getResourceCssClass(resourceData: any): string {
    return resourceData.cssClass || ''; // Return the CSS class from the data or an empty string
  }
}
