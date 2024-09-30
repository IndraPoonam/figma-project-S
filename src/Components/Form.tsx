// import React, { Component } from 'react'
// import { Box, Button, TextField, Typography } from '@mui/material'
// export default class Form extends Component {
//     handleSubmit= ()=>{
//         console.log('form sumbitted')
//     }
//   render() {
//     return (
//     <Box >
//        <Typography fontWeight={800}>Submissionn form</Typography> 
//        <Typography>Name:=</Typography>
// <TextField />
// <Typography>Roll No. :=</Typography>
// <TextField />
// <Typography>Class</Typography>
// <TextField />
// <Typography>Subject</Typography>
// <TextField /><br/><br/>
// <Button variant='contained' onClick={this.handleSubmit}>Sumbit</Button>
//     </Box>
//     )
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////
// import { Component } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';

// interface FormState {
//   name: string;
//   rollNo: string;
//   className: string;
//   subject: string;
// }

// export default class Form extends Component<{}, FormState> {
//   state: FormState = {
//     name: '',
//     rollNo: '',
//     className: '',
//     subject: '',
//   };

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     } as Pick<FormState, keyof FormState>);
//   };

//   handleSubmit = (): void => {
//     console.log('Form Data:', this.state);
//   };

//   render() {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         sx={{ border: '2px solid red', background: 'red' }}
//       >
//         <Box>
//           <Typography fontWeight={800}>Submission form</Typography>
//           <Typography>Name:</Typography>
//           <TextField
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//           />
//           <Typography>Roll No.:</Typography>
//           <TextField
//             name="rollNo"
//             value={this.state.rollNo}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//           />
//           <Typography>Class</Typography>
//           <TextField
//             name="className"
//             value={this.state.className}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//           />
//           <Typography>Subject</Typography>
//           <TextField
//             name="subject"
//             value={this.state.subject}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//           />
//           <br />
//           <br />
//           <Button variant="contained" onClick={this.handleSubmit}>
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     );
//   }
// }
///////////////////////////////////////////console print data///////////////////////////////////
// import { Component } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';

// interface FormState {
//   name: string;
//   rollNo: string;
//   className: string;
//   subject: string;
//   errors: {
//     name: string;
//     rollNo: string;
//     className: string;
//     subject: string;
//   };
// }

// export default class Form extends Component<{}, FormState> {
//   state: FormState = {
//     name: '',
//     rollNo: '',
//     className: '',
//     subject: '',
//     errors: {
//       name: '',
//       rollNo: '',
//       className: '',
//       subject: '',
//     },
//   };

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     this.setState({
//       [e.target.name]: e.target.value,
//       errors: {
//         ...this.state.errors,
//         [e.target.name]: '',
//       },
//     } as Pick<FormState, keyof FormState>);
//   };

//   validateForm = (): boolean => {
//     const { name, rollNo, className, subject } = this.state;
//     let errors = { name: '', rollNo: '', className: '', subject: '' };
//     let valid = true;

//     if (name.trim() === '') {
//       errors.name = 'Name is required';
//       valid = false;
//     }

//     if (rollNo.trim() === '' || isNaN(Number(rollNo))) {
//       errors.rollNo = 'Roll No. is required and must be a number';
//       valid = false;
//     }

//     if (className.trim() === '') {
//       errors.className = 'Class is required';
//       valid = false;
//     }

//     if (subject.trim() === '') {
//       errors.subject = 'Subject is required';
//       valid = false;
//     }

//     this.setState({ errors });
//     return valid;
//   };

//   handleSubmit = (): void => {
//     if (this.validateForm()) {
//       console.log('Form Data:', this.state);
//     } else {
//       console.log('Validation failed');
//     }
//   };

//   render() {
//     const { errors } = this.state;

//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         sx={{ border: '2px solid red', background: 'red' }}
//       >
//         <Box>
//           <Typography fontWeight={800}>Submission form</Typography>
//           <Typography>Name:</Typography>
//           <TextField
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//             error={!!errors.name}
//             helperText={errors.name}
//           />
//           <Typography>Roll No.:</Typography>
//           <TextField
//             name="rollNo"
//             value={this.state.rollNo}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//             error={!!errors.rollNo}
//             helperText={errors.rollNo}
//           />
//           <Typography>Class</Typography>
//           <TextField
//             name="className"
//             value={this.state.className}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//             error={!!errors.className}
//             helperText={errors.className}
//           />
//           <Typography>Subject</Typography>
//           <TextField
//             name="subject"
//             value={this.state.subject}
//             onChange={this.handleChange}
//             sx={{ background: 'white' }}
//             error={!!errors.subject}
//             helperText={errors.subject}
//           />
//           <br />
//           <br />
//           <Button variant="contained" onClick={this.handleSubmit}>
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     );
//   }
// }
////////////////////////////////////////////////////////////////////////////
import { Component } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface FormState {
  name: string;
  rollNo: string;
  className: string;
  subject: string;
  errors: {
    name: string;
    rollNo: string;
    className: string;
    subject: string;
  };
}

export default class Form extends Component<{}, FormState> {
  state: FormState = {
    name: '',
    rollNo: '',
    className: '',
    subject: '',
    errors: {
      name: '',
      rollNo: '',
      className: '',
      subject: '',
    },
  };

  componentDidMount() {
    // Retrieve form data from localStorage if it exists
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.setState(JSON.parse(savedData));
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      },
    } as Pick<FormState, keyof FormState>);
  };

  validateForm = (): boolean => {
    const { name, rollNo, className, subject } = this.state;
    let errors = { name: '', rollNo: '', className: '', subject: '' };
    let valid = true;

    if (name.trim() === '') {
      errors.name = 'Name is required';
      valid = false;
    }

    if (rollNo.trim() === '' || isNaN(Number(rollNo))) {
      errors.rollNo = 'Roll No. is required and must be a number';
      valid = false;
    }

    if (className.trim() === '') {
      errors.className = 'Class is required';
      valid = false;
    }

    if (subject.trim() === '') {
      errors.subject = 'Subject is required';
      valid = false;
    }

    this.setState({ errors });
    return valid;
  };

  handleSubmit = (): void => {
    if (this.validateForm()) {
      // Save form data to localStorage
      localStorage.setItem('formData', JSON.stringify(this.state));
      console.log('Form Data:', this.state);
    } else {
      console.log('Validation failed');
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ border: '2px solid red', background: 'red' }}
      >
        <Box>
          <Typography fontWeight={800}>Submission form</Typography>
          <Typography>Name:</Typography>
          <TextField
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            sx={{ background: 'white' }}
            error={!!errors.name}
            helperText={errors.name}
          />
          <Typography>Roll No.:</Typography>
          <TextField
            name="rollNo"
            value={this.state.rollNo}
            onChange={this.handleChange}
            sx={{ background: 'white' }}
            error={!!errors.rollNo}
            helperText={errors.rollNo}
          />
          <Typography>Class</Typography>
          <TextField
            name="className"
            value={this.state.className}
            onChange={this.handleChange}
            sx={{ background: 'white' }}
            error={!!errors.className}
            helperText={errors.className}
          />
          <Typography>Subject</Typography>
          <TextField
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
            sx={{ background: 'white' }}
            error={!!errors.subject}
            helperText={errors.subject}
          />
          <br />
          <br />
          <Button variant="contained" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    );
  }
}
