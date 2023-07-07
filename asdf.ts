const a = [1, 2];
const b = [1, 2, 3, 4, 5, 6, 7, 8];
const c = [1, 2];

const transferMongo = (start: number[], way: number[], end: number[]) => {
  let strStart: string = "";
  let strWay: string[] = [];
  let strEnd: string = "";

  strStart = start.map((str) => str.toString()).join(", ");

  strWay = way.reduce((acc, num, idx) => {
    const pos = Math.floor(idx / 2);
    if (!acc[pos]) {
      acc[pos] = "";
    }
    acc[pos] += idx % 2 !== 0 ? `, ${num.toString()}` : num.toString();
    return acc;
  }, [] as string[]);

  strEnd = end.map((str) => str.toString()).join(", ");

  return { strStart, strWay, strEnd };
};

console.log(transferMongo(a, b, c));
