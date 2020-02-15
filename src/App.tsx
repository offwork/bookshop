import React, { FC } from 'react';
import './App.css';
import { BookshopProvider } from './common/hooks/useRootStore';
import BookshopStore from './common/stores/root.stores';
import Books from './pages/Books';


const App: FC = () => {
  return (
    <div className="App">
      <BookshopProvider value={ BookshopStore }>
        <Books />
      </BookshopProvider>
    </div>
  );
}

export default App;
