import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBrowserComponent } from './issue-browser.component';

describe('IssueBrowserComponent', () => {
  let component: IssueBrowserComponent;
  let fixture: ComponentFixture<IssueBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
