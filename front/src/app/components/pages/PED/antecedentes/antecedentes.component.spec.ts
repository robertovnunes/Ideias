import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesComponent } from './antecedentes.component';

describe('AntecedentesComponent', () => {
  let component: AntecedentesComponent;
  let fixture: ComponentFixture<AntecedentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntecedentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
