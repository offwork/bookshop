import React, { FC } from 'react';
import { useBookshopStore } from '../common/hooks/useRootStore';
import { observer } from 'mobx-react';

interface Props {}

const Books: FC<Props> = observer(() => {
  const { booksList } = useBookshopStore();

  return (
    <div>{booksList.map((book, index) => {
      return(
        <div key={index}>{book.name}</div>
      )})}
    </div>
  )
});

export default Books;
