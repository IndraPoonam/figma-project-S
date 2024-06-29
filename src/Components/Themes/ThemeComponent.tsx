import  { Component, ChangeEvent } from 'react';
import { TextField, Button, Select, MenuItem, Typography, Card, CardMedia, Grid, FormControl, InputLabel, IconButton, Box, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { SelectChangeEvent } from '@mui/material/Select';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type State = {
    title: string;
    leaderboardPoints: number;
    order: string;
    productType: string;
    media: string;
    content: string;
};

type Props = {
    index: number;
    handleDeleteTheme: (id: number) => void; 
};

class ThemeComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: "",
            leaderboardPoints: 5,
            order: 'Order In The Theme',
            productType: 'Free',
            media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlomRxuD2hXxPAPem4LggnMmje2M5z_ZNvRg&s',
            content: 'Conveniently plagiarize market-driven metrics with compelling e-tailers...'
        };
    }

    handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
    }

    handleSelectChange = (e: SelectChangeEvent) => {
        this.setState({ productType: e.target.value });
    }

    handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            this.setState({ media: URL.createObjectURL(file) });
        }
    }

    handleDelete = () => {
        console.log("Delete lesson");
    }

    render() {
        const { index, handleDeleteTheme } = this.props;
        return (
            <Card sx={{ maxWidth: 900, padding: '20px', position: 'relative' }}>
                <Divider />
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="bold">
                        Theme {this.props.index + 1}
                    </Typography>
                <Box>   <StarBorderIcon />5str
                    <IconButton color="secondary">
                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDeleteTheme(index)}
                            sx={{ mt: 2 }}
                        >
                            Delete Theme
                        </Button>
                    </IconButton>
                    </Box> 
                </Grid>
                <Divider />
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2rem' }}>
                    <Box sx={{ borderRight: { md: '2px solid gray' }, padding: '10px', flex: 1 }}>
                        <TextField
                            label="Title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Leaderboard Points"
                                    name="leaderboardPoints"
                                    type="number"
                                    value={this.state.leaderboardPoints}
                                    onChange={this.handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Order In The Theme"
                                    name="order"
                                    value={this.state.order}
                                    onChange={this.handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Product Type</InputLabel>
                            <Select
                                value={this.state.productType}
                                onChange={this.handleSelectChange}
                            >
                                <MenuItem value="Free">Free</MenuItem>
                                <MenuItem value="Paid">Paid</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={this.state.media}
                                    alt="Media"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Overview Picture</Typography>
                                    <Typography color={'gray'} variant="caption" display="block">
                    Minimal Picture: 343x193 px
                    </Typography>
                    <Typography color={'gray'} variant="caption" display="block">
                    Maximum size: 5 mb
                    </Typography>
                                    <Button variant="contained" component="label" startIcon={<AddPhotoAlternateIcon />}>
                                        Choose File
                                        <input type="file" hidden onChange={this.handleFileChange} />
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Card>
        );
    }
}

export default ThemeComponent;
