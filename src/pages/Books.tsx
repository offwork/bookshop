import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useBookshopStore } from '../common/hooks/useRootStore';
import BookTileGrid from '../common/components/BookTileGrid';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '0 auto'
    }
  }),
);

const Books: FC = observer(() => {
  const { bookStores, bookshopRouter, bookDetails } = useBookshopStore();
  const { bookList } = bookStores;
  const classes = useStyles();

  const clickOnBook = (bookId: string) => {
    const book = bookList.find(elm => elm.id === bookId);
    bookDetails.selectedBook(book)
    bookshopRouter.goTo('bookDetails', {id: bookId});
  };

  return (
    <div className={classes.root}>
      <BookTileGrid 
        books={bookList}
        redirectUrl={(id) => clickOnBook(id)}
      />
    </div>
  )
});

export default Books;
