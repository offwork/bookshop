import React, { FC } from 'react';
import { useBookshopStore } from '../common/hooks/useRootStore';
import { observer } from 'mobx-react';

interface Props {}

const Books: FC<Props> = observer(() => {
  const { booksList, bookshopRouter } = useBookshopStore();

  return (
    <div>{booksList.map((book, index) => {
      return(
        <div key={index}>
          {book.name}
          <button onClick={() =>
            bookshopRouter.goTo('bookDetails', {id: book.name})
          }>more...</button>
        </div>
      )})}
    </div>
  )
});

export default Books;
