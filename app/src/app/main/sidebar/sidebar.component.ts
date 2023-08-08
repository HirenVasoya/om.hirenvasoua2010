import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // mainMenu: menu[] | any;

  mainMenu:any = [
      {
        src: 'dashboard',
      },
      {
        src: 'workflow',
      },
      {
        src: 'calendar',
      },
      {
        src: 'list',
      },
      {
        src: 'report',
      },
      {
        src: 'cog',
      },
      {
        src: 'info',
      },
  ]
    

  constructor() { }

  ngOnInit() {
  }

}
