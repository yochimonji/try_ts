const flag: boolean = true;
console.log(flag);
console.log(flag.toString());
console.log(Number(flag));

console.log(0.1 + 0.2);
const a: number = Infinity;
console.log(a);

const variable: number = 10;
console.log(`[Debug]: ${variable}`);

function i18n(texts: any, ...placeholders: string[]){

    return texts + placeholders;
}
const hobby: string = "小旅行";
console.log(i18n`小動物は${hobby}が好きです`);

function print(name: string, age?: number) {
    console.log(`name: ${name}, age: ${age || 'empty'}`);
}
print('monji', 22);
print('yochi');

let c: string | null = null;
// let d: string | undefined = null;