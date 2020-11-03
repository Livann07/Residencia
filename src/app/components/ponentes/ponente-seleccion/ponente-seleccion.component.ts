import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ponente-seleccion',
  templateUrl: './ponente-seleccion.component.html',
  styleUrls: ['./ponente-seleccion.component.css']
})
export class PonenteSeleccionComponent implements OnInit {
  @Input() ponente: any= {};
  @Input() index: number;
  @Output () ponenteSeleccion: EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
    this.ponenteSeleccion = new EventEmitter();
  }

  color = 'accent';
  checked = false;

  changed(){
    //console.log(this.ponente.nombre);
    //console.log(this.checked);
  }

}
