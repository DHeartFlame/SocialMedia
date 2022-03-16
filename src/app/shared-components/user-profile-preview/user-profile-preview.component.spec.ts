import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePreviewComponent } from './user-profile-preview.component';

describe('UserProfilePreviewComponent', () => {
  let component: UserProfilePreviewComponent;
  let fixture: ComponentFixture<UserProfilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
