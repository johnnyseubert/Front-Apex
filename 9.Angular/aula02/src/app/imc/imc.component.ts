import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  // Conversões das variáveis
  peso: number;
  altura: number;
  mensagem: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Função calcular
  calcular(): void {
    let imc: number = this.peso / Math.pow(this.altura, 2);

    let situacao: string;

    if (imc <= 18.49) {
      situacao = "Abaixo do peso";
    } else if (imc <= 24.99) {
      situacao = "Peso normal";
    } else {
      situacao = "Acima do peso";
    }

    this.mensagem = situacao + " com IMC de: " + imc.toFixed(2);
  }

}
