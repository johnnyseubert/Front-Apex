class Aluno {

    // Atributos
    nome: string;
    nota1: number;
    nota2: number;


    // Calcula a média
    calculo(): number {
        let media = (this.nota1 + this.nota2) / 2;
        return media;
    }

    // Sítuação
    situacao(media: number): string {
        return media >= 7 ? "Aprovado" : "Reprovado";
    }

    // Mensagem
    mensagem(): void {
        let media: number = this.calculo();
        let situacao: string = this.situacao(media);

        alert(this.nome + " está" + situacao + " com média " + media);
    }
}