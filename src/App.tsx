import React, { FC } from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import shop from './common/stores/root.stores';
import Books from './pages/Books';


const App: FC = () => {
  return (
    <div className="App">
      <Provider shop={shop}>
        <Books />
      </Provider>
    </div>
  );
}

export default App;
