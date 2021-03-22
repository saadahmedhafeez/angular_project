import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'success',
      text: 'NEW'
    }
  },
  {
    name: 'Company Profile',
    url: '/company',
    icon: 'fa fa-picture-o',
    children: [
      {
        name: 'Franchise info',
        url: '/company/franchise-list',
        icon: 'icon-puzzle'
      }
    ]
  },
  // {
  //   name: 'Admin Configuration',
  //   url: '/admin-config',
  //   icon: 'icon-speedometer',
  //   children: [
  //     {
  //       name: 'Device',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Inventory Units',
  //   url: '/inventory-units',
  //   icon: 'fa fa-list-ol',
  //   children: [
  //     {
  //       name: 'Base Unit',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Packing Units',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Define Inventory',
  //   url: '/define-inventory',
  //   icon: 'fa fa-cutlery',
  //   children: [
  //     {
  //       name: 'Category',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Item',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Deal',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Promotion',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Warehouse',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Promotion Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Order Manager',
  //   url: '/order-manager',
  //   icon: 'fa fa-pencil-square-o',
  //   children: [
  //     {
  //       name: 'All Orders',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Kitchen',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Takeaway',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Takeaway Tracker',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Point Of Sale',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Dining Manager',
  //   url: '/dining-manager',
  //   icon: 'fa fa-dot-circle-o',
  //   children: [
  //     {
  //       name: 'Dining Hall',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Dining Table',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Reservation',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Service Call',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Dining Hall Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Dining Table Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'dMenu Contents',
  //   url: '/dMenu-contents',
  //   icon: 'fa fa-sticky-note-o',
  //   children: [
  //     {
  //       name: 'Slider Content',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'FeedBack Questions',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  // {
  //   name: 'Parties',
  //   url: '/parties',
  //   icon: 'fa fa-address-card',
  //   children: [
  //     {
  //       name: 'Customer',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Recipe Manager',
  //   url: '/recipe-manager',
  //   icon: 'fa fa-cutlery',
  //   children: [
  //     {
  //       name: 'Add Recipe',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Recipe List',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Raw Material EST',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Ready to Serve Stock List',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Ready to Serve Stock List',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'User Management',
  //   url: '/user-management',
  //   icon: 'fa fa-user',
  //   children: [
  //     {
  //       name: 'User Manager',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Security Group',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Security Group Rights',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'User Security',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Change User Password',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Change My Password',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  // {
  //   name: 'Reports',
  //   url: '/reports',
  //   icon: 'fa fa-paperclip',
  //   children: [
  //     {
  //       name: 'Sale Invoice Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'POSDayBook Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Stock Consumption Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Customer Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Category Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Stock Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Item Ledger Report',
  //       url: '',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  {
    divider: true
  }
];
