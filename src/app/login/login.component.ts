import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login form
  loginForm = this.fb.group({
    acno:[''],
    pswd:['']

    
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
