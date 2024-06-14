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
    AllData: Data[];
    handleAddLesson: () => void;
    LessonData: Lesson[];
}

interface Data {
    name: string;
}

interface Lesson {
    name: string;
}

class CourseInformation extends Component<Props, CourseInformationState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            courseName: 'How the wine is done?',
            duration: '24h 30m',
            leaderboardPoints: 10,
            category: 'Wine',
            level: 'Intermediate',
            productType: 'Free',
            language: 'English',
            certificate: 'WSET',
            description: 'Completely synthesize customized expertise before open-source solutions.',
            informationAtCourseEnd: 'Dynamically facilitate integrated potentialities rather than dynamic information.',
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
        const { handleAddData, AllData, handleAddLesson, LessonData } = this.props;

        return (
            <>
                <Box p={2} display="flex" flexDirection="column" width="100%" sx={{bgcolor:'white'}}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: { xs: 'wrap', md: 'nowrap' }
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

                    {AllData.map((data, index) => (
                        <Box key={index} mt={2}>
                            <ThemeComponent index={index} />
                        </Box>
                    ))}

                    {LessonData.map((Lesson, index) => (
                        <Box key={index} mt={2}>
                            <LessonComponent index={index} />
                        </Box>
                    ))}

                    <Stack direction="row" spacing={2} mt={2}>
                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddData}>
                            New Theme
                        </Button>
                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>
                            New Mock
                        </Button>
                    </Stack>
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddLesson}>Add Lesson</Button>
                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>Add Quiz</Button>
                        <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>Add Flash Card</Button>
                    </Stack>
                </Box>
            </>
        );
    }
}

export default CourseInformation;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component, ChangeEvent } from 'react';
// import SideNav from '../SideNav/SideNav';
// import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Switch, Typography, Box, SelectChangeEvent, Grid, CardMedia, Stack, Divider } from '@mui/material';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import ThemeComponent from '../Themes/ThemeComponent';
// import LessonComponent from '../Lesson/LessonComponent';

// interface CourseInformationState {
//     courseName: string;
//     duration: string;
//     leaderboardPoints: number;
//     category: string;
//     level: string;
//     productType: string;
//     language: string;
//     certificate: string;
//     description: string;
//     informationAtCourseEnd: string;
//     active: boolean;
//     media: string;
//     title: string;
// }

// interface Props {
//     handleAddData: () => void;
//     AllData: Data[];
//     handleAddLesson: () => void;
//     LessonData: Lesson[];

// }

// interface Data {
//     name: string;
// }

// interface Lesson {
//     name: string;
// }



// class CourseInformation extends Component<Props, CourseInformationState> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             courseName: 'How the wine is done?',
//             duration: '24h 30m',
//             leaderboardPoints: 10,
//             category: 'Wine',
//             level: 'Intermediate',
//             productType: 'Free',
//             language: 'English',
//             certificate: 'WSET',
//             description: 'Completely synthesize customized expertise before open-source solutions.',
//             informationAtCourseEnd: 'Dynamically facilitate integrated potentialities rather than dynamic information.',
//             active: true,
//             media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlomRxuD2hXxPAPem4LggnMmje2M5z_ZNvRg&s',
//             title: ''
//         };
//     }

//     handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value } as unknown as Pick<CourseInformationState, keyof CourseInformationState>);
//     };

//     handleSelectChange = (e: SelectChangeEvent<string>) => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value } as unknown as Pick<CourseInformationState, keyof CourseInformationState>);
//     };

//     toggleActive = () => {
//         this.setState((prevState) => ({ active: !prevState.active }));
//     };

//     handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             const file = e.target.files[0];
//             this.setState({ media: URL.createObjectURL(file) });
//         }
//     };

//     render() {
//         const {
//             courseName,
//             duration,
//             leaderboardPoints,
//             category,
//             level,
//             productType,
//             language,
//             certificate,
//             description,
//             informationAtCourseEnd,
//             active,
//             media,
//             title } = this.state;
//         const { handleAddData, AllData, handleAddLesson, LessonData } = this.props;

