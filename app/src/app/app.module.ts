import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppContainerComponent } from './main/app-container/app-container.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HeaderComponent } from './main/header/header.component';

@NgModule({
  declarations: [	
    AppComponent,
    MainComponent,
    AppContainerComponent,
    SidebarComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
