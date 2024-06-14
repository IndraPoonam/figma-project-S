
import React, { Component } from 'react'
import { Box } from '@mui/material'
import SideNav from './SideNav/SideNav';
import CourseInformation from './CourseDetails/CourseInformation';
interface State {
    DataFirst: ThemeData,
    AllData: ThemeData[],
    LessonData: Lesson[],
    Lesson: Lesson

}

interface ThemeData {
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
    handleAddLesson = () => {
        const { LessonData, Lesson } = this.state
        this.setState({ LessonData: [...LessonData, Lesson] })

    }
    // handleDelete = () => {
    //     console.log("Delete lesson");
    // }


    render() {
        return (
          
            <Box display='flex' gap="2rem"  sx={{bgcolor:'#f6f6f6',padding:'10px'}}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <SideNav handleAddData={this.handleAddData} AllData={this.state.AllData} />
            </Box>
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


// import React, { Component } from 'react'
// import { Box } from '@mui/material'
// import SideNav from './SideNav/SideNav';
// import CourseInformation from './CourseDetails/CourseInformation';
// interface State {
//     DataFirst: ThemeData,
//     AllData: ThemeData[],
//     LessonData: Lesson[],
//     Lesson: Lesson

// }

// // interface ThemeData {
// //     name: string

// // }
// // interface Lesson {
// //     name: string
// // }

// interface State {
//     course:CourseType;
//     course_themes:ThemeData[];
//     theme:ThemeData;
//     lesson:Lesson;
//   }
  
//   interface Lesson {
//     title:string;
//     leaderboard_points:number;
//     product_type:number;
//     image_url:string;
//     description:string;
//   }
  
//   interface ThemeData {
//     title:string;
//     leaderboard_points:number;
//     product_type:number;
//     image_url:string;
//     lessons:Lesson[];
//   }
  
//   interface CourseType {
//     name:string;
//     duration:string;
//     leaderboard_points:number;
//     category:number;
//     level:number;
//     product_type:number;
//     language:number;
//     certificate:number;
//     description:string;
//     image_url:string;
//   }
  
// export default class Main extends Component<{}, State> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             DataFirst: {
//                 name: '',
//             },
//             LessonData: [],
//             AllData: [],
//             Lesson: {
//                 name: ''
//             },

//         }
//     }
//     handleAddData = () => {
//         const { AllData, DataFirst } = this.state
//         this.setState({ AllData: [...AllData, DataFirst] })

//     }
//     handleAddLesson = () => {
//         const { LessonData, Lesson } = this.state
//         this.setState({ LessonData: [...LessonData, Lesson] })

//     }
//     // handleDelete = () => {
//     //     console.log("Delete lesson");
//     // }


//     render() {
//         return (
//             <Box display='flex' gap="8rem">
//                 <SideNav handleAddData={this.handleAddData} AllData={this.state.AllData} />
//                 <CourseInformation
//                     handleAddData={this.handleAddData}
//                     handleAddLesson={this.handleAddLesson}
//                     AllData={this.state.AllData}
//                     LessonData={this.state.LessonData}
//                 // handleDelete={this.handleDelete}

//                 />
//             </Box>
//         )
//     }
// }
