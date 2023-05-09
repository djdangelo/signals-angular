import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignalPageComponent } from './users-signal-page.component';

describe('UsersSignalPageComponent', () => {
  let component: UsersSignalPageComponent;
  let fixture: ComponentFixture<UsersSignalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSignalPageComponent]
    });
    fixture = TestBed.createComponent(UsersSignalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
