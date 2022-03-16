import { User } from "./User";

export class Post {
    public id: number = 0;
    public userId: number = 0;
    public imageUrl: string = '';
    public likes: number = 0;
    public user?: User;

    public setValues(obj: any) {
        Object.assign(this, obj);
        return this;
    }
}