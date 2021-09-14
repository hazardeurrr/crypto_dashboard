import React from 'react';
import {
  SidebarEmailIcon,
  SidebarChatIcon,
  SidebarEcommerceIcon,
  SidebarMapsIcon,
  SidebarProfileIcon,
  SidebarScrumBoardIcon,
  SidebarInvoiceIcon,
  SidebarYouTubeIcon,
  SidebarCalendarIcon,
  SidebarNotesIcon,
  SidebarToDosIcon,
  SidebarFireStoreIcon,
  SidebarContactsIcon,
  SidebarShuffleIcon,
  SidebarChartsIcon,
  SidebarFormsIcon,
  SidebarUIIcon,
  SidebarAdvancedIcon,
  SidebarFeedbackIcon,
  SidebarTablesIcon,
  SidebarPagesIcon,
  SidebarGithubIcon,
  SidebarBlankIcon,
  IconPie
} from '@iso/config/icon.config';

const options = [
  {
    key: 'notes',
    label: 'sidebar.notes',
    leftIcon: <SidebarNotesIcon size={19} />,
  },
  // {
  //   key: 'todo',
  //   label: 'sidebar.todos',
  //   leftIcon: <SidebarToDosIcon size={19} />,
  // },
  {
    key: 'articles',
    label: 'Trades',
    leftIcon: <SidebarChartsIcon size={19} />,
  },
  {
    key: 'investors',
    label: 'Wallet',
    leftIcon: <IconPie size={19} />,
    
  },
  
];
export default options;
