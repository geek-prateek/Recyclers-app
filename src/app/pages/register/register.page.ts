import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerData = [
    {
      id: 1,
      name: 'I want to BUY it',
      type: 'Client',
    },
    {
      id: 2,
      name: 'I want to SELL it',
      type: 'Partner',
    },
  ];

  compareWith(o1: any, o2: any) {
    return o1.id === o2.id;
  }

  handleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }

  trackItems(index: number, item: any) {
    return item.id;
  }

}
