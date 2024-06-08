import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationService } from '../services/use-registration/user-registration.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  creatUser: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  fail: boolean = false;

  constructor(private formBuilder: FormBuilder, private userRegistrationService: UserRegistrationService){
    this.creatUser = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.min(8), Validators.required]]
    });
  }
  
  get formControls(){
    return this.creatUser.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.creatUser.invalid){
      return;
    }

    this.userRegistrationService.register(this.creatUser.value).subscribe({
      next: response => {
        console.log(`response: ${response}`);
        this.success = true;
      },
      error: error => {
        console.log(`error: ${error}`);
        this.fail = true;
      }
    })
  }
}