import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';


const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(5000, 'Мстители', 'Tom Hanks', 1200, 'The Avengers', 'imax', 2012, 'USA', 'Avengers Assemble', ['фантастика', 'боевик', 'фентези', 'приключения'], "137 мин./02:17"));

console.log(cart.items);

console.log(cart.totalCost())
console.log(cart.totalCostDiscount(10))
cart.delete(1001)

console.log(cart.items);
console.log(cart.totalCostDiscount(1000))
