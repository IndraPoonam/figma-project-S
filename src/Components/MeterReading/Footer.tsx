// import React, { Component } from 'react';
// import { Container, Typography, Grid, Box } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
// import machine from './Assets/image_main.png';
// class Footer extends Component {
//     render() {
//         return (
//             <Box>
//                 <Box style={{ backgroundColor: '#1D8DBC', color: '#FFFFFF', padding: '80px 99px 80px 99px', textAlign: 'center', height: '248px', }}>
//                     <Typography sx={{ fontSize: '30px', fontWeight: 400 }}>
//                         Accurate water, electrical, and gas meter readings.
//                     </Typography>
//                     <Typography style={{ fontWeight: 900, fontSize: '30px', color: '#FFFFFF' }}>
//                         CALL (718) 756-4123
//                     </Typography>
//                 </Box>

//                 <Box style={{
//                     height: '136px',
//                     backgroundColor: '#f15644', color: 'white', padding: '30px ',
//                     textAlign: 'center', display: 'flex', justifyContent: 'space-between'
//                 }}>
//                     <Typography sx={{ fontSize: '27px', fontWeight: 800, color: '#FFFFFF' }}>
//                         WHENEVER YOU NEED A METER TO BE READ, WE'RE HERE TO <br /> HELP. GIVE US A CALL AND WE’LL TAKE CARE OF THE REST.
//                     </Typography>
//                     <Typography style={{ fontWeight: 800, color: '#000000', fontSize: '33px' }}>
//                         <PhoneIcon style={{ color: '#000000', verticalAlign: 'middle', fontSize: '33px' }} /> 718.756.4123 <br />
//                         <PhoneIcon style={{ color: '#000000', verticalAlign: 'middle', fontSize: '33px' }} /> 212.673.8920
//                     </Typography>
//                 </Box>

//                 <Box sx={{ height: '364px', padding: '40px 99px 10px 99px', background: 'black' }}>
//                     <Box style={{ padding: '20px 0', background: 'black',height: '314px', display: 'flex', }}>
//                         <Box sx={{ width: '230px', height: '210px', display: 'flex', flexDirection: 'column',gap:'25px'}}>
//                             <Typography variant="h6" style={{ color: 'white', marginBottom: '10px' }}>INFO</Typography>
//                             <Box sx={{display:'flex',flexDirection:'column',gap:'16px'}}><Typography style={{ color: '#3b99fc', cursor: 'pointer' }}>Home</Typography>
//                             <Typography style={{ color: 'white', cursor: 'pointer' }}>About Us</Typography>
//                             <Typography style={{ color: 'white', cursor: 'pointer' }}>Services</Typography>
//                             <Typography style={{ color: 'white', cursor: 'pointer' }}>Testimonials</Typography>
//                             <Typography style={{ color: 'white', cursor: 'pointer' }}>Contact</Typography>
//                             </Box>
//                         </Box>

//                         <Box
//                             sx={{
//                                 width: '650px',
//                                 height: '284.97px',
//                                 color: '#FFFFFF',
//                                 display: 'flex', flexDirection: 'column', gap: '23px',
                          
//                             }}
//                         >
//                             <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
//                                 METER READING SERVICE
//                             </Typography>
//                             <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>  <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
//                                 1056 E 103rd St, Brooklyn, NY, 11236
//                             </Typography>
//                                 <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>
//                                     info@meterreading.nyc
//                                 </Typography></Box>
//                             <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
//                                 AVAILABLE HOURS
//                             </Typography>
//                             <Box> <Typography variant="body1">
//                                 Monday – Friday: 9:00 AM – 5:00 PM
//                             </Typography>
//                                 <Typography variant="body1">
//                                     Saturday, Sunday: Closed
//                                 </Typography>
//                                 <Typography variant="body1">
//                                     Holidays: Closed
//                                 </Typography></Box>
//                         </Box>
//                         <Box sx={{ height: '314px', width: '330px'}}>
//                             <img
//                                 style={{
//                                     width: '330px',
//                                     height: '314px',
//                                 }}
//                                 src={machine}
//                                 alt="machine"
//                             />
//                         </Box>
//                     </Box>
//                 </Box>

//                 <Box style={{ backgroundColor: '#000000', color: 'white', padding: '10px', textAlign: 'center' }}>
//                     <Typography sx={{ fontSize: '13px', fontWeight: 400 }}>
//                         © 2024 The Meter Reading Service. All Rights Reserved. | Sitemap
//                     </Typography>
//                 </Box>
//             </Box>
//         );
//     }
// }

// export default Footer;


import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import machine from './Assets/image_main.png';

