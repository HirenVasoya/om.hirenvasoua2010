import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppContainerComponent } from './main/app-container/app-container.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HeaderComponent } from './main/header/header.component';
import { PaginationComponent } from './main/pagination/pagination.component';
import { SliderComponent } from './main/slider/slider.component';

@NgModule({
  declarations: [	
    AppComponent,
    MainComponent,
    AppContainerComponent,
    SidebarComponent,
    HeaderComponent,
    PaginationComponent,
    SliderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
