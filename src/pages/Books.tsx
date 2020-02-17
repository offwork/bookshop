import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useBookshopStore } from '../common/hooks/useRootStore';
import BookTileGrid from '../common/components/BookTileGrid';

interface BooksProps {}

const Books: FC<BooksProps> = observer(() => {
  const { booksList, bookshopRouter } = useBookshopStore();

  const clickOnBook = (name: string) => {
    bookshopRouter.goTo('bookDetails', {id: name});
  };

  return (
    <div>
      <BookTileGrid 
        books={booksList}
        redirectUrl={(name) => clickOnBook(name)}
      />
    </div>
  )
});

export default Books;
