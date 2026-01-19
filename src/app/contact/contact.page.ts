import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false,
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = {
    name: '',
    email: '',
    message: ''
  };

  submitForm(){
    console.log('Form submitted:', this.form);
    alert('Thank you for your message!');
  }
}
