import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Little } from './little';

describe('Little', () => {
  let component: Little;
  let fixture: ComponentFixture<Little>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Little],
    }).compileComponents();

    fixture = TestBed.createComponent(Little);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
