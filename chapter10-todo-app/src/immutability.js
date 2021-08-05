let array = [1, 2, 3, 4, 5];

let nextArrayed = array;
nextArrayed[0] = 101;
console.log(array === nextArrayed);
console.log(nextArrayed[0]);
console.log(array[0]);

let nextArrayGood = [...array];
nextArrayGood[0] = 102;
console.log(array === nextArrayGood);
console.log(nextArrayGood[0]);
console.log(array[0]);

let object = {
  foo: 'bar',
  value: 1,
};

let nextObjectBad = object;
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad);
console.log(object.value);
console.log(nextObjectBad.value);

let nextObjectGood = {
  ...object,
  value: object.value + 2,
};
console.log(object === nextObjectGood);
console.log(object.value);
console.log(nextObjectGood.value);
