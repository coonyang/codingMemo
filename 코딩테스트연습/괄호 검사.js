// (()()) = true (()( = false

function 괄호검사(str) {
  let i = 0;

  for (var a of str) {
    if (a === "(") {
      i = i + 1;
    } else {
      i = i - 1;

      if (i < 0) {
        return false;
      }
    }
  }

  return i === 0;
}