class Footer extends Component {
  render() {
    return (
      <Box>
        <Box sx={styles.topSection}>
          <Typography sx={styles.mainText}>
            Accurate water, electrical, and gas meter readings.
          </Typography>
          <Typography sx={styles.callText}>
            CALL (718) 756-4123
          </Typography>
        </Box>

        <Box sx={styles.middleSection}>
          <Typography sx={styles.middleText}>
            WHENEVER YOU NEED A METER TO BE READ, WE'RE HERE TO <br /> HELP. GIVE US A CALL AND WE’LL TAKE CARE OF THE REST.
          </Typography>
          <Typography sx={styles.phoneText}>
            <PhoneIcon sx={styles.phoneIcon} /> 718.756.4123 <br />
            <PhoneIcon sx={styles.phoneIcon} /> 212.673.8920
          </Typography>
        </Box>

        <Box sx={styles.bottomSection}>
          <Box sx={styles.infoContainer}>
            <Box sx={styles.infoBox}>
              <Typography variant="h6" sx={styles.infoHeader}>INFO</Typography>
              <Box sx={styles.links}>
                <Typography sx={styles.link}>Home</Typography>
                <Typography sx={styles.link}>About Us</Typography>
                <Typography sx={styles.link}>Services</Typography>
                <Typography sx={styles.link}>Testimonials</Typography>
                <Typography sx={styles.link}>Contact</Typography>
              </Box>
            </Box>

            <Box sx={styles.serviceBox}>
              <Typography sx={styles.serviceTitle}>
                METER READING SERVICE
              </Typography>
              <Box>
                <Typography sx={styles.serviceText}>
                  1056 E 103rd St, Brooklyn, NY, 11236
                </Typography>
                <Typography sx={styles.serviceText}>
                  info@meterreading.nyc
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom sx={styles.hoursHeader}>
                AVAILABLE HOURS
              </Typography>
              <Box>
                <Typography sx={styles.hoursText}>
                  Monday – Friday: 9:00 AM – 5:00 PM
                </Typography>
                <Typography sx={styles.hoursText}>
                  Saturday, Sunday: Closed
                </Typography>
                <Typography sx={styles.hoursText}>
                  Holidays: Closed
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.imageBox}>
              <img
                style={styles.image}
                src={machine}
                alt="machine"
              />
            </Box>
          </Box>
        </Box>

        <Box sx={styles.footer}>
          <Typography sx={styles.footerText}>
            © 2024 The Meter Reading Service. All Rights Reserved. | Sitemap
          </Typography>
        </Box>
      </Box>
    );
  }
}

const styles = {
  topSection: {
    backgroundColor: '#1D8DBC',
    color: '#FFFFFF',
    paddingTop: '80px',
    textAlign: 'center',
    height: '248px',
  },
  mainText: {
    fontSize: '30px',
    fontWeight: 400,
  },
  callText: {
    fontWeight: 900,
    fontSize: '30px',
    color: '#FFFFFF',
  },
  middleSection: {
    height: '136px',
    backgroundColor: '#f15644',
    color: 'white',
    padding: '30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  middleText: {
    fontSize: '27px',
    fontWeight: 800,
    color: '#FFFFFF',
  },
  phoneText: {
    fontWeight: 800,
    color: '#000000',
    fontSize: '33px',
  },
  phoneIcon: {
    color: '#000000',
    verticalAlign: 'middle',
    fontSize: '33px',
  },
  bottomSection: {
    height: '364px',
    padding: '40px 99px 10px 99px',
    // background: '#191919',
    backgroundImage: `url(${machine})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  
  },
  infoContainer: {
    padding: '20px 0',
    // background: '#191919',
    height: '314px',
    display: 'flex',
  },
  infoBox: {
    width: '230px',
    height: '210px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    font:'bold'
   
  },
  infoHeader: {
    color: 'black',
    font:'bold',
    marginBottom: '10px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
link: {
    color: 'black',
    cursor: 'pointer',
    ':hover': {
      color: '#3b99fc',
    },
    ':focus': {
      color: '#3b99fc',
    },
  },
  serviceBox: {
    width: '650px',
    height: '284.97px',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    gap: '23px',
  },
  serviceTitle: {
    fontSize: '18px',
    fontWeight: 600,
  },
  serviceText: {
    fontSize: '16px',
    fontWeight: 400,
  },
  hoursHeader: {
    marginTop: 2,
  },
  hoursText: {
    fontSize: '16px',
    fontWeight: 400,
  },
  imageBox: {
    height: '314px',
    width: '330px',
  },
  image: {
    width: '330px',
    height: '314px',
  },
  footer: {
    backgroundColor: '#000000',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '13px',
    fontWeight: 400,
  },
};

export default Footer;

