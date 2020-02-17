import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useBookshopStore } from '../common/hooks/useRootStore';
import { historyAdapter } from '../common/stores/root.stores';

interface Props {}

const BookDeails: FC<Props> = observer(() => {
  const { bookshopRouter } = useBookshopStore();

  return (
    <div>
      <h2>Book Details</h2>
      <div>
        <span>here is book content...</span>
        <span>{bookshopRouter.getCurrentRoute().name}</span>
      </div>
      <div>
        <button onClick={() => historyAdapter.goBack()}>Back</button>
      </div>
    </div>
  )
});

export default BookDeails;
