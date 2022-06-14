const Square = require("../src/Square");

test('it returns 100 as a square of Square with side 10', () => {
  let square = new Square(10);
  expect(square.square()).toEqual(100);
});

test('it return 40 as a perimeter of Square with side 10', () => {
  let square = new Square(10);
  expect(square.length()).toEqual(40);
})
