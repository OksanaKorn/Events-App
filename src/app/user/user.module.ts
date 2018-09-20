import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from 'src/app/user/profile.component';
import { userRoutes } from 'src/app/user/user.routes';
import { LoginComponent } from 'src/app/user/login.component';

@NgModule({
  declarations: [
      ProfileComponent,
      LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [
  ],
  bootstrap: []
})
export class UserModule { }