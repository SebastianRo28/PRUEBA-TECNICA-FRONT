import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProcutoComponent } from './agregar-procuto.component';

describe('AgregarProcutoComponent', () => {
  let component: AgregarProcutoComponent;
  let fixture: ComponentFixture<AgregarProcutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProcutoComponent]
    });
    fixture = TestBed.createComponent(AgregarProcutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
