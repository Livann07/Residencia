import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '../../../services/sesion.service';
import { DataDbService } from '../../../services/data-db.service';
import { DataPonentesService} from '../../../services/ponentes/data-ponentes.service';
import { conferencistas } from '../../../models/conferencistas.interface';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'registro-congreso',
  templateUrl: './registro-congreso.component.html',
  styleUrls: ['./registro-congreso.component.css']
})
export class RegistroCongresoComponent implements OnInit {

  ponentes: conferencistas[] = [];
  @Input() ponente: any = {};
  @Input() index: number;
  @Output () ponenteSeleccion: EventEmitter<number>;

  congresoAlumnoForm: FormGroup;
  congresoExternoForm: FormGroup;
  opcion: string;
  clienteSubscription: Subscription;
  isParticipante: boolean;
  oo:Boolean;
  suscripcionD : Subscription;

  public myAngularxQrCode: string = null;
  public hid: boolean;
  ponentess : any [];
  
  public car: String;
  carreras: any[] = [
    {
      valor: 'Licenciatura en Administración',
      vista: 'Lic. en Administracion',
    },
    {
      valor: 'Contador Público',
      vista: 'Contador Público',
    },
    {
      valor: 'Ingeniería Industrial',
      vista: 'Ing. Industrial',
    },
    {
      valor: 'Ingeniería Informática',
      vista: 'Ing. Informática',
    },
    {
      valor: 'Licenciatura en Biología',
      vista: 'Lic. en Biología',
    },
    {
      valor: 'Ingeniería Bioquímica',
      vista: 'Ing. Bioquímica',
    },
    {
      valor: 'Ingeniería Química',
      vista: 'Ing. Química',
    },
    {
      valor: 'Ingeniería en Gestión Empresarial',
      vista: 'Ing. en Gestión Empresarial',
    },
    {
      valor: 'Ingeniería Mecatrónica',
      vista: 'Ing. Mecatrónica',
    },
    {
      valor: 'Ingeniería Electrónica',
      vista: 'Ing. Electrónica',
    },
    {
      valor: 'Ingeniería Electromecánica',
      vista: 'Ing. Electromecánica',
    },
    {
      valor: 'Arquitectura',
      vista: 'Arquitectura',
    },
    {
      valor: 'Ingeniería en Industrias Alimentarias',
      vista: 'Ing. en Industrias Alimentarias',
    },
    {
      valor: 'Ingeniería en Innovación Agrícola Sustentable',
      vista: 'Ing. en Innovación Agrícola Sustentable',
    },
  ]

  /*conferencias: any = [
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
  ];*/

  talleres: any [];

  ponentesSC: any [];

 
  constructor(private _ponentesService: DataPonentesService,private _alumnoBuilder: FormBuilder, private _externoBuilder: FormBuilder, public sesi: SesionService, private dbData: DataDbService, private _ponentesS: DataPonentesService, private router: Router) { 
    setTimeout(() => {
      this._ponentesService.getPonentes();
    }, 1000); 
    this.ponentess= this.guardarConferencistas();
    this.separarCadaTipoDeAsistente(this.ponentess);

    this.congresoAlumnoForm =this. _alumnoBuilder.group({
      numControl: ["", Validators.required],
      carrera: ["", Validators.required],
      celular1: ["", Validators.required],
      docente: [""],
      confeMarcadas: new FormArray([]),
      talleresMarcados: new FormArray([]),
      ponentesMarcados: new FormArray([]),
    });
    this.congresoExternoForm =this. _externoBuilder.group({
      celular2: ["", Validators.required],
      institucion: ["", Validators.required],
      confeMarcadas: new FormArray([]),
      talleresMarcados: new FormArray([]),
      ponentesMarcados: new FormArray([]),
    });

    //externos
    this.addCheckboxesOfconfeMarcadas();
    this.addCheckboxesOfTalleresMarcadas();
    this.addCheckboxesOfPonentesMarcadas();
    //internos
    this.addCheckboxesOfconfeMarcadasAlumno();
    this.addCheckboxesOfTalleresMarcadasAlumno();
    this.addCheckboxesOfPonentesMarcadasAlumno();

    this.comprobarRegistro();

    this.myAngularxQrCode = this.generarCorreoEnCodigo();
    this.hid = true;
    this.oo = false;
  }

