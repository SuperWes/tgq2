import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldSiteComponent } from './old-site.component';

describe('OldSiteComponent', () => {
  let component: OldSiteComponent;
  let fixture: ComponentFixture<OldSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