//         return (
//             <>
//                 {/* <Box sx={{ width: 'full', height: 'fit', display: 'flex', gap: '3rem' }}>
//                     <SideNav /> */}
//                 <Box p={2} display="flex" flexDirection="column" width="full">
//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                         }}
//                     >
//                         <Typography variant="h6">Course Information</Typography>
//                         <Stack
//                             direction="row"
//                             spacing={2}
//                             alignItems="center"
//                             divider={<Divider orientation="vertical" flexItem />}
//                         >
//                             <Typography alignItems="center">
//                                 <StarBorderOutlinedIcon />
//                                 {leaderboardPoints} pts
//                             </Typography>
//                             <Typography>
//                                 <TimerOutlinedIcon />
//                                 {duration}
//                             </Typography>
//                             <Typography>
//                                 Active
//                                 <Switch checked={active} onChange={this.toggleActive} />
//                             </Typography>
//                         </Stack>
//                     </Box>
//                     <Divider />
//                     <Box display='flex' width='full' gap='2rem'>
//                         <Box>
//                             <TextField
//                                 label="Course Name"
//                                 name="courseName"
//                                 value={courseName}
//                                 onChange={this.handleInputChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                             <Box display='flex'>
//                                 <TextField
//                                     label="Duration"
//                                     name="duration"
//                                     value={duration}
//                                     onChange={this.handleInputChange}
//                                     fullWidth
//                                     margin="normal"
//                                 />&nbsp;
//                                 <TextField
//                                     label="Leaderboard Points"
//                                     name="leaderboardPoints"
//                                     type="number"
//                                     value={leaderboardPoints}
//                                     onChange={this.handleInputChange}
//                                     fullWidth
//                                     margin="normal"
//                                 />
//                             </Box>
//                             <Box display='flex'>
//                                 <FormControl fullWidth margin="normal">
//                                     <InputLabel>Category</InputLabel>
//                                     <Select
//                                         label="Category"
//                                         name="category"
//                                         value={category}
//                                         onChange={this.handleSelectChange}
//                                     >
//                                         <MenuItem value="Wine">Wine</MenuItem>
//                                     </Select>
//                                 </FormControl> &nbsp;
//                                 <FormControl fullWidth margin="normal">
//                                     <InputLabel>Level</InputLabel>
//                                     <Select
//                                         label="Level"
//                                         name="level"
//                                         value={level}
//                                         onChange={this.handleSelectChange}
//                                     >
//                                         <MenuItem value="Intermediate">Intermediate</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </Box>
//                             <Box display='flex'>
//                                 <FormControl fullWidth margin="normal">
//                                     <InputLabel>Product Type</InputLabel>
//                                     <Select
//                                         label="Product Type"
//                                         name="productType"
//                                         value={productType}
//                                         onChange={this.handleSelectChange}
//                                     >
//                                         <MenuItem value="Free">Free</MenuItem>
//                                     </Select>
//                                 </FormControl>&nbsp;
//                                 <FormControl fullWidth margin="normal">
//                                     <InputLabel>Language</InputLabel>
//                                     <Select
//                                         label="Language"
//                                         name="language"
//                                         value={language}
//                                         onChange={this.handleSelectChange}
//                                     >
//                                         <MenuItem value="English">English</MenuItem>
//                                         <MenuItem value="Hindi">Hindi</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </Box>
//                             <FormControl fullWidth margin="normal">
//                                 <InputLabel>Certificate</InputLabel>
//                                 <Select
//                                     label="Certificate"
//                                     name="certificate"
//                                     value={certificate}
//                                     onChange={this.handleSelectChange}
//                                 >
//                                     <MenuItem value="WSET">WSET</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Box>
//                         <Box width="50%">
//                             <Box sx={{ display: 'flex' }}>
//                                 <Grid container spacing={2} style={{ margin: 'normal', display: 'flex' }}>
//                                     <Grid item>
//                                         <CardMedia
//                                             component="img"
//                                             height="140"
//                                             image={media}
//                                             alt="Media"
//                                         />
//                                     </Grid>
//                                     <Grid item>
//                                         <Typography sx={{ fontSize: '1.5rem', fontWeight: 'body2' }}>Overview picture</Typography>
//                                         <Button variant="contained" component="label" startIcon={<AddPhotoAlternateIcon />}>
//                                             Choose File
//                                             <input type="file" hidden onChange={this.handleFileChange} />
//                                         </Button>
//                                     </Grid>
//                                 </Grid>
//                             </Box>
//                             <TextField
//                                 label="Description"
//                                 name="description"
//                                 value={description}
//                                 onChange={this.handleInputChange}
//                                 fullWidth
//                                 margin="normal"
//                                 multiline
//                                 rows={3}
//                             />
//                             <TextField
//                                 label="Information At Course End"
//                                 name="informationAtCourseEnd"
//                                 value={informationAtCourseEnd}
//                                 onChange={this.handleInputChange}
//                                 fullWidth
//                                 margin="normal"
//                                 multiline
//                                 rows={3}
//                             />
//                         </Box>
//                     </Box>

//               {
//                         AllData.map((data, index) => {
//                             return <Box> <ThemeComponent index={index} />
//                             </Box>
//                         })
//                     }
                    
//                     {
//                         LessonData.map((Lesson, index) => {
//                             return <LessonComponent index={index} />
//                         })
//                     }

