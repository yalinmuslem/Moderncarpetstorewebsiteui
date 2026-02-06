import { Menu } from 'lucide-react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import InterestIcon from '@mui/icons-material/Interests';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PhotoIcon from '@mui/icons-material/Photo';
import { Button } from './ui/button';
import logoImage from '@/assets/7debed77dd564425f84186c474c7cb785226a20f.png';
import Drawer from '@mui/material/Drawer';
import React from 'react';

export function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const listItems = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Carpet', icon: <CategoryIcon /> },
    { label: 'Project', icon: <InterestIcon /> },
    { label: 'Reviews', icon: <MailIcon /> },
    { label: 'Services', icon: <InboxIcon /> },
    { label: 'Gallery', icon: <PhotoIcon /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {listItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-red-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <p>Free shipping for purchases over Rp. 2,000,000</p>
              <div className="flex gap-4">
                <a href="#" className="hover:underline">Contact Us</a>
                <a href="#" className="hover:underline">About Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <img
                    src={logoImage}
                    alt="Standard Carpets Logo"
                    className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  />                  
                </div>
              </div>
            </div>


            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {listItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleDrawer(true)}>
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}