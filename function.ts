interface Greeter {
  // noImplicitAny: trueだとエラー
  // error TS7010: 'hello', which lacks return-type annotation,
  //    implicitly has an 'any' return type.
  hello();
}
