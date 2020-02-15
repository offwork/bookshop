import React, { FC } from 'react';
import { inject, observer } from 'mobx-react';


const Books: FC = () => {
  
  return (
    <div></div>
  )
}

export default inject('shop')(observer(Books));