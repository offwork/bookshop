import React, { FC } from 'react';
import { HistoryAdapter } from "mobx-state-router";
import { createBrowserHistory } from "history";
import './App.css';
import { BookshopProvider } from './common/hooks/useRootStore';
import BookshopStore from './common/stores/root.stores';
import BookshopShell from './container/BookshopShell';

const history = createBrowserHistory();
const historyAdapter = new HistoryAdapter(BookshopStore.bookshopRouter, history);
historyAdapter.observeRouterStateChanges();

const App: FC = () => {
  return (
    <div className="App">
      <BookshopProvider value={ BookshopStore }>
        <BookshopShell />
      </BookshopProvider>
    </div>
  );
}

export default App;
