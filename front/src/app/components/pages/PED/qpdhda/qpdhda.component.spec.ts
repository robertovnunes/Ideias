import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpdhdaComponent } from './qpdhda.component';

describe('QpdhdaComponent', () => {
  let component: QpdhdaComponent;
  let fixture: ComponentFixture<QpdhdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QpdhdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QpdhdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
