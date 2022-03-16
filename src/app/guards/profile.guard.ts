import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ProfileRouteGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }
    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return false;
        } else {
            return true;
        }
    }
}
