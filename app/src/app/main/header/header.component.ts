import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideBarToggle = new EventEmitter<boolean>();
  status: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  rightSideFilter(){
    this.status = !this.status;     
    this.sideBarToggle.emit(this.status);
  }

}
