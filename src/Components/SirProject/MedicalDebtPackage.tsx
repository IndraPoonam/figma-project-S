// import React, { Component } from 'react';
// import {
//   Box, Typography, Card, CardContent, Avatar, Grid, Paper, ListItem, ListItemIcon, ListItemText, Button, Divider,
//   TextField, MenuItem, Select
// } from '@mui/material';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
// import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
// import { SelectChangeEvent } from '@mui/material/Select';
// import { styled } from '@mui/system';

// const styles = {
//   card: {
//     width: '100%',
//     padding: '10px',
//     boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//     borderRadius: '24px',
//   },
//   flexBox: {
//     display: 'flex',
//     gap: '2rem',
//   },
//   justifyContentBetween: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: 2,
//   },
//   mt4: {
//     marginTop: 4,
//   },
//   listItem: {
//     width: '100%',
//     height: '3rem'
//   },
//   smallText: {
//     fontSize: '1.3rem',
//     fontWeight: 'bold',
//   },
//   iconTextContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//   },
//   highlight: {
//     backgroundColor: '#b0eac7',
//     color: 'black',
//     borderRadius: '10px',
//     padding: '5px 10px',
//     fontWeight: 'bold',
//     fontSize: '0.4rem',
//   },
//   root: {
//     padding: '20px',
//     maxWidth: '400px',
//   },
//   label: {
//     color: '#888',
//     fontSize: '12px',
//   },
//   value: {
//     fontWeight: 'bold',
//     fontSize: '16px',
//   },
// };

// const StyledForm = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '16px',
//   padding: '16px',
//   border: '1px solid #ccc',

//   boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//   borderRadius: '24px',
 
