function exampleOne(a) {
  if (typeof a === "number") {
    console.log("정수가 입력되었습니다.");
  } else {
    throw new Error(`정수를 입력해야 합니다.`);
  }
  return a;
}
console.log(exampleOne(10));
