import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '../../../services/sesion.service';
import { DataDbService } from '../../../services/data-db.service';
import { DataPonentesService, Ponentes } from '../../../services/ponentes/data-ponentes.service';



@Component({
  selector: 'registro-congreso',
  templateUrl: './registro-congreso.component.html',
  styleUrls: ['./registro-congreso.component.css']
})
export class RegistroCongresoComponent implements OnInit {

  ponentes: Ponentes[] = [];
  @Input() ponente: any = {};
  @Input() index: number;
  @Output () ponenteSeleccion: EventEmitter<number>;

  congresoAlumnoForm: FormGroup;
  congresoExternoForm: FormGroup;
  opcion: string;
  ponentess: any[] = [
    {
      nombre: 'Mark Zuckergerb',
      correo: 'mz@gmail.com',
      taller: 'Taller Magistral',
      name: 'Conferencia de Mark',
      institucion: 'itlm',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/mz.jpg',
      completed: false
    },
    {
      nombre: 'Elon Musk',
      correo: 'em@gmail.com',
      taller: 'Taller Magistral',
      name: 'Conferencia de Elon',
      institucion: 'ITLM',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/em.png',
      completed: false,
    },
    {
      nombre: 'Bill Gates',
      correo: 'bg@gmail.com',
      taller: 'Taller Magistral',
      name: 'Conferencia de Bill',
      institucion: 'ITLM',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/bg.jpg',
      completed: false,
    },
    {
      nombre: 'Steve Jobs',
      correo: 'sj@gmail.com',
      taller: 'Taller Magistral',
      name: 'Conferencia de Steve',
      institucion: 'ITLM',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/sj.jpg',
      completed: false,
    },
    {
      nombre: 'Larry Page',
      correo: 'lp@gmail.com',
      taller: 'Taller Magistral',
      name: 'Conferencia Larry',
      institucion: 'ITLM',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/lp.jpg',
      completed: false,
    },
    {
      nombre: 'Mark Shuttleworth',
      correo: 'sj@gmail.com',
      taller: 'Taller Magistral',
      name: 'Conferencia shutnoseque',
      institucion: 'ITLM',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/ms.jpg',
      completed: false,
    },
  ];
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
    {
      name: 'Conferencia 4',
      completed: false,
    },
    {
      name: 'Conferencia 5',
      completed: false,
    },
    {
      name: 'Conferencia 6',
      completed: false,
    },
  ];
  talleres: any = [
    {
      name: 'Taller 1',
      completed: false,
    },
    {
      name: 'Taller 2',
      completed: false,
    },
  ];

 
  constructor(private _alumnoBuilder: FormBuilder, private _externoBuilder: FormBuilder, public sesi: SesionService, private dbData: DataDbService, private _ponentesS: DataPonentesService) { 
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
    this.ponentes = this._ponentesS.getPonentes();
    this.ponenteSeleccion = new EventEmitter();
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
    this.ponentess.forEach(() => this.confeMarcadasCongresoAlumExternoFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfTalleresMarcadas() {
    this.talleres.forEach(() => this.talleresMarcadosCongresoAlumExternoFormArray.push(new FormControl(false)));
  }

  ///////Para alumno del tec
  private addCheckboxesOfconfeMarcadasAlumno() {
    this.ponentess.forEach(() => this.confeMarcadasCongresoAlumosFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfTalleresMarcadasAlumno() {
    this.talleres.forEach(() => this.talleresMarcadosCongresoAlumosFormArray.push(new FormControl(false)));
  }

  //Para alumnos que no son del tec
  regresarConferenciasAlumExternoForm()
  {
     const conferencias = this.congresoExternoForm.value.confeMarcadas
      .map((checked, i) => checked ? this.ponentess[i].name : null)
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
      .map((checked, i) => checked ? this.ponentess[i].name : null)
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
