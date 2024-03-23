import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculoesqueleticoComponent } from './musculoesqueletico.component';

describe('MusculoesqueleticoComponent', () => {
  let component: MusculoesqueleticoComponent;
  let fixture: ComponentFixture<MusculoesqueleticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusculoesqueleticoComponent]
    });
    fixture = TestBed.createComponent(MusculoesqueleticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
