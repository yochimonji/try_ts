// たまに実行される
async function randomRun() {
  console.log("random");
}

// 必ず実行される
async function finallyFunc() {
  console.log("finally");
}

async function main() {
  if (Date.now() % 2 === 1) {
    await randomRun();
  }
  await finallyFunc();
}
main();
