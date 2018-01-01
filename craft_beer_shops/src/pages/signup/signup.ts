import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
