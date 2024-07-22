import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatoryComponent } from './senatory.component';

describe('SenatoryComponent', () => {
  let component: SenatoryComponent;
  let fixture: ComponentFixture<SenatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenatoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
