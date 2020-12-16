import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCongresoComponent } from './perfil-congreso.component';

describe('PerfilCongresoComponent', () => {
  let component: PerfilCongresoComponent;
  let fixture: ComponentFixture<PerfilCongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCongresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
