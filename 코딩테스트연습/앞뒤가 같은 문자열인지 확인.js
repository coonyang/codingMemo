function 앞뒤가똑같음(str) {
  return str === str.split("").reverse().join("");
}

// split() = 단어를 하나씩 쪼개 배열에 넣음
// reverse() = 배열을 뒤집어줌 ["김", "밥"] => ["밥", "김"]
// join() = 배열을 문자열로 합침

console.log(앞뒤가똑같음("level"));
