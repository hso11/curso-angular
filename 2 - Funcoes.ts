function inc1(n: number, inc: number): number{
    return n + inc;
}

console.log("Retorno da função inc1(5,1): " + inc1(5, 1));

function inc2(n: number, inc?: number): number{
    if (inc === undefined) {
        return n + 1;
    } else {
        return n + inc;
    }
}

console.log("Retorno da função inc2(7): " + inc2(7));
console.log("Retorno da função inc2(7): " + inc2(7, null));

function inc3(n: number, inc: number=1): number{
    if (inc === undefined) {
        return n + 1;
    } else {
        return n + inc;
    }
}

console.log("Retorno da função inc3(7): " + inc3(7));

console.log("Retorno da função inc3(7): " + inc3(7));


function somaElementosArray(ar: number[]): number{
    return ar.reduce((a,b)=>a+b,0)
}

console.log("Retorno função Soma Array: " + somaElementosArray([1, 2, 3]));

function somaElementosArrayRest(...ar: number[]): number{
    return ar.reduce((a,b)=>a+b,0)
}

console.log("Retorno função Soma Array com Rest sem necessidade de passar o parâmetro como Array: " + somaElementosArrayRest(1,2,3,4,5));


let retornoFuncao = function (param: number): boolean{
    return param < 12;
}
let var1 = 11;
console.log("TemplateString com a crase, permitindo usar expressões");
console.log(`${var1}  < 12 ? ${retornoFuncao(var1) ? 'SIM' : 'NAO'}`);


console.log("Arrow Function");
let call = (name: string) => console.log(`Demonstrando Arrow Function com TemplateString e parâmetro, sendo ele: ${name}`);
call('TESTE');

function inc(s: number, inc: number = 1): number{
    return s + inc;
}
console.log(`inc(5,1)=${inc(5, 1)}`);
console.log(`inc(5)=${inc(5)}`);