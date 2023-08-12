import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  rightSidebarFlag:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  sideBarToggle(flag:boolean){
    this.rightSidebarFlag = flag;
    console.log(this.rightSidebarFlag);
    
  }

}
