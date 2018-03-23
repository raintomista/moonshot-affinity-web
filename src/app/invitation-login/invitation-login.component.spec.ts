import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationLoginComponent } from './invitation-login.component';

describe('InvitationLoginComponent', () => {
  let component: InvitationLoginComponent;
  let fixture: ComponentFixture<InvitationLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
