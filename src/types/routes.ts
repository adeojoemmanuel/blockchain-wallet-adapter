export type Route = {
  path: string;
  isNavigationItem?: boolean;
  isProtected?: boolean;
  label?: string;
  permissions?: string[];
};

export type RouteKeys =
  | 'index'
  | 'dashboard'
  | 'rewardDrops'
  | 'waitlistHome'
  | 'citizenshipResult'
  | 'citizenshipVerification'
  | 'createIdentity'
  | 'error'
  | 'leaderboard'
  // | 'manifesto'
  | 'signIn'
  | 'usGeoRestriction'
  | 'communityUnlocks'
  | 'myPoints'
  | 'dashboardInterstitial'
  | 'logOut'
  | 'termsOfService'
  | 'privacyPolicy';

export type Routes = Record<RouteKeys, Route>;

export const enum PERMISSIONS {
  USER = 'user',
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
  communityUnlocks: {
    path: '/community-unlocks',
    isProtected: true,
    isNavigationItem: true,
    label: 'Community Unlocks',
    permissions: [PERMISSIONS.USER],
  },
  rewardDrops: {
    path: '/reward-drops',
    label: 'Rewards',
    isNavigationItem: false,
    isProtected: true,
    permissions: [PERMISSIONS.USER],
  },
  myPoints: {
    path: '/my-points',
    isProtected: true,
    isNavigationItem: true,
    label: 'My Points',
    permissions: [PERMISSIONS.USER],
  },
  waitlistHome: {
    isProtected: true,
    path: '/home',
  },
  citizenshipResult: {
    path: '/citizenship-result',
  },
  citizenshipVerification: {
    path: '/citizenship-verification',
  },
  createIdentity: {
    isProtected: true,
    path: '/create-identity',
  },
  error: {
    path: '/error',
  },
  leaderboard: {
    path: '/leaderboard',
    label: 'Leaderboard',
    isNavigationItem: false,
    isProtected: true,
    permissions: [PERMISSIONS.USER],
  },
  // manifesto: {
  //   path: '/manifesto',
  //   label: 'Manifesto',
  //   isNavigationItem: true,
  //   isProtected: true,
  // },
  signIn: {
    path: '/sign-in',
  },
  usGeoRestriction: {
    path: '/us-geo-restriction',
  },
  dashboardInterstitial: {
    path: '/dashboard-interstitial',
    isProtected: true,
  },
  logOut: {
    path: '#',
    label: 'Log Out',
    isNavigationItem: true,
  },
  termsOfService: {
    path: `/terms-of-service`,
  },
  privacyPolicy: {
    path: `/privacy-policy`,
  },
};
