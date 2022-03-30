import Cart from '../service/Cart';
import Book from '../domain/Book'
import Movie from '../domain/Movie'
import MusicAlbum from '../domain/MusicAlbum'


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add card item, get card item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  const received = cart.items[0];
  const expected = {"author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000}

  expect(received).toEqual(expected);
});

test('card totalCost', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(5000, 'Мстители', 'Tom Hanks', 1200, 'The Avengers', 'imax', 2012, 'USA', 'Avengers Assemble', ['фантастика', 'боевик', 'фентези', 'приключения'], "137 мин./02:17"));

  const received = cart.totalCost();
  const expected = 4100

  expect(received).toEqual(expected);
});

test('card totalCostDiscount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(5000, 'Мстители', 'Tom Hanks', 1200, 'The Avengers', 'imax', 2012, 'USA', 'Avengers Assemble', ['фантастика', 'боевик', 'фентези', 'приключения'], "137 мин./02:17"));

  const received = cart.totalCostDiscount(10);
  const expected = 3690

  expect(received).toEqual(expected);
});

test('card totalCostDiscount ERROR test', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  const received = () => cart.totalCostDiscount(1000);
  const expected = `Недопустимое значение скидки 1000`

  expect(received).toThrow(expected);
});

test('card delete', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.delete(1001);
  const received = cart.items.length;
  const expected = 0

  expect(received).toBe(expected);
});
