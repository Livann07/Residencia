import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-ponente-tarjeta',
  templateUrl: './ponente-tarjeta.component.html',
  styleUrls: ['./ponente-tarjeta.component.css']
})
export class PonenteTarjetaComponent implements OnInit {
  
  @Input() ponente: any = {};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verPonente(){
    this.router.navigate(['/ponente', this.index]);
  }

}
