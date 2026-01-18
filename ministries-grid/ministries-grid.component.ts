import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministries-grid',
  templateUrl: './ministries-grid.component.html',
  styleUrls: ['./ministries-grid.component.scss'],
  standalone: false,
})
export class MinistriesGridComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  ministries = [
    { name: 'Youth Ministry', icon: 'people', route: '/main/ministries' },
    { name: 'Women’s Guild', icon: 'female', route: '/main/ministries' },
    { name: 'Men’s Fellowship', icon: 'male', route: '/main/ministries' },
    { name: 'Sunday School', icon: 'school', route: '/main/ministries' },
    { name: 'Choir Ministry', icon: 'musical-notes', route: '/main/ministries' }
  ];

}
