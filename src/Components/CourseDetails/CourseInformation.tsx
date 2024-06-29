import React, { Component, ChangeEvent } from 'react';
import SideNav from '../SideNav/SideNav';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Switch, Typography, Box, SelectChangeEvent, Grid, CardMedia, Stack, Divider } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ThemeComponent from '../Themes/ThemeComponent';
import LessonComponent from '../Lesson/LessonComponent';

interface CourseInformationState {
    courseName: string;
    duration: string;
    leaderboardPoints: number;
    category: string;
    level: string;
    productType: string;
    language: string;
    certificate: string;
    description: string;
    informationAtCourseEnd: string;
    active: boolean;
    media: string;
    title: string;
}

interface Props {
    handleAddData: () => void;
    AllDataTheme: Data[];
    handleAddLesson: (theme_id: number) => void;
    handleDeleteTheme: (id: number) => void;
    handleDeleteLesson: (theme_id: number, lesson_id: number) => void; // Add this prop
}

interface Data {
    name: string;
    LessonData: Lesson[]
}

interface Lesson {
    name: string;
}

class CourseInformation extends Component<Props, CourseInformationState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            courseName: '',
            duration: '24h 30m',
            leaderboardPoints: 10,
            category: 'Wine',
            level: 'Intermediate',
            productType: 'Free',
            language: 'English',
            certificate: 'WSET',
            description: '',
            informationAtCourseEnd: '',
            active: true,
            media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlomRxuD2hXxPAPem4LggnMmje2M5z_ZNvRg&s',
            title: ''
        };
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as unknown as Pick<CourseInformationState, keyof CourseInformationState>);
    };

    handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as unknown as Pick<CourseInformationState, keyof CourseInformationState>);
    };

    toggleActive = () => {
        this.setState((prevState) => ({ active: !prevState.active }));
    };

    handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            this.setState({ media: URL.createObjectURL(file) });
        }
    };

    render() {
        const {
            courseName,
            duration,
            leaderboardPoints,
            category,
            level,
            productType,
            language,
            certificate,
            description,
            informationAtCourseEnd,
            active,
            media,
            title
        } = this.state;
        const { handleAddData, AllDataTheme, handleAddLesson, handleDeleteTheme, handleDeleteLesson } = this.props;

        return (
            <>

                <Box p={2} display="flex" flexDirection="column" width="100%" sx={{ bgcolor: 'white' }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: { xs: 'wrap', md: 'nowrap' },

                        }}
                    >
                        <Typography variant="h6">Course Information</Typography>
                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            divider={<Divider orientation="vertical" flexItem />}
                            sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}
                        >
                            <Typography alignItems="center" sx={{ display: 'flex', alignItems: 'center' }}>
                                <StarBorderOutlinedIcon />
                                {leaderboardPoints} pts
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <TimerOutlinedIcon />
                                {duration}
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                Active
                                <Switch checked={active} onChange={this.toggleActive} />
                            </Typography>
                        </Stack>
                    </Box>
                    <Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Course Name"
                                name="courseName"
                                value={courseName}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Duration"
                                        name="duration"
                                        value={duration}
                                        onChange={this.handleInputChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Leaderboard Points"
                                        name="leaderboardPoints"
                                        type="number"
                                        value={leaderboardPoints}
                                        onChange={this.handleInputChange}
                                        fullWidth
                                        margin="normal"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            label="Category"
                                            name="category"
                                            value={category}
                                            onChange={this.handleSelectChange}
                                        >
                                            <MenuItem value="Wine">Wine</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Level</InputLabel>
                                        <Select
                                            label="Level"
                                            name="level"
                                            value={level}
                                            onChange={this.handleSelectChange}
                                        >
                                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Product Type</InputLabel>
                                        <Select
                                            label="Product Type"
                                            name="productType"
                                            value={productType}
                                            onChange={this.handleSelectChange}
                                        >
                                            <MenuItem value="Free">Free</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Language</InputLabel>
                                        <Select
                                            label="Language"
                                            name="language"
                                            value={language}
                                            onChange={this.handleSelectChange}
                                        >
                                            <MenuItem value="English">English</MenuItem>
                                            <MenuItem value="Hindi">Hindi</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Certificate</InputLabel>
                                <Select
                                    label="Certificate"
                                    name="certificate"
                                    value={certificate}
                                    onChange={this.handleSelectChange}
                                >
                                    <MenuItem value="WSET">WSET</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={media}
                                        alt="Media"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 'body2' }}>Overview picture</Typography>
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
                            <TextField
                                label="Description"
                                name="description"
                                value={description}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                                multiline
                                rows={3}
                            />
                            <TextField
                                label="Information At Course End"
                                name="informationAtCourseEnd"
                                value={informationAtCourseEnd}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                                multiline
                                rows={3}
                            />
                        </Grid>
                    </Grid>

                    {AllDataTheme.map((theme, index) => {
                        return (
                            <Box>
                                <Box key={index} mt={2}>
                                    <ThemeComponent index={index} handleDeleteTheme={handleDeleteTheme} />
                                    {theme.LessonData && theme.LessonData.map((lesson, lessonIndex) => (
                                        <Box key={lessonIndex} mt={2}>
                                            <LessonComponent index={lessonIndex} themeIndex={index} handleDeleteLesson={handleDeleteLesson} />
                                        </Box>
                                    ))}

                                    <Stack direction="row" spacing={2} mt={2}>
                                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={() => handleAddLesson(index)}>Add Lesson</Button>
                                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>Add Quiz</Button>
                                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>Add Flash Card</Button>
                                    </Stack>
                                </Box>
                            </Box>
                        );
                    })}
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddData}>
                            New Theme
                        </Button>
                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>
                            New Mock
                        </Button>
                    </Stack>
                </Box>
                </>
        );
    }
}

export default CourseInformation;