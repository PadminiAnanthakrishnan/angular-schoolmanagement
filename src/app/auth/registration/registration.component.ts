import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private routinglink:Router) { }

  ngOnInit(): void {
  }
  fnregtolog(){
    this.routinglink.navigate(['/signin'])
  }
  fnregchk(){

  }
}
