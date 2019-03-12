import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoListComponent } from './rendimiento-list.component';

describe('RendimientoListComponent', () => {
  let component: RendimientoListComponent;
  let fixture: ComponentFixture<RendimientoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendimientoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendimientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
