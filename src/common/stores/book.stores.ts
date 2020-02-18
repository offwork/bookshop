import { types, flow, getParent, getEnv } from 'mobx-state-tree';

// === BOOK MODEL === //
const Link = types
  .model('Link', {
    thumbnail: types.optional(types.string, '')
  });
const Volume = types
  .model('Volume', {
    title: types.optional(types.string, ''),
    subtitle: types.maybeNull(types.string),
    authors: types.array(types.string),
    publisher: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    imageLinks: types.optional(Link, {})
  });
const Price = types
  .model('Price', {
    amount: types.maybeNull(types.number),
    currencyCode: types.maybeNull(types.string)
  });
const Sale = types
  .model('Sale', {
    country: types.maybeNull(types.string),
    listPrice: types.optional(Price, {})
  });
export const Book = types
  .model('Book', {
    id: types.identifier,
    volumeInfo: types.optional(Volume, {}),
    saleInfo: types.optional(Sale, {})
  });
// === END === //

export const BookStores = types
  .model('BookStores', {
    bookList: types.array(Book),
    
  })
  .views(self => ({
    get api() {
      return getEnv(getParent(self)).api;
    }
  }))
  .actions(self => {
    function updateBooks(data: any) {
      data.forEach((book: any) => {
        self.bookList.push(book);
      });
    }
    const loadBooks = flow(function* loadBooks(term: string) {
      const response = yield self.api.get(`?orderBy=newest&q=${term}`);
      updateBooks(response.data.items);
    });

    return {
      updateBooks,
      loadBooks
    }
  });
