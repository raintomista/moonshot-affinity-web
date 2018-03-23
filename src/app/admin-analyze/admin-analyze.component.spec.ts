import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnalyzeComponent } from './admin-analyze.component';

describe('AdminAnalyzeComponent', () => {
  let component: AdminAnalyzeComponent;
  let fixture: ComponentFixture<AdminAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
