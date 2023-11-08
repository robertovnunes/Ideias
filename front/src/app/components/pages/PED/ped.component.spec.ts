import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedComponent } from './ped.component';

describe('ProntuarioComponent', () => {
  let component: PedComponent;
  let fixture: ComponentFixture<PedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedComponent]
    });
    fixture = TestBed.createComponent(PedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
