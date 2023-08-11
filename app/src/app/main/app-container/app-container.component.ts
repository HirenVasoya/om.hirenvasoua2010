import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent {

  @Input() flagValue: boolean = false;

  constructor() {
    console.log(this.flagValue)
   }

  ngOnInit() {
  }

  location:any = [
    {
      subTitle: 'JOB_10000',
      title: 'SC HF Radial Pump',
      location: 'Los Angeles',
      warranty: 'warranty repair',
      warrantyIcon: 'high',
    },

    {
      subTitle: 'JOB_10001',
      title: 'Centrifugal oil Filter',
      location: 'Los Angeles',
      warranty: 'warranty repair',
      warrantyIcon: 'high',
    },

    {
      subTitle: 'JOB_10002',
      title: 'SC ZP Radial X1 Pump',
      location: 'Los Angeles',
      warranty: 'warranty repair',
      warrantyIcon: 'medium',
    },

    {
      subTitle: 'JOB_10003',
      title: 'IA - Serial Warranty item',
      location: 'Los Angeles',
      warranty: 'warranty repair',
      warrantyIcon: 'medium',
    },

    {
      subTitle: 'JOB_10004',
      title: 'SC HF Radial Pump',
      location: 'Los Angeles',
      warranty: 'warranty repair',
      warrantyIcon: 'medium',
    },

    {
      subTitle: 'JOB_10005',
      title: 'SC HF Radial Pump',
      location: 'Los Angeles',
      warranty: 'warranty repair',
      warrantyIcon: 'medium',
    },

    {
      subTitle: 'JOB_10006',
      title: 'SC HF Radial Pump',
      location: 'Los Angeles',
      warranty: 'warranty repair',
      warrantyIcon: 'medium',
    },
    
]
}
