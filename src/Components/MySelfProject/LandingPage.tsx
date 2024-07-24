// import React, { Component } from 'react';
// import { Button, Container, Typography, Box } from '@mui/material';
// import { withStyles, WithStyles, createStyles } from '@mui/styles';
// import logo from './Assets/image_.png'; 
// import Car from './Assets/car.png'; 

// const styles = createStyles({
//   mainbox: {
//     height: '100vh',
//     backgroundColor: '#E6FAF4',
//   },
//   logo: {
//     width: '150px',
//     marginBottom: '20px',
//   },
//   carImage: {
//     width: '100%',
//     maxWidth: '400px',
//   },
//   typography: {
//     color: 'blue',
//   },
//   buttons: {
//     marginTop: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     gap: '20px',
//     width: '25%',
//   },
// });

// interface Props extends WithStyles<typeof styles> {}

// class LandingPage extends Component<Props> {
//   render() {
//     const { classes } = this.props;

//     return (
//       <Box className={classes.mainbox}>
//         <Container
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//           }}
//         >
//           <img src={logo} alt="E-Ryde Logo" className={classes.logo} />

//           <Box className={classes.carImage}>
//             <img
//               src={Car}
//               alt="Car Image"
//               className={classes.carImage}
//             />
//           </Box>
//           <Typography variant="h4" component="h1" className={classes.typography}>
//             Your safe and smooth ride awaits.
//           </Typography>
//           <Typography variant="subtitle1" className={classes.typography}>
//             Non-medical transport
//           </Typography>
//           <Box className={classes.buttons}>
//             <Button variant="contained" color="primary">
//               Sign Up
//             </Button>
//             <Button variant="outlined" color="primary">
//               Sign In
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     );
//   }
// }

// export default withStyles(styles)(LandingPage);
///////////////////////////////////////////////////////////////perfect//////////////////////
import React, { Component, CSSProperties } from 'react';
import logo from './Assets/image_.png'; 
import Car from './Assets/car.png'; 

const styles: { [key: string]: CSSProperties } = {
  mainbox: {
    height: '100vh',
    backgroundColor: '#E6FAF4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '150px',
    marginBottom: '20px',
  },
  carImage: {
    width: '100%',
    maxWidth: '400px',
  },
  typography: {
    color: '#1D6FB8',
  
    margin: '0', 
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '30px',
    lineHeight: '40px', 
  },
  subTypography: {
    color: '#1D6FB8',
    margin: '0', 
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.005em', 
  },
  buttons: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
    width: '25%',
    padding: '10px 16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  primary: {
    backgroundColor: '#1D6FB8',
    color: '#ECFDF5',
    border: 'none',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    padding: '12px 20px',
  },
  outlined: {
    backgroundColor: '#ECFDF5',
    color: '#1D6FB8',
    border: '1px solid #1976d2',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    textAlign: 'center',
  },
};

class LandingPage extends Component {
  render() {
    return (
      <div style={styles.mainbox}>
        <img src={logo} alt="E-Ryde Logo" style={styles.logo} />

        <div style={styles.carImage}>
          <img src={Car} alt="Car Image" style={styles.carImage} />
        </div>

        <h1 style={styles.typography}>Your safe and smooth ride awaits.</h1>
        <h3 style={styles. subTypography}>Non-medical transport</h3>

        <div style={styles.buttons}>
          <button style={{ ...styles.button, ...styles.primary }}>Sign Up</button>
          <button style={{ ...styles.button, ...styles.outlined }}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default LandingPage;





/////////////////////////////////////////////////////////inline css
// import React, { Component } from 'react';
// import logo from './Assets/image_.png'; 
// import Car from './Assets/car.png'; 

// class LandingPage extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           backgroundColor: '#E6FAF4',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <img
//           src={logo}
//           alt="E-Ryde Logo"
//           style={{
//             width: '150px',
//             marginBottom: '20px',
//           }}
//         />

//         <div
//           style={{
//             width: '100%',
//             maxWidth: '400px',
//           }}
//         >
//           <img
//             src={Car}
//             alt="Car Image"
//             style={{
//               width: '100%',
//               maxWidth: '400px',
//             }}
//           />
//         </div>

//         <h1
//           style={{
//             color: '#1D6FB8',
//             margin: '0',
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 400,
//             fontSize: '30px',
//             lineHeight: '40px',
//           }}
//         >
//           Your safe and smooth ride awaits.
//         </h1>
//         <h3
//           style={{
//             color: '#1D6FB8',
//             margin: '0',
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 400,
//             fontSize: '24px',
//             lineHeight: '32px',
//             letterSpacing: '-0.005em',
//           }}
//         >
//           Non-medical transport
//         </h3>

//         <div
//           style={{
//             marginTop: '20px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             gap: '20px',
//             width: '25%',
//             padding: '10px 16px',
//           }}
//         >
//           <button
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               backgroundColor: '#1D6FB8',
//               color: '#ECFDF5',
//               border: 'none',
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 400,
//               lineHeight: '28px',
//             }}
//           >
//             Sign Up
//           </button>
//           <button
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               backgroundColor: '#ECFDF5',
//               color: '#1D6FB8',
//               border: '1px solid #1976d2',
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 400,
//               lineHeight: '28px',
//               textAlign: 'center',
//             }}
//           >
//             Sign In
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default LandingPage;








