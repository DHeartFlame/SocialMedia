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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationState } from './state-management/state/auth.state';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { ProfileRouteGuard } from './guards/profile.guard';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { ImgLoaderComponent } from './shared-components/img-loader/img-loader.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListCardComponent } from './shared-components/user-list-card/user-list-card.component';
import { GeneralState } from './state-management/state/general.state';

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
    LayoutComponent,
    NavbarComponent,
    ImgLoaderComponent,
    UserListComponent,
    UserListCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgxsModule.forRoot( [
			AuthenticationState,
      GeneralState
		], {
			developmentMode: !environment.production,
		} ),
    FormsModule
  ],
  providers: [ProfileRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
