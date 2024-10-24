import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosientComponent } from './posient.component';

describe('PosientComponent', () => {
  let component: PosientComponent;
  let fixture: ComponentFixture<PosientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
