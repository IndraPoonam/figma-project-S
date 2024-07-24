import React, { Component } from 'react'

export default class ListingSummary extends Component {
  render() {
    return (
      <div>ListingSummary</div>
    )
  }
}


// import React from "react";
// import ListingSummaryController, { Props } from "./ListingSummaryController.web";
// import { StyleRules, withStyles } from "@material-ui/core/styles";
// import { Box, Select, MenuItem, Typography, Chip, Paper, Button, TextField, Divider } from "@material-ui/core";
// import { viewcircle } from "./assets";

// const styles: StyleRules = {
//   mainContainer: {
//     display: 'flex',
//     gap: '24px',
//     justifyContent: 'center',
//     marginTop: '12px',
//     border: "1px solid red",
//     background: "blue"
//   },
//   mainBox: {
//     padding: '40px',
//     boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//     borderRadius: '24px',
//     width: '895px',
//     height: '880px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//   },
//   companyLogo: {
//     marginRight: '16px',
//     borderRadius: '100px',
//     border: '2px solid #DBEAFE',
//   },
//   companyDetails: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   companyName: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#0F172A',
//   },
//   companyWebsite: {
//     fontSize: '16px',
//     fontWeight: '400',
//     color: '#334155',
//   },
//   flexContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     paddingTop: '40px',
//   },
//   detailBox: {
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#0F172A',
//   },
//   detailText: {
//     fontSize: '16px',
//     fontWeight: '400',
//     color: '#334155',
//   },
//   flexColumn: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//     paddingTop: '40px',
//   },
//   sectionTitle: {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#0F172A',
//   },
//   bioText: {
//     fontSize: '16px',
//     fontWeight: '400',
//     color: '#0F172A',
//   },
//   styledChip: {
//     marginRight: '8px',
//     marginBottom: '8px',
//     padding: '8px 16px',
//     backgroundColor: '#E2E8F0',
//     fontSize: '14px',
//   },
//   offerBox: {
//     height: '630px',
//     width: '300px',
//     padding: '16px',
//     borderRadius: '16px',
//     boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//   },
//   offerTitle: {
//     marginBottom: '16px',
//   },
//   offerLabel: {
//     marginBottom: '8px',
//   },
//   offerButton: {
//     backgroundColor: '#0d47a1',
//     color: 'white',
//   },
//   portfolioBox: {
//     width: "50%",
//   },
//   portfolioPaper: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 2,
//     marginBottom: 2,
//   }
// };

// interface ListingSummaryProps extends Props {
//   classes: Record<string, string>;
// }

// class ListingSummary extends ListingSummaryController<ListingSummaryProps> {
//   constructor(props: ListingSummaryProps) {
//     super(props);
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//       <Box className={classes.mainContainer}>
//         <Box className={classes.mainBox}>
//           <Box className={classes.companyDetails}>
//             <img src={viewcircle} alt="Company Logo" className={classes.companyLogo} />
//             <Box>
//               <Typography className={classes.companyName}>Apex Financial Solutions</Typography>
//               <Typography className={classes.companyWebsite}>www.apexfinancialsolutions.com</Typography>
//             </Box>
//           </Box>
//           <Divider />
//           <Box className={classes.flexContainer}>
//             <Box>
//               <Typography className={classes.detailBox}>Financial Services</Typography>
//               <Typography className={classes.detailText}>Industry/Sector Section</Typography>
//             </Box>
//             <Box>
//               <Typography className={classes.detailBox}>CRN-456789123</Typography>
//               <Typography className={classes.detailText}>Registration number</Typography>
//             </Box>
//             <Box>
//               <Typography className={classes.detailBox}>United States</Typography>
//               <Typography className={classes.detailText}>Country</Typography>
//             </Box>
//             <Box>
//               <Typography className={classes.detailBox}>Florida</Typography>
//               <Typography className={classes.detailText}>State</Typography>
//             </Box>
//             <Box>
//               <Typography className={classes.detailBox}>Miami</Typography>
//               <Typography className={classes.detailText}>City</Typography>
//             </Box>
//             <Box>
//               <Typography className={classes.detailBox}>33101</Typography>
//               <Typography className={classes.detailText}>Zip</Typography>
//             </Box>
//           </Box>
//           <Divider />
//           <Box className={classes.flexColumn}>
//             <Typography className={classes.sectionTitle}>Services offered</Typography>
//             <Box>
//               <Chip label="Financial Consultation" className={classes.styledChip} />
//               <Chip label="Debt Collection Services" className={classes.styledChip} />
//               <Chip label="Business Valuation" className={classes.styledChip} />
//               <Chip label="Risk Management" className={classes.styledChip} />
//               <Chip label="Market Research and Analysis" className={classes.styledChip} />
//             </Box>
//           </Box>
//           <Divider />
//           <Box className={classes.flexColumn}>
//             <Typography className={classes.sectionTitle}>Bio</Typography>
//             <Typography className={classes.bioText}>
//               Apex Financial Solutions is a leading provider of comprehensive financial services, specializing in debt collection,
//               financial consultation, and risk management. With over 20 years of industry experience, our mission is to help
//               businesses and individuals navigate their financial challenges and achieve sustainable growth.
//             </Typography>
//           </Box>
//           <Divider />
//           <Box style={{ display: 'flex', gap: '24px', paddingTop: '40px' }}>
//             <Box className={classes.portfolioBox}>
//               <Typography variant="h6">Portfolio</Typography>
//               <Paper className={classes.portfolioPaper}>
//                 <Typography variant="body2">File name.doc</Typography>
//                 <Typography variant="body2">128 KB</Typography>
//               </Paper>
//             </Box>
//             <Box className={classes.portfolioBox}>
//               <Typography variant="h6">Portfolio</Typography>
//               <Paper className={classes.portfolioPaper}>
//                 <Typography variant="body2">File name.doc</Typography>
//                 <Typography variant="body2">128 KB</Typography>
//               </Paper>
//             </Box>
//           </Box>
//         </Box>
//         <Box className={classes.offerBox}>
//           <Typography variant="h6" className={classes.offerTitle}>Make Offer</Typography>
//           <Typography variant="body1" className={classes.offerLabel}>Offer Type</Typography>
//           <Select
//             defaultValue=""
//             fullWidth
//             style={{ marginBottom: '16px' }}
//             displayEmpty
//           >
//             <MenuItem value="" disabled>Select offer type</MenuItem>
//           </Select>
//           <Typography variant="body1" className={classes.offerLabel}>Enter purchase amount</Typography>
//           <TextField
//             fullWidth
//             type="number"
//             InputProps={{ startAdornment: <Box component="span" style={{ marginRight: '8px' }}>$</Box> }}
//             defaultValue="0.00"
//             style={{ marginBottom: '16px' }}
//           />
//           <TextField
//             fullWidth
//             multiline
//             placeholder='Optionally, add an appeal to the owner of the debt, explaining why you are the best firm to handle this debt.'
//             minRows={4}
//             variant="outlined"
//             style={{ marginBottom: '16px' }}
//           />
//           <Button variant="contained" fullWidth className={classes.offerButton}>
//             Make Offer
//           </Button>
//         </Box>
//       </Box>
//     );
//   }
// }

// export default withStyles(styles)(ListingSummary);

