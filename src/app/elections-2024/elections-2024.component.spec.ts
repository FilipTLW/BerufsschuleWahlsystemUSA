import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elections2024Component } from './elections-2024.component';

describe('Elections2024Component', () => {
  let component: Elections2024Component;
  let fixture: ComponentFixture<Elections2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elections2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Elections2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
