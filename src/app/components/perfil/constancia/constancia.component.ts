import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "src/assets/custom-fonts.js";  
pdfMake.vfs = pdfFonts.pdfMake.vfs;  
pdfMake.fonts = {
  courier: {
    normal: 'courier-new.ttf',
    bold: 'courier-new-bold.ttf',
  },
}

@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.component.html',
  styleUrls: ['./constancia.component.css']
})
export class ConstanciaComponent implements OnInit {
  nombre: string;
  num_control: string;
  carrera: string
  dia: any;
  mes: any;
  year: any;

  constructor(private sesi: SesionService) { 
    this.nombre = sesi.getNombreSesion() + ' ' + sesi.getApellidosSesion();
    this.num_control = '16440516'
    this.carrera = 'Ingenieria Informatica'
    this.dia= this.obtenerDiaLetras(new Date().getDate());
    this.mes= this.obtenerMesLetras(new Date().getMonth());
    this.year= new Date().getFullYear();
  }

  ngOnInit(): void {
        
  }

  pdf() {
    let contenido = {  
      pageSize: 'LETTER',
      pageMargins: [50, 30, 50, 0],

      content: [
        {
          text: '\n\n\n\n CONSTANCIA DE CUMPLIMIENTO DE ACTIVIDAD COMPLEMENTARIA \n\n\n\n',
          font: 'courier',
          bold: true,
          alignment: 'justify',
          fontSize: 13,
        },
        {
          text: 'MTRO. NATANAEL PARRA GUTIÉRREZ',
          font: 'courier',
          bold: true,
          alignment: 'justify',
          fontSize: 11,
        },
        {
          text: 'JEFE DEL DEPARTAMENTO DE SERVICIOS ESCOLARES',
          font: 'courier',
          bold: true,
          alignment: 'justify',
          fontSize: 11,
        },
        {
          text: 'P R E S E N T E \n\n\n\n',
          font: 'courier',
          bold: true,
          alignment: 'justify',
          fontSize: 11,
        },
        {
          text: [
            'El que suscribe',
            {text: ' M.C. Karyme Elizabeth Estrada Castro ', bold: true},
            'por este medio se permite hacer de su conocimiento que el (la) estudiante C. '+this.nombre+' con número de control '+this.num_control+' de la carrera de '+this.carrera+' ha cumplido su actividad complementaria',
            {text: ' ASISTENCIA A CONFERENCIAS ', bold: true},
            'en el marco del Tercer Congreso Internacional de Investigación del Tecnológico Nacional de México en el Instituto Tecnológico de Los Mochis con el nivel de desempeño',
            {text: ' EXCELENTE ', bold: true},
            'y un valor numérico de',
            {text: ' 4 ', bold: true},
            'durante el periodo escolar AGOSTO – DICIEMBRE '+this.year+' con  un  valor  curricular de',
            {text: ' 2 CRÉDITOS.', bold: true},
          ],
          alignment: 'justify',
          font: 'courier',
          fontSize: 12,
        },
        {
          text: '\n\nSe extiende la presente Constancia en la Ciudad de Los Mochis, Sinaloa, a los '+this.dia+' días del mes de '+this.mes+' de '+this.year+'',
          font: 'courier',
          alignment: 'justify',
          fontSize: 12,
        },
        {
          text: '\n\n\n\n ATENTAMENTE',
          font: 'courier',
          bold: true,
          alignment: 'center',
          fontSize: 12,
        },
        {
          text: '\n\n\n\n\n _____________________________         ______________________________',
          font: 'courier',
          alignment: 'center',
          fontSize: 12,
        },
        {
          text: '\nResponsable del Programa                    Jefa del Departamento',
          font: 'courier',
          alignment: 'left',
          fontSize: 11,
          margin: [33, 0, 0, 0]
        },
        {
          text: 'M.C. KARYME ELIZABETH ESTRADA CASTRO           M.C. KARYME ELIZABETH ESTRADA CASTRO',
          font: 'courier',
          alignment: 'left',
          fontSize: 10,
          margin: [7, 0, 0, 0]
        },
        {
          text: 'JEFA DE LA DIVISIÓN DE ESTUDIOS DE POSGRADO E INVESTIGACIÓN',
          font: 'courier',
          alignment: 'center',
          fontSize: 9,
          margin: [280, 0, 0, 0]
        },
      ]
    };

    pdfMake.createPdf(contenido).open(); 
  }
  
  obtenerDiaLetras(numero: number) {
    var dia = new Array(31);
    dia[0] = "un";
    dia[1] = "dos";
    dia[2] = "tres";
    dia[3] = "cuatro";
    dia[4] = "cinco";
    dia[5] = "seis";
    dia[6] = "siete";
    dia[7] = "ocho";
    dia[8] = "nueve";
    dia[9] = "diez";
    dia[10] = "once";
    dia[11] = "doce";
    dia[12] = "trece";
    dia[13] = "catorce";
    dia[14] = "quince";
    dia[15] = "dieciseis";
    dia[16] = "deicisiete";
    dia[17] = "dieciocho";
    dia[18] = "diecinueve";
    dia[19] = "veinte";
    dia[20] = "veintiuno";
    dia[21] = "veintidos";
    dia[22] = "veintitres";
    dia[23] = "veinticuatro";
    dia[24] = "veinticinco";
    dia[25] = "veintiseis";
    dia[26] = "veintisiete";
    dia[27] = "veintiocho";
    dia[28] = "veintinueve";
    dia[29] = "treinta";
    dia[30] = "treintaiuno";
    return dia[numero-1];
  }
  obtenerMesLetras(numero: number) {
    var mes = new Array(12);
    mes[0] = "enero";
    mes[1] = "febrero";
    mes[2] = "marzo";
    mes[3] = "abril";
    mes[4] = "mayo";
    mes[5] = "junio";
    mes[6] = "julio";
    mes[7] = "agosto";
    mes[8] = "septiembre";
    mes[9] = "octubre";
    mes[10] = "noviembre";
    mes[11] = "diciembre";
    return mes[numero-1];
  }
  
}
