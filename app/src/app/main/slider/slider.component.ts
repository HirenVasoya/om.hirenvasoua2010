import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  lines: string[] = [
    "December 1 2021 - Decembet 7 2027",
    "December 8 2021 - Decembet 14 2027",
    "December 15 2021 - Decembet 22 2027",
  ];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextLine(): void {
    if (this.currentIndex < this.lines.length - 1) {
      this.currentIndex++;
    }
  }

  previousLine(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
