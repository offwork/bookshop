import React, { FC } from 'react';
import { observer } from 'mobx-react';

interface Props {}

const NotFound: FC<Props> = observer(() => {
  return (
    <div>
      <h2>Not Found</h2>
      <div>
        <span>sorry we couldn't find what you were looking for...</span>
      </div>
    </div>
  )
});

export default NotFound;