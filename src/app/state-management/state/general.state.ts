import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext, Store } from '@ngxs/store';
import { User } from 'src/app/models/User';
import { GeneralService } from 'src/app/services/general.service';
import { SetActiveUser } from '../actions/auth.actions';
import { AddUserFriend, SetUserList } from '../actions/general.actions';
import { AuthenticationState } from './auth.state';

export interface GeneralStateModel {
    userList: User[];
}

@State<GeneralStateModel>({
    name: 'general',
    defaults: {
        userList: []
    }
})
@Injectable()
export class GeneralState implements NgxsOnInit {

    static readonly STATE_PATH: string = 'General';
    
    constructor( private generalService: GeneralService, private store: Store ) {}
    
    ngxsOnInit(ctx?: StateContext<GeneralStateModel>) {
        ctx?.patchState({userList: this.getUserList()});

    }

    @Selector()
    static getUserList({ userList }: GeneralStateModel): User[] {
        return userList;
    }

    @Action(SetUserList)
    setUserList({ patchState }: StateContext<GeneralStateModel>) {
        patchState({userList: this.getUserList()});
    }
    @Action(AddUserFriend)
    addUserFriend({ patchState }: StateContext<GeneralStateModel>, { user }: AddUserFriend ) {
        const result = this.generalService.setUserFriend( this.store.selectSnapshot(AuthenticationState.getLoggedUser), user );
        patchState({userList: this.getUserList()});
        this.store.dispatch( new SetActiveUser(result) );
    }

    getUserList(){
        return this.generalService.getAllUsers();
    }
}
