import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  standalone: true,
  template: `
    <h2>Ciclo de Vida del Componente</h2>
    <p>Valor recibido: {{ data }}</p>
  `
})
export class CicloVida implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {

  @Input() data: string = '';

  constructor() {
    console.log('Constructor: se crea la instancia del componente');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit() {
    console.log('ngOnInit: inicialización del componente');
  }

  ngDoCheck() {
    console.log('ngDoCheck: detección de cambios personalizada');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: contenido proyectado inicializado');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: contenido proyectado verificado');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: vista del componente inicializada');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: vista del componente verificada');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: el componente será destruido');
  }
}
