import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonatalComponent } from './neonatal.component';

describe('NeonatalComponent', () => {
  let component: NeonatalComponent;
  let fixture: ComponentFixture<NeonatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonatalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeonatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
