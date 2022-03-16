import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFriendListComponent } from './user-friend-list.component';

describe('UserFriendListComponent', () => {
  let component: UserFriendListComponent;
  let fixture: ComponentFixture<UserFriendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFriendListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
