import { MyServiceService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor(private router:Router,private service: MyServiceService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm) {
      this.router.navigate(["/dashboard"]);
      this.service.loginSuccess();
  }
}
