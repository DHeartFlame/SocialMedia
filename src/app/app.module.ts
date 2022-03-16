import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFriendListComponent } from './user-friend-list/user-friend-list.component';
import { UserProfilePreviewComponent } from './shared-components/user-profile-preview/user-profile-preview.component';
import { ProfilePostComponent } from './shared-components/profile-post/profile-post.component';
import { LoginInputComponent } from './shared-components/login-input/login-input.component';
import { ButtonComponent } from './shared-components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UserFriendListComponent,
    UserProfilePreviewComponent,
    ProfilePostComponent,
    LoginInputComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
