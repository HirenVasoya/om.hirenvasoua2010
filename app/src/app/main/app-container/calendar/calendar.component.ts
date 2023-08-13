import { Component } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
  TimelineViewsService, AgendaService, GroupModel, EventSettingsModel, ResizeService, DragAndDropService, ResourceDetails, View
} from '@syncfusion/ej2-angular-schedule';

import { resourceData} from 'src/app/shared/data';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [TimelineViewsService, AgendaService, ResizeService, DragAndDropService]
})
export class CalendarComponent {
  public data: Record<string, any>[] = resourceData;
  public selectedDate: Date = new Date(2023, 0, 4);
  public workDays: number[] = [0, 1, 2, 3, 4, 5];
  public group: GroupModel = {
    enableCompactView: true,
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
    dataSource: this.data,
    fields: {
      subject: { name: 'Title', validation: { required: true, regex: ['\;.*$']} },
      location: {
        name: 'Description', validation: {
          required: true, minLength: 5, maxLength: 500
        }
      },
     
    }
  };
  


constructor(){
  // let span_Text = document.querySelector(".e-subject").innerText;
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
