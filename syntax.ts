/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

// 型は合併型で複数列挙できる
type BirthYear = number | string;

// 型には値も設定できる
type FoodMenu = "北極" | "冷やし味噌";

function orderFood(food: FoodMenu) {
  console.log(food);
}

// 変数や関数の引数で使える
const birthday: BirthYear = "平成";
orderFood("北極");

type Person = {
  name: string[];
  favoriteBank: string;
  favoriteGyudon: string;
};

// 変数定義時にインタフェースを指定
const person: Person = {
  name: ["Yoichi", "monji"],
  favoriteBank: "Mizuho",
  favoriteGyudon: "Matsuya",
};
