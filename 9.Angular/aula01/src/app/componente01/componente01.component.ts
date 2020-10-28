import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.css']
})
export class Componente01Component implements OnInit {

  // Variáveis
  texto = "Hello World";

  // Vetor de nomes
  vetor = ["Amanda", "Bruna", "Cleber", "Daniela", "Elaine"];

  // Variavel Bollean
  exibirTexto = true;

  // Evento de Click
  click() {
    this.exibirTexto = !this.exibirTexto;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
