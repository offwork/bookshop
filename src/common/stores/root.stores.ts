import { types, Instance, getEnv } from 'mobx-state-tree';
import { RouterStore, RouterState } from 'mobx-state-router';
import { HistoryAdapter } from "mobx-state-router";
import { createBrowserHistory } from "history";
import { bookshopRoutes } from '../router/bookshop.routing';


/**
 * extendedStore stores data 
 * to be processed across the application
 */
const extendedStore = types.compose(
  types.model('BookShopModel', {
    index: types.number,
    booksList: types.array(types.model({name: types.string, age: types.string}))
  }),
  types.model('Stores', {
  })
  .views(self => ({
    get bookshopRouter() {
      return getEnv(self).bookshopRouter
    },
    get notification() {
      return getEnv(self).notification
    },
  }))
);

const notFound = new RouterState("notFound");
const bookshopRoute = new RouterStore(extendedStore, bookshopRoutes, notFound);
const history = createBrowserHistory();

/**
 * BookshopStore is responsible for starting 
 * the stores and preparing the application environment
 */
const BookshopStore = extendedStore.create(
  { /** initialized */
    index: 1,
    booksList: [{ name: 'Kerem', age: '41' },{ name: 'Ahmet', age: '32' },{ name: 'Hasan', age: '28' }]
  },
  { /** environments */
    notification: (messages: any) => window.alert(messages),
    bookshopRouter: bookshopRoute
  });

export type BookshopStore = Instance<typeof BookshopStore>;
export const historyAdapter = new HistoryAdapter(BookshopStore.bookshopRouter, history);
historyAdapter.observeRouterStateChanges();
export default BookshopStore;
