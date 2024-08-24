import React from 'react';
import { Box, Typography, Link, Chip, Divider } from '@mui/material';
import { withStyles, WithStyles, createStyles } from '@mui/styles';
const styles = createStyles({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        background: '#f6f6f6',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '16px',
        width: '100%',
        maxWidth: '600px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    logo: {
        width: '60px',
        height: '60px',
        marginBottom: '16px',
   
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginBottom: '8px',
    },
    link: {
        color: '#1a73e8',
        marginBottom: '20px',
    },
    word: {
        fontWeight: 'bold !important',
        fontSize: '1.25rem !important',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginTop: '16px',
    },
});
interface Props extends WithStyles<typeof styles> {}
const ApexFinancial: React.FC<Props> = ({ classes }) => {
    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.container}>
                <Box sx={{display:'flex'}}>
                <Box>
                <img
                    src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
                    alt="Company Logo"
                    className={classes.logo}
                  />
                </Box>
                <Box >
                <Typography variant="h5" className={classes.title}>
                    Apex Financial Solutions
                </Typography>
                <Link href="http://www.apexfinancialsolutions.com" className={classes.link}>
                    www.apexfinancialsolutions.com
                </Link>
                </Box>
                </Box>
                <Divider />
                <Typography className={classes.word}>Services offered</Typography>
                <Box className={classes.chips}>
                    <Chip label="Financial Consultation" color="primary" variant="outlined" />
                    <Chip label="Debt Collection Services" color="primary" variant="outlined" />
                    <Chip label="Business Valuation" color="primary" variant="outlined" />
                    <Chip label="Risk Management" color="primary" variant="outlined" />
                    <Chip label="Market Research and Analysis" color="primary" variant="outlined" />
                </Box>
            </Box>
        </Box>
    );
}

export default withStyles(styles)(ApexFinancial);