//   maxHeight: '450px',
//   '& .header': {
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   '& .label': {
//     fontWeight: 'bold',
//   },
// });

// const StyledTextField = styled(TextField)({
//   height: '40px',
//   width: 'calc(100% )',
//   '& .MuiInputBase-root': {
//     height: '40px',
//   },
// });



// interface State {
//   offerType: string;
//   purchaseAmount: number;
//   additionalInfo: string;
// }

// class MedicalDebtPackage extends Component<{}, State> {
//   state: State = {
//     offerType: '',
//     purchaseAmount: 0,
//     additionalInfo: '',
//   };

//   handleSelectChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
//     this.setState({
//       offerType: event.target.value as string,
//     });
//   };

//   handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     this.setState({
//       ...this.state,
//       [name]: value,
//     });
//   };

//   handleSubmit = () => {
//        // Handle form submission
//   };

//   render() {
//     const {  purchaseAmount, additionalInfo } = this.state;

//     return (
//       <Box sx={{ display: 'flex',gap:'2.5rem' }}>
//         <Box sx={{width:'75%',}}>
//           <Card sx={styles.card}>
//             <CardContent>
//               <Typography variant="h6" color="black" fontWeight="bold">
//                 Medical Debt Package
//               </Typography>
//               <Typography variant="body2">
//                 <Box sx={styles.flexBox}>
//                   <Button sx={styles.highlight}>ACTIVE COLLECTION</Button>
//                   <span>Posted 54 minutes ago</span>
//                 </Box>
//                 <Divider sx={{ mt: '1rem' }} />
//               </Typography>
//               <Box sx={styles.justifyContentBetween}>
//                 <Box>
//                   <Typography variant="h5" sx={styles.iconTextContainer}>
//                     <MonetizationOnOutlinedIcon />
//                     <span style={styles.smallText}>$2,500</span>
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Portfolio Size
//                   </Typography>
//                 </Box>
//                 <Box>
//                   <Typography variant="h5" sx={styles.iconTextContainer}>
//                     <PersonOutlineIcon />
//                     <span style={styles.smallText}>1</span>
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Account Count
//                   </Typography>
//                 </Box>
//                 <Box>
//                   <Typography variant="h5" sx={styles.iconTextContainer}>
//                     <AccountBalanceIcon />
//                     <span style={styles.smallText}>$500</span>
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Average Balance per Account
//                   </Typography>
//                 </Box>
//               </Box>
//               <Divider sx={{ mt: '1rem' }} />
//               <Box sx={styles.root}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={6}>
//                     <Typography sx={styles.value}>Credit Card</Typography>
//                     <Typography sx={styles.label}>Type of Debt</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography sx={styles.value}>1 years</Typography>
//                     <Typography sx={styles.label}>Age of Debt</Typography>
//                   </Grid>
//                 </Grid>
//               </Box>
//               <Divider sx={{ mt: '1rem' }} />
//               <Box>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Detailed Information
//                 </Typography>
//                 <Grid container spacing={2} mt={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2">Total Number of debts: 1</Typography>
//                     <Typography variant="body2">Total Amount of debts: $2,500</Typography>
//                     <Typography variant="body2">Total Judgements: 0</Typography>
//                     <Typography variant="body2">Total months as customer: 3</Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body2">Past payment made: Yes</Typography>
//                     <Typography variant="body2">Month average pay time: 1</Typography>
//                     <Typography variant="body2">Last collector contact: 01.02.2024</Typography>
//                     <Typography variant="body2">Last creditor contact: 01.02.2024</Typography>
//                   </Grid>
//                 </Grid>
//               </Box>
//               <Divider sx={{ mt: '1rem' }} />
//               <Box sx={styles.mt4}>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Supporting Documentation
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Paper elevation={3}>
//                       <ListItem sx={styles.listItem}>
//                         <ListItemIcon>
//                           <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                         </ListItemIcon>
//                         <ListItemText primary="File name.doc" secondary="128 KB" />
//                         <MoreVertTwoToneIcon />
//                       </ListItem>
//                     </Paper>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Paper elevation={3}>
//                       <ListItem sx={styles.listItem}>
//                         <ListItemIcon>
//                           <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                         </ListItemIcon>
//                         <ListItemText primary="File name.doc" secondary="128 KB" />
//                         <MoreVertTwoToneIcon />
//                       </ListItem>
//                     </Paper>
//                   </Grid>
//                 </Grid>
//               </Box>
//               <Divider sx={{ mt: '1rem' }} />
//               <Box sx={styles.mt4}>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Other documents
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Paper elevation={3}>
//                       <ListItem sx={styles.listItem}>
//                         <ListItemIcon>
//                           <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                         </ListItemIcon>
//                         <ListItemText primary="File name.doc" secondary="128 KB" />
//                         <MoreVertTwoToneIcon />
//                       </ListItem>
//                     </Paper>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Paper elevation={3}>
//                       <ListItem sx={styles.listItem}>
//                         <ListItemIcon>
//                           <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                         </ListItemIcon>
//                         <ListItemText primary="File name.doc" secondary="128 KB" />
//                         <MoreVertTwoToneIcon />
//                       </ListItem>
//                     </Paper>
//                   </Grid>
//                 </Grid>
//               </Box>
//               <Divider sx={{ mt: '1rem' }} />
//               <Box sx={styles.mt4}>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Correspondence Address
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item>
//                     <Avatar src="/broken-image.jpg" />
//                   </Grid>
//                   <Grid item xs>
//                     <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//                       James Carter
//                     </Typography>
//                     <Typography variant="body2">james.carter@example.com</Typography>
//                   </Grid>
//                 </Grid>
//               </Box>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1rem' }}>
//                 <Box>
//                   <Typography sx={styles.value}>(567) 890-1234</Typography>
//                   <Typography>Phone number</Typography>
//                 </Box>
//                 <Box>
//                   <Typography sx={styles.value}>United States</Typography>
//                   <Typography>Country</Typography>
//                 </Box>
//                 <Box>
//                   <Typography sx={styles.value}>Florida</Typography>
//                   <Typography>State</Typography>
//                 </Box>
//                 <Box>
//                   <Typography sx={styles.value}>Miami</Typography>
//                   <Typography>City</Typography>
//                 </Box>
//                 <Box>
//                   <Typography sx={styles.value}>33101</Typography>
//                   <Typography>Zip</Typography>
//                 </Box>
//               </Box>
//             </CardContent>
//           </Card>
//         </Box>
//         {/* //////////// MakeOffer component starts here////////////////////////////////////// */}
//         <Box>
//           <StyledForm>
//             <Typography variant="h6" className="header">
//               Make Offer
//             </Typography>
//                <Typography className='label' style={{ width: '100%' }}>
//             Offer Type
//           </Typography>
//                 <Select defaultValue="" fullWidth displayEmpty style={{ marginBottom: '16px' }}>
//             <MenuItem value="" >
//               Select offer type
//             </MenuItem>
//             <MenuItem>1</MenuItem>
//             <MenuItem>2</MenuItem>
//           </Select>
//             <Typography className="label">Enter purchase amount</Typography>
//             <StyledTextField
//               label="Enter purchase amount"
//               name="purchaseAmount"
//               type="number"
//               value={purchaseAmount}
//               onChange={this.handleInputChange}
//               fullWidth
//             />
//             <TextField
//               label="Additional Info"
//               name="additionalInfo"
//               multiline
//               rows={4}
//               value={additionalInfo}
//               onChange={this.handleInputChange}
//               fullWidth
//             />
//             <Button variant="contained" onClick={this.handleSubmit}>
//               Make Offer
//             </Button>
//           </StyledForm>
//         </Box>
      
//       </Box>
//     );
//   }
// }

// export default MedicalDebtPackage;
//////////////////////////////////inline css///
import React, { Component } from 'react';
import {
  Box, Typography, Card, CardContent, Avatar, Grid, Paper, ListItem, ListItemIcon, ListItemText, Button, Divider,
  TextField, MenuItem, Select
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/system';

interface State {
  offerType: string;
  purchaseAmount: number;
  additionalInfo: string;
}

class MedicalDebtPackage extends Component<{}, State> {
  state: State = {
    offerType: '',
    purchaseAmount: 0,
    additionalInfo: '',
  };

  handleSelectChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    this.setState({
      offerType: event.target.value as string,
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = () => {
       // Handle form submission
  };

  render() {
    const {  purchaseAmount, additionalInfo } = this.state;

    return (
      <Box sx={{ display: 'flex', gap: '2.5rem' }}>
        <Box sx={{ width: '75%' }}>
          <Card sx={{ width: '100%', padding: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '24px' }}>
            <CardContent>
              <Typography variant="h6" color="black" fontWeight="bold">
                Medical Debt Package
              </Typography>
              <Typography variant="body2">
                <Box sx={{ display: 'flex', gap: '2rem' }}>
                  <Button sx={{ backgroundColor: '#b0eac7', color: 'black', borderRadius: '10px', padding: '5px 10px', fontWeight: 'bold', fontSize: '0.4rem' }}>ACTIVE COLLECTION</Button>
                  <span>Posted 54 minutes ago</span>
                </Box>
                <Divider sx={{ mt: '1rem' }} />
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MonetizationOnOutlinedIcon />
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>$2,500</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Portfolio Size
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <PersonOutlineIcon />
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>1</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Account Count
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AccountBalanceIcon />
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>$500</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Average Balance per Account
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ padding: '20px', maxWidth: '400px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Credit Card</Typography>
                    <Typography sx={{ color: '#888', fontSize: '12px' }}>Type of Debt</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>1 years</Typography>
                    <Typography sx={{ color: '#888', fontSize: '12px' }}>Age of Debt</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Detailed Information
                </Typography>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2">Total Number of debts: 1</Typography>
                    <Typography variant="body2">Total Amount of debts: $2,500</Typography>
                    <Typography variant="body2">Total Judgements: 0</Typography>
                    <Typography variant="body2">Total months as customer: 3</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2">Past payment made: Yes</Typography>
                    <Typography variant="body2">Month average pay time: 1</Typography>
                    <Typography variant="body2">Last collector contact: 01.02.2024</Typography>
                    <Typography variant="body2">Last creditor contact: 01.02.2024</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Supporting Documentation
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Other documents
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Correspondence Address
                </Typography>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar src="/broken-image.jpg" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      James Carter
                    </Typography>
                    <Typography variant="body2">james.carter@example.com</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1rem' }}>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>(567) 890-1234</Typography>
                  <Typography>Phone number</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>United States</Typography>
                  <Typography>Country</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Florida</Typography>
                  <Typography>State</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Miami</Typography>
                  <Typography>City</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>33101</Typography>
                  <Typography>Zip</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '16px',
              border: '1px solid #ccc',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              borderRadius: '24px',
              maxHeight: '450px'
            }}
          >
            <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
              Make Offer
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }} style={{ width: '100%' }}>
              Offer Type
            </Typography>
            <Select defaultValue="" fullWidth displayEmpty style={{ marginBottom: '16px' }}>
              <MenuItem value="">
                Select offer type
              </MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
            </Select>
            <Typography sx={{ fontWeight: 'bold' }}>Enter purchase amount</Typography>
            <TextField
              label="Enter purchase amount"
              name="purchaseAmount"
              type="number"
              value={purchaseAmount}
              onChange={this.handleInputChange}
              fullWidth
              sx={{ height: '40px', '& .MuiInputBase-root': { height: '40px' } }}
            />
            <TextField
              label="Additional Info"
              name="additionalInfo"
              multiline
              rows={4}
              value={additionalInfo}
              onChange={this.handleInputChange}
              fullWidth
            />
            <Button variant="contained" onClick={this.handleSubmit}>
              Make Offer
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default MedicalDebtPackage;



//////////////////////////////////////responsive//////////////////////
// import React, { useState } from 'react';
// import {
//   Box, Typography, Card, CardContent, Avatar, Grid, Paper, ListItem, ListItemIcon, ListItemText, Button, Divider,
//   TextField, MenuItem, Select
// } from '@mui/material';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
// import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
// import { SelectChangeEvent } from '@mui/material/Select';
// import { styled } from '@mui/system';
// import { useMediaQuery, useTheme } from '@mui/material';

// const styles = {
//   card: {
//     width: '100%',
//     padding: '10px',
//     boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//     borderRadius: '24px',
//   },
//   flexBox: {
//     display: 'flex',
//     gap: '2rem',
//   },
//   justifyContentBetween: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: 2,
//   },
//   mt4: {
//     marginTop: 4,
//   },
//   listItem: {
//     width: '100%',
//     height: '3rem'
//   },
//   smallText: {
//     fontSize: '1.3rem',
//     fontWeight: 'bold',
//   },
//   iconTextContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//   },
//   highlight: {
//     backgroundColor: '#b0eac7',
//     color: 'black',
//     borderRadius: '10px',
//     padding: '5px 10px',
//     fontWeight: 'bold',
//     fontSize: '0.4rem',
//   },
//   root: {
//     padding: '20px',
//     maxWidth: '400px',
//   },
//   label: {
//     color: '#888',
//     fontSize: '12px',
//   },
//   value: {
//     fontWeight: 'bold',
//     fontSize: '16px',
//   },
// };

// const StyledForm = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '16px',
//   padding: '16px',
//   border: '1px solid #ccc',
//   boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//   borderRadius: '24px',
//   maxHeight: '450px',
//   '& .header': {
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   '& .label': {
//     fontWeight: 'bold',
//   },
// });

// const StyledTextField = styled(TextField)({
//   height: '40px',
//   width: 'calc(100% )',
//   '& .MuiInputBase-root': {
//     height: '40px',
//   },
// });

// const MedicalDebtPackage = () => {
//   const [offerType, setOfferType] = useState<string>('');
//   const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
//   const [additionalInfo, setAdditionalInfo] = useState<string>('');

//   const handleSelectChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
//     setOfferType(event.target.value as string);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     if (name === 'purchaseAmount') {
//       setPurchaseAmount(Number(value));
//     } else {
//       setAdditionalInfo(value);
//     }
//   };

//   const handleSubmit = () => {
//     // Handle form submission
//   };

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '2.5rem' }}>
//       <Box sx={{ width: isMobile ? '100%' : '75%' }}>
//         <Card sx={styles.card}>
//           <CardContent>
//             <Typography variant="h6" color="black" fontWeight="bold">
//               Medical Debt Package
//             </Typography>
//             <Typography variant="body2">
//               <Box sx={styles.flexBox}>
//                 <Button sx={styles.highlight}>ACTIVE COLLECTION</Button>
//                 <span>Posted 54 minutes ago</span>
//               </Box>
//               <Divider sx={{ mt: '1rem' }} />
//             </Typography>
//             <Box sx={styles.justifyContentBetween}>
//               <Box>
//                 <Typography variant="h5" sx={styles.iconTextContainer}>
//                   <MonetizationOnOutlinedIcon />
//                   <span style={styles.smallText}>$2,500</span>
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Portfolio Size
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography variant="h5" sx={styles.iconTextContainer}>
//                   <PersonOutlineIcon />
//                   <span style={styles.smallText}>1</span>
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Account Count
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography variant="h5" sx={styles.iconTextContainer}>
//                   <AccountBalanceIcon />
//                   <span style={styles.smallText}>$500</span>
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Average Balance per Account
//                 </Typography>
//               </Box>
//             </Box>
//             <Divider sx={{ mt: '1rem' }} />
//             <Box sx={styles.root}>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Typography sx={styles.value}>Credit Card</Typography>
//                   <Typography sx={styles.label}>Type of Debt</Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography sx={styles.value}>1 years</Typography>
//                   <Typography sx={styles.label}>Age of Debt</Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//             <Divider sx={{ mt: '1rem' }} />
//             <Box>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Detailed Information
//               </Typography>
//               <Grid container spacing={2} mt={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2">Total Number of debts: 1</Typography>
//                   <Typography variant="body2">Total Amount of debts: $2,500</Typography>
//                   <Typography variant="body2">Total Judgements: 0</Typography>
//                   <Typography variant="body2">Total months as customer: 3</Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="body2">Past payment made: Yes</Typography>
//                   <Typography variant="body2">Month average pay time: 1</Typography>
//                   <Typography variant="body2">Last collector contact: 01.02.2024</Typography>
//                   <Typography variant="body2">Last creditor contact: 01.02.2024</Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//             <Divider sx={{ mt: '1rem' }} />
//             <Box sx={styles.mt4}>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Supporting Documentation
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Paper elevation={3}>
//                     <ListItem sx={styles.listItem}>
//                       <ListItemIcon>
//                         <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                       </ListItemIcon>
//                       <ListItemText primary="File name.doc" secondary="128 KB" />
//                       <MoreVertTwoToneIcon />
//                     </ListItem>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Paper elevation={3}>
//                     <ListItem sx={styles.listItem}>
//                       <ListItemIcon>
//                         <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                       </ListItemIcon>
//                       <ListItemText primary="File name.doc" secondary="128 KB" />
//                       <MoreVertTwoToneIcon />
//                     </ListItem>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             </Box>
//             <Divider sx={{ mt: '1rem' }} />
//             <Box sx={styles.mt4}>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Other documents
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Paper elevation={3}>
//                     <ListItem sx={styles.listItem}>
//                       <ListItemIcon>
//                         <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                       </ListItemIcon>
//                       <ListItemText primary="File name.doc" secondary="128 KB" />
//                       <MoreVertTwoToneIcon />
//                     </ListItem>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Paper elevation={3}>
//                     <ListItem sx={styles.listItem}>
//                       <ListItemIcon>
//                         <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
//                       </ListItemIcon>
//                       <ListItemText primary="File name.doc" secondary="128 KB" />
//                       <MoreVertTwoToneIcon />
//                     </ListItem>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             </Box>
//             <Divider sx={{ mt: '1rem' }} />
//             <Box sx={styles.mt4}>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Correspondence Address
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item>
//                   <Avatar src="/broken-image.jpg" />
//                 </Grid>
//                 <Grid item xs>
//                   <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//                     James Carter
//                   </Typography>
//                   <Typography variant="body2">james.carter@example.com</Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1rem' }}>
//               <Box>
//                 <Typography sx={styles.value}>(567) 890-1234</Typography>
//                 <Typography>Phone number</Typography>
//               </Box>
//               <Box>
//                 <Typography sx={styles.value}>United States</Typography>
//                 <Typography>Country</Typography>
//               </Box>
//               <Box>
//                 <Typography sx={styles.value}>Florida</Typography>
//                 <Typography>State</Typography>
//               </Box>
//               <Box>
//                 <Typography sx={styles.value}>Miami</Typography>
//                 <Typography>City</Typography>
//               </Box>
//               <Box>
//                 <Typography sx={styles.value}>33101</Typography>
//                 <Typography>Zip</Typography>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
//       {/* //////////// MakeOffer component starts here////////////////////////////////////// */}
//       <Box sx={{ width: isMobile ? '100%' : 'auto' }}>
//         <StyledForm>
//           <Typography variant="h6" className="header">
//             Make Offer
//           </Typography>
//           <Typography className='label' style={{ width: '100%' }}>
//             Offer Type
//           </Typography>
//           <Select value={offerType} onChange={handleSelectChange} fullWidth displayEmpty style={{ marginBottom: '16px' }}>
//             <MenuItem value="">
//               Select offer type
//             </MenuItem>
//             <MenuItem value="1">1</MenuItem>
//             <MenuItem value="2">2</MenuItem>
//           </Select>
//           <Typography className="label">Enter purchase amount</Typography>
//           <StyledTextField
//             label="Enter purchase amount"
//             name="purchaseAmount"
//             type="number"
//             value={purchaseAmount}
//             onChange={handleInputChange}
//             fullWidth
//           />
//           <TextField
//             label="Additional Info"
//             name="additionalInfo"
//             multiline
//             rows={4}
//             value={additionalInfo}
//             onChange={handleInputChange}
//             fullWidth
//           />
//           <Button variant="contained" onClick={handleSubmit}>
//             Make Offer
//           </Button>
//         </StyledForm>
//       </Box>
//     </Box>
//   );
// };

// export default MedicalDebtPackage;



/////////////////////////correct////////////////without offer////////////////////////
// import React, { Component } from 'react';
// import { Box, Typography, Card, CardContent, Avatar, Grid, Paper, ListItem, ListItemIcon, ListItemText,Button, Divider } from '@mui/material';
// import { InsertDriveFile as FileIcon } from '@mui/icons-material';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
// import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
// const styles = {
//   card: {
//     width: '60%',
//   },
//   flexBox: {
//     display: 'flex',
//     gap: '2rem',
//   },
//   justifyContentBetween: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: 2,
//   },
//   mt4: {
//     marginTop: 4,
   
//   },
//   listItem: {
//     width: '100%',
//     height:'3rem'
  
//   },
//   // paperPadding: {
//   //   padding: '16px',
//   //   marginTop: '8px',
//   // },
//   smallText: {
//     fontSize: '1.3rem',
//     fontWeight:'bold',
//   },
//   iconTextContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap:'0.5rem',
//   },
//   highlight: {
//     backgroundColor: '#b0eac7',
//     color: 'black',
//     borderRadius: '10px',
//     padding: '5px 10px',
//     fontWeight: 'bold',
//     fontSize:'0.4rem',
//   },

//   root: {
//     padding: '20px',
//     maxWidth: '400px',
    
//   },
//   label: {
//     color: '#888',
//     fontSize: '12px',
//   },
//   value: {
//     fontWeight: 'bold',
//     fontSize: '16px',
//   },
// };

// class MedicalDebtPackage extends Component {
//   render() {
//     return (
//       <Card sx={styles.card}>
//         <CardContent>
//           <Typography variant="h6" color="black" fontWeight="bold">
//             Medical Debt Package
//           </Typography>
//           <Typography variant="body2">
//             <Box sx={styles.flexBox}>
//               <Button sx={styles.highlight}>
//       ACTIVE COLLECTION
//     </Button>
//               <span>Posted 54 minutes ago</span>
//             </Box>
//             <Divider sx={{mt:'1rem'}}/>
//           </Typography>
//           <Box sx={styles.justifyContentBetween}>
//             <Box>
//               <Typography variant="h5" sx={styles.iconTextContainer}>
//                 <MonetizationOnOutlinedIcon />
//               <span style={styles.smallText}>$2,500</span>
//               </Typography>
//               <Typography variant="body2" color="textSecondary">Portfolio Size</Typography>
//             </Box>
//             <Box>
//               <Typography variant="h5" sx={styles.iconTextContainer}><PersonOutlineIcon />
//               <span style={styles.smallText}>1</span>
//               </Typography>
//               <Typography variant="body2" color="textSecondary">Account Count</Typography>
//             </Box>
//             <Box>
//               <Typography variant="h5" sx={styles.iconTextContainer}><AccountBalanceIcon />
//                <span style={styles.smallText}>$500</span>
//               </Typography>
//               <Typography variant="body2" color="textSecondary">Average Balance per Account</Typography>
//             </Box>
//           </Box>
//           <Divider sx={{mt:'1rem'}}/>
//           <Box sx={styles.root}>
            
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <Typography sx={styles.value}>Credit Card</Typography>
//             <Typography sx={styles.label}>Type of Debt</Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography sx={styles.value}>1 years</Typography>
//             <Typography sx={styles.label}>Age of Debt</Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       <Divider sx={{mt:'1rem'}}/>

//           <Box >
//             <Typography variant="subtitle1" fontWeight='bold'>Detailed Information</Typography>
//             <Grid container spacing={2} mt={2}>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="body2">Total Number of debts: 1</Typography>
//                 <Typography variant="body2">Total Amount of debts: $2,500</Typography>
//                 <Typography variant="body2">Total Judgements: 0</Typography>
//                 <Typography variant="body2">Total months as customer: 3</Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="body2">Past payment made: Yes</Typography>
//                 <Typography variant="body2">Month average pay time: 1</Typography>
//                 <Typography variant="body2">Last collector contact: 01.02.2024</Typography>
//                 <Typography variant="body2">Last creditor contact: 01.02.2024</Typography>
//               </Grid>
//             </Grid>
//           </Box>
//           <Divider sx={{mt:'1rem'}}/>
//           <Box sx={styles.mt4}>
//             <Typography variant="subtitle1" fontWeight='bold'>Supporting Documentation</Typography>
//             <Grid container spacing={2} >
//               <Grid item xs={12} sm={6}>
//                 <Paper elevation={3}>
//                   <ListItem sx={styles.listItem}>
//                     <ListItemIcon>
                    
//                       <ArticleTwoToneIcon sx={{height:'3rem', width:'6rem'}}/>
//                     </ListItemIcon>
//                     <ListItemText primary="File name.doc" secondary="128 KB" />
//                     <MoreVertTwoToneIcon/>
//                   </ListItem>
//                 </Paper>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Paper elevation={3}>
//                   <ListItem sx={styles.listItem}>
//                     <ListItemIcon>
//                       {/* <FileIcon /> */}
//                       <ArticleTwoToneIcon sx={{height:'3rem', width:'6rem'}}/>
//                     </ListItemIcon>
//                     <ListItemText primary="File name.doc" secondary="128 KB" />
//                     <MoreVertTwoToneIcon/>
//                   </ListItem>
                  
//                 </Paper>
              
//               </Grid>
//             </Grid>
//           </Box>
//           <Divider sx={{mt:'1rem'}}/>
//           <Box sx={styles.mt4}>
//             <Typography variant="subtitle1" fontWeight='bold'>Other documents</Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <Paper elevation={3}>
//                   <ListItem sx={styles.listItem}>
//                     <ListItemIcon>
//                       {/* <FileIcon /> */}
//                       <ArticleTwoToneIcon sx={{height:'3rem', width:'6rem'}}/>
//                     </ListItemIcon>
//                     <ListItemText primary="File name.doc" secondary="128 KB" />
//                     <MoreVertTwoToneIcon/>
//                   </ListItem>
//                 </Paper>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Paper elevation={3}>
//                   <ListItem sx={styles.listItem}>
//                     <ListItemIcon>
//                       {/* <FileIcon /> */}
//                       <ArticleTwoToneIcon sx={{height:'3rem', width:'6rem'}}/>
//                     </ListItemIcon>
//                     <ListItemText primary="File name.doc" secondary="128 KB" />
//                     <MoreVertTwoToneIcon/>
//                   </ListItem>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Box>
//           <Divider sx={{mt:'1rem'}}/>
//           <Box sx={styles.mt4}>
//             <Typography variant="subtitle1" fontWeight='bold' sx={{mb:'1rem'}}>Debt Owner Information</Typography>
        
//               <Grid container alignItems="center" spacing={2}>
//                 <Grid item>
//                   <Avatar src="/broken-image.jpg" />
//                 </Grid>
//                 <Grid item xs>
//                   <Typography variant="body2" sx={{fontWeight:'bold'}}>James Carter</Typography>
//                   <Typography variant="body2">james.carter@example.com</Typography>
//                 </Grid>
//               </Grid>
//           </Box>
//           <Box sx={{display:'flex',justifyContent:'space-between',mt:'1rem'}}>
// <Box>
//   <Typography sx={styles.value}>(567) 890-1234</Typography>
//   <Typography>Phone number</Typography>
// </Box>
// <Box>
// <Typography sx={styles.value}>United States</Typography>
// <Typography>Country</Typography>
// </Box>
// <Box>
// <Typography sx={styles.value}>Florida</Typography>
// <Typography>State</Typography>
// </Box>
// <Box>
// <Typography sx={styles.value}>Miami</Typography>
// <Typography>City</Typography>
// </Box>
// <Box>
// <Typography sx={styles.value}>33101</Typography>
// <Typography>Zip</Typography>
// </Box>
//           </Box>
//         </CardContent>
//       </Card>
//     );
//   }
// }

// export default MedicalDebtPackage;
