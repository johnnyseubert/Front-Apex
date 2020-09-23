var Pessoa = /** @class */ (function () {
    // Contrutor
    function Pessoa() {
        console.log("Método Construtor");
    }
    // Método
    Pessoa.prototype.metodo = function () {
        console.log("Método simples");
    };
    return Pessoa;
}());
