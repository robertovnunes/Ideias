import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiratorioComponent } from './respiratorio.component';

describe('RespiratorioComponent', () => {
  let component: RespiratorioComponent;
  let fixture: ComponentFixture<RespiratorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespiratorioComponent]
    });
    fixture = TestBed.createComponent(RespiratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
