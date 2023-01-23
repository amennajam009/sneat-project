import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutMenuComponent } from './without-menu.component';

describe('WithoutMenuComponent', () => {
  let component: WithoutMenuComponent;
  let fixture: ComponentFixture<WithoutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
