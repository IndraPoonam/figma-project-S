// import React, { Component } from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import Logo from './Assets/headLogo.png';
// export default class AppHeader extends Component {
//   render() {
//     return (
//       <>
//         <AppBar position="static" sx={styles.headerAppBar}>
//           <Toolbar sx={styles.toolbar}>
//             <Box sx={styles.logoContainer}>
//               {/* <img src={image1} alt="Logo" style={{ height: '60px' }} /> */}
//               <Typography sx={styles.logoText}>
//               <Logo/> THE METER READING SERVICES
//               </Typography>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <AppBar position="static" sx={styles.navBar}>
//           <Toolbar sx={styles.navToolbar}>
//             <Box>
//               <Button sx={styles.navButton}>Home</Button>
//               <Button sx={styles.navButton}>About Us</Button>
//               <Button sx={styles.navButton}>Services</Button>
//               <Button sx={styles.navButton}>Testimonials</Button>
//               <Button sx={styles.navButton}>Contact</Button>
//               <Button sx={styles.navButton}>Request Service</Button>
//               <Button color="inherit" sx={styles.navButton}>Log In</Button>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </>
//     );
//   }
// }


// const styles = {
//   headerAppBar: {
//     backgroundColor: '#2D3E50',
//     height: '99.11px',
//     paddingTop: '16.56px',
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
//   logoContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   logoText: {
//     fontFamily: 'Oswald, sans-serif',
//     fontWeight: 600,
//     fontSize: '39px',
//     lineHeight: '36px',
//     marginBottom: '12px',
//   },
//   navBar: {
//     background: '#3FB1CE',
//   },
//   navToolbar: {
//     display: 'flex',
//     justifyContent: 'center',
//     textAlign: 'center',
//     height: '55.18px',
//   },
//   navButton: {
//     ':hover': { backgroundColor: '#12629A', height: '55.18px' },
//     ':active': { backgroundColor: '#12629A', height: '55.18px' },
//     fontSize: '18px',
//     fontWeight: 800,
//     color: '#FFFFFF',
//     margin: '0 8px', 
//   },
// };


import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Logo from './Assets/headLogo.png';

export default class AppHeader extends Component {
  render() {
    return (
      <>
        <AppBar position="static" sx={styles.headerAppBar}>
          <Toolbar sx={styles.toolbar}>
            <Box sx={styles.logoContainer}>
              <img src={Logo} alt="Logo" style={{ height: '60px', marginRight: '8px' }} />
              <Typography sx={styles.logoText}>
                THE METER READING SERVICES
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <AppBar position="static" sx={styles.navBar}>
          <Toolbar sx={styles.navToolbar}>
            <Box>
              <Button sx={styles.navButton}>Home</Button>
              <Button sx={styles.navButton}>About Us</Button>
              <Button sx={styles.navButton}>Services</Button>
              <Button sx={styles.navButton}>Testimonials</Button>
              <Button sx={styles.navButton}>Contact</Button>
              <Button sx={styles.navButton}>Request Service</Button>
              <Button color="inherit" sx={styles.navButton}>Log In</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

const styles = {
  headerAppBar: {
    backgroundColor: '#2D3E50',
    height: '99.11px',
    paddingTop: '16.56px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  logoText: {
    fontFamily: 'Oswald, sans-serif',
    fontWeight: 600,
    fontSize: '39px',
    lineHeight: '36px',
    marginBottom: '12px',
  },
  navBar: {
    background: '#3FB1CE',
  },
  navToolbar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    height: '55.18px',
  },
  navButton: {
    ':hover': { backgroundColor: '#12629A', height: '55.18px' },
    ':active': { backgroundColor: '#12629A', height: '55.18px' },
    fontSize: '18px',
    fontWeight: 800,
    color: '#FFFFFF',
    margin: '0 8px', 
  },
};

