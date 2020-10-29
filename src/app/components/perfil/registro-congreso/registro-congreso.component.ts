import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '../../../services/sesion.service';
import { DataDbService } from '../../../services/data-db.service';

@Component({
  selector: 'registro-congreso',
  templateUrl: './registro-congreso.component.html',
  styleUrls: ['./registro-congreso.component.css']
})
export class RegistroCongresoComponent implements OnInit {
  congresoAlumnoForm: FormGroup;
  congresoExternoForm: FormGroup;
  opcion: string;
  conferencias: any = [
    {
      name: 'Conferencia 1',
      completed: false,
    },
    {
      name: 'Conferencia 2',
      completed: false,
    },
    {
      name: 'Conferencia 3',
      completed: false,
    },
  ];
  talleres: any = [
    {
      name: 'taller 1',
      completed: false,
    },
    {
      name: 'taller 2',
      completed: false,
    },
  ];
  constructor(private _alumnoBuilder: FormBuilder, private _externoBuilder: FormBuilder, public sesi: SesionService, private dbData: DataDbService) { 
    this.congresoAlumnoForm =this. _alumnoBuilder.group({
      numControl: ["", Validators.required],
      carrera: ["", Validators.required],
      celular1: ["", Validators.required],
      docente: [""],
      confeMarcadas: new FormArray([]),
      talleresMarcados: new FormArray([]),
    });
    this.congresoExternoForm =this. _externoBuilder.group({
      celular2: ["", Validators.required],
      institucion: ["", Validators.required],
      confeMarcadas: new FormArray([]),
      talleresMarcados: new FormArray([]),
    });

    //externos
    this.addCheckboxesOfconfeMarcadas();
    this.addCheckboxesOfTalleresMarcadas();
    //internos
    this.addCheckboxesOfconfeMarcadasAlumno();
    this.addCheckboxesOfTalleresMarcadasAlumno();
  }

  ngOnInit(): void {
  }
  
  //Para alumno externo
  get confeMarcadasCongresoAlumExternoFormArray() {
    return this.congresoExternoForm.controls.confeMarcadas as FormArray;
  }
  get talleresMarcadosCongresoAlumExternoFormArray() {
    return this.congresoExternoForm.controls.talleresMarcados as FormArray;
  }

  //Para alumno del tec
  get confeMarcadasCongresoAlumosFormArray() {
    return this.congresoAlumnoForm.controls.confeMarcadas as FormArray;
  }
  get talleresMarcadosCongresoAlumosFormArray() {
    return this.congresoAlumnoForm.controls.talleresMarcados as FormArray;
  }

  ///////Para alumno externo
  private addCheckboxesOfconfeMarcadas() {
    this.conferencias.forEach(() => this.confeMarcadasCongresoAlumExternoFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfTalleresMarcadas() {
    this.talleres.forEach(() => this.talleresMarcadosCongresoAlumExternoFormArray.push(new FormControl(false)));
  }

  ///////Para alumno del tec
  private addCheckboxesOfconfeMarcadasAlumno() {
    this.conferencias.forEach(() => this.confeMarcadasCongresoAlumosFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfTalleresMarcadasAlumno() {
    this.talleres.forEach(() => this.talleresMarcadosCongresoAlumosFormArray.push(new FormControl(false)));
  }

  //Para alumnos que no son del tec
  regresarConferenciasAlumExternoForm()
  {
     const conferencias = this.congresoExternoForm.value.confeMarcadas
      .map((checked, i) => checked ? this.conferencias[i].name : null)
      .filter(v => v !== null);
      return conferencias;
  }
  regresarTalleresAlumExternoForm()
  {
     const talleres = this.congresoExternoForm.value.talleresMarcados
      .map((checked, i) => checked ? this.talleres[i].name : null)
      .filter(v => v !== null);
      return talleres;
  }
  //Para alumnos del tec
  regresarConferenciasAlumosForm()
  {
     const conferencias = this.congresoAlumnoForm.value.confeMarcadas
      .map((checked, i) => checked ? this.conferencias[i].name : null)
      .filter(v => v !== null);
      return conferencias;
  }
  regresarTalleresAlumnosForm()
  {
     const talleres = this.congresoAlumnoForm.value.talleresMarcados
      .map((checked, i) => checked ? this.talleres[i].name : null)
      .filter(v => v !== null);
      return talleres;
  }
  
  enviarExternos() {

    const ext = {
      nombre: this.sesi.getNombreSesion() + " " + this.sesi.getApellidosSesion(),
      correo: this.sesi.getCorreoSesion(),
      celular: this.congresoExternoForm.value.celular2,
      institucion: this.congresoExternoForm.value.institucion,
      conferencias: this.regresarConferenciasAlumExternoForm(),
      talleres: this.regresarTalleresAlumExternoForm(),
    }
    this.dbData.saveAlumExterno(ext);
  }
  enviarAlumnos()
  {
    const alum = {
      nombre: this.sesi.getNombreSesion() + " " + this.sesi.getApellidosSesion(),
      correo: this.sesi.getCorreoSesion(),
      numControl: this.congresoAlumnoForm.value.numControl,
      celular: this.congresoAlumnoForm.value.celular1,
      carrera: this.congresoAlumnoForm.value.carrera,
      docente: this.congresoAlumnoForm.value.docente,
      conferencias: this.regresarConferenciasAlumosForm(),
      talleres: this.regresarTalleresAlumnosForm(),
    }
    this.dbData.saveAlumnos(alum);
  }

}
