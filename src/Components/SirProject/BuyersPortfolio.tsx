import React, { Component } from 'react';
import {
  Box,
  Typography,
  Divider,
  Chip,
  Paper,
  Select,
  MenuItem,
  TextField,
  Button
} from '@mui/material';
import { withStyles, WithStyles, createStyles } from '@mui/styles';

const styles = () =>
  createStyles({
    mainContainer: {
      display: 'flex',
      gap: '24px',
      justifyContent: 'center',
      marginTop: '12px',
    },
    mainBox: {
      padding: '40px',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      borderRadius: '24px',
      width: '895px',
      height: '880px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    companyLogo: {
      marginRight: '16px',
      borderRadius: '100px',
      border: '2px solid #DBEAFE',
    },
    companyDetails: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '40px',
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      paddingTop: '40px',
    },
    styledChip: {
      marginRight: '8px',
      marginBottom: '8px',
      padding: '8px 16px',
      backgroundColor: '#E2E8F0',
      fontSize: '14px',
      fontWeight: '500',
    },
    offerBox: {
      height: '630px',
      width: '300px',
      padding: '16px',
      borderRadius: '16px',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
  });

interface BuyersPortfolioProps extends WithStyles<typeof styles> {
  // Remove CompanyLogo prop if not needed
}

class BuyersPortfolio extends Component<BuyersPortfolioProps> {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.mainContainer}>
        <Box className={classes.mainBox}>
          <Box className={classes.companyDetails}>
            {/* Placeholder for company logo */}
            <Box style={{ width: '80px', height: '80px', backgroundColor: '#ccc' }} />
            <Box>
              <Typography style={{ fontSize: '24px', fontWeight: '700', color: '#0F172A' }}>
                Apex Financial Solutions
              </Typography>
              <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>
                www.apexfinancialsolutions.com
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.flexContainer}>
            <Box>
              <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>
                Financial Services
              </Typography>
              <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>
                Industry/Sector Section
              </Typography>
            </Box>
            <Box>
              <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>
                CRN-456789123
              </Typography>
              <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>
                Registration number
              </Typography>
            </Box>
            <Box>
              <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>
                United States
              </Typography>
              <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>
                Country
              </Typography>
            </Box>
            <Box>
              <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>
                Florida
              </Typography>
              <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>
                State
              </Typography>
            </Box>
            <Box>
              <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>
                Miami
              </Typography>
              <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>
                City
              </Typography>
            </Box>
            <Box>
              <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>
                33101
              </Typography>
              <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>
                Zip
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.flexColumn}>
            <Typography style={{ fontSize: '20px', fontWeight: '600', color: '#0F172A' }}>
              Services offered
            </Typography>
            <Box>
              <Chip label="Financial Consultation" className={classes.styledChip} />
              <Chip label="Debt Collection Services" className={classes.styledChip} />
              <Chip label="Business Valuation" className={classes.styledChip} />
              <Chip label="Risk Management" className={classes.styledChip} />
              <Chip label="Market Research and Analysis" className={classes.styledChip} />
            </Box>
          </Box>
          <Divider />
          <Box className={classes.flexColumn}>
            <Typography style={{ fontSize: '20px', fontWeight: '600', color: '#0F172A' }}>
              Bio
            </Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#0F172A' }}>
              Apex Financial Solutions is a leading provider of comprehensive financial services,
              specializing in debt collection, financial consultation, and risk management. With
              over 20 years of industry experience, our mission is to help businesses and
              individuals navigate their financial challenges and achieve sustainable growth.
            </Typography>
          </Box>
          <Divider />
          <Box style={{ display: 'flex', gap: '24px', paddingTop: '40px' }}>
            <Box style={{ width: '50%' }}>
              <Typography variant="h6">Portfolio</Typography>
              <Paper
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 2,
                  marginBottom: 2,
                }}
              >
                <Typography variant="body2">File name.doc</Typography>
                <Typography variant="body2">128 KB</Typography>
              </Paper>
            </Box>
            <Box style={{ width: '50%' }}>
              <Typography variant="h6">Portfolio</Typography>
              <Paper
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 2,
                }}
              >
                <Typography variant="body2">File name.doc</Typography>
                <Typography variant="body2">128 KB</Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
        {/* /////////////////////////////////////////////////// */}
        <Box className={classes.offerBox}>
          <Typography variant="h6" style={{ width: '100%', marginBottom: '16px' }}>
            Make Offer
          </Typography>
          <Typography variant="body1" style={{ width: '100%', marginBottom: '16px' }}>
            Offer Type
          </Typography>
          <Select defaultValue="" fullWidth displayEmpty style={{ marginBottom: '16px' }}>
            <MenuItem value="" >
              Select offer type
            </MenuItem>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </Select>
          <Typography variant="body1" style={{ width: '100%', marginBottom: '16px' }}>
            Enter purchase amount
          </Typography>
          <TextField
            fullWidth
            type="number"
            InputProps={{
              startAdornment: <Box component="span" style={{ marginRight: '8px' }}>$</Box>,
            }}
            defaultValue="0.00"
            style={{ marginBottom: '16px' }}
          />
          <TextField
            fullWidth
            multiline
            placeholder="Optionally, add an appeal to the owner of the debt, explaining why you are the best firm to handle this debt."
            minRows={4}
            variant="outlined"
            style={{ marginBottom: '16px' }}
          />
          <Button variant="contained" fullWidth style={{ backgroundColor: '#0d47a1', color: 'white' }}>
            Make Offer
          </Button>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(BuyersPortfolio);
