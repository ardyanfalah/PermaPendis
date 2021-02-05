import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'User Management'
  },
  {
    name: 'Admin',
    url: '/admin/daftar-admin',
    icon: 'icon-user'
  },
  {
    name: 'Peserta',
    url: '/admin/daftar-peserta',
    icon: 'icon-user'
  },
  {
    name: 'Instruktur',
    url: '/admin/daftar-instruktur',
    icon: 'icon-user'
  },
  {
    name: 'Penyelenggara',
    url: '/admin/daftar-penyelenggara',
    icon: 'icon-user'
  },
  {
    title: true,
    name: 'Event Webinar'
  },
  {
    name: 'Transaksi',
    url: '/admin/daftar-transaksi',
    icon: 'icon-user'
  },
  {
    name: 'Schedule',
    url: '/admin/daftar-jadwal',
    icon: 'icon-user'
  },
];
