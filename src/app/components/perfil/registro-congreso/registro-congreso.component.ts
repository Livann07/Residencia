import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '../../../services/sesion.service';
import { DataDbService } from '../../../services/data-db.service';
import { DataPonentesService, Ponentes } from '../../../services/ponentes/data-ponentes.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';

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
  clienteSubscription: Subscription;
  isParticipante: boolean;
  public car: String;

  public myAngularxQrCode: string = null;
  public hid: boolean;
  ponentess: any[] = [
    {
      name: 'Dr. Diego Alfredo Tlapa Mendoza',
      tipo: 'Conferencista',
      nomConferencia: 'Lean six sigma el reto de incrementar la calidad y eficiencia en el contexto de la industria 4.0',
      desConferencia: 'El Dr. DIEGO TLAPA se desempeña como Profesor - Investigador en la Facultad de Ingeniería, Arquitectura y Diseño de la UABC donde colabora en el programa de Ing. Industrial, así como en el programa de Maestría y Doctorado en Ciencias e Ingeniería, perteneciente al padrón de calidad de CONACYT.',
      datosPonente: 'El Dr. DIEGO TLAPA se desempeña como Profesor-Investigador en la Facultad de Ingeniería, Arquitectura y Diseño de la UABC donde colabora en el programa de Ing. Industrial, así como en el programa de Maestría y Doctorado en Ciencias e Ingeniería, perteneciente al padrón de calidad de CONACYT.',
      datosPonente1:'Cuenta con la distinción como Miembro del Sistema Nacional de Investigadores Nivel 1, es responsable del Cuerpo Académico Consolidado “Calidad y Productividad” y cuenta con perfil deseable PRODEP otorgado por la SEP. Además, es responsable de la red de investigación internacional “Calidad y Manufactura Esbelta” y miembro de la red temática internacional “Red de Optimización de Procesos Industriales”.',
      datosPonente2: 'El Dr. Tlapa es Ing. Industrial por el Instituto Tecnológico de Ciudad Juárez, cuenta con la Maestría en Ingeniería, así como el Doctorado en Ciencias, ambos por la Universidad Autónoma de Baja California. Cuenta con una estancia posdoctoral en la University of California, Irvine, una especialidad en Sistemas Integrados de Gestión por la Sociedad Alemana de la Calidad, así como un micromaster en Supply Chain Management por el Massachusetts Institute of Technology (MIT-EDX).',
      datosPonente3: 'El interés de investigación del Dr. Tlapa es la Mejora Continua de Procesos, Gestión de la Cadena de Suministro, Estadística Aplicada y Equipos de Mejora. Particularmente se interesa en la metodología Lean Six Sigma y su aplicación en diferentes sectores. Su productividad científica abarca más de 40 artículos indizados, 8 capítulos de libro y 20 memorias en extenso. Además, ha dirigido más de 15 tesis de licenciatura y posgrado.',
      datosPonenteLista: '',
      fecha: 'Miércoles 18 de noviembre | 20:00 - 21:00',
      img: 'assets/img/diego.jpg',
      completed: false,
    },
    {
      name: 'Dr. Edgardo Jonathan Suárez Domínguez',
      tipo: 'Conferencista',
      nomConferencia: 'Mecanismos de transferencia de calor en edificaciones tradicionales y vernáculas y la importancia de la confortabilidad',
      desConferencia: 'Químico Industrial, Arquitecto, Maestro en Ingeniería, Doctor en Administración y Doctor en Ingeniería Mecánica con mención honorífica por la UNAM. Tiene 15 años de experiencia en docencia.',
      datosPonente: 'Químico Industrial, Arquitecto, Maestro en Ingeniería, Doctor en Administración y Doctor en Ingeniería Mecánica con mención honorífica por la UNAM. Tiene 15 años de experiencia en docencia. Es profesor de la FADU de la UAT desde el 2016 en el área de estructuras (con las asignaturas de resistencia de materiales y mecánica de cuerpos rígidos) y profesor investigador con distinción de candidato del Sistema Nacional de Investigadores. Coordinador de laboratorio de materiales 2016-2018 y Jefe de la Unidad de Posgrado de la misma Facultad desde enero de 2018-agosto 2020.',
      datosPonente1: 'Ha dirigido tesis de licenciatura, maestría y doctorado principalmente en análisis mecánico y fenómenos de transporte en sólidos. Sus asesorados se caracterizan por publicar en congresos y revistas internacionales. Cuenta con 4 patentes otorgadas, una patente en evaluación de un inhibidor de arrastre de aceite y dos patentes en evaluación, por parte de la UAT, sobre producción de sólidos útiles en el área de la construcción. Cuenta con 5 registros de derechos de autor sobre softwares desarrollados con aplicabilidad en la industria del petróleo y 2 registros de derechos de autor por la producción de obras.',
      datosPonente2: 'Los últimos tres años ha publicado más de 20 artículos en revistas indizadas e indexadas, ha participado en diversos congresos nacionales e internacionales. Ha colaborado de 2009  a la fecha en proyectos apoyados por el CONACYT en la UNAM. En la UAT desde el 2016 ha colaborado en 3 proyectos apoyados por diversos fondos CONACYT, uno apoyado por la SEMARNAT-CONACYT y uno apoyado por el PFI-UAT.Su desarrollo profesional se encuentra principalmente en el diseño y construcción de industrias de la producción. Ha participado en la evaluación de Tecnologías de biocombustibles en España (2011) Colombia (2012) y ha evaluado nuevas tecnologías sostenibles en el tratamiento de aguas de formación en Estados Unidos durante el 2013.',
      datosPonente3: 'Ha Realizado estancias científicas en Cuba, Canadá, Estados Unidos, Inglaterra, España, Rusia y Reino Unido. Dictaminador de profesores y proyectos de investigación en diversas convocatorias desde el 2018. Es miembro activo de la Red Proterra, de la Sociedad de Ingenieros Petroleros, Sociedad Mexicana de Física y Sociedad Química de México, Colaborador de Cátedra   UNESCO  «Arquitecturas  de  tierra,   culturas   constructivas  y  desarrollo  sostenible»   de CRAterre',
      datosPonenteLista: '',
      fecha: 'Jueves 19 de noviembre | 9:00 - 10:00',
      img: 'assets/img/ed.jpg',
      completed: false,
    },
    {
      name: 'Dr. Jaime E. Arau Roffiel',
      tipo: 'Conferencista',
      nomConferencia: 'Gestión exitosa de proyectos de innovación tecnológica, una visión desde el sector académico',
      desConferencia: 'Ingeniero Electrónico en Instrumentación por el Instituto Tecnológico de Minatitlan, Veracruz (1982). Doctor Ingeniero Industrial con especialidad en Electrónica de Potencia por la Universidad Politécnica de Madrid, España (1991). Desde octubre de 1994 a la fecha es Profesor Investigador de tiempo completo en el Centro Nacional de Investigación y Desarrollo Tecnológico – CENIDET.',
      datosPonente: 'Ingeniero Electrónico en Instrumentación por el Instituto Tecnológico de Minatitlan, Veracruz (1982). Doctor Ingeniero Industrial con especialidad en Electrónica de Potencia por la Universidad Politécnica de Madrid, España (1991). Desde octubre de 1994 a la fecha es Profesor Investigador de tiempo completo en el Centro Nacional de Investigación y Desarrollo Tecnológico – CENIDET.',
      datosPonente1: 'Ha trabajado en temas relacionados con el ahorro y uso eficiente de la energía eléctrica, aplicado a sistemas de alimentación electrónicos, así como en la cosecha de energía renovable y balastros electrónicos, en los que ha formado a 46 estudiantes de maestría y 9 de doctorado y tiene publicados más de 190 artículos en revistas y congresos internacionales de alto impacto.',
      datosPonente2: 'Ha sido miembro del Sistema Nacional de Investigadores – SNI por más de 25 años; recibió la Medalla Tercer Milenio del Institute of Electrical and Electronics Engineers en el año 2000. Pertenece desde 1999 a la Academia Mexicana de Ciencias y desde 2004 a la Academia de Ciencias de Morelos.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Miércoles 18 de noviembre | 19:00 - 20:00',
      img: 'assets/img/jaime.jpg',
      completed: false,
    },
    {
      name: 'Dra. Yesica Imelda Saavedra Benitez',
      tipo: 'Conferencista',
      nomConferencia: 'Por qué estudiar un posgrado',
      desConferencia: 'La Dra. Yesica Imelda Saavedra Benitez, cuenta con un Doctorado en Ciencias en Ingeniería Electrónica (Seguridad en Telecomunicaciones) en la Universidad de Versailles Saint Quentin en Yvelines, Francia, con una Maestría en Administración por la Universidad Autónoma del Estado de Morelos y es Ingeniero en Sistemas Computacionales del Instituto Tecnológico de Toluca, Tecnológico Nacional de México.',
      datosPonente: 'La Dra. Yesica Imelda Saavedra Benitez, cuenta con un Doctorado en Ciencias en Ingeniería Electrónica (Seguridad en Telecomunicaciones) en la Universidad de Versailles Saint Quentin en Yvelines, Francia, con una Maestría en Administración por la Universidad Autónoma del Estado de Morelos y es Ingeniero en Sistemas Computacionales del Instituto Tecnológico de Toluca, Tecnológico Nacional de México.',
      datosPonente1:'Obtuvo tres certificaciones en Cisco Certified Entry Networking Technician CCENT (Certificate Verification No. 396634168823EQAK), Cisco Certified Network Associate – CNNA (Certificate Verification No. 396654168826DNCL) en esta con una puntuación del 100% en todos los rubros calificados remarcando que son muy pocos los que llegan a los 1000 puntos por lo que aproximadamente 8 personas en el mundo han obtenido este puntaje a la fecha y Cisco Certified Academy Instructor (CCAI-CCNA) (Certificate Verification No. 4933145CCNA).  Fue miembro del Sistema Nacional de Investigadores en 2017 y es miembro del IEEE, IEEE Communication Society and ACM.',
      datosPonente2: 'Desde Mayo 2019 es Directora del TECNM campus Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET). En Agosto de 2018 fue Secretaria Académica de Investigación e Innovación del Tecnológico Nacional de México, en el transcurso de su gestión se inició la propuesta de Posgrado y licenciatura integrado,  se elaboró la primer versión del Nuevo Modelo Educativo del Tecnológico Nacional de México, se inició el Programa de Doctorado en Ingeniería para los Profesores del Sistema con 1300 aspirantes al grado, se inició con la reforma educativa a los Programas de Estudio de todas las asignaturas de los Planes de Estudio, se elaboró una propuesta de  salida lateral para los estudiantes que desertan, se actualizaron  los Lineamientos de Posgrado e Investigación.',
      datosPonente3: 'En el año 2017 fue Directora de Posgrado, Investigación e Innovación del Tecnológico Nacional de México, en su periodo, se automatizo el Proceso de Evaluación de Proyectos de Investigación de los 254 institutos y centros, se conformo un catalogo de lineas de Investigación, se actualizaron los lineamientos de la Dirección. Laboró como Jefa de la División de Estudios de Posgrado e Investigación en el Instituto Tecnológico de Toluca Toluca del  1 de Mayo 2013 al 31 de enero de 2016, se desempeño como Profesora en Ingeniería en Sistemas Computacionales, del 1 de octubre 2001 al 31 de diciembre 2016, y Profesora de la Maestría en Ciencias de la Ingenieria. Tambien fue Profesora en la Maestría de Sistemas Computacionales en la  Universidad de Versalles.  Versalles, Francia.  Francia, de Agosto de 2010 a Enero de 2013. Ha presentado conferencias en materia de Seguridad en los Protocolos de Comunicación para Redes Inalambricas en  Santander España en 2018, Dubai-UAE en 2016, Sydney-Australia en 2014, Ottawa-Canada en 2012, California-USA en  2012, Bonn-Alemania en 2012, Texas-USA en 2012 y en Kyoto-Japon 2011',
      datosPonenteLista: '',
      fecha: 'Martes 17 de noviembre | 19:00 - 20:00',
      img: 'assets/img/yesica.jpeg',
      completed: false,
    },
    {
      name: 'Dra. Arq. Yolanda Guadalupe Aranda Jiménez',
      tipo: 'Conferencista',
      nomConferencia: 'Prototipos e investigaciones sustentables en la Facultad de Arquitectura, Diseño y Urbanismo de la Universidad Autónoma de Tamaulipas',
      desConferencia: 'Licenciatura en Arquitectura Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Monterrey, Maestría Administración de la construcción por la Universidad Autónoma de Tamaulipas, Doctorado Arquitectura con énfasis en vivienda por la Universidad Autónoma de Tamaulipas con la tesis: Características del BTC ante diferentes concentraciones de mucilago de nopal (opuntia rastrera y ficus-indica) y sábila (aloe vera barbadensis) agregadas al mezclado.',
      datosPonente: ' Licenciatura en Arquitectura Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Monterrey, Maestría Administración de la construcción por la Universidad Autónoma de Tamaulipas, Doctorado Arquitectura con énfasis en vivienda por la Universidad Autónoma de Tamaulipas con la tesis: Características del BTC ante diferentes concentraciones de mucilago de nopal (opuntia rastrera y ficus-indica) y sábila (aloe vera barbadensis) agregadas al mezclado.',
      datosPonente1:'Cuenta con varios artículos indexados sobre tierra vertida y BTC, (como Aranda-Jimenez). Capítulos de libro, participación en Congresos de Tierra con ponencias desde 2006.Miembro de la Red PROTERRA desde 2005. Miembro Fundador de la Red Mesoamericana para construcción con tierra.',
      datosPonente2: 'Mención Honorífica en Licenciatura y doctorado, Premio Universitario 2010 a la Investigación de excelencia “General Bernardo López García” por la tesis doctoral, Premio al Mérito Universitario enero 2012, Reconocimiento Profesor Emérito dic. 2012, Reconocimiento a la labor de investigación por el Consorcio de Universidades del Sur de Tamaulipas 2018, Reconocimiento y Medalla Benjamín Mora y Aguilera 2019, Tercer Lugar en el Concurso de Innovación Tecnológica UAT Categoría Docentes 2019 con el proyecto: Recubrimiento Sustentable a base de fibras naturales para muros interiores de vivienda, Perfil PRODEP 6 años (Programa de Mejoramiento Profesorado),Miembro del SIN (Sistema Nacional de Investigadores) Nivel 1, Catedrático e investigador de la FADU/UAT desde 1986, Coordinador del Departamento de Tutorías FADU/UAT desde 2005, Representante de la Catedra UNESCO para Arquitectura de Tierra desde 2012',
      datosPonente3: 'Cuenta con dos tesis de alumnos premiadas como tesis de excelencia UATByanca Vega Galindo y Erick Zarazua Portes.',
      datosPonenteLista: '',
      fecha: 'Jueves 19 de noviembre | 8:00 - 9:00',
      img: 'assets/img/yolandaaranda.PNG',
      completed: false,
    },
    {
      name: 'M. en C. Jesús Iván Ruíz Ibarra / Mtro. Alberto Ramírez Leyva',
      tipo: 'Conferencista',
      nomConferencia: 'Introducción a la Nom-035-STPS-2018 y caso de estudio',
      desConferencia: 'Jesús Iván Ruiz Ibarra es profesor, TC con Perfil Deseable ante PRODEP, es Ingeniero Industrial egresado del ITLM (1996-2001), Maestro en Ciencias de la Ingeniería Industrial  por el TecNM /I.T. de Hermosillo (2003-2006), es miembro activo de la Red de Ergonomistas del Noroeste (RIENO) desde su creación en el año 2013 a la fecha, cuenta con publicaciones en revistas, participación en congresos nacionales e internacionales como ponente.',
      datosPonente: 'Jesús Iván Ruiz Ibarra Es Profesor, TC con Perfil Deseable ante PRODEP, es Ingeniero Industrial egresado del ITLM (1996-2001), Maestro en Ciencias de la Ingeniería Industrial  por el TecNM /I.T. de Hermosillo (2003-2006), es miembro activo de la Red de Ergonomistas del Noroeste (RIENO) desde su creación en el año 2013 a la fecha, cuenta con publicaciones en Revistas, participación en congresos nacionales e internacionales como ponente.',
      datosPonente1:'',
      datosPonente2: '',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Jueves 19 de noviembre | 20:00 - 21:00',
      img: 'assets/img/jesusruiz.jpg',
      completed: false,
    },
    {
      name: 'Dr. Rubén Posada Gómez',
      tipo: 'Conferencista',
      nomConferencia: '-',
      desConferencia: 'Es autor de más de un centenar de artículos de congresos nacionales e internacionales, revistas indizadas y capítulos de libros entre los que destacan Digital Image Processing Using Labview editado por la editorial INTECH (Rijeka, Croacia), y otros por la Ed. Springer (Berlín, Alemania), Autor de 3 patentes, 1 modelo de utilidad y más de una decena de registros de software.',
      datosPonente: 'Es autor de más de un centenar de artículos de congresos nacionales e internacionales, revistas indizadas y capítulos de libros entre los que destacan Digital Image Processing Using Labview editado por la editorial INTECH (Rijeka, Croacia), y otros por la Ed. Springer (Berlín, Alemania), Autor de 3 patentes, 1 modelo de utilidad y más de una decena de registros de software.',
      datosPonente1: 'Es Miembro Nivel I del Sistema Nacional de Investigadores y evaluador de proyectos del Consejo Nacional de Investigación (CONACyT), así como miembro de los comités editoriales de la revista Scielo Información Tecnológica (Chile); Pan American Health Care Exchanges Conference (Brasil); IADIS Interfaces and Human Computer Interaction (Portugal) entre otros. Es miembro de la red iberoamericana MELISA «Mejora de la Calidad de Servicios Interactivos y Accesibilidad en la TDT para reducir la brecha digital”, de la red temática “Robótica y mecatrónica de CONACyT” y de la red temática de PROMEP “optimización de cadenas de suministro”, ha sido líder del cuerpo académico Diseño de sistemas Digitales en software-Hardware y actualmente pertenece al cuerpo académico de Ingeniería y Sistemas.',
      datosPonente2: 'Ha dirigido diferentes tesis de licenciatura, maestría y doctorado en las áreas de ingeniería electrónica, ingeniería industrial,  ciencias computacionales e ingeniería para la salud, con proyectos de investigación premiados a nivel nacional e internacional en eventos de emprendedores, creatividad e innovación tecnológica organizados por el Tecnológico Nacional de México, Nodos Binacionales de Innovación Tecnológica de CONACyT, CONCIBE (Brasil) e INTECH (Holanda) entre otros.',
      datosPonente3: 'Ha sido Jefe de la División de Estudios de Posgrado e Investigación del Tecnológico de Orizaba, Director de Posgrado Investigación e Innovación del Tecnológico Nacional de México y Actualmente Director del Centro Regional de Optimización y Desarrollo de Equipos (CRODE de Orizaba). Sus líneas de investigación son el procesamiento de imágenes, la bioelectrónica, la ingeniería para la salud, los sistemas mecatrónicos aplicados a la rehabilitación neuromuscular y el diseño de interfaces para la automatización y procesamiento de señales.',
      datosPonenteLista: '',
      fecha: 'Martes 17 de noviembre | 20:00 - 21:00',
      img: 'assets/img/rubenposada.jpg',
      completed: false,
    },
    {
      name: 'Dra. Pilar Saldaña Gonzalvo / Dra. Merce Mach Piera',
      tipo: 'Conferencista',
      nomConferencia: 'La importancia de las metodologías activas con el COVID: experiencias con empresas familiares y la feria de consultores',
      desConferencia: 'Directora de la cátedra de la Empresa Familiar a la Universidad de Barcelona desde 2005. Integrante de la red del Instituto de la Empresa Familiar. Investigadora sobre empresas familiares y multifamiliares (tesis 2005).',
      datosPonente:'Directora de la cátedra de la Empresa Familiar a la Universidad de Barcelona desde 2005. Integrante de la red del Instituto de la Empresa Familiar. Investigadora sobre empresas familiares y multifamiliares (tesis 2005).',
      datosPonente1:'Profesora titular de escuela universitaria de la Facultad de Economía y Empresa de la Universidad de Barcelona Grado ADE.',
      datosPonente2: 'Docente de MBA Planeta EAE, IL3 UB, la U. Carlos III, la IUP y Máster Telefónica BCG.',
      datosPonente3: 'Consultora con el experto venezolano Iván Lansberg de Lansberg Gersisck Asociates USA New Haven (2001) y con Manuel Pavón en Altalex y Garrigues.',
      datosPonenteLista: '',
      fecha: 'Miércoles 18 de noviembre | 9:00 - 10:00',
      img: 'assets/img/ma.jpg',
      completed: false,
    },

    {
      name: 'Dra. Pilar Saldaña Gonzalvo / MBA. Francisco Javier Macías Berrocal',
      tipo: 'Conferencista',
      nomConferencia: 'Investigación de empresa familiar: casos prácticos de consejos de familia',
      desConferencia: 'Directora de la cátedra de la Empresa Familiar a la Universidad de Barcelona desde 2005. Integrante de la red del Instituto de la Empresa Familiar. Investigadora sobre empresas familiares y multifamiliares (tesis 2005).',
      datosPonente: 'Directora de la cátedra de la Empresa Familiar a la Universidad de Barcelona desde 2005. Integrante de la red del Instituto de la Empresa Familiar. Investigadora sobre empresas familiares y multifamiliares (tesis 2005).',
      datosPonente1: 'Profesora titular de escuela universitaria de la Facultad de Economía y Empresa de la Universidad de Barcelona Grado ADE.',
      datosPonente2: 'Docente de MBA Planeta EAE, IL3 UB, la U. Carlos III, la IUP y Máster Telefónica BCG.',
      datosPonente3: 'Consultora con el experto venezolano Iván Lansberg de Lansberg Gersisck Asociates USA New Haven (2001) y con Manuel Pavón en Altalex y Garrigues.',
      datosPonenteLista: '',
      fecha: 'Miercoles 18 de noviembre | 8:00 - 9:00',
      img: 'assets/img/familia.jpg',
      completed: false,
    },

    {
      name: 'Empresario Joel Estrada Damián',
      tipo: 'Conferencista',
      nomConferencia: 'Conferencia',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: '',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Viernes 20 de noviembre | 19:00 - 20:00',
      img: 'assets/img/empresario.jpg',
      completed: false,
    },
    {
      name: 'Dr. Eder Jesús Valentín Lugo Medina / Mtro. Florencio Moreno Osuna',
      tipo: 'Conferencista',
      nomConferencia: 'Conferencia',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: '',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Viernes 20 de noviembre | 19:00 - 20:00',
      img: 'assets/img/eder.jpg',
      completed: false,
    },
    {
      name: 'Dr. José Adán Espuna Mujica',
      tipo: 'Conferencista',
      nomConferencia: 'La adecuación de la arquitectura al entorno actual',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: '',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Jueves 20 de noviembre | 12:00 - 13:00',
      img: 'assets/img/arq2.jpeg',
      completed: false,
    },
    {
      name: 'Dr. Carlos Fuentes Pérez ',
      tipo: 'Conferencista',
      nomConferencia: 'Arquitectura y naturaleza',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: '',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Jueves 20 de noviembre | 11:00 - 12:00',
      img: 'assets/img/arq.jpg',
      completed: false,
    },
  ];
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
      name: 'Plan de Negocios para MiPyMes',
      conferencista: 'M.I.I. Yeniba Argueso Mendoza',
      horarios1: 'Martes 17 de noviembre de 9:00 - 14:00',
      horarios2: 'Miercoles 18 de noviembre de 10:00 - 14:00',
      horarios3: 'Viernes 20 de noviembre de 9:00 - 14:00',
      imagen: 'assets/img/pymes.png',
      completed: false,
    },
  ];

  ponentesSC: any = [
    {
      name: 'Mesas de Trabajo',
      tipo: 'Ponencias',
      descripcion: 'Ing. Ambiental y Energías Renovables / Ingeniería en Sistemas de Proceso',
      horarios1: 'Martes 17 de noviembre de 21:00 - 22:00',
      horarios2: 'Jueves 19 de noviembre de 21:00 - 22:00',
      horarios3: 'Viernes 20 de noviembre de 21:00 - 22:00',
      imagen: 'assets/img/inga.jpg',
      completed: false,
    },
    {
      name: 'Mesas de Trabajo',
      tipo: 'Ponencias',
      descripcion: 'Métodos y modelos de Planificación',
      horarios1: 'Viernes 20 de noviembre de 20:00 - 22:00',
      horarios2: '',
      horarios3: '',
      imagen: 'assets/img/planif.jpg',
      completed: false,
    },
  ];

 
  constructor(private _alumnoBuilder: FormBuilder, private _externoBuilder: FormBuilder, public sesi: SesionService, private dbData: DataDbService, private _ponentesS: DataPonentesService, private router: Router) { 
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

  regresarPonentesAlumExternoForm()
  {
     const ponentes = this.congresoExternoForm.value.ponentesMarcados
      .map((checked, i) => checked ? this.ponentesSC[i].descripcion : null)
      .filter(v => v !== null);
      return ponentes;
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
  regresarPonentesAlumnosForm()
  {
     const ponentes = this.congresoAlumnoForm.value.ponentesMarcados
      .map((checked, i) => checked ? this.ponentesSC[i].descripcion : null)
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
    window.location.reload();
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
    window.location.reload();
  }
  comprobarRegistro(){
    this.recibirDatos();
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
}
