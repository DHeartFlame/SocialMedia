import { User } from "src/app/models/User";

export class LoginUser {
	static readonly type = '[Authentication] LoginUser';
	constructor( public username: string, public password: string ) {
    }
}
export class RegisterUser {
	static readonly type = '[Authentication] RegisterUser';
	constructor( public user: User ) {
    }
}
export class SetActiveUser {
	static readonly type = '[Authentication] SetActiveUser';
	constructor( public user: User ) {
    }
}
export class LogoutUser {
	static readonly type = '[Authentication] LogoutUser';
	constructor() {
    }
}
