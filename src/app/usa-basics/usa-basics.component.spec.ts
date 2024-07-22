import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaBasicsComponent } from './usa-basics.component';

describe('UsaBasicsComponent', () => {
  let component: UsaBasicsComponent;
  let fixture: ComponentFixture<UsaBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsaBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsaBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
