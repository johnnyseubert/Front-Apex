/*
    Classe -> Molde/Representação    EX: Bolo
    Objeto -> Resultado da Classe    Ex: Bolo de baunilha, Bolo com camadas
    Atributo -> Características da Classe
    Método -> Função
*/

class Produto {

    // Atributos
    nome: string;
    valor: number;
    segmento: string;

    // Cálculo do ICMS
    icms(): number {
        return this.segmento == "eletrônico" ? this.valor * 0.2 : this.valor * 0.1
    }

    // Mensagem
    mensagem(): string {
        let valorIcms = this.icms();
        return ("O produto " + this.nome + " terá o ICMS de R$" + valorIcms);

    }


}