import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Post } from '../models/Post';
import { User } from '../models/User';
import { AuthenticationState } from '../state-management/state/auth.state';
import { GeneralState } from '../state-management/state/general.state';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user: User = new User();
  public posts: Post[] = [];
  public isFriend = false;
  constructor( private store: Store, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe( paramMap => {
      const userId = paramMap.get('id');
      const user = this.store.selectSnapshot( AuthenticationState.getLoggedUser );
      if( user.id.toString() == userId || !userId ) {
        this.isFriend = false;
        this.user = user;
        this.posts = this.store.selectSnapshot( AuthenticationState.getLoggedUserPosts );
      } else {
        this.isFriend = true;
        this.user = user.friends.find((friend)=>{ return friend.id.toString() == userId })!;
        this.posts = this.store.selectSnapshot( AuthenticationState.getLoggedUserPosts ).filter((post) => {
          return post.userId == this.user.id;
        });
      }
      
    })
  }

}
