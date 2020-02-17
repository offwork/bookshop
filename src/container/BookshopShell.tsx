import React, { FC } from "react";
import { RouterView } from "mobx-state-router";
import { useBookshopStore } from '../common/hooks/useRootStore';
import Books from '../pages/Books';
import BookDetails from '../pages/BookDetails';
import NotFound from '../pages/NotFound';

const viewMap = {
  books: <Books />,
  bookDetails: <BookDetails />,
  notFound: <NotFound />,
};

const Shell: FC = () => {
  const { bookshopRouter } = useBookshopStore();

  return (
    <div className="Shell">
      <RouterView routerStore={bookshopRouter} viewMap={viewMap} />
    </div>
  );
};

export default Shell;