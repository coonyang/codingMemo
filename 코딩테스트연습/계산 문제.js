// 1~100까지 숫자 중
// 3의 배수이면서
// 5의 배수인 숫자의 합을 구하시오.

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
