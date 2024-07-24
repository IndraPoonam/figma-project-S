

// import React, { Component } from 'react';
// import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';
// import { styled } from '@mui/system';
// import { Height } from '@mui/icons-material';

// type MakeOfferState = {
//     offerType: string;
//     purchaseAmount: number;
//     additionalInfo: string;
// };

// const StyledForm = styled('div')({
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     padding: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     maxWidth: '400px',

//     '& .header': {
//         textAlign: 'center',
//         fontWeight: 'bold',
//     },
//     '& .label': {
//         fontWeight: 'bold',
//     },
//     '& .textField' : {
//       height: '10px',
//       width: 'calc(100% + 20px)', // Adjust this value as needed to increase the width
//       '& .MuiInputBase-root': {
//         height: '10px',
//       },
//     },
// });

// class MakeOffer extends Component<{}, MakeOfferState> {
//     state: MakeOfferState = {
//         offerType: '',
//         purchaseAmount: 0,
//         additionalInfo: ''
//     };

//     handleSelectChange = (event: SelectChangeEvent<string>) => {
//         this.setState({
//             offerType: event.target.value
//         });
//     };

//     handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         this.setState({
//             ...this.state,
//             [name]: value
//         });
//     };

//     handleSubmit = () => {
//         // Handle form submission
//         console.log(this.state);
//     };

//     render() {
//         const { offerType, purchaseAmount, additionalInfo } = this.state;

//         return (
//             <StyledForm>
//                 <Typography variant="h6" className="header">
//                     Make Offer
//                 </Typography>
//                 <Typography className="label">
//                     Offer Type
//                 </Typography>
//                 <FormControl fullWidth>
//                     <InputLabel id="offer-type-label">Offer Type</InputLabel>
//                     <Select
//                         labelId="offer-type-label"
//                         name="offerType"
//                         value={offerType}
//                         onChange={this.handleSelectChange}
//                     >
//                         <MenuItem value="Type1">Type1</MenuItem>
//                         <MenuItem value="Type2">Type2</MenuItem>
//                         <MenuItem value="Type3">Type3</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <Typography className="label">
//                     Enter purchase amount
//                 </Typography>
//                 <TextField
//                     label="Enter purchase amount"
//                     name="purchaseAmount"
//                     type="number"
//                     value={purchaseAmount}
//                     onChange={this.handleInputChange}
//                     fullWidth
                    
//                 />
//                 <TextField
//                     label="Additional Info"
//                     name="additionalInfo"
//                     multiline
//                     rows={4}
//                     value={additionalInfo}
//                     onChange={this.handleInputChange}
//                     fullWidth
                   
//                 />
//                 <Button 
//                     variant="contained" 
//                     onClick={this.handleSubmit}
//                 >
//                     Make Offer
//                 </Button>
//             </StyledForm>
//         );
//     }
// }

// export default MakeOffer;

import React, { Component } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/system';

type MakeOfferState = {
    offerType: string;
    purchaseAmount: number;
    additionalInfo: string;
};

const StyledForm = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    // maxWidth: '400px',
    maxHeight:'450px',


    '& .header': {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    '& .label': {
        fontWeight: 'bold',
    },
});

const StyledTextField = styled(TextField)({
    height: '40px',
    width: 'calc(100% )',
    '& .MuiInputBase-root': {
        height: '40px',
    },
});

const StyledSelect = styled(Select)({
    height: '40px',
    width: 'calc(100% )',
    '& .MuiInputBase-root': {
        height: '40px',
    },
});

class MakeOffer extends Component<{}, MakeOfferState> {
    state: MakeOfferState = {
        offerType: '',
        purchaseAmount: 0,
        additionalInfo: ''
    };

    handleSelectChange = (event: SelectChangeEvent<unknown>) => {
        this.setState({
            offerType: event.target.value as string
        });
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    };

    handleSubmit = () => {
        // Handle form submission
        console.log(this.state);
    };

    render() {
        const { offerType, purchaseAmount, additionalInfo } = this.state;

        return (
            <StyledForm>
                <Typography variant="h6" className="header">
                    Make Offer
                </Typography>
                <Typography className="label">
                    Offer Type
                </Typography>
                <FormControl fullWidth>
                    <InputLabel id="offer-type-label">Offer Type</InputLabel>
                    <StyledSelect
                        labelId="offer-type-label"
                        name="offerType"
                        value={offerType}
                        onChange={this.handleSelectChange}
                    >
                        <MenuItem value="Type1">Type1</MenuItem>
                        <MenuItem value="Type2">Type2</MenuItem>
                        <MenuItem value="Type3">Type3</MenuItem>
                    </StyledSelect>
                </FormControl>
                <Typography className="label">
                    Enter purchase amount
                </Typography>
                <StyledTextField
                    label="Enter purchase amount"
                    name="purchaseAmount"
                    type="number"
                    value={purchaseAmount}
                    onChange={this.handleInputChange}
                    fullWidth
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
                <Button 
                    variant="contained" 
                    onClick={this.handleSubmit}
                >
                    Make Offer
                </Button>
            </StyledForm>
        );
    }
}

export default MakeOffer;
