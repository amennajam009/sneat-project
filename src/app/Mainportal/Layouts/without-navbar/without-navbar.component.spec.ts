import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutNavbarComponent } from './without-navbar.component';

describe('WithoutNavbarComponent', () => {
  let component: WithoutNavbarComponent;
  let fixture: ComponentFixture<WithoutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
