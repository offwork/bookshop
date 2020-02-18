import { types, getEnv } from "mobx-state-tree";
import { BookStores } from './book.stores'
import { BookDetails } from './book-details.stores'

export const Stores = types
  .model('BookshopStores', {
    bookStores: types.optional(BookStores, {
      bookList: []
    }),
    bookDetails: types.optional(BookDetails, {})
  })
  .views(self => ({
    get api() {
      return getEnv(self).api;
    },
    get bookshopRouter() {
      return getEnv(self).bookshopRouter
    },
    get notification() {
      return getEnv(self).notification
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.bookStores.loadBooks('Reactive Programming');
    }
  }));