import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/user/auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';

@Component({
  templateUrl: "./profile.component.html",
  styles: [`
  em { float:right; color: #E05C65; padding-left: 10px;}
  .error input { background-color: #E3C3C5; }
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error :ms-input-placeholder { color: #999; }
`]
})
export class ProfileComponent implements OnInit {
  private firstName
  private lastName

  profileForm:FormGroup
  constructor(
    private authServise: AuthService, 
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ){}
  ngOnInit() {
    this.firstName = new FormControl(this.authServise.currentUser.firstName, [Validators.required, Validators.pattern("[a-zA-Z].*")])
    this.lastName = new FormControl(this.authServise.currentUser.lastName, [Validators.required, Validators.pattern("[a-zA-Z].*")])
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName  
    })
  }    
  
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authServise.updateCurrentUser(formValues.firstName, formValues.lastName)
      // this.router.navigate(["/events"])
      this.toastr.success("Profile Saved")
    }
  }

  cancel() {
    this.router.navigate(["/events"])
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
}