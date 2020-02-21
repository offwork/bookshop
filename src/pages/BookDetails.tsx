import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useBookshopStore } from '../common/hooks/useRootStore';
import { historyAdapter } from '../common/stores/root.stores';
import BookCard from '../common/components/BookCard';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '0 auto',
      padding: 24
    }
  }),
);

const BookDetails: FC = observer(() => {
  const { bookDetails } = useBookshopStore();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BookCard book={bookDetails.book} goToBack={() => historyAdapter.goBack()} />
    </div>
  )
});

export default BookDetails;
