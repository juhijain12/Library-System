// Display book availability and number of copies dynamically
import React, { useState } from 'react';

function BookList({ books }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
    // Update availability and number of copies fields
    updateAvailability(book.id, -1);
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <span>{book.title}</span>
          <span>Available: {book.available}</span>
          <button onClick={() => addToCart(book)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function LibraryPage() {
  const books = [
    { id: 1, title: 'Book 1', available: 5 },
    { id: 2, title: 'Book 2', available: 3 },
    { id: 3, title: 'Book 3', available: 0 },
  ];

  return (
    <div>
      <BookList books={books} />
    </div>
  );
}
