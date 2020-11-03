import Tasks from './views/Tasks'
import Home from './views/Home'

export const routes = [
  {
      path: '/',
      component: Home
  },
  {
      path: '/tasks',
      component: Tasks,
  },
];