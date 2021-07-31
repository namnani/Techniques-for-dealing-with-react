// 예시 0.
function weirdFunction() {
  return 1;
  return 2;
  return 3;
  return 4;
  return 5;

  // 이게 되는 코드인가..?
}

// 예시 1.
function* generatorFunction() {
  console.log("안녕하세요");
  yield 1;
  console.log("제너레이터 함수");
  yield 2;
  console.log("function*");
  yield 3;
  return 4;
}

const generator = generatorFunction();

// 예시 2.
function* sumGenerator() {
  console.log("sumGenerator가 만들어졌습니다.");
  let a = yield;
  let b = yield;
  yield a + b;
}

const sum = sumGenerator();
sum.next();
// sumGenerator가 만들어졌습니다.
// {value: undefined, done: false}
sum.next(1);
// {value: undefined, done: false}
sum.next(2);
// {value: 3, done: false}
sum.next();
// {value: undefined, done: true}

// 예시 3.
function* watchGenerator() {
  console.log("모니터링 중...");
  let prevAction = null;
  while (true) {
    const action = yield;
    console.log("이전 액션: ", prevAction);
    prevAction = action;
    if (action.type === "HELLO") {
      console.log("안녕하세요");
    }
  }
}

const watch = watchGenerator();

watch.next();
// 모니터링 중..
// {value: undefined, done: false}
watch.next({ type: "TEST" });
// 이전 액션: null
// {value: undefined, done: false}
watch.next({ type: "HELLO" });
// 이전 액션: {type: "TEST"}
// 안녕하세요!
// {value: undefined, done: false}
