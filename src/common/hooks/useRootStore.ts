import { createContext, useContext } from 'react';
import { BookshopStore } from '../stores/root.stores';

const BookshopContext = createContext<BookshopStore>({} as BookshopStore);

export const useBookshopStore = () => useContext(BookshopContext);
export const BookshopProvider = BookshopContext.Provider;