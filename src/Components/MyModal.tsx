import React, { Component } from 'react';
import { Box, Modal, Button } from '@mui/material';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// Child Modal Component
class ChildModal extends Component<{}, { open: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <>
        <Button onClick={this.handleOpen}>Open Child Modal</Button>
        <Modal
          open={open}
          onClose={this.handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={this.handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </>
    );
  }
}
// Parent Modal Component
class MyModal extends Component<{}, { open: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.handleOpen} variant="contained" >Open modal by Poonam</Button>
        <Modal
          open={open}
          onClose={this.handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Text in a modal</h2>
            <p id="parent-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <ChildModal />
          </Box>
        </Modal>
      </div>
    );
  }
}
export default MyModal;
