import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductoComponent } from './home-producto.component';

describe('HomeProductoComponent', () => {
  let component: HomeProductoComponent;
  let fixture: ComponentFixture<HomeProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProductoComponent]
    });
    fixture = TestBed.createComponent(HomeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
