import React, { FC } from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { RouterView } from "mobx-state-router";
import { useBookshopStore } from '../../hooks/useRootStore';
import Books from '../../../pages/Books';
import BookDetails from '../../../pages/BookDetails';
import NotFound from '../../../pages/NotFound';

const viewMap = {
  books: <Books />,
  bookDetails: <BookDetails />,
  notFound: <NotFound />,
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
    }
  }),
);

const Shell: FC = () => {
  const { bookshopRouter } = useBookshopStore();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RouterView routerStore={bookshopRouter} viewMap={viewMap} />
    </div>
  );
};

export default Shell;