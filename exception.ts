try {
  throw new Error("失敗");
} catch (e) {
  console.log(e.stack);
}

class BaseError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
  }
}
