import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  nome: string;
  nota1: number;
  nota2: number;
  nota3: number;
  situacao: string;
  mensagem: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Função de calcular a média
  calcular(): void {

    let media = ((this.nota1 + this.nota2 + this.nota3) / 3);

    if (media <= 6.99) {
      this.situacao = "Reprovado";
    } else {
      this.situacao = "Aprovado";
    }

    this.mensagem = this.nome + " está " + this.situacao + " com média " + media.toFixed(2);


  }
}
