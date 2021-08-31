/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
const years: number[] = [2019, 2020, 2021];
const divs = ["tig", "sig", "saig", "scig", 1];

const movie: [string, number] = ["Gozilla", 1954];
// movie[0] = 2019;

const r = 10;
const t = Math.PI * 0.5;
const pos: [number, number] = [r * Math.cos(r), r * Math.sin(r)];
console.log(pos);

const smalls = ["小動物", "小型車", "小論文"];
// 新: まとめて取り出し
// const [smallAnimal, smallCar, essay] = smalls;
// 新: 2番目以降の要素の取り出し
const [, ...other] = smalls;
console.log(other);

const places = ["小岩駅", "小浜市", "小倉駅"];
// 旧: indexOfを利用
if (places.indexOf("小淵沢") !== -1) {
  // 見つかった！
  console.log("旧構文");
}
// 新: includesを利用
if (places.includes("小淵沢")) {
  // 見つかった！
  console.log("新構文");
}

// 新: スプレッド構文で配列のコピー
const copy = [...smalls];
console.log(copy);

const smallAnimal = {
  names: "小動物",
  favorite: "小籠包",
};
// 新: まとめて取り出し。デフォルト値も設定可能
// const {names, favorite, age=3} = smallAnimal;
// 新: name以外の要素の取り出し
const { names, ...others } = smallAnimal;
console.log(others);

// 新: Mapを利用
// ``<キーの型、 値の型>`` で明示的に型を指定すると
// ``set()`` 時に型違いのデータを入れようとするとチェックできるし、
// ループなどで値を取り出しても型情報が維持されます
const map = new Map<string, string>([
  ["五反田", "約束の地"],
  ["戸越銀座", "TGSGNZ"],
]);
map.set("宇部", "炭鉱の街");
map.forEach((key, value) => {
  console.log(`${key} : ${value}`);
});
const map2 = new Map<number, string>([[1, "a"]]);
console.log(map2);

const set = new Set<string>(["a", "b", "b"]);
console.log(set);
