import { types } from 'mobx-state-tree';

const extendedStore = types.compose(
  types.model('BookShopModel', {
    index: types.number,
    booksList: types.array(types.model({name: types.string, age: types.string}))
  }),
  types.model('Stores', {})
);
const shop = extendedStore.create(
  {
    index: 1,
    booksList: [{ name: 'Kerem', age: '41' },{ name: 'Ahmet', age: '32' },{ name: 'Hasa', age: '28' }]
  }, {
    notification: (messages: any) => window.alert(messages)
  });

export default shop;
