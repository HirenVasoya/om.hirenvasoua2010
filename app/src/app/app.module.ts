import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarAllModule, ContextMenuAllModule, AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppContainerComponent } from './main/app-container/app-container.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HeaderComponent } from './main/header/header.component';
import { PaginationComponent } from './main/pagination/pagination.component';
import { SliderComponent } from './main/slider/slider.component';
import { CalendarComponent } from './main/app-container/calendar/calendar.component';

@NgModule({
  declarations: [	
    AppComponent,
    MainComponent,
    AppContainerComponent,
    SidebarComponent,
    HeaderComponent,
    PaginationComponent,
    SliderComponent,
    CalendarComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    ScheduleAllModule, RecurrenceEditorAllModule,   NumericTextBoxAllModule, TextBoxAllModule, DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, CheckBoxAllModule,   ToolbarAllModule, DropDownListAllModule, ContextMenuAllModule, MaskedTextBoxModule, UploaderAllModule, MultiSelectAllModule,   TreeViewModule, ButtonAllModule, DropDownButtonAllModule, SwitchAllModule,ToastAllModule, AppBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
