import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CicloVida } from './ciclo-vida/ciclo-vida';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CicloVida],
  template: `
    <button (click)="toggle()">Mostrar/Ocultar Componente</button>
    <button (click)="cambiarDato()">Cambiar Dato</button>

    @if (mostrar) {
      <app-ciclo-vida [data]="dato"></app-ciclo-vida>
    }

  `
})
export class App {
  mostrar = true;
  dato = 'Hola Angular';

  toggle() {
    this.mostrar = !this.mostrar;
  }

  cambiarDato() {
    this.dato = this.dato === 'Hola Angular' ? 'Nuevo Valor' : 'Hola Angular';
  }
}
