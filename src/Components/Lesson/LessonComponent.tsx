import React, { Component, ChangeEvent } from 'react';
import {
    TextField, Button, Select, MenuItem, Typography, Card, CardContent, CardMedia, Grid, FormControl, InputLabel, IconButton, Box, Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { SelectChangeEvent } from '@mui/material/Select';
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';

type State = {
    title: string;
    leaderboardPoints: number;
    order: string;
    productType: string;
    media: string;
    content: string;
};

// type Props = {
//     index: number;
// }
type Props = {
    index: number;
    themeIndex: number;
    handleDeleteLesson: (themeId: number, lessonId: number) => void;
};
const myTheme = createTheme({});

class LessonComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: 'Planting a grape',
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

    render() {
        return (
            <Card style={{ maxWidth: 900, padding: '20px', position: 'relative' }}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="bold">
                        Lesson {this.props.index + 1}
                    </Typography>
                   <Box > 
                  <StarBorderOutlinedIcon/>5str
                    <IconButton color="secondary">
                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            style={{ marginTop: '20px' }}
                            onClick={() => this.props.handleDeleteLesson(this.props.themeIndex, this.props.index)}
                            
                        >
                            Delete Lesson
                        </Button>
                    </IconButton>
                    </Box>
                </Grid>
                <Divider />
                <CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2rem' }}>
                    <Box sx={{ width: { xs: '100%', md: '45rem' }, borderRight: { md: '2px solid gray' }, padding: '6px' }}>
                        <TextField
                            label="Title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '1rem' }}>
                            <TextField
                                label="Leaderboard Points"
                                name="leaderboardPoints"
                                type="number"
                                value={this.state.leaderboardPoints}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Order In The Theme"
                                name="order"
                                value={this.state.order}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                        </Box>
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
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '1rem' }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={this.state.media}
                                        alt="Media"
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 'body2' }}>Heading Media</Typography>
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
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: '100%', md: '54vh' },  height: { xs: '50vh', md: '54vh' },border: '2px solid gray' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Lesson Content</Typography>
                        <ThemeProvider theme={myTheme}>
                            <MUIRichTextEditor label="Start typing..." />
                        </ThemeProvider>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}

export default LessonComponent;

