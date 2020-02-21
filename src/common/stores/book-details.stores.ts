import { types } from "mobx-state-tree";
import { Book } from './book.stores'
export const BookDetails = types
  .model('BookshopStores', {
    book: types.maybeNull(types.reference(Book))
  })
  .views(self => ({}))
  .actions(self => ({
    selectedBook(book: any) {
      self.book = book;
    }
  }));
