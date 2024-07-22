import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentElectionsComponent } from './president-elections.component';

describe('PresidentElectionsComponent', () => {
  let component: PresidentElectionsComponent;
  let fixture: ComponentFixture<PresidentElectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidentElectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresidentElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
