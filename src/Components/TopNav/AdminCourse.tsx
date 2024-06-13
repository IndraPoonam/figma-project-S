import React, { Component } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface Props {}
interface State {}

class AdminCourse extends Component<Props, State> {
  render() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '14px',
              color: '#757575',
            }}
          >
            Admin / Courses / Laura test course
          </Typography>
          <Typography
            sx={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            Laura test course
          </Typography>
        </Box>
        <Button
          variant="outlined"
        >
          Save changes    {<ExpandMore />} 
        </Button>
      </Box>
    );
  }
}

export default AdminCourse;

