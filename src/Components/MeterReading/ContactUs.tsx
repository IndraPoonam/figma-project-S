// import React, { Component } from 'react';
// import { Box, TextField, Button, Typography, Link, FormControl, OutlinedInput } from '@mui/material';
// import { withStyles, WithStyles, createStyles } from '@mui/styles';
// import banner from './Assets/image_banner-01.jpg.png';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

// const styles = createStyles({
//   container: {
//     padding: '80px',
//     backgroundColor: '#e0f7fa',
//     border: '2px solid green',
//   },
//   form: {
//     border: '1px solid rgba(0, 0, 0, 0.25)',
//     padding: '19px',
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     height: '597.44px',
//   },
//   formField: {
//     marginBottom: '15px',
//     width: '100%',
//   },
//   mapContainer: {
//     marginTop: '20px',
//   },
//   banner: {
//     backgroundImage: `url(${banner})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '746px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//   },
//   mainTitle: {
//     fontSize: '32px',
//     fontWeight: 800,
//     color: '#12629A',
//     font: 'Nunito Sans',
//     letterSpacing: '-3px',
//   },
//   description: {
//     fontSize: '18px',
//     fontWeight: 400,
//     color: '#000000',
//     letterSpacing: '-0.1px',
//   },
//   contactInfo: {
//     flex: 1,
//     paddingRight:'16px',
//     gap: '30px',
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//   },
//   contactForm: {
//     flex: 1,
//   },
//   requiredField: {
//     color: 'red',
//     fontSize: '18px',
//     fontWeight: 700,
//   },
//   submitButton: {
//     width: '148px',
//     height: '39px',
//     background: '#12629A',
//     color: '#FFFFFF',
//   },
// });

// interface Props extends WithStyles<typeof styles> { }

// class ContactUs extends Component<Props> {
//   render() {
//     const { classes } = this.props;

//     return (
//       <>
//         <Box className={classes.banner}></Box>
//         <Box className={classes.container}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//             <Typography className={classes.mainTitle}>
//               CONTACT US FOR OUR MAIN METER READING SERVICES IN BROOKLYN, NY
//             </Typography>

//             <Typography className={classes.description}>
//               <span style={{ color: 'blue' }}>Services</span> offered to our customers are main meter reading services in Brooklyn, NY,
//               customized tenant invoices, sub-meter reading services, verifying accuracy of city bills, and more.
//             </Typography>
//             <Typography className={classes.description}>
//               Please phone, email, fax or leave us a message and we will be happy to get back to you!
//             </Typography>

//             <Box />
//             <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '697.44px' }}>
//               <Box className={classes.contactInfo}>
//                 <Typography>
//                   <Box>
//                     <strong>Phone:</strong> 718-756-4123 or 212-673-8920
//                   </Box>
//                   <Box>
//                     <strong>Fax:</strong> 718-773-2900
//                   </Box>
//                   <Box>
//                     <strong>Email:</strong> <Link href="mailto:info@meterreading.nyc"><EmailOutlinedIcon /> info@meterreading.nyc</Link>
//                   </Box>

//                 </Typography>
//                 <Box>
//                     <strong>Location:</strong> 1056 E 103rd St, Brooklyn, NY Zip 11236
//                   </Box>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.510256490428!2d-73.89728218459318!3d40.657394779339125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244bac48d6d97%3A0xb8c49e2a792f3427!2s1056%20E%20103rd%20St%2C%20Brooklyn%2C%20NY%2011236%2C%20USA!5e0!3m2!1sen!2sin!4v1627118832564!5m2!1sen!2sin"
//                   width="100%"
//                   height="482.5px"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   title="map"
//                 ></iframe>
//               </Box>
//               <Box className={classes.contactForm}>

//                 <Box component="form" className={classes.form}>
//                   <Typography align='right'>Fields marked with an <span className={classes.requiredField}>*</span> are required</Typography>
//                   <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>Name
//                     <span className={classes.requiredField}>*</span></Typography>
//                   <FormControl sx={{ width: '100%', marginBottom: '15px' }}>
//                     <OutlinedInput />
//                   </FormControl>
//                   <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '16px' }}>
//                     <Box sx={{ flex: 1 }}>
//                       <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>Email
//                         <span className={classes.requiredField}>*</span></Typography>
//                       <FormControl className={classes.formField}>
//                         <OutlinedInput />
//                       </FormControl>
//                     </Box>

//                     <Box sx={{ flex: 1 }}>
//                       <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>Phone
//                         <span className={classes.requiredField}>*</span></Typography>
//                       <FormControl className={classes.formField}>
//                         <OutlinedInput />
//                       </FormControl>
//                     </Box>
//                   </Box>
//                   <Typography fontWeight="bold" sx={{ marginTop: '8px' }}>Services Needed</Typography>
//                   <FormControl sx={{ width: '100%', marginBottom: '15px' }}>
//                     <OutlinedInput />
//                   </FormControl>
//                   <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>
//                     Comments/Message<span className={classes.requiredField}>*</span>
//                   </Typography>