//                     <Stack direction="row" spacing={2} marginLeft={5} marginTop={2}>
//                         <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddData}>
//                             New Theme
//                         </Button>
//                         <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} >
//                             New Mock
//                         </Button>

//                     </Stack>
//                     <Stack direction="row" spacing={2} marginLeft={5} marginTop={2}>
//                         <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddLesson}>Add Lesson</Button>
//                         <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>Add Quiz</Button>
//                         <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>Add Flash Card</Button>
//                     </Stack>
//                 </Box>
//                 {/* </Box> */}

//             </>
//         );
//     }
// }

// export default CourseInformation;


// {
//     AllData.map((data, index) => {
//         return <Box>
//           <Box>  <ThemeComponent index={index} />
//         </Box>
//     {/* // })} */}

// {
//     LessonData.map((Lesson, index) => {
//         return <Box>  <LessonComponent index={index} />
//         </Box>

//     })

// }
// </Box> })}



// import React, { Component, ChangeEvent } from 'react';
// import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Switch, Typography, Box, SelectChangeEvent, Grid, CardMedia, Stack, Divider } from '@mui/material';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import ThemeComponent from '../Themes/ThemeComponent';
// import LessonComponent from '../Lesson/LessonComponent';

// interface CourseInformationState {
//     courseName: string;
//     duration: string;
//     leaderboardPoints: number;
//     category: string;
//     level: string;
//     productType: string;
//     language: string;
//     certificate: string;
//     description: string;
//     informationAtCourseEnd: string;
//     active: boolean;
//     media: string;
//     title: string;
// }

// interface Props {
//     handleAddData: () => void;
//     AllData: Data[];
//     handleAddLesson: () => void;
//     LessonData: Lesson[];
//     handleDelete: (index: number, type: 'theme' | 'lesson') => void;
// }

// interface Data {
//     name: string;
// }

// interface Lesson {
//     name: string;
// }

// class CourseInformation extends Component<Props, CourseInformationState> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             courseName: 'How the wine is done?',
//             duration: '24h 30m',
//             leaderboardPoints: 10,
//             category: 'Wine',
//             level: 'Intermediate',
//             productType: 'Free',
//             language: 'English',
//             certificate: 'WSET',
//             description: 'Completely synthesize customized expertise before open-source solutions. Competently productive bricks-and-clicks processes with principle-centered.',
//             informationAtCourseEnd: 'Dynamically facilitate integrated potentialities rather than dynamic information. Assertively transition adaptive benefits.',
//             active: true,
//             media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlomRxuD2hXxPAPem4LggnMmje2M5z_ZNvRg&s',
//             title: ''
//         };
//     }

//     handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value } as unknown as Pick<CourseInformationState, keyof CourseInformationState>);
//     };

//     handleSelectChange = (e: SelectChangeEvent<string>) => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value } as unknown as Pick<CourseInformationState, keyof CourseInformationState>);
//     };

//     toggleActive = () => {
//         this.setState((prevState) => ({ active: !prevState.active }));
//     };

//     handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             const file = e.target.files[0];
//             this.setState({ media: URL.createObjectURL(file) });
//         }
//     };

//     render() {
//         const {
//             courseName,
//             duration,
//             leaderboardPoints,
//             category,
//             level,
//             productType,
//             language,
//             certificate,
//             description,
//             informationAtCourseEnd,
//             active,
//             media,
//             title
//         } = this.state;

//         const { handleAddData, AllData, handleAddLesson, LessonData, handleDelete } = this.props;

