import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-profile-preview',
  templateUrl: './user-profile-preview.component.html',
  styleUrls: ['./user-profile-preview.component.scss']
})
export class UserProfilePreviewComponent implements OnInit {

  @Input() user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
