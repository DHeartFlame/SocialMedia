import { User } from "src/app/models/User";

export class SetUserList {
	static readonly type = '[General] SetUserList';
	constructor() {
    }
}
export class AddUserFriend {
	static readonly type = '[General] AddUserFriend';
	constructor( public user: User ) {
    }
}
