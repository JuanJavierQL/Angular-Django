import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoSelectComponent } from './rendimiento-select.component';

describe('RendimientoSelectComponent', () => {
  let component: RendimientoSelectComponent;
  let fixture: ComponentFixture<RendimientoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendimientoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendimientoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
