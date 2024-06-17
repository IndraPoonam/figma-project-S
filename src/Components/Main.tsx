import React, { Component } from 'react';
import { Box } from '@mui/material';
import SideNav from './SideNav/SideNav';
import CourseInformation from './CourseDetails/CourseInformation';

interface State {
    DataTheme: ThemeData;
    AllDataTheme: ThemeData[];
    Lesson: Lesson;
}

interface ThemeData {
    name: string;
    LessonData: Lesson[];
}

interface Lesson {
    name: string;
}

export default class Main extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            DataTheme: {
                name: '',
                LessonData: [],
            },
            AllDataTheme: [],
           
            Lesson: {
                name: ''
            },
        }
    }
    
    handleAddData = () => {
        const { AllDataTheme, DataTheme } = this.state;
        const newData = { ...DataTheme, index: AllDataTheme.length };
        this.setState({ AllDataTheme: [...AllDataTheme, newData] });
    }

    handleAddLesson = (theme_id:number) => {
        const {AllDataTheme, Lesson} = this.state

        const updatedCourseThemes = [...AllDataTheme];
        const updatedTheme = { ...updatedCourseThemes[theme_id] };
        updatedTheme.LessonData = [...updatedTheme.LessonData, Lesson];
        updatedCourseThemes[theme_id] = updatedTheme;
        this.setState({ AllDataTheme: updatedCourseThemes });
    }
   
    handleDeleteTheme = (id: number) => {
        const { AllDataTheme } = this.state;
        const ThemeDelete = AllDataTheme.filter((item,index) => index !== id);
        this.setState({ AllDataTheme: [...ThemeDelete] });
    }

    render() {
        return (
            <Box display='flex' gap="2rem" sx={{ bgcolor: '#f6f6f6', padding: '10px' }}>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <SideNav handleAddData={this.handleAddData} AllData={this.state.AllDataTheme} />
                </Box>
                <CourseInformation
                    handleAddData={this.handleAddData}
                    handleAddLesson={this.handleAddLesson}
                    AllDataTheme={this.state.AllDataTheme}
                    // LessonData={this.state.LessonData}
                    handleDeleteTheme={this.handleDeleteTheme}
                />
            </Box>
        )
    }
}
