import React, { Component } from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  IconButton
} from '@mui/material';
import { withStyles, WithStyles } from '@mui/styles';
import { createStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const styles = createStyles({
  filtersContainer: {
    padding: 20,
    width: 300,
   
  },
  areacontrol:{
width:200,
  },
  filterSection: {
    marginBottom: 20,

  },
  applyButton: {
    marginTop: 20,
  },
  legendContainer: {
    width:'200',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  

  },
});

interface FiltersComponentProps extends WithStyles<typeof styles> {}

interface FiltersComponentState {
  [key: string]: boolean;
}

class FiltersComponent extends Component<FiltersComponentProps, FiltersComponentState> {
  constructor(props: FiltersComponentProps) {
    super(props);
    this.state = {
      debtSizeExpanded: true,
      debtCategoryExpanded: true,
      debtAgeRangeExpanded: true,
      debtOwnerTypeExpanded: true,
    };
  }

  handleToggle = (section: string) => () => {
    this.setState((prevState) => ({
      [section]: !prevState[section]
    }));
  };

  render() {
    const { classes } = this.props;
    const { debtSizeExpanded, debtCategoryExpanded, debtAgeRangeExpanded, debtOwnerTypeExpanded } = this.state;

    return (
      <Box className={classes.filtersContainer}>
        <Box className={classes.filterSection} >
          <FormControl component="fieldset" className={classes.areacontrol}>
            <Box className={classes.legendContainer}>
              <FormLabel component="legend">Debt Size</FormLabel>
              <IconButton onClick={this.handleToggle('debtSizeExpanded')}>
                {debtSizeExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            {debtSizeExpanded && (
              <FormGroup>
                <FormControlLabel control={<Checkbox name="under-10000" />} label="Under $10,000" />
                <FormControlLabel control={<Checkbox name="10000-50000" />} label="$10,000 - $50,000" />
                <FormControlLabel control={<Checkbox name="50000-100000" />} label="$50,000 - $100,000" />
                <FormControlLabel control={<Checkbox name="over-100000" />} label="Over $100,000" />
              </FormGroup>
            )}
          </FormControl>
        </Box>
        
        <Box className={classes.filterSection} >
          <FormControl component="fieldset" className={classes.areacontrol}>
            <Box className={classes.legendContainer}>
              <FormLabel component="legend">Debt Category</FormLabel>
              <IconButton onClick={this.handleToggle('debtCategoryExpanded')}>
                {debtCategoryExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box >
            {debtCategoryExpanded && (
              <FormGroup >
                <FormControlLabel control={<Checkbox name="credit-card-debt" />} label="Credit Card Debt" />
                <FormControlLabel control={<Checkbox name="medical-debt" />} label="Medical Debt" />
                <FormControlLabel control={<Checkbox name="auto-loans" />} label="Auto Loans" />
                <FormControlLabel control={<Checkbox name="personal-loans" />} label="Personal Loans" />
                <FormControlLabel control={<Checkbox name="business-loans" />} label="Business Loans" />
              </FormGroup>
            )}
          </FormControl>
        </Box>
        
        <Box className={classes.filterSection}>
          <FormControl component="fieldset" className={classes.areacontrol}>
            <Box className={classes.legendContainer}>
              <FormLabel component="legend">Debt Age Range</FormLabel>
              <IconButton onClick={this.handleToggle('debtAgeRangeExpanded')}>
                {debtAgeRangeExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            {debtAgeRangeExpanded && (
              <FormGroup>
                <FormControlLabel control={<Checkbox name="under-30-days" />} label="Under 30 days" />
                <FormControlLabel control={<Checkbox name="30-60-days" />} label="30-60 days" />
                <FormControlLabel control={<Checkbox name="60-90-days" />} label="60-90 days" />
                <FormControlLabel control={<Checkbox name="over-90-days" />} label="Over 90 days" />
              </FormGroup>
            )}
          </FormControl>
        </Box>
        
        <Box className={classes.filterSection}>
          <FormControl component="fieldset"className={classes.areacontrol} >
            <Box className={classes.legendContainer}>
              <FormLabel component="legend">Debt Owner Type</FormLabel>
              <IconButton onClick={this.handleToggle('debtOwnerTypeExpanded')}>
                {debtOwnerTypeExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            {debtOwnerTypeExpanded && (
              <FormGroup>
                <FormControlLabel control={<Checkbox name="individual" />} label="Individual" />
                <FormControlLabel control={<Checkbox name="bank" />} label="Bank" />
                <FormControlLabel control={<Checkbox name="agency" />} label="Agency" />
              </FormGroup>
            )}
          </FormControl>
        </Box>
        
        <Button variant="contained" color="primary" className={classes.applyButton}>
          Apply
        </Button>
      </Box>
    );
  }
}

export default withStyles(styles)(FiltersComponent);





















// import React, { Component } from 'react';
// import {
//     Box,
//     FormControlLabel,
//     Checkbox,
//     Button,
//     FormGroup,
//     FormControl,
//     FormLabel
// } from '@mui/material';
// import { withStyles, WithStyles } from '@mui/styles';
// import { createStyles } from '@mui/styles';

// const styles = createStyles({
//   filtersContainer: {
//     padding: 20,
//     width: 300,
//   },
//   filterSection: {
//     marginBottom: 20,
//   },
//   applyButton: {
//     marginTop: 20,
//   },
// });

// interface FiltersComponentProps extends WithStyles<typeof styles> {}

// class FiltersComponent extends Component<FiltersComponentProps> {
//   render() {
//     const { classes } = this.props;

//     return (
//       <Box className={classes.filtersContainer}>
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Debt Size</FormLabel>
//             <FormGroup>
//               <FormControlLabel control={<Checkbox name="under-10000" />} label="Under $10,000" />
//               <FormControlLabel control={<Checkbox name="10000-50000" />} label="$10,000 - $50,000" />
//               <FormControlLabel control={<Checkbox name="50000-100000" />} label="$50,000 - $100,000" />
//               <FormControlLabel control={<Checkbox name="over-100000" />} label="Over $100,000" />
//             </FormGroup>
//           </FormControl>
//         </Box>
        
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Debt Category</FormLabel>
//             <FormGroup>
//               <FormControlLabel control={<Checkbox name="credit-card-debt" />} label="Credit Card Debt" />
//               <FormControlLabel control={<Checkbox name="medical-debt" />} label="Medical Debt" />
//               <FormControlLabel control={<Checkbox name="auto-loans" />} label="Auto Loans" />
//               <FormControlLabel control={<Checkbox name="personal-loans" />} label="Personal Loans" />
//               <FormControlLabel control={<Checkbox name="business-loans" />} label="Business Loans" />
//             </FormGroup>
//           </FormControl>
//         </Box>
        
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Debt Age Range</FormLabel>
//             <FormGroup>
//               <FormControlLabel control={<Checkbox name="under-30-days" />} label="Under 30 days" />
//               <FormControlLabel control={<Checkbox name="30-60-days" />} label="30-60 days" />
//               <FormControlLabel control={<Checkbox name="60-90-days" />} label="60-90 days" />
//               <FormControlLabel control={<Checkbox name="over-90-days" />} label="Over 90 days" />
//             </FormGroup>
//           </FormControl>
//         </Box>
        
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Debt Owner Type</FormLabel>
//             <FormGroup>
//               <FormControlLabel control={<Checkbox name="individual" />} label="Individual" />
//               <FormControlLabel control={<Checkbox name="bank" />} label="Bank" />
//               <FormControlLabel control={<Checkbox name="agency" />} label="Agency" />
//             </FormGroup>
//           </FormControl>
//         </Box>
        
//         <Button variant="contained" color="primary" className={classes.applyButton}>
//           Apply
//         </Button>
//       </Box>
//     );
//   }
// }

// export default withStyles(styles)(FiltersComponent);


// import React, { Component } from 'react';
// import {
//     Box,
//     FormControlLabel,
//     Checkbox,
//     Button,
//     FormGroup,
//     FormControl,
//     FormLabel,
//     IconButton
// } from '@mui/material';
// import { withStyles, WithStyles } from '@mui/styles';
// import { createStyles } from '@mui/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// const styles = createStyles({
//   filtersContainer: {
//     padding: 20,
//     width: 300,
//   },
//   filterSection: {
//     marginBottom: 20,
//   },
//   applyButton: {
//     marginTop: 20,
//   },
// });

// interface FiltersComponentProps extends WithStyles<typeof styles> {}

// interface FiltersComponentState {
//   [key: string]: boolean;
// }

// class FiltersComponent extends Component<FiltersComponentProps, FiltersComponentState> {
//   constructor(props: FiltersComponentProps) {
//     super(props);
//     this.state = {
//       debtSizeExpanded: false,
//       debtCategoryExpanded: false,
//       debtAgeRangeExpanded: false,
//       debtOwnerTypeExpanded: false,
//     };
//   }

//   handleToggle = (section: string) => () => {
//     this.setState((prevState) => ({
//       [section]: !prevState[section]
//     }));
//   };

//   render() {
//     const { classes } = this.props;
//     const { debtSizeExpanded, debtCategoryExpanded, debtAgeRangeExpanded, debtOwnerTypeExpanded } = this.state;

//     return (
//       <Box className={classes.filtersContainer} sx={{border:'2px solid red'}}>
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">
//               Debt Size
//               <IconButton onClick={this.handleToggle('debtSizeExpanded')}>
//                 {debtSizeExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//               </IconButton>
//             </FormLabel>
//             {debtSizeExpanded && (
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox name="under-10000" />} label="Under $10,000" />
//                 <FormControlLabel control={<Checkbox name="10000-50000" />} label="$10,000 - $50,000" />
//                 <FormControlLabel control={<Checkbox name="50000-100000" />} label="$50,000 - $100,000" />
//                 <FormControlLabel control={<Checkbox name="over-100000" />} label="Over $100,000" />
//               </FormGroup>
//             )}
//           </FormControl>
//         </Box>
        
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">
//               Debt Category
//               <IconButton onClick={this.handleToggle('debtCategoryExpanded')}>
//                 {debtCategoryExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//               </IconButton>
//             </FormLabel>
//             {debtCategoryExpanded && (
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox name="credit-card-debt" />} label="Credit Card Debt" />
//                 <FormControlLabel control={<Checkbox name="medical-debt" />} label="Medical Debt" />
//                 <FormControlLabel control={<Checkbox name="auto-loans" />} label="Auto Loans" />
//                 <FormControlLabel control={<Checkbox name="personal-loans" />} label="Personal Loans" />
//                 <FormControlLabel control={<Checkbox name="business-loans" />} label="Business Loans" />
//               </FormGroup>
//             )}
//           </FormControl>
//         </Box>
        
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">
//               Debt Age Range
//               <IconButton onClick={this.handleToggle('debtAgeRangeExpanded')}>
//                 {debtAgeRangeExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//               </IconButton>
//             </FormLabel>
//             {debtAgeRangeExpanded && (
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox name="under-30-days" />} label="Under 30 days" />
//                 <FormControlLabel control={<Checkbox name="30-60-days" />} label="30-60 days" />
//                 <FormControlLabel control={<Checkbox name="60-90-days" />} label="60-90 days" />
//                 <FormControlLabel control={<Checkbox name="over-90-days" />} label="Over 90 days" />
//               </FormGroup>
//             )}
//           </FormControl>
//         </Box>
        
//         <Box className={classes.filterSection}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">
//               Debt Owner Type
//               <IconButton onClick={this.handleToggle('debtOwnerTypeExpanded')}>
//                 {debtOwnerTypeExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//               </IconButton>
//             </FormLabel>
//             {debtOwnerTypeExpanded && (
//               <FormGroup>
//                 <FormControlLabel control={<Checkbox name="individual" />} label="Individual" />
//                 <FormControlLabel control={<Checkbox name="bank" />} label="Bank" />
//                 <FormControlLabel control={<Checkbox name="agency" />} label="Agency" />
//               </FormGroup>
//             )}
//           </FormControl>
//         </Box>
        
//         <Button variant="contained" color="primary" className={classes.applyButton}>
//           Apply
//         </Button>
//       </Box>
//     );
//   }
// }

// export default withStyles(styles)(FiltersComponent);