import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.scss']
})
export class ProfilePostComponent implements OnInit {
  @Input() post: Post = new Post();
  @Input() user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
