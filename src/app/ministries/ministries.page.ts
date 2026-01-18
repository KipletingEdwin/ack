import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
  standalone: false,
})
export class MinistriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ministries = [
     { name: 'Youth Ministry', icon: 'people', description: 'Empowering young people to grow in faith and leadership.' },
     { name: 'Women’s Guild', icon: 'female', description: 'A fellowship of women dedicated to prayer, service, and community support.' },
     { name: 'Men’s Fellowship', icon: 'male', description: 'Building strong men of faith through fellowship and discipleship.' },
     { name: 'Sunday School', icon: 'school', description: 'Teaching children the foundations of Christian faith in a fun, engaging way.' }, 
     { name: 'Choir Ministry', icon: 'musical-notes', description: 'Leading the congregation in worship through music and praise.' }
     ];
     
}
