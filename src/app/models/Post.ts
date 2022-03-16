export class Post {
    public id: number = 0;
    public userId: number = 0;
    public imageUrl: string = '';
    public likes: number = 0;

    public setValues(obj: any) {
        Object.apply(this, obj);
    }
}