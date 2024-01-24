import { Icon } from '@iconify/react';
import { ArrowRightLeft, Blocks, History, Users } from 'lucide-react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
    top: true,
  },
  {
    title: 'Wallet',
    path: '/wallet',
    icon: <Icon icon="lucide:wallet" width="24" height="24" />,
    top: true,
  },
  {
    title: 'Explorer',
    path: '/explorer',
    icon: <Icon icon="lucide:compass" width="24" height="24" />,

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

export const wallets = [
  {
    id: 1,
    title: 'Connect with Google',
    sub: 'Wallet linked to you google account.',
    img: '/google-logo.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Bitriel Wallet',
    sub: 'Using a browser extension',
    img: '/bitriel-logo-no-text.png',
    link: '#',
  },
  {
    id: 1,
    title: 'Metamask Wallet',
    sub: 'Using a browser extension.',
    img: '/metamask.png',
    link: '#',
  },
  {
    id: 2,
    title: 'WalletConnect',
    sub: 'Using a browser extension',
    img: '/walletconnect.png',
    link: '#',
  },
];

export const EXPLORERNAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
  },

  {
    title: 'Blockchain',
    path: '',
    submenu: true,
    subMenuItems: [
      { title: 'Blocks', path: '/explorer/blocks' },
      { title: 'Extrinsics', path: '/explorer/extrinsics' },
      { title: 'Transfers', path: '/explorer/transfers' },
      { title: 'Events', path: '#' },
      { title: 'Account', path: '/explorer/accounts' },
    ],
  },
  {
    title: 'EVM',
    path: '/evm',
    submenu: true,
    subMenuItems: [
      { title: 'Transactions', path: '/explorer/evm/transactions' },
      { title: 'Contracts', path: '/explorer/evm/contracts' },
      { title: 'ERC-20 Tokens', path: '/explorer/evm/erc20' },
      { title: 'ERC-721 Tokens', path: '/explorer/evm/erc721' },
    ],
  },
  {
    title: 'WASM',
    path: '',
    submenu: true,
    subMenuItems: [
      { title: 'Transactions', path: '/explorer/wasm/transactions' },
      { title: 'Contracts', path: '/explorer/wasm/contracts' },
      { title: 'ERC-20 Tokens', path: '/explorer/wasm/erc20' },
      { title: 'ERC-721 Tokens', path: '/explorer/wasm/erc721' },
    ],
  },
];

export const data1 = [
  {
    id: 1,
    title: 'Finalized Blocks',
    value: '952502',
    icon: <Blocks size={30} color="#F1B951" />,
  },
  {
    id: 2,
    title: 'Transactions',
    value: '952502',
    icon: <ArrowRightLeft color="#F1B951" size={30} />,
  },
  {
    id: 3,
    title: 'Holders',
    value: '952502',
    icon: <Users color="#F1B951" size={30} />,
  },
  {
    id: 4,
    title: 'Signed Extrinsics',
    value: '952502',
    icon: <History color="#F1B951" size={30} />,
  },
];
