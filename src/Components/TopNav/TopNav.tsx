import React, { Component } from 'react';
import { AppBar,Toolbar,Typography, IconButton, Button, Menu,  MenuItem,Box,} from '@mui/material';
import {Dashboard, Info,ContactMail, School,Translate,Notifications,CardMembership,Subscriptions,People,Gavel,AccountCircle,} from '@mui/icons-material';

interface TopNavState {
  anchorEl: null | HTMLElement;
}

class TopNav extends Component<{}, TopNavState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight:'bold', color:'red', fontSize:'1.2rem' }}>
            EtOH Coach
          </Typography>
          <Button startIcon={<Dashboard />} sx={{  fontSize: '0.3rem'}}>Dashboard</Button>
          <Button startIcon={<Info />}  sx={{  fontSize: '0.3rem' }}>App Detail</Button>
          <Button startIcon={<ContactMail />}  sx={{  fontSize: '0.3rem' }}>Contact Us</Button>
          <Button startIcon={<School />}  sx={{  fontSize: '0.3rem' }}>Courses</Button>
          <Button startIcon={<Translate />} sx={{  fontSize: '0.3rem'}}>Language</Button>
          <Button startIcon={<Notifications />} sx={{  fontSize: '0.3rem'}}>Notifications</Button>
          <Button startIcon={<CardMembership />} sx={{  fontSize: '0.3rem' }}>Certificates</Button>
          <Button startIcon={<Subscriptions />}  sx={{  fontSize: '0.3rem'}}>Subscription</Button>
          <Button startIcon={<People />}  sx={{  fontSize: '0.3rem'}}>Users</Button>
          <Button startIcon={<Gavel />}  sx={{  fontSize: '0.3rem' }}>Terms & Conditions</Button>
        
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            <AccountCircle />
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              admin@example.com
            </Typography>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopNav;


// import React, { useState, MouseEvent } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Button,
//   Menu,
//   MenuItem,
//   useMediaQuery,
//   Theme,
//   Hidden,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Box,
// } from '@mui/material';
// import {
//   Dashboard,
//   Info,
//   ContactMail,
//   School,
//   Translate,
//   Notifications,
//   CardMembership,
//   Subscriptions,
//   People,
//   Gavel,
//   AccountCircle,
//   Menu as MenuIcon,
// } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';

// const TopNav: React.FC = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleMenu = (event: MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   // const toggleDrawer = (open: boolean) => (event: MouseEvent) => {
//   //   if (
//   //     event.type === 'keydown' &&
//   //     ((event as React.KeyboardEvent).key === 'Tab' ||
//   //       (event as React.KeyboardEvent).key === 'Shift')
//   //   ) {
//   //     return;
//   //   }
//   //   setDrawerOpen(open);
//   // };

//   const toggleDrawer = (open: boolean) => (event: MouseEvent<unknown>) => {
//     if (
//       event.type === 'keydown' &&
//       ((event as React.KeyboardEvent).key === 'Tab' ||
//         (event as React.KeyboardEvent).key === 'Shift')
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: 'Dashboard', icon: <Dashboard /> },
//     { text: 'App Detail', icon: <Info /> },
//     { text: 'Contact Us', icon: <ContactMail /> },
//     { text: 'Courses', icon: <School /> },
//     { text: 'Language', icon: <Translate /> },
//     { text: 'Notifications', icon: <Notifications /> },
//     { text: 'Certificates', icon: <CardMembership /> },
//     { text: 'Subscription', icon: <Subscriptions /> },
//     { text: 'Users', icon: <People /> },
//     { text: 'Terms & Conditions', icon: <Gavel /> },
//   ];

//   const renderMenuButtons = () => (
//     <>
//       {menuItems.map((item) => (
//         <Button
//           key={item.text}
//           startIcon={item.icon}
//           sx={{ fontSize: '0.8rem' }}
//         >
//           {item.text}
//         </Button>
//       ))}
//     </>
//   );

//   const renderDrawerList = () => (
//     // <Box
//     //   sx={{ width: 250 }}
//     //   role="presentation"
//     //   onClick={toggleDrawer(false)}
//     //   onKeyDown={toggleDrawer(false)}
//     // >
//     <Box
//   sx={{ width: 250 }}
//   role="presentation"
//   onClick={toggleDrawer(false)}
//   onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => toggleDrawer(false)(event)}
// >
//       <List>
//         {menuItems.map((item) => (
//           <ListItem button key={item.text}>
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="static" color="default">
//       <Toolbar>
//         <Typography
//           variant="h6"
//           noWrap
//           sx={{ flexGrow: 1, fontWeight: 'bold', color: 'red', fontSize: '1.2rem' }}
//         >
//           EtOH Coach
//         </Typography>
//         <Hidden smDown>{renderMenuButtons()}</Hidden>
//         <Hidden smUp>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Hidden>
//         <IconButton
//           edge="end"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleMenu}
//           color="inherit"
//         >
//           <AccountCircle />
//           <Typography variant="body1" sx={{ marginLeft: 1 }}>
//             admin@example.com
//           </Typography>
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorEl}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Profile</MenuItem>
//           <MenuItem onClick={handleClose}>My account</MenuItem>
//         </Menu>
//       </Toolbar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {renderDrawerList()}
//       </Drawer>
//     </AppBar>
//   );
// };

// export default TopNav;
