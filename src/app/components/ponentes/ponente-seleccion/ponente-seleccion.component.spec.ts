import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonenteSeleccionComponent } from './ponente-seleccion.component';

describe('PonenteSeleccionComponent', () => {
  let component: PonenteSeleccionComponent;
  let fixture: ComponentFixture<PonenteSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonenteSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonenteSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
