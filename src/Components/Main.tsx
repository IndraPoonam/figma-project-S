
import React, { Component } from 'react'
import { Box } from '@mui/material'
import SideNav from './SideNav/SideNav';
import CourseInformation from './CourseDetails/CourseInformation';
interface State {
    DataFirst: Data,
    AllData: Data[],
    LessonData: Lesson[],
    Lesson: Lesson

}

interface Data {
    name: string
  
}
interface Lesson {
    name: string
}
export default class Main extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
                   DataFirst: {
                           name: '',
                    },
                         LessonData: [],
                         AllData: [],
                         Lesson: {
                             name: ''
                        },
             
                    }
              }
    handleAddData = () => {
        const { AllData, DataFirst } = this.state
        this.setState({ AllData: [...AllData, DataFirst] })
       
    }
      handleAddLesson =() =>{
        const{LessonData,Lesson}=this.state
        this.setState({LessonData:[...LessonData,Lesson]})
     
          }
          handleDelete = () => {
            console.log("Delete lesson");                          
        }

     
    render() {
        return (
            <Box display='flex' gap="8rem">
                <SideNav handleAddData={this.handleAddData} AllData={this.state.AllData} />
                <CourseInformation
                    handleAddData={this.handleAddData}
                    handleAddLesson={this.handleAddLesson}
                    AllData={this.state.AllData}
                    LessonData={this.state.LessonData}
                    // handleDelete={this.handleDelete}
               
                    />
            </Box>
        )
    }
}
