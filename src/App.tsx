import React, { FC } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import './App.css';
import { BookshopProvider } from './common/hooks/useRootStore';
import BookshopStore from './common/stores/root.stores';
import BookshopShell from './common/components/container/BookshopShell';
import { getTheme } from './core/theme.config'

const App: FC = () => {
  return (
    <MuiThemeProvider theme={getTheme()}>
      <BookshopProvider value={ BookshopStore }>
        <BookshopShell />
      </BookshopProvider>
    </MuiThemeProvider>
  );
}

export default App;