  ngOnInit(): void {
    //this.ponentes = this._ponentesS.getPonentes();
    /*setTimeout(() => {
      this._ponentesService.getPonentes();
    }, 1000); 
    this.ponentess= this.guardarConferencistas();*/
    this.ponenteSeleccion = new EventEmitter();
  }
 

  
  //Para alumno externo
  get confeMarcadasCongresoAlumExternoFormArray() {
    return this.congresoExternoForm.controls.confeMarcadas as FormArray;
  }
  get talleresMarcadosCongresoAlumExternoFormArray() {
    return this.congresoExternoForm.controls.talleresMarcados as FormArray;
  }

  get ponentesMarcadosCongresoAlumExternoFormArray() {
    return this.congresoExternoForm.controls.ponentesMarcados as FormArray;
  }

  //Para alumno del tec
  get confeMarcadasCongresoAlumosFormArray() {
    return this.congresoAlumnoForm.controls.confeMarcadas as FormArray;
  }
  get talleresMarcadosCongresoAlumosFormArray() {
    return this.congresoAlumnoForm.controls.talleresMarcados as FormArray;
  }

  get ponentesMarcadosCongresoAlumosFormArray() {
    return this.congresoAlumnoForm.controls.ponentesMarcados as FormArray;
  }

  ///////Para alumno externo
  private addCheckboxesOfconfeMarcadas() {
    this.ponentess.forEach(() => this.confeMarcadasCongresoAlumExternoFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfTalleresMarcadas() {
    this.talleres.forEach(() => this.talleresMarcadosCongresoAlumExternoFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfPonentesMarcadas() {
    this.ponentesSC.forEach(() => this.ponentesMarcadosCongresoAlumExternoFormArray.push(new FormControl(false)));
  }

  ///////Para alumno del tec
  private addCheckboxesOfconfeMarcadasAlumno() {
    this.ponentess.forEach(() => this.confeMarcadasCongresoAlumosFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfTalleresMarcadasAlumno() {
    this.talleres.forEach(() => this.talleresMarcadosCongresoAlumosFormArray.push(new FormControl(false)));
  }
  private addCheckboxesOfPonentesMarcadasAlumno() {
    this.ponentesSC.forEach(() => this.ponentesMarcadosCongresoAlumosFormArray.push(new FormControl(false)));
  }

  //Para alumnos que no son del tec
  regresarConferenciasAlumExternoForm()
  {
     const conferencias = this.congresoExternoForm.value.confeMarcadas
      .map((checked, i) => checked ? this.ponentess[i].nombre : null)
      .filter(v => v !== null);
      return conferencias;
  }
  regresarTalleresAlumExternoForm()
  {
     const talleres = this.congresoExternoForm.value.talleresMarcados
      .map((checked, i) => checked ? this.talleres[i].nombre : null)
      .filter(v => v !== null);
      return talleres;
  }

  regresarPonentesAlumExternoForm()
  {
     const ponentes = this.congresoExternoForm.value.ponentesMarcados
      .map((checked, i) => checked ? this.ponentesSC[i].nombre : null)
      .filter(v => v !== null);
      return ponentes;
  }

  //Para alumnos del tec
  regresarConferenciasAlumosForm()
  {
     const conferencias = this.congresoAlumnoForm.value.confeMarcadas
      .map((checked, i) => checked ? this.ponentess[i].nombre : null)
      .filter(v => v !== null);
      return conferencias;
  }
  regresarTalleresAlumnosForm()
  {
     const talleres = this.congresoAlumnoForm.value.talleresMarcados
      .map((checked, i) => checked ? this.talleres[i].nombre : null)
      .filter(v => v !== null);
      return talleres;
  }
  regresarPonentesAlumnosForm()
  {
     const ponentes = this.congresoAlumnoForm.value.ponentesMarcados
      .map((checked, i) => checked ? this.ponentesSC[i].nombre : null)
      .filter(v => v !== null);
      return ponentes;
  }
  
  enviarExternos() {

    const ext = {
      nombre: this.sesi.getNombreSesion() + " " + this.sesi.getApellidosSesion(),
      correo: this.sesi.getCorreoSesion(),
      celular: this.congresoExternoForm.value.celular2,
      institucion: this.congresoExternoForm.value.institucion,
      conferencias: this.regresarConferenciasAlumExternoForm(),
      talleres: this.regresarTalleresAlumExternoForm(),
      ponentes: this.regresarPonentesAlumExternoForm(),
    };
    this.dbData.saveAlumExterno(ext);

    const partExt = {
      correo: this.sesi.getCorreoSesion(),
      participante: 'alumExterno',
      asistio: 'no',
    };
    this.dbData.saveParticipante(partExt);
    
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
      ponentes: this.regresarPonentesAlumnosForm(),
    };
    this.dbData.saveAlumnos(alum);

    const partInt = {
      correo: this.sesi.getCorreoSesion(),
      participante: 'alumInterno',
      asistio: "no",
    };
    this.dbData.saveParticipante(partInt);
    
  }
  comprobarRegistro(){
    if(localStorage.getItem("participa") == null) {
      this.recibirDatos();
    }
    else {
      this.isParticipante = true;
    }
  }

  recibirDatos()
  {
    var datos: any;
    
    this.clienteSubscription = this.dbData.getparticipantes().subscribe(resp =>{
      
      datos = resp.map((e: any) => {
        return {
          correo: e.payload.doc.data()['correo'],
        };
      });

      /*datos = resp.map(e => e.payload.doc.data());
      console.log(datos);*/
      
      this.clienteSubscription.unsubscribe();
      this.compararDatos(datos);
    });
  }
  compararDatos(values: any){ 
    var encontro = false;
    values.forEach(element => {
      if(element.correo == this.sesi.getCorreoSesion())
      {
        this.isParticipante = true;
        encontro = true;
        localStorage.setItem('participa', 'true');
      }
    });
    if(encontro == false)
    {
      this.isParticipante = false;
    }
  }

  mostrarCodigo() {
    this.hid = !this.hid;
  }

  generarCorreoEnCodigo() {
    let l = CryptoJS.AES.encrypt(this.sesi.getCorreoSesion(), '9876543210').toString();
    return l;
  }

  private guardarConferencistas():any{
    var ls = JSON.parse(localStorage.getItem('conferencistas'));
    
    if(ls == null){
      this.suscripcionD = this._ponentesService.getConferencistas().subscribe(respuesta =>{
        this.ponentes = respuesta.map((e: any)=> {
          return e.payload.doc.data();
        });
        localStorage.setItem('conferencistas', JSON.stringify(this.ponentes));
        this.ponentes = JSON.parse(localStorage.getItem('conferencistas'));
        this.suscripcionD.unsubscribe();
        this.oo = true;
      });
      //console.log('es' + this.ponentes);
      //console.log('Hola 1');
    }else{
      this.ponentes= ls;
      this.oo = true;
    }
    return this.ponentes;
  }

  private separarCadaTipoDeAsistente(a : any[]){
    const userby = tipo => u => u.tipo == tipo; //encapsulates the finding logic 

    const tipoPonentes = 'Ponente';
    const tipoConferencistas = 'Conferencista';
    const tipoTallerista = 'Tallerista';
    //const use = a.find(userby(tipo));
    var ponentes = a.filter(userby(tipoPonentes));
    var conferencistas = a.filter(userby(tipoConferencistas));
    var tallerista = a.filter(userby(tipoTallerista));
  
    this.ponentess = conferencistas;
    this.ponentesSC = ponentes;
    this.talleres = tallerista;
   
  }
  
    
}
