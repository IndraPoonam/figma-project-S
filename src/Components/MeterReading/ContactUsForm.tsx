import React, { Component } from 'react';
import { Box, TextField, Button, Typography, Grid,FormControl,OutlinedInput} from '@mui/material';
import { withStyles, WithStyles, createStyles } from '@mui/styles';
// import FormHelperText from '@mui/material/FormHelperText';
const styles = createStyles({
  container: {
    padding: '20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formField: {
    marginBottom: '15px',
  },
  header: {
    color: '#0077c2',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#0077c2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#005fa3',
    },
  },
  requiredNote: {
    textAlign: 'right',
    fontSize: '12px',
    marginBottom: '10px',
  },
  gridItem: {
    padding: '0 8px', // Adding padding to grid items for spacing
  }
});

interface Props extends WithStyles<typeof styles> {}

class ContactUsForm extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          CONTACT US
        </Typography>
        <Typography className={classes.requiredNote}>
          Fields marked with an * are required
        </Typography>
        <Box component="form" className={classes.form}>
          {/* <TextField
            label="Name"
            variant="outlined"
            className={classes.formField}
            required
            InputLabelProps={{ className: classes.label }}
          /> */}
          <form noValidate autoComplete="off">
  <FormControl sx={{ width: '25ch' }}>
    <OutlinedInput  />
    {/* <MyFormHelperText/> */}
  </FormControl>
</form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={classes.gridItem}>
              <TextField
                label="Email"
                variant="outlined"
                className={classes.formField}
                type="email"
                required
                InputLabelProps={{ className: classes.label }}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.gridItem}>
              <TextField
                label="Phone"
                variant="outlined"
                className={classes.formField}
                type="tel"
                required
                InputLabelProps={{ className: classes.label }}
              />
            </Grid>
          </Grid>
          <TextField
            label="Services Needed"
            variant="outlined"
            className={classes.formField}
            InputLabelProps={{ className: classes.label }}
          />
          <TextField
            label="Comments / Message"
            variant="outlined"
            className={classes.formField}
            multiline
            rows={4}
            required
            InputLabelProps={{ className: classes.label }}
          />
          <Button variant="contained" className={classes.submitButton}>
            Submit
          </Button>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(ContactUsForm);
