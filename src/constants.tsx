import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
    top: true,
  },
  {
    title: 'Explorer',
    path: '/explorer',
    icon: <Icon icon="lucide:compass" width="24" height="24" />,

    top: true,
  },
  {
    title: 'Wallet',
    path: '/wallet',
    icon: <Icon icon="lucide:wallet" width="24" height="24" />,
    top: true,
  },
  {
    title: 'Swap',
    path: '/swap',
    icon: <Icon icon="lucide:arrow-left-right" width="24" height="24" />,
    top: true,
  },
  {
    title: 'Earn',
    path: '/earn',
    icon: <Icon icon="lucide:bar-chart-big" width="24" height="24" />,
    top: true,
  },
  {
    title: 'Launchpad',
    path: '/launchpad',
    icon: <Icon icon="lucide:rocket" width="24" height="24" />,
    top: true,
  },
  {
    title: 'Docs',
    path: '/docs',
    icon: <Icon icon="lucide:book-text" width="24" height="24" />,
    bottom: true,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    bottom: true,
  },
  {
    title: 'About',
    path: '/about',
    icon: <Icon icon="lucide:info" width="24" height="24" />,
    bottom: true,
  },
];
