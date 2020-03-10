class Teste{
    constructor(public atributo: string) { }
    metodoDaClasse() {
        console.log(`Classe de teste com método e atributo declardo apenas no construtor: ${this.atributo}`);
    }    
}
let teste = new Teste('Valor do atributo String');
teste.metodoDaClasse();

class TesteFilha extends Teste implements TesteInterface{
    propriedadeDaInterface: number
    constructor() {
        super('TesteFilha');
        this.propriedadeDaInterface = 2;
    }
    metodoDaClasse() {
        console.log('Metodo da clase filha executado');
        super.metodoDaClasse();
    }
}
let testeFilha = new TesteFilha();
testeFilha.metodoDaClasse();

interface TesteInterface{
    propriedadeDaInterface: number
    propriedadDaInterfaceOpcional? : number
}

let funcao = (testeInterface: TesteInterface) => testeInterface.propriedadeDaInterface > 2
console.log(`A propriedade da Interface é maior que 2: ${funcao(testeFilha)? 'SIM':'NAO'}`)