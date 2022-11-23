import React from 'react';
import Book_xx from '../components/w02-booklist/Book_xx';
import { booklist_data } from '../booklist_data';

const BooklistPage_xx = () => {
  return (
    <section className='booklist'>
      {booklist_data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_xx key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default BooklistPage_xx;
