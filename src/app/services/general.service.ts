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

  login(username: string, password: string) {
    const users = JSON.parse( localStorage.getItem('users') ?? '' );
    const user = users.find((user: User) => { return user.username == username && new User().setValues(user).isPassword(password) });
    return user;
  }

  register(user: User){
    const users = JSON.parse( localStorage.getItem('users') ?? '' );
    user.id = users[users.length - 1].id + 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
  }
}
