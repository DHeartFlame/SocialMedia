import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  initData() {
    fetch('../../assets/data.json')
      .then(result => { return result.json() })
      .then((data) => {
        const users = data.users.map((user: any) => { return new User().setValues(user) });
        const posts = data.posts.map((post: any) => { return new Post().setValues(post) });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('posts', JSON.stringify(posts));
      })
  }
  getUserActive() {
    const user = JSON.parse(localStorage.getItem('activeUser')!);
    return new User().setValues(user);
  }

  getAllUsers() {
    const users = JSON.parse(localStorage.getItem('users')!).map((user: User) => { return new User().setValues(user) });
    return users;
  }

  setUserFriend(activeUser: User, friend: User){
    const users = this.getAllUsers();
    const userIndex = users.findIndex((user: User)=>{return user.id == activeUser.id});
    const user = new User().setValues(activeUser);
    user.friends = Object.assign([], user.friends);
    user.friends.push(friend);
    users[userIndex] = user;
    localStorage.setItem('users', JSON.stringify(users));
    return user;
  }

  login(username: string, password: string) {
    const users = this.getAllUsers();
    const user = users.find((user: User) => { return user.username == username && new User().setValues(user).isPassword(password) });
    localStorage.setItem('activeUser', JSON.stringify(user));
    return user ? new User().setValues(user) : null;
  }

  logout() {
    localStorage.removeItem('activeUser');
  }

  register(user: User) {
    const users = this.getAllUsers();
    user.id = users[users.length - 1].id + 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
  }

  getPostsByUser(userId: number) {
    const user = JSON.parse(localStorage.getItem('users')!).find((user: User) => { return user.id == userId });
    const userFriendsId = '|'+user.friends.map((user:User) => { return user.id }).join('|')+'|';
    const posts = JSON.parse(localStorage.getItem('posts')!)
      .filter((post: Post) => { return post.userId == userId || userFriendsId.includes(post.userId.toString()) })
      .map((post: Post) => {
        const userData = post.userId == userId ? user : user.friends.find((user:User) => { return user.id == post.userId });
        post.user = new User().setValues(userData);
        return post;
      });

    return posts;
  }
}
