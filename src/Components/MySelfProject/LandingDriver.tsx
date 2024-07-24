
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

class LandingDriver extends Component {
  render() {
    return (
      <div style={styles.mainbox}>
        <img src={logo} alt="E-Ryde Logo" style={styles.logo} />

        <div style={styles.carImage}>
          <img src={Car} alt="Car Image" style={styles.carImage} />
        </div>

        <h1 style={styles.typography}>Earn on the Road, Drive with Freedom</h1>
        <h3 style={styles. subTypography}>Non-medical transport</h3>

        <div style={styles.buttons}>
          <button style={{ ...styles.button, ...styles.primary }}>Sign Up</button>
          <button style={{ ...styles.button, ...styles.outlined }}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default LandingDriver;
