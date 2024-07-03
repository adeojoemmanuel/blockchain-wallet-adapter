import { Route } from './wallet-types';

export type RouteKeys = 'index' | 'dashboard' | 'error' | 'signIn' | 'logOut';

export type Routes = Record<RouteKeys, Route>;

export const enum PERMISSIONS {
  USER = 'user',
  ADMIN = 'admin',
  ANONYMOUS = 'anonymous',
}

export const routes: Routes = {
  index: {
    path: '/',
  },
  dashboard: {
    path: '/dashboard',
    isNavigationItem: true,
    isProtected: true,
    label: 'Home',
    permissions: [PERMISSIONS.USER],
  },
  error: {
    path: '/error',
  },
  signIn: {
    path: '/sign-in', //Should redirect user to sign in, if no auth token passed
  },
  logOut: {
    path: '#',
    label: 'Log Out',
    isNavigationItem: true,
  },
};
