import { types, Instance, getEnv } from 'mobx-state-tree';
import { RouterStore, RouterState } from 'mobx-state-router';
import { bookshopRoutes } from '../router/bookshop.routing';

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
const BookshopStore = extendedStore.create(
  {
    index: 1,
    booksList: [{ name: 'Kerem', age: '41' },{ name: 'Ahmet', age: '32' },{ name: 'Hasan', age: '28' }]
  }, {
    notification: (messages: any) => window.alert(messages),
    bookshopRouter: bookshopRoute
  });

export type BookshopStore = Instance<typeof BookshopStore>;
export default BookshopStore;
