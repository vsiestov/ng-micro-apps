import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumPageComponent } from './scrum-page.component';

describe('ScrumPageComponent', () => {
  let component: ScrumPageComponent;
  let fixture: ComponentFixture<ScrumPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
