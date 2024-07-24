// import React, { Component } from 'react';
// import {
//   Box, Button, Checkbox, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography
// } from '@mui/material';
// import { CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

// type State = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   role: 'Rider' | 'Driver';
//   agreed: boolean;
//   errors: {
//     password: boolean[];
//     agreed: boolean;
//   };
// };

// class SignupForm extends Component<{}, State> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       role: 'Driver',
//       agreed: false,
//       errors: {
//         password: [false, false, false, false],
//         agreed: false,
//       },
//     };
//   }

//   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     this.setState(prevState => ({
//       ...prevState,
//       [name]: value
//     } as Pick<State, keyof State>), () => {
//       if (name === 'password') {
//         this.validatePassword();
//       }
//     });
//   };

//   handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ role: event.target.value as 'Rider' | 'Driver' });
//   };

//   handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ agreed: event.target.checked });
//   };

//   validatePassword = () => {
//     const { password } = this.state;
//     const errors = [
//       /[A-Z]/.test(password),
//       /[a-z]/.test(password),
//       /[0-9]/.test(password),
//       password.length >= 8,
//     ];
//     this.setState({ errors: { ...this.state.errors, password: errors } });
//   };

//   handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const { agreed, errors } = this.state;
//     if (!agreed) {
//       this.setState({ errors: { ...errors, agreed: true } });
//     }
//     // Add further submission logic here
//   };

//   render() {
//     const { firstName, lastName, email, password, role, agreed, errors } = this.state;
//     return (
//       <Box component="form" onSubmit={this.handleSubmit} sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
//         <Typography variant="h4" gutterBottom>Create your E-Ryde account</Typography>
//         <Typography variant="subtitle1" gutterBottom>Step 1 of 4</Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//           <Box sx={{ flexGrow: 1, height: 10, bgcolor: 'green' }} />
//           <Box sx={{ flexGrow: 3, height: 10, bgcolor: 'lightgray' }} />
//         </Box>
//         <RadioGroup row value={role} onChange={this.handleRoleChange}>
//           <FormControlLabel value="Rider" control={<Radio />} label="Rider" />
//           <FormControlLabel value="Driver" control={<Radio />} label="Driver" />
//         </RadioGroup>
//         {errors.agreed && !agreed && (
//           <Typography color="error" variant="body2" sx={{ mb: 2 }}>
//             You have to agree with the Privacy Policy and Terms and Conditions to create an E-Ryde account
//           </Typography>
//         )}
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="First Name"
//               name="firstName"
//               value={firstName}
//               onChange={this.handleChange}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Last Name"
//               name="lastName"
//               value={lastName}
//               onChange={this.handleChange}
//             />
//           </Grid>
//         </Grid>
//         <TextField
//           fullWidth
//           label="Email address"
//           name="email"
//           type="email"
//           value={email}
//           onChange={this.handleChange}
//           sx={{ mt: 2 }}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           name="password"
//           type="password"
//           value={password}
//           onChange={this.handleChange}
//           sx={{ mt: 2 }}
//         />
//         <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2 }}>
//           {['At least one capital letter', 'At least one lowercase letter', 'At least one number', 'Minimum character length is 8 characters'].map((text, index) => (
//             <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
//               {errors.password[index] ? <CheckCircleOutline color="success" /> : <CancelOutlined color="error" />}
//               <Typography sx={{ ml: 1 }}>{text}</Typography>
//             </Box>
//           ))}
//         </Box>
//         <FormControlLabel
//           control={<Checkbox checked={agreed} onChange={this.handleAgreementChange} />}
//           label="I agree with Privacy Policy and Terms and Conditions"
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{ mt: 2 }}
//         >
//           Continue
//         </Button>
//         <Typography variant="body2" sx={{ mt: 2 }}>
//           Already have an account? <a href="/login">Log In</a>
//         </Typography>
//       </Box>
//     );
//   }
// }

// export default SignupForm;


import React, { Component } from 'react';
import {
  Box, Button, Checkbox, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography
} from '@mui/material';
import { CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

type State = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'Rider' | 'Driver';
  agreed: boolean;
  showPasswordValidation: boolean;
  errors: {
    password: boolean[];
    agreed: boolean;
  };
};

class SignupForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'Driver',
      agreed: false,
      showPasswordValidation: false,
      errors: {
        password: [false, false, false, false],
        agreed: false,
      },
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    } as Pick<State, keyof State>), () => {
      if (name === 'password') {
        this.validatePassword();
      }
    });
  };

  handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ role: event.target.value as 'Rider' | 'Driver' });
  };

  handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ agreed: event.target.checked });
  };

  handlePasswordFocus = () => {
    this.setState({ showPasswordValidation: true });
  };

  validatePassword = () => {
    const { password } = this.state;
    const errors = [
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      password.length >= 8,
    ];
    this.setState({ errors: { ...this.state.errors, password: errors } });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { agreed, errors } = this.state;
    if (!agreed) {
      this.setState({ errors: { ...errors, agreed: true } });
    }
    
  };

  render() {
    const { firstName, lastName, email, password, role, agreed, showPasswordValidation, errors } = this.state;
    return (
      <Box component="form" onSubmit={this.handleSubmit} sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
        <Typography sx={{ fontSize: '30px', color: '#1D6FB8', fontWeight: 400, lineHeight: '40px', textAlign: 'center' }} gutterBottom>
        Create your E-Ryde account
      </Typography>
        <Typography variant="subtitle1" sx={{ color: '#1D6FB8', fontWeight: 400, lineHeight: '40px',}} gutterBottom>Step 1 of 4</Typography>
       
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Box sx={{flexGrow: 1, height: 7,  bgcolor: '#87C122',  borderRadius: '17.17px',position: 'relative',   zIndex: 1, }}/>
      <Box sx={{flexGrow: 3,height: 7,bgcolor: '#E2E8F0', borderRadius: '17.17px',marginLeft: '-17.17px'}}/>
    </Box>
        <RadioGroup row value={role} onChange={this.handleRoleChange}>
          <FormControlLabel 
            value="Rider" 
            control={
              <Radio 
                sx={{
                  color: '#87C122',
                  '&.Mui-checked': {
                    color: '#87C122',
                  }, }} />
            } 
            label="Rider" 
          />
          <FormControlLabel 
            value="Driver" 
            control={
              <Radio 
                sx={{
                  color: '#87C122',
                  '&.Mui-checked': {
                    color: '#87C122',
                  }, }}/>  
            } 
            label="Driver" 
          />
        </RadioGroup>
        {errors.agreed && !agreed && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            You have to agree with the Privacy Policy and Terms and Conditions to create an E-Ryde account
          </Typography>
        )}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography sx={{fontWeight:'bold',color:'#334155',fontSize:'xm'}}>First Name</Typography>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{fontWeight:'bold',color:'#334155',}}>Last Name</Typography>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
        <Typography sx={{fontWeight:'bold',marginTop:'1rem',color:'#334155',}}>Email adress</Typography>
        <TextField
          fullWidth
          label="Email address"
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange}
          sx={{ mt: 2 }}
        />
         <Typography sx={{fontWeight:'bold',marginTop:'1rem',color:'#334155',}}>Password</Typography>
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={this.handleChange}
          onFocus={this.handlePasswordFocus}
          sx={{ mt: 2 }}
        />
        {showPasswordValidation && (
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, mb: 2 }}>
            {['At least one capital letter', 'At least one lowercase letter', 'At least one number', 'Minimum character length is 8 characters'].map((text, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                {errors.password[index] ? <CheckCircleOutline color="success" /> : <CancelOutlined color="error" />}
                <Typography sx={{ ml: 1 }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        )}
        <FormControlLabel 
          control={<Checkbox  checked={agreed} onChange={this.handleAgreementChange} />}
          label="I agree with Privacy Policy and Terms and Conditions"
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '14px',
              color: 'red',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Continue
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <a href="/login">Log In</a>
        </Typography>
      </Box>
    );
  }
}

export default SignupForm;









////////////////////////radio button green////////////////////////////
// import React from 'react';
// import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   radio: {
//     '&$checked': {
//       color: '#87C122',
//     },
//   },
//   checked: {},
// });

// function RoleSelector() {
//   const classes = useStyles();
//   const [role, setRole] = React.useState('Rider');

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   return (
//     <RadioGroup row value={role} onChange={handleRoleChange}>
//       <FormControlLabel 
//         value="Rider" 
//         control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} 
//         label="Rider" 
//       />
//       <FormControlLabel 
//         value="Driver" 
//         control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} 
//         label="Driver" 
//       />
//     </RadioGroup>
//   );
// }

// export default RoleSelector;
