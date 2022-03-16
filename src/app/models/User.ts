export class User {
    public id: number = 0;
    public username: string = '';
    public profileImg: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public email: string = '';
    private password: string = '';
    public friends: User[] = [];

    public setValues(obj: any) {
        Object.apply(this, obj);
        return this;
    }

    public getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}