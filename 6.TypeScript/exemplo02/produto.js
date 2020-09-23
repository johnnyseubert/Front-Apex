/*
    Classe -> Molde/Representação    EX: Bolo
    Objeto -> Resultado da Classe    Ex: Bolo de baunilha, Bolo com camadas
    Atributo -> Características da Classe
    Método -> Função
*/
var Produto = /** @class */ (function () {
    function Produto() {
    }
    // Cálculo do ICMS
    Produto.prototype.icms = function () {
        return this.segmento == "eletrônico" ? this.valor * 0.2 : this.valor * 0.1;
    };
    // Mensagem
    Produto.prototype.mensagem = function () {
        var valorIcms = this.icms();
        return ("O produto " + this.nome + " terá o ICMS de R$" + valorIcms);
    };
    return Produto;
}());
