const str = "banana";

function 중복찾기() {
  const count = {};
  for (const char of str) {
    // for 글자 of 단어 => 단어에서 글자를 하나씩 꺼내줌
    count[char] = (count[char] || 0) + 1;
    // []은 객체의 방을 여는 열쇠로 작용할 수 있음 *count[char] => 각 단어의 방을 만들어라
    // count['b'] = 1은 "b라는 칸에 1을 저장해!"라는 명령
    // count[char] = 글자가 없으면 0 + 1 => count['b'] = 1 => count{ b : 1 } 로 저장됨
  }

  let maxChar = "";
  let maxCount = 0;

  for (const key in count) {
    // for key in 오브젝트 => 오브젝트에서 key 값을 하나씩 꺼내줌
    if (count[key] > maxCount) {
      // { key : value } 값으로 저장되기 때문에 key로 글자를 꺼냄
      maxCount = count[key];
      maxChar = key;
      // 오브젝트는 obj[key값] 으로 개체를 찾을 수 있음
      // 배열은 배열[숫자]로 원하는 걸 꺼내옴
    }
  }
  return maxChar;
}
console.log(중복찾기(str));
