import React, { FC } from 'react';
import { observer } from 'mobx-react';

interface Props {}

const BookDeails: FC<Props> = observer(() => {
  return (
    <div>
      <h2>Book Details</h2>
      <div>
        <span>here is book content...</span>
      </div>
    </div>
  )
});

export default BookDeails;