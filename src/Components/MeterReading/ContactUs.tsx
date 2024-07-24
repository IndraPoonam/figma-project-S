import React, { Component } from 'react';
import { Box, TextField, Button, Typography, Grid, Link,FormControl,OutlinedInput } from '@mui/material';
import { withStyles, WithStyles, createStyles } from '@mui/styles';

const styles = createStyles({
  container: {
    padding: '80px',
    backgroundColor: '#e0f7fa',
  },
  form: {
    border:'1px solid #000000',
    padding:'19px',
    display: 'flex',
    flexDirection: 'column' as 'column', // Explicitly typing as 'column'
  },
  formField: {
    marginBottom: '15px',
  },
  mapContainer: {
    marginTop: '20px',
  },
  header: {
    color: '#0077c2',
    marginBottom: '20px',
  },
  contactInfo: {
    marginBottom: '20px',
  }
});

interface Props extends WithStyles<typeof styles> {}

class ContactUs extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          CONTACT US FOR OUR MAIN METER READING SERVICES IN BROOKLYN, NY
        </Typography>
        <Typography variant="body1" className={classes.contactInfo}>
          <Link href="#" underline="hover">Services</Link> offered to our customers are main meter reading services in Brooklyn, NY, customized tenant invoices, sub-meter reading services, verifying accuracy of city bills, and more.<br /><br />
          Please phone, email, fax or leave us a message and we will be happy to get back to you!<br /><br />
          <strong>Phone:</strong> 718-756-4123 or 212-673-8920<br />
          <strong>Fax:</strong> 718-773-2900<br />
          <strong>Email:</strong> <Link href="mailto:info@meterreading.nyc">info@meterreading.nyc</Link><br />
          <strong>Location:</strong> 1056 E 103rd St, Brooklyn, NY Zip 11236
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.510256490428!2d-73.89728218459318!3d40.657394779339125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244bac48d6d97%3A0xb8c49e2a792f3427!2s1056%20E%20103rd%20St%2C%20Brooklyn%2C%20NY%2011236%2C%20USA!5e0!3m2!1sen!2sin!4v1627118832564!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="form" className={classes.form}>
                <Typography fontWeight="bold">Name</Typography>
              {/* <TextField label="Name" variant="outlined" className={classes.formField} required /> */}
              <form noValidate autoComplete="off">
  <FormControl sx={{ width: '552px', height:'40px',  marginBottom: '15px', }}>
    <OutlinedInput />
  </FormControl>
</form>
              <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Box>
              <Typography fontWeight="bold">Email</Typography>
              <TextField label="Email" variant="outlined" className={classes.formField} type="email" required />
              </Box>
              <Box>
              <Typography fontWeight="bold">Phone</Typography>
              <TextField label="Phone" variant="outlined" className={classes.formField} type="tel" required />
              </Box>
              </Box>
              <Typography fontWeight="bold">Services Needed</Typography>
              {/* <TextField label="Services Needed" variant="outlined" className={classes.formField} /> */}
              <form noValidate autoComplete="off">
  <FormControl sx={{ width: '552px', height:'40px',  marginBottom: '15px', }}>
    <OutlinedInput />
  </FormControl>
</form>
              <Typography fontWeight="bold">Comments/Message</Typography>
              {/* <TextField
                label="Comments / Message"
                variant="outlined"
                className={classes.formField}
                multiline
                rows={4}
                required
              /> */}
               <form noValidate autoComplete="off">
  <FormControl sx={{ width: '552px', height:'270.44px',  marginBottom: '15px',borderRadius:'2.7px' }}>
    <OutlinedInput sx={{height:'270.44px'}} />
  </FormControl>
</form>
              <Button variant="contained"   sx={{width:'148px',height:'39px',background:'#12629A',color:'#FFFFFF'}}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(ContactUs);
