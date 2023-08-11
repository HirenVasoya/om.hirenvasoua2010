import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isFlagEnabled:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  sideBarToggle(flag:boolean){
    this.isFlagEnabled = flag;
    console.log(this.isFlagEnabled)
  }

}
