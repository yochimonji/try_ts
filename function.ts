/* eslint-disable no-console */
function hello(): void {
  console.log("ごきげんよう");
}

// interface Greeter {
//   // noImplicitAny: trueだとエラー
//   // error TS7010: 'hello', which lacks return-type annotation,
//   //    implicitly has an 'any' return type.
//   hello();
// }

const list: string[] = ["小学生", "小心者", "小判鮫"];
list.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return 1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return -1;
  }
  return 0;
});
console.log(list);

function sort(a: string[], conv: (value: string) => string) {
  const entries = a.map((value) => [value, conv(value)]);
  console.log(entries);
  entries.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
  return entries.map((entry) => entry[0]);
}

{
  const a: string[] = ["a", "B", "D", "c"];
  console.log(sort(a, (s) => s.toLowerCase()));
}

// 新しいデフォルト引数
function f(name = "小動物", favorite = "小豆餅") {
  console.log(`${name}は${favorite}が好きです`);
}
f("私"); // 省略して呼べる

function f2({ name = "小動物", favorite = "小豆餅" } = {}): void {
  console.log(`${name}は${favorite}を持っている`);
}
f2({ favorite: "おやつ" });