//         return (
//             <Box p={2} display="flex" flexDirection="column" width="full">
//                 <Box
//                     sx={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Typography variant="h6">Course Information</Typography>
//                     <Stack
//                         direction="row"
//                         spacing={2}
//                         alignItems="center"
//                         divider={<Divider orientation="vertical" flexItem />}
//                     >
//                         <Typography alignItems="center">
//                             <StarBorderOutlinedIcon />
//                             {leaderboardPoints} pts
//                         </Typography>
//                         <Typography>
//                             <TimerOutlinedIcon />
//                             {duration}
//                         </Typography>
//                         <Typography>
//                             Active
//                             <Switch checked={active} onChange={this.toggleActive} />
//                         </Typography>
//                     </Stack>
//                 </Box>
//                 <Divider />
//                 <Box display='flex' width='full' gap='2rem'>
//                     <Box>
//                         <TextField
//                             label="Course Name"
//                             name="courseName"
//                             value={courseName}
//                             onChange={this.handleInputChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <Box display='flex'>
//                             <TextField
//                                 label="Duration"
//                                 name="duration"
//                                 value={duration}
//                                 onChange={this.handleInputChange}
//                                 fullWidth
//                                 margin="normal"
//                             />&nbsp;
//                             <TextField
//                                 label="Leaderboard Points"
//                                 name="leaderboardPoints"
//                                 type="number"
//                                 value={leaderboardPoints}
//                                 onChange={this.handleInputChange}
//                                 fullWidth
//                                 margin="normal"
//                             />
//                         </Box>
//                         <Box display='flex'>
//                             <FormControl fullWidth margin="normal">
//                                 <InputLabel>Category</InputLabel>
//                                 <Select
//                                     label="Category"
//                                     name="category"
//                                     value={category}
//                                     onChange={this.handleSelectChange}
//                                 >
//                                     <MenuItem value="Wine">Wine</MenuItem>
//                                 </Select>
//                             </FormControl> &nbsp;
//                             <FormControl fullWidth margin="normal">
//                                 <InputLabel>Level</InputLabel>
//                                 <Select
//                                     label="Level"
//                                     name="level"
//                                     value={level}
//                                     onChange={this.handleSelectChange}
//                                 >
//                                     <MenuItem value="Intermediate">Intermediate</MenuItem>
//                                 </Select>
//                                 </FormControl>
//                             </Box>
//                         <Box display='flex'>
//                             <FormControl fullWidth margin="normal">
//                                 <InputLabel>Product Type</InputLabel>
//                                 <Select
//                                     label="Product Type"
//                                     name="productType"
//                                     value={productType}
//                                     onChange={this.handleSelectChange}
//                                 >
//                                     <MenuItem value="Free">Free</MenuItem>
//                                 </Select>
//                             </FormControl>&nbsp;
//                             <FormControl fullWidth margin="normal">
//                                 <InputLabel>Language</InputLabel>
//                                 <Select
//                                     label="Language"
//                                     name="language"
//                                     value={language}
//                                     onChange={this.handleSelectChange}
//                                 >
//                                     <MenuItem value="English">English</MenuItem>
//                                     <MenuItem value="Hindi">Hindi</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Box>
//                         <FormControl fullWidth margin="normal">
//                             <InputLabel>Certificate</InputLabel>
//                             <Select
//                                 label="Certificate"
//                                 name="certificate"
//                                 value={certificate}
//                                 onChange={this.handleSelectChange}
//                             >
//                                 <MenuItem value="WSET">WSET</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Box>
//                     <Box>
//                         <TextField
//                             label="Description"
//                             name="description"
//                             value={description}
//                             onChange={this.handleInputChange}
//                             fullWidth
//                             multiline
//                             rows={4}
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Information at Course End"
//                             name="informationAtCourseEnd"
//                             value={informationAtCourseEnd}
//                             onChange={this.handleInputChange}
//                             fullWidth
//                             multiline
//                             rows={4}
//                             margin="normal"
//                         />
//                     </Box>
//                 </Box>
//                 <Box display="flex" alignItems="center" mt={2}>
//                     <Button
//                         variant="contained"
//                         component="label"
//                         startIcon={<AddPhotoAlternateIcon />}
//                     >
//                         Upload Media
//                         <input
//                             type="file"
//                             hidden
//                             accept="image/*"
//                             onChange={this.handleFileChange}
//                         />
//                     </Button>
//                     {media && (
//                         <CardMedia
//                             component="img"
//                             image={media}
//                             alt="Course Media"
//                             sx={{ width: 100, height: 100, marginLeft: 2 }}
//                         />
//                     )}
//                 </Box>
//                 <Box display="flex" alignItems="center" mt={2}>
//                     <TextField
//                         label="Title"
//                         name="title"
//                         value={title}
//                         onChange={this.handleInputChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                     <Button
//                         variant="contained"
//                         startIcon={<AddCircleOutlineOutlinedIcon />}
//                         onClick={handleAddLesson}
//                         sx={{ height: 56, marginLeft: 2 }}
//                     >
//                         Add Lesson
//                     </Button>
//                 </Box>
//                 <Box mt={4}>
//                     <Typography variant="h6">Themes</Typography>
//                     {AllData.map((theme, index) => (
//                         <ThemeComponent
//                             key={index}
//                             name={theme.name}
//                             onDelete={() => handleDelete(index, 'theme')}
//                         />
//                     ))}
//                 </Box>
//                 <Box mt={4}>
//                     <Typography variant="h6">Lessons</Typography>
//                     {LessonData.map((lesson, index) => (
//                         <LessonComponent
//                             key={index}
//                             name={lesson.name}
//                             onDelete={() => handleDelete(index, 'lesson')}
//                         />
//                     ))}
//                 </Box>
//             </Box>
//         );
//     }
// }

// export default CourseInformation;
