const users = [
  { id: 1, name: "Kim", age: 20 },
  { id: 2, name: "Lee", age: 17 },
  { id: 3, name: "Park", age: 25 },
];

// 20세 이상 성인만 반환

const result = users.filter((user) => user.age >= 20).map((user) => user.name);

console.log(result);
