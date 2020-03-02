const message: string = 'hello world';
let name: string;
name = 'hso';
let boo: boolean;
boo = true;
let num: number;
num = 34;
let str: string;
str = 'txt';
console.log('Nome: ' + name);
console.log('boo: ' + boo);
console.log('num: ' + num);
console.log('str: ' + str);

let qqc: any;
console.log('Variável "qqc" do tipo any. A declaração sem o tipo, o compilador entende como any.');
qqc = 1;
console.log('qqc: ' + qqc);
qqc = 'txt';
console.log('qqc: ' + qqc);
qqc = true;
console.log('qqc: ' + qqc);

let array: number[] = [1, 2, 3];
console.log('array: ' + array);

let arrayStr: Array<string> = ['a', 'b', 'c'];
console.log('array: ' + arrayStr);

let arrayBoolean = [true, false, true];
console.log('array: ' + arrayBoolean);

let n: number = 1;
n = '4';
console.log('Variávei(n) declarada com Number mas foi atribuido um valor String: ' + n);
console.log('Apesar do compilador gerar um Warning, o código roda, pois o TS depois de convertido para JS, funciona. ');
console.log('Esse comportamento pode ser configurado no tsconfig.json: noEmitOnError: true');
n = n + 1;
console.log('Variávei declarada com Number n mas foi atribuido um valor String e concatenado com um number: ' + n);