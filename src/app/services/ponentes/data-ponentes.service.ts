import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPonentesService {

  private ponentes: Ponentes[] = [
    {
      nombre: 'Dr. Diego Alfredo Tlapa Mendoza',
      tipo: 'Conferencista',
      nomConferencia: 'Lean six sigma el reto de incrementar la calidad y eficiencia en el contexto de la industria 4.0',
      desConferencia: 'El Dr. DIEGO TLAPA se desempeña como Profesor-Investigador en la Facultad de Ingeniería, Arquitectura y Diseño de la UABC donde colabora en el programa de Ing. Industrial, así como en el programa de Maestría y Doctorado en Ciencias e Ingeniería, perteneciente al padrón de calidad de CONACYT.',
      datosPonente: 'El Dr. DIEGO TLAPA se desempeña como Profesor-Investigador en la Facultad de Ingeniería, Arquitectura y Diseño de la UABC donde colabora en el programa de Ing. Industrial, así como en el programa de Maestría y Doctorado en Ciencias e Ingeniería, perteneciente al padrón de calidad de CONACYT.',
      datosPonente1: 'Cuenta con la distinción como Miembro del Sistema Nacional de Investigadores Nivel 1, es responsable del Cuerpo Académico Consolidado “Calidad y Productividad” y cuenta con perfil deseable PRODEP otorgado por la SEP. Además, es responsable de la red de investigación internacional “Calidad y Manufactura Esbelta” y miembro de la red temática internacional “Red de Optimización de Procesos Industriales”.',
      datosPonente2: 'El Dr. Tlapa es Ing. Industrial por el Instituto Tecnológico de Ciudad Juárez, cuenta con la Maestría en Ingeniería, así como el Doctorado en Ciencias, ambos por la Universidad Autónoma de Baja California. Cuenta con una estancia posdoctoral en la University of California, Irvine, una especialidad en Sistemas Integrados de Gestión por la Sociedad Alemana de la Calidad, así como un micromaster en Supply Chain Management por el Massachusetts Institute of Technology (MIT-EDX).',
      datosPonente3: 'El interés de investigación del Dr. Tlapa es la Mejora Continua de Procesos, Gestión de la Cadena de Suministro, Estadística Aplicada y Equipos de Mejora. Particularmente se interesa en la metodología Lean Six Sigma y su aplicación en diferentes sectores. Su productividad científica abarca más de 40 artículos indizados, 8 capítulos de libro y 20 memorias en extenso. Además, ha dirigido más de 15 tesis de licenciatura y posgrado.',
      datosPonenteLista: '',
      fecha: 'Miércoles 18 de noviembre | 20:00 - 21:00',
      img: 'assets/img/diego.jpg',
    },
    {
      nombre: 'Dr. Edgardo Jonathan Suárez Domínguez',
      tipo: 'Conferencista',
      nomConferencia: 'Mecanismos de transferencia de calor en edificaciones tradicionales y vernáculas y la importancia de la confortabilidad',
      desConferencia: 'Químico Industrial, Arquitecto, Maestro en Ingeniería, Doctor en Administración y Doctor en Ingeniería Mecánica con mención honorífica por la UNAM. Tiene 15 años de experiencia en docencia.',
      datosPonente: 'Químico Industrial, Arquitecto, Maestro en Ingeniería, Doctor en Administración y Doctor en Ingeniería Mecánica con mención honorífica por la UNAM. Tiene 15 años de experiencia en docencia. Es profesor de la FADU de la UAT desde el 2016 en el área de estructuras (con las asignaturas de resistencia de materiales y mecánica de cuerpos rígidos) y profesor investigador con distinción de candidato del Sistema Nacional de Investigadores. Coordinador de laboratorio de materiales 2016-2018 y Jefe de la Unidad de Posgrado de la misma Facultad desde enero de 2018-agosto 2020.',
      datosPonente1: 'Ha dirigido tesis de licenciatura, maestría y doctorado principalmente en análisis mecánico y fenómenos de transporte en sólidos. Sus asesorados se caracterizan por publicar en congresos y revistas internacionales. Cuenta con 4 patentes otorgadas, una patente en evaluación de un inhibidor de arrastre de aceite y dos patentes en evaluación, por parte de la UAT, sobre producción de sólidos útiles en el área de la construcción. Cuenta con 5 registros de derechos de autor sobre softwares desarrollados con aplicabilidad en la industria del petróleo y 2 registros de derechos de autor por la producción de obras.',
      datosPonente2: 'Los últimos tres años ha publicado más de 20 artículos en revistas indizadas e indexadas, ha participado en diversos congresos nacionales e internacionales. Ha colaborado de 2009  a la fecha en proyectos apoyados por el CONACYT en la UNAM. En la UAT desde el 2016 ha colaborado en 3 proyectos apoyados por diversos fondos CONACYT, uno apoyado por la SEMARNAT-CONACYT y uno apoyado por el PFI-UAT. Su desarrollo profesional se encuentra principalmente en el diseño y construcción de industrias de la producción. Ha participado en la evaluación de Tecnologías de biocombustibles en España (2011) Colombia (2012) y ha evaluado nuevas tecnologías sostenibles en el tratamiento de aguas de formación en Estados Unidos durante el 2013.',
      datosPonente3: 'Ha Realizado estancias científicas en Cuba, Canadá, Estados Unidos, Inglaterra, España, Rusia y Reino Unido. Dictaminador de profesores y proyectos de investigación en diversas convocatorias desde el 2018. Es miembro activo de la Red Proterra, de la Sociedad de Ingenieros Petroleros, Sociedad Mexicana de Física y Sociedad Química de México, Colaborador de Cátedra   UNESCO  «Arquitecturas  de  tierra,   culturas   constructivas  y  desarrollo  sostenible»   de CRAterre.',
      datosPonenteLista: '',
      fecha: 'Jueves 19 de noviembre | 9:00 - 10:00',
      img: 'assets/img/ed.jpg',
    },
    {
      nombre: 'Dr. Jaime E. Arau Roffiel',
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
    },
   
    {
      nombre: 'Dra. Yesica Imelda Saavedra Benitez',
      tipo: 'Conferencista',
      nomConferencia: 'Por qué estudiar un posgrado',
      desConferencia: 'La Dra. Yesica Imelda Saavedra Benitez, cuenta con un Doctorado en Ciencias en Ingeniería Electrónica (Seguridad en Telecomunicaciones) en la Universidad de Versailles Saint Quentin en Yvelines, Francia, con una Maestría en Administración por la Universidad Autónoma del Estado de Morelos y es Ingeniero en Sistemas Computacionales del Instituto Tecnológico de Toluca, Tecnológico Nacional de México.',
      datosPonente: 'La Dra. Yesica Imelda Saavedra Benitez, cuenta con un Doctorado en Ciencias en Ingeniería Electrónica (Seguridad en Telecomunicaciones) en la Universidad de Versailles Saint Quentin en Yvelines, Francia, con una Maestría en Administración por la Universidad Autónoma del Estado de Morelos y es Ingeniero en Sistemas Computacionales del Instituto Tecnológico de Toluca, Tecnológico Nacional de México.',
      datosPonente1:'Obtuvo tres certificaciones en Cisco Certified Entry Networking Technician CCENT (Certificate Verification No. 396634168823EQAK), Cisco Certified Network Associate – CNNA (Certificate Verification No. 396654168826DNCL) en esta con una puntuación del 100% en todos los rubros calificados remarcando que son muy pocos los que llegan a los 1000 puntos por lo que aproximadamente 8 personas en el mundo han obtenido este puntaje a la fecha y Cisco Certified Academy Instructor (CCAI-CCNA) (Certificate Verification No. 4933145CCNA).  Fue miembro del Sistema Nacional de Investigadores en 2017 y es miembro del IEEE, IEEE Communication Society and ACM.',
      datosPonente2: 'Desde Mayo 2019 es Directora del TECNM campus Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET). En Agosto de 2018 fue Secretaria Académica de Investigación e Innovación del Tecnológico Nacional de México, en el transcurso de su gestión se inició la propuesta de Posgrado y licenciatura integrado,  se elaboró la primer versión del Nuevo Modelo Educativo del Tecnológico Nacional de México, se inició el Programa de Doctorado en Ingeniería para los Profesores del Sistema con 1300 aspirantes al grado, se inició con la reforma educativa a los Programas de Estudio de todas las asignaturas de los Planes de Estudio, se elaboró una propuesta de  salida lateral para los estudiantes que desertan, se actualizaron  los Lineamientos de Posgrado e Investigación.',
      datosPonente3: 'En el año 2017 fue Directora de Posgrado, Investigación e Innovación del Tecnológico Nacional de México, en su periodo, se automatizo el Proceso de Evaluación de Proyectos de Investigación de los 254 institutos y centros, se conformo un catalogo de lineas de Investigación, se actualizaron los lineamientos de la Dirección. Laboró como Jefa de la División de Estudios de Posgrado e Investigación en el Instituto Tecnológico de Toluca Toluca del  1 de Mayo 2013 al 31 de enero de 2016, se desempeño como Profesora en Ingeniería en Sistemas Computacionales, del 1 de octubre 2001 al 31 de diciembre 2016, y Profesora de la Maestría en Ciencias de la Ingenieria. Tambien fue Profesora en la Maestría de Sistemas Computacionales en la  Universidad de Versalles.  Versalles, Francia.  Francia, de Agosto de 2010 a Enero de 2013. Ha presentado conferencias en materia de Seguridad en los Protocolos de Comunicación para Redes Inalambricas en  Santander España en 2018, Dubai-UAE en 2016, Sydney-Australia en 2014, Ottawa-Canada en 2012, California-USA en  2012, Bonn-Alemania en 2012, Texas-USA en 2012 y en Kyoto-Japon 2011.',
      datosPonenteLista: '',
      fecha: 'Martes 17 de noviembre | 19:00 - 20:00',
      img: 'assets/img/yesica.jpeg',
    },
    {
      nombre: 'M.I.I. Yeniba Argueso Mendoza',
      tipo: 'Taller',
      nomConferencia: 'Plan de Negocios para MiPyMes',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: '',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Martes 17 de noviembre | 9:00 - 14:00',
      fecha1: 'Miercoles 18 de noviembre | 10:00 - 14:00',
      fecha2: 'Viernes 20 de noviembre | 9:00 - 14:00',
      img: 'assets/img/pymes.png',
    },
    {
      nombre: 'Dra. Arq. Yolanda Guadalupe Aranda Jiménez',
      tipo: 'Conferencista',
      nomConferencia: 'Prototipos e investigaciones sustentables en la Facultad de Arquitectura, Diseño y Urbanismo de la Universidad Autónoma de Tamaulipas',
      desConferencia: 'Licenciatura en Arquitectura Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Monterrey, Maestría Administración de la construcción por la Universidad Autónoma de Tamaulipas, Doctorado Arquitectura con énfasis en vivienda por la Universidad Autónoma de Tamaulipas con la tesis: Características del BTC ante diferentes concentraciones de mucilago de nopal (opuntia rastrera y ficus-indica) y sábila (aloe vera barbadensis) agregadas al mezclado.',
      datosPonente: ' Licenciatura en Arquitectura Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Monterrey, Maestría Administración de la construcción por la Universidad Autónoma de Tamaulipas, Doctorado Arquitectura con énfasis en vivienda por la Universidad Autónoma de Tamaulipas con la tesis: Características del BTC ante diferentes concentraciones de mucilago de nopal (opuntia rastrera y ficus-indica) y sábila (aloe vera barbadensis) agregadas al mezclado.',
      datosPonente1:'Cuenta con varios artículos indexados sobre tierra vertida y BTC, (como Aranda-Jimenez). Capítulos de libro, participación en Congresos de Tierra con ponencias desde 2006. Miembro de la Red PROTERRA desde 2005. Miembro Fundador de la Red Mesoamericana para construcción con tierra.',
      datosPonente2: 'Mención Honorífica en Licenciatura y doctorado, Premio Universitario 2010 a la Investigación de excelencia “General Bernardo López García” por la tesis doctoral, Premio al Mérito Universitario enero 2012, Reconocimiento Profesor Emérito dic. 2012, Reconocimiento a la labor de investigación por el Consorcio de Universidades del Sur de Tamaulipas 2018, Reconocimiento y Medalla Benjamín Mora y Aguilera 2019, Tercer Lugar en el Concurso de Innovación Tecnológica UAT Categoría Docentes 2019 con el proyecto: Recubrimiento Sustentable a base de fibras naturales para muros interiores de vivienda, Perfil PRODEP 6 años (Programa de Mejoramiento Profesorado),Miembro del SIN (Sistema Nacional de Investigadores) Nivel 1, Catedrático e investigador de la FADU/UAT desde 1986, Coordinador del Departamento de Tutorías FADU/UAT desde 2005, Representante de la Catedra UNESCO para Arquitectura de Tierra desde 2012.',
      datosPonente3: 'Cuenta con dos tesis de alumnos premiadas como tesis de excelencia UATByanca Vega Galindo y Erick Zarazua Portes.',
      datosPonenteLista: '',
      fecha: 'Jueves 19 de noviembre | 8:00 - 9:00',
      img: 'assets/img/yolandaaranda.PNG',
    },
    {
      nombre: 'M. en C. Jesús Iván Ruíz Ibarra / Mtro. Alberto Ramírez Leyva',
      tipo: 'Conferencista',
      nomConferencia: 'Introducción a la Nom-035-STPS-2018 y caso de estudio',
      desConferencia: 'Jesús Iván Ruiz Ibarra es profesor, TC con Perfil Deseable ante PRODEP, es Ingeniero Industrial egresado del ITLM (1996-2001), Maestro en Ciencias de la Ingeniería Industrial  por el TecNM /I.T. de Hermosillo (2003-2006), es miembro activo de la Red de Ergonomistas del Noroeste (RIENO) desde su creación en el año 2013 a la fecha, cuenta con publicaciones en revistas, participación en congresos nacionales e internacionales como ponente.',
      datosPonente: 'Jesús Iván Ruiz Ibarra es profesor, TC con Perfil Deseable ante PRODEP, es Ingeniero Industrial egresado del ITLM (1996-2001), Maestro en Ciencias de la Ingeniería Industrial  por el TecNM /I.T. de Hermosillo (2003-2006), es miembro activo de la Red de Ergonomistas del Noroeste (RIENO) desde su creación en el año 2013 a la fecha, cuenta con publicaciones en revistas, participación en congresos nacionales e internacionales como ponente.',
      datosPonente1:'',
      datosPonente2: '',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Jueves 19 de noviembre | 20:00 - 21:00',
      img: 'assets/img/jesusruiz.jpg',
    },
    {
      nombre: 'Dra. Pilar Saldaña Gonzalvo / Dra. Merce Mach Piera',
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
    },
    {
      nombre: 'Dr. Rubén Posada Gómez',
      tipo: 'Conferencista',
      nomConferencia: '-',
      desConferencia: 'Es autor de más de un centenar de artículos de congresos nacionales e internacionales, revistas indizadas y capítulos de libros entre los que destacan Digital Image Processing Using Labview editado por la editorial INTECH (Rijeka, Croacia), y otros por la Ed. Springer (Berlín, Alemania), autor de 3 patentes, 1 modelo de utilidad y más de una decena de registros de software.',
      datosPonente: 'Es autor de más de un centenar de artículos de congresos nacionales e internacionales, revistas indizadas y capítulos de libros entre los que destacan Digital Image Processing Using Labview editado por la editorial INTECH (Rijeka, Croacia), y otros por la Ed. Springer (Berlín, Alemania), Autor de 3 patentes, 1 modelo de utilidad y más de una decena de registros de software.',
      datosPonente1: 'Es miembro nivel I del Sistema Nacional de Investigadores y evaluador de proyectos del Consejo Nacional de Investigación (CONACyT), así como miembro de los comités editoriales de la revista Scielo Información Tecnológica (Chile); Pan American Health Care Exchanges Conference (Brasil); IADIS Interfaces and Human Computer Interaction (Portugal) entre otros. Es miembro de la red iberoamericana MELISA «Mejora de la Calidad de Servicios Interactivos y Accesibilidad en la TDT para reducir la brecha digital”, de la red temática “Robótica y mecatrónica de CONACyT” y de la red temática de PROMEP “optimización de cadenas de suministro”, ha sido líder del cuerpo académico Diseño de sistemas Digitales en software-Hardware y actualmente pertenece al cuerpo académico de Ingeniería y Sistemas.',
      datosPonente2: 'Ha dirigido diferentes tesis de licenciatura, maestría y doctorado en las áreas de ingeniería electrónica, ingeniería industrial,  ciencias computacionales e ingeniería para la salud, con proyectos de investigación premiados a nivel nacional e internacional en eventos de emprendedores, creatividad e innovación tecnológica organizados por el Tecnológico Nacional de México, Nodos Binacionales de Innovación Tecnológica de CONACyT, CONCIBE (Brasil) e INTECH (Holanda) entre otros.',
      datosPonente3: 'Ha sido Jefe de la División de Estudios de Posgrado e Investigación del Tecnológico de Orizaba, Director de Posgrado Investigación e Innovación del Tecnológico Nacional de México y Actualmente Director del Centro Regional de Optimización y Desarrollo de Equipos (CRODE de Orizaba). Sus líneas de investigación son el procesamiento de imágenes, la bioelectrónica, la ingeniería para la salud, los sistemas mecatrónicos aplicados a la rehabilitación neuromuscular y el diseño de interfaces para la automatización y procesamiento de señales.',
      datosPonenteLista: '',
      fecha: 'Martes 17 de noviembre | 20:00 - 21:00',
      img: 'assets/img/rubenposada.jpg',
    },
    {
      nombre: 'Dra. Pilar Saldaña Gonzalvo / MBA. Francisco Javier Macías Berrocal',
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
    },
    {
      nombre: 'Empresario Joel Estrada Damián',
      tipo: 'Conferencista',
      nomConferencia: 'Conferencia',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: 'Más datos en página de tecnológico.',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Viernes 20 de noviembre | 19:00 - 20:00',
      img: 'assets/img/empresario.jpg',
    },
    {
      nombre: 'Dr. Eder Jesús Valentín Lugo Medina / Mtro. Florencio Moreno Osuna',
      tipo: 'Conferencista',
      nomConferencia: 'Conferencia',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: 'Más datos en página de tecnológico.',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Viernes 20 de noviembre | 19:00 - 20:00',
      img: 'assets/img/eder.jpg',
    },
    {
      nombre: 'Dr. José Adán Espuna Mujica',
      tipo: 'Conferencista',
      nomConferencia: 'La adecuación de la arquitectura al entorno actual',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: 'Más datos en página de tecnológico.',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Jueves 20 de noviembre | 12:00 - 13:00',
      img: 'assets/img/arq2.jpeg',
    },
    {
      nombre: 'Dr. Carlos Fuentes Pérez',
      tipo: 'Conferencista',
      nomConferencia: 'Arquitectura y naturaleza',
      desConferencia: 'Más datos en página de tecnológico',
      datosPonente: 'Más datos en página de tecnológico.',
      datosPonente1: '',
      datosPonente2: '.',
      datosPonente3: '',
      datosPonenteLista: '',
      fecha: 'Jueves 20 de noviembre | 11:00 - 12:00',
      img: 'assets/img/arq.jpg',
    },
   
  ];

constructor(){
   // console.log('servicio listo para usar!!!');
}

getPonentes(){
    return this.ponentes;
}

getPonente(idx: string){
  return this.ponentes[idx];
}

buscarPonente(termino: string): Ponentes[] {
  let ponenteArr: Ponentes[] = [];

  termino = termino.toLowerCase();
  for( let i = 0; i <this.ponentes.length; i++){
  // for(let heroe of this.heores){
    let ponente = this.ponentes[i];
    let nombre = ponente.nombre.toLowerCase();
    if(nombre.indexOf(termino)>=0){
      ponente.idx = i;
      ponenteArr.push(ponente);
    }
  }

  return ponenteArr;
}
}

export interface Ponentes{
  nombre: string;
  tipo: string;
  nomConferencia: string;
  desConferencia: string;
  datosPonente: string;
  datosPonente1: string;
  datosPonente2: string;
  datosPonente3: string;
  datosPonenteLista: string;
  fecha: string;
  fecha1?: string;
  fecha2?: string;
  img: string;
  idx?: number;
}

