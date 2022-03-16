import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileRouteGuard } from './guards/profile.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserFriendListComponent } from './user-friend-list/user-friend-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [ProfileRouteGuard]
  },
  {
    path: 'friend/:id',
    component: UserProfileComponent,
    canActivate: [ProfileRouteGuard]
  },
  {
    path: 'find-users',
    component: UserListComponent,
    canActivate: [ProfileRouteGuard]
  },
  {
    path: 'friends',
    component: UserFriendListComponent,
    canActivate: [ProfileRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