//                   <FormControl sx={{ width: '100%', height: '270.44px' }}>
//                     <OutlinedInput multiline rows={6} />
//                   </FormControl>
//                   <Button variant="contained" className={classes.submitButton}>
//                     Submit
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </>
//     );
//   }
// }

// export default withStyles(styles)(ContactUs);







import React, { Component } from 'react';
import { Box, TextField, Button, Typography, Link, FormControl, OutlinedInput } from '@mui/material';
import { withStyles, WithStyles, createStyles } from '@mui/styles';
import banner from './Assets/image_banner-01.jpg.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const styles = createStyles({
  container: {
    padding: '80px',
    backgroundColor: '#e0f7fa',
  },
  form: {
    border: '1px solid rgba(0, 0, 0, 0.25)',
    padding: '19px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    height: '597.44px',
  },
  formField: {
    marginBottom: '15px',
    width: '100%'
  },
  mapContainer: {
    marginTop: '20px',
  },
});

interface Props extends WithStyles<typeof styles> { }

class ContactUs extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <>
        {/* <Box
          sx={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '746px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        ></Box> */}
        <Box className={classes.container}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 800, color: '#12629A', font: 'Nunito Sans', letterSpacing: '-3px' }}>
              CONTACT US FOR OUR MAIN METER READING SERVICES IN BROOKLYN, NY
            </Typography>

            <Typography sx={{ fontSize: '18px', fontWeight: 400, color: '#000000', letterSpacing: '-0.1px' }}>
              <span style={{ color: 'blue' }}>Services</span> offered to our customers are main meter reading services in Brooklyn, NY,
              customized tenant invoices, sub-meter reading services, verifying accuracy of city bills, and more.
            </Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: 400, color: '#000000', letterSpacing: '-0.1px' }}>
              Please phone, email, fax or leave us a message and we will be happy to get back to you!
            </Typography>

            <Box />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '697.44px' }}>
              <Box sx={{ flex: 1, paddingRight: { md: '16px' }, gap: '30px', display: 'flex', flexDirection: 'column', }}>
                <Typography>
                  <Box>
                    <strong>Phone:</strong> 718-756-4123 or 212-673-8920
                  </Box>
                  <Box>
                    <strong>Fax:</strong> 718-773-2900
                  </Box>
                 
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" style={{ marginRight: '5px',fontWeight:'bold' }}>
                      Email:
                    </Typography>
                    <div style={{ display: 'inline-flex', alignItems: 'center', color: 'blue' }}>
                      <EmailOutlinedIcon style={{ verticalAlign: 'middle' }} />
                      <Typography variant="body1" style={{ marginLeft: '5px' }}>
                        info@meterreading.nyc
                      </Typography>
                    </div>
                  </Box>


                </Typography>
                <Box>
                  <strong>Location:</strong> 1056 E 103rd St, Brooklyn, NY Zip 11236
                </Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.510256490428!2d-73.89728218459318!3d40.657394779339125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244bac48d6d97%3A0xb8c49e2a792f3427!2s1056%20E%20103rd%20St%2C%20Brooklyn%2C%20NY%2011236%2C%20USA!5e0!3m2!1sen!2sin!4v1627118832564!5m2!1sen!2sin"
                  width="100%"
                  height="482.5px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="map"
                ></iframe>
              </Box>
              <Box sx={{ flex: 1, }}>

                <Box component="form" className={classes.form}>
                  <Typography align='right'>Fields marked with an <span style={{ color: 'red', fontSize: '18px', fontWeight: 700 }}>*</span> are required</Typography>
                  <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>Name
                    <span style={{ color: 'red', fontSize: '18px', fontWeight: 700 }}>*</span></Typography>
                  <FormControl sx={{ width: '100%', marginBottom: '15px' }}>
                    <OutlinedInput />
                  </FormControl>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '16px' }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>Email
                        <span style={{ color: 'red', fontSize: '18px', fontWeight: 700 }}>*</span></Typography>
                      <FormControl className={classes.formField}>
                        <OutlinedInput />
                      </FormControl>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>Phone
                        <span style={{ color: 'red', fontSize: '18px', fontWeight: 700 }}>*</span></Typography>
                      <FormControl className={classes.formField}>
                        <OutlinedInput />
                      </FormControl>
                    </Box>
                  </Box>
                  <Typography fontWeight="bold" sx={{ marginTop: '8px' }}>Services Needed</Typography>
                  <FormControl sx={{ width: '100%', marginBottom: '15px' }}>
                    <OutlinedInput />
                  </FormControl>
                  {/* <Typography fontWeight="bold">Comments/Message*</Typography> */}
                  <Typography sx={{ marginTop: '8px', fontSize: '18px', fontWeight: 700, color: '#000000' }}>
                    Comments/Message<span style={{ color: 'red', fontSize: '18px', fontWeight: 700 }}>*</span>
                  </Typography>

                  <FormControl sx={{ width: '100%', height: '270.44px' }}>
                    <OutlinedInput multiline rows={6} />
                  </FormControl>
                  <Button variant="contained" sx={{ width: '148px', height: '39px', background: '#12629A', color: '#FFFFFF' }}>
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default withStyles(styles)(ContactUs);
