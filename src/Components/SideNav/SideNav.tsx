// import { Box, Button, Stack, Typography } from '@mui/material';
// import { Component } from 'react';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


// interface Props {
//   handleAddData: () => void;
//   AllData: Data[]
// }
// interface Data {
//   name: string,
//   LessonData: Lesson[]
// }

// interface Lesson {
//   name: string;
// }

// interface Course {
//   id: number;
//   name: string;
//   info: string;
// }

// interface SideNavC {

//   openSections: {
//     [key: string]: boolean;
//   };
// }

// export default class SideNav extends Component<Props, SideNavC> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {

//       openSections: {
//         Theme1: false,
//         Theme2: false,
//         Theme3: false,
//         MockExam1: false
//       }
//     };
//   }

//   handleBox = (section: string) => {
//     this.setState((prevState) => ({
//       openSections: {
//         ...prevState.openSections,
//         [section]: !prevState.openSections[section]
//       }
//     }));
//   };

//   render() {
//     const { openSections } = this.state;
//     const { handleAddData, AllData } = this.props
//     // console.log(AllData)

//     return (
//       <Box sx={{ p: 3, borderRight: '1px solid #ddd', width: '22vw', height: 'fit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f7f7f7', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
//         <Box sx={{ textAlign: 'left', flex: 1 }}>
//           <Typography variant='h5' sx={{ marginBottom: '20px' }}>Courses</Typography>
//           <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>How the wine is Done</Typography>

//           <Box sx={{ paddingLeft: '18px' }}>
//             {AllData.map((Data, index) => (
//               <>
//                 <Typography onClick={() => this.handleBox('ThemeComponent')}
//                   variant='h6'
//                   sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>
//                   Theme {index + 1} 
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }}
//                   variant='body2'>Planting A Grapes
//                 </Typography>
//                 {Data.LessonData && Data.LessonData.map((lesson,lesson_index)=>{
//                   return  <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
//                   <Stack spacing={1}>
//                     <Typography variant='h6'>
//                       Lesson  {lesson_index + 1}

//                     </Typography>
//                     <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>Introduction to Planting</Typography>
//                   </Stack>
//                 </Box>
//                 })}
//               </>
//             ))}

//           </Box>
//         </Box>
//         <Stack direction="row" spacing={2} >
//           <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddData}>
//             New Theme
//           </Button>
//           <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>
//             New Mock Exam</Button>

//         </Stack>
//       </Box>
//     );
//   }
// }

///////////////////////////////theme open when touch//////////////////////////////////
import { Box, Button, Stack, Typography } from '@mui/material';
import { Component } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface Props {
  handleAddData: () => void;
  AllData: Data[];
}

interface Data {
  name: string;
  LessonData: Lesson[];
}

interface Lesson {
  name: string;
}

interface SideNavC {
  openSections: {
    [key: string]: boolean;
  };
}

export default class SideNav extends Component<Props, SideNavC> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openSections: {}
    };
  }

  handleBox = (section: string) => {
    this.setState((prevState) => ({
      openSections: {
        ...prevState.openSections,
        [section]: !prevState.openSections[section]
      }
    }));
  };

  render() {
    const { openSections } = this.state;
    const { handleAddData, AllData } = this.props;

    return (
      <Box
        sx={{
          p: 3,
          borderRight: '1px solid #ddd',
          width: '22vw',
          height: 'fit',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f7f7f7',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
        }}
      >
        <Box sx={{ textAlign: 'left', flex: 1 }}>
          <Typography variant='h5' sx={{ marginBottom: '20px' }}>
            Courses
          </Typography>
          <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>
            How the wine is Done
          </Typography>

          <Box sx={{ paddingLeft: '18px' }}>
            {AllData.map((data, index) => {
              const themeName = `Theme${index + 1}`;
              return (
                <Box key={index}>
                  <Typography
                    onClick={() => this.handleBox(themeName)}
                    variant='h6'
                    sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}
                  >
                    {themeName}
                  </Typography>
                  {openSections[themeName] && (
                    <Box>
                      <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>
                        Planting A Grapes
                      </Typography>
                      {data.LessonData &&
                        data.LessonData.map((lesson, lessonIndex) => (
                          <Box key={lessonIndex} sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                            <Stack spacing={1}>
                              <Typography variant='h6'>Lesson {lessonIndex + 1}</Typography>
                              <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>
                                {lesson.name}
                              </Typography>
                            </Stack>
                          </Box>
                        ))}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Stack direction='row' spacing={2}>
          <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddData}>
            New Theme
          </Button>
          <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>
            New Mock Exam
          </Button>
        </Stack>
      </Box>
    );
  }
}
