import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemanervosoComponent } from './sistemanervoso.component';

describe('SistemanervosoComponent', () => {
  let component: SistemanervosoComponent;
  let fixture: ComponentFixture<SistemanervosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemanervosoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemanervosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
