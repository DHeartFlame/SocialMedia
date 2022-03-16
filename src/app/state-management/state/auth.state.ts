import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { GeneralService } from 'src/app/services/general.service';
import { LoginUser, LogoutUser, RegisterUser, SetActiveUser } from '../actions/auth.actions';

export interface AuthenticationStateModel {
    authenticatedUser: User;
    authenticatedUserPosts: Post[];
}

@State<AuthenticationStateModel>({
    name: 'authentication',
    defaults: {
        authenticatedUser: new User(),
        authenticatedUserPosts: []
    }
})
@Injectable()
export class AuthenticationState {

    static readonly STATE_PATH: string = 'authentication';
    
    constructor(private generalService: GeneralService, private router: Router, private ngZone: NgZone) {}

    @Selector()
    static getLoggedUser({ authenticatedUser }: AuthenticationStateModel): User {
        return authenticatedUser;
    }
    @Selector()
    static getLoggedUserPosts({ authenticatedUserPosts }: AuthenticationStateModel): Post[] {
        return authenticatedUserPosts;
    }

    @Action(LoginUser)
    loginUser({ patchState }: StateContext<AuthenticationStateModel>, { username, password }: LoginUser) {
        const user = this.generalService.login(username, password);
        if(user) {
            const posts = this.generalService.getPostsByUser(user.id);
            patchState({ authenticatedUser: user, authenticatedUserPosts: posts });
            this.ngZone.run(() => {
                this.router.navigate(['/profile']);
            });
        } else {
            alert('Usuario incorrecto');
        }
    }
    @Action(LogoutUser)
    logout({ patchState }: StateContext<AuthenticationStateModel>) {
        this.generalService.logout();
        patchState({ authenticatedUser: new User(), authenticatedUserPosts: [] });
        this.ngZone.run(() => {
            this.router.navigate(['/']);
        });
    }
    @Action(SetActiveUser)
    setActiveUser({ patchState }: StateContext<AuthenticationStateModel>, { user }: SetActiveUser) {
        if(user && user.id > 0) {
            const posts = this.generalService.getPostsByUser(user.id);
            patchState({ authenticatedUser: user, authenticatedUserPosts: posts });
            this.ngZone.run(() => {
                this.router.navigate(['/profile']);
            });
        }
    }
    @Action(RegisterUser)
    registerUser({}: StateContext<AuthenticationStateModel>, { user }: RegisterUser) {
        const userCreated = this.generalService.register(user);
        if(userCreated) {
            this.ngZone.run(() => {
                this.router.navigate(['/']);
            });
        } else {
            alert('Error al crear la cuenta');
        }
    }
}
