import { Route } from 'mobx-state-router';

export const bookshopRoutes: Route[] = [
  {
    name: 'books',
    pattern: '/'
  },
  {
    name: 'notFound',
    pattern: '/not-found'
  },
  {
    name: 'bookDetails',
    pattern: '/book-details/:id'
  },
];