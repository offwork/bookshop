import { Instance } from 'mobx-state-tree';
import { RouterStore, RouterState } from 'mobx-state-router';
import { HistoryAdapter } from "mobx-state-router";
import { createBrowserHistory } from "history";
import { bookshopRoutes } from '../router/bookshop.routing';
import { Stores } from './bookshop.stores';
import apiInstance from '../../core/api.config';


const notFound = new RouterState("notFound");
const bookshopRoute = new RouterStore(Stores, bookshopRoutes, notFound);
const history = createBrowserHistory();

/**
 * BookshopStore is responsible for starting 
 * the stores and preparing the application environment
 */
const BookshopStore = Stores.create(
  { /** initialized */ },
  { /** environments */
    notification: (messages: any) => window.alert(messages),
    api: apiInstance,
    bookshopRouter: bookshopRoute
  });

export type BookshopStore = Instance<typeof BookshopStore>;
export const historyAdapter = new HistoryAdapter(BookshopStore.bookshopRouter, history);
historyAdapter.observeRouterStateChanges();
export default BookshopStore;
