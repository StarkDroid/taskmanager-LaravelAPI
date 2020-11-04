import Tasks from './views/Tasks'
import Home from './views/Home'

export const routes = [
  {
      path: '/',
      name: 'Dashboard',
      component: Home
  },
  {
      path: '/tasks',
      name: 'tasks.index',
      component: Tasks,
  },
  // {
  //   path: '/projects',
  //   component: Projects,
  // },
  // {
  //   path: '/users',
  //   component: Users,
  // },
];