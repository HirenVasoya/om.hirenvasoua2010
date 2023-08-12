import { Component } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
  TimelineViewsService, AgendaService, GroupModel, EventSettingsModel, ResizeService, DragAndDropService, ResourceDetails
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
    enableCompactView: false,
    resources: ['Projects', 'Categories']
  };
  public projectDataSource: Record<string, any>[] = [
    { text: 'Los Angeles', id: 1, color: '#cb6bb2' },
    { text: 'San Diego ', id: 2, color: '#56ca85' }
  ];
  public categoryDataSource: Record<string, any>[] = [
    { text: 'Alex Anderson', id: 1, groupId: 1, color: '#4A729D', Designation: '5 Job Cards' },
    { text: 'John Doe', id: 2, groupId: 1, color: '#3196F3', Designation: '5 Job Cards' },
    { text: 'John Vincent', id: 3, groupId: 1, color: '#F89700', Designation: '5 Job Cards' },
    
    { text: 'Annie Leonhart', id: 4, groupId: 2, color: '#D88EE5', Designation: '2 Job Cards' },
    { text: 'Levi Ackerman', id: 5, groupId: 2, color: '#758BDD', Designation: '1 Job Cards' },
  ];
  public allowMultiple = true;
  public eventSettings: EventSettingsModel = {
    dataSource: extend([], resourceData.concat(timelineResourceData), true) as Record<string, any>[]
  };
  getResourceCssClass(resourceData: any): string {
    return resourceData.cssClass || ''; // Return the CSS class from the data or an empty string
  }

  public getConsultantName(value: ResourceDetails): string {
    return (value as ResourceDetails).resourceData['text'] as string;
  }

  public getConsultantStatus(value: ResourceDetails): string {
    // const resourceName: string = this.getConsultantName(value);
    return (value as ResourceDetails).resourceData['color'] as string;
  }


  public getConsultantDesignation(value: ResourceDetails): string {
    return (value as ResourceDetails).resourceData['Designation'] as string;
  }
}
