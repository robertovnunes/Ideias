import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformanteComponent } from './informante.component';

describe('InformanteComponent', () => {
  let component: InformanteComponent;
  let fixture: ComponentFixture<InformanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformanteComponent]
    });
    fixture = TestBed.createComponent(InformanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
