
import { BottomNavigation, Box, Button, Stack, Typography } from '@mui/material';
import { Component } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


interface Props {
  handleAddData: () => void;
  AllData: Data[]
}
interface Data {
  name: string
}

interface Course {
  id: number;
  name: string;
  info: string;
}

interface SideBarState {
  Theme2: Course[];
  openSections: {
    [key: string]: boolean;
  };
}
const Theme2 = [
  {
    id: 1,
    name: "Lesson 1",
    info: 'Preparing the Barrel'
  },
  {
    id: 2,
    name: "Lesson 2",
    info: 'How to Seal the barrel'
  },
  {
    id: 3,
    name: "Lesson3",
    info: 'Where to keep the wine'
  },
  {
    id: 4,
    name: "Flash Cards",
    info: 'Review the FlashCards'
  },
  {
    id: 5,
    name: "Quiz 1",
    info: 'Take Quiz'
  }
];

export default class SideNav extends Component<Props, SideBarState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Theme2: Theme2,
      openSections: {
        Theme1: false,
        Theme2: false,
        Theme3: false,
        MockExam1: false
      }
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
    const { handleAddData, AllData } = this.props
    // console.log(AllData)

    return (
      <Box sx={{ p: 3, borderRight: '1px solid #ddd', width: '14vw', height: '74vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f7f7f7', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
        <Box sx={{ textAlign: 'left', flex: 1 }}>
          <Typography variant='h5' sx={{ marginBottom: '20px' }}>Courses</Typography>
          <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>How the wine is Done</Typography>

          <Box sx={{ paddingLeft: '18px' }}>
            {AllData.map((Data, index) => (
              <>
                <Typography onClick={() => this.handleBox('Theme1')} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>Theme {index + 1}</Typography>
                <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>Planting A Grapes</Typography>
                {openSections.Theme1 && (
                  <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                    <Stack spacing={1}>
                      <Typography variant='h6'>Lesson 1</Typography>
                      <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>Introduction to Planting</Typography>
                    </Stack>
                  </Box>
                )}
              </>
            ))}

          </Box>
        </Box>
   <Box display="flex" gap="1rem">
            <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddData}>
                            New Theme
                        </Button>
          <Button  size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>
          New Mock Exam</Button>
          
          </Box>
      </Box>
    );
  }
}


// import { Box, Button, Stack, Typography } from '@mui/material';
// import { Component } from 'react';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

// interface Props {
//   handleAddData: () => void;
//   AllData: Data[];
// }
// interface Data {
//   name: string;
 
// }
// interface SideBarState {
//   openSections: {
//     [key: string]: boolean;
//   };
// }

// export default class SideNav extends Component<Props, SideBarState> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       openSections: {}
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

//   // handleAddNewTheme = () => {
//   //   const newTheme: Data = {
//   //     name: `Theme ${this.props.AllData.length + 1}`,
//   //     lessons: [
//   //       { id: 1, name: "Lesson 1", info: 'New lesson' }
//   //     ]
//   //   };
//   //   this.props.handleAddData(newTheme);
//   // };

//   render() {
//     const { openSections } = this.state;
//     const { handleAddData, AllData } = this.props;

//     return (
//       <Box sx={{ p: 3, borderRight: '1px solid #ddd', width: '14vw', height: '74vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f7f7f7', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
//         <Box sx={{ textAlign: 'left', flex: 1 }}>
//           <Typography variant='h5' sx={{ marginBottom: '20px' }}>Courses</Typography>
//           <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>How the wine is Done</Typography>

//           <Box sx={{ paddingLeft: '18px' }}>
//             {AllData.map((theme, index) => (
//               // <div key={index}>
//               //   <Typography onClick={() => this.handleBox(`Theme${index + 1}`)} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>{theme.name}</Typography>
//               //   {openSections[`Theme${index + 1}`] && (
//               //     <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
//               //       <Stack spacing={1}>
//               //         {/* {theme.lessons.map((lesson) => (
//               //           <div key={lesson.id}>
//               //             <Typography variant='h6'>{lesson.name}</Typography>
//               //             <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>{lesson.info}</Typography>
//               //           </div>
//               //         ))} */}
//               //       </Stack>
//               //     </Box>
//               //   )}
//               // </div>
//               <h1>{theme.name}</h1>
//             ))}
//           </Box>
//         </Box>
//         <Box display="flex" gap="1rem">
//           <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleAddData}>
//             New Theme
//           </Button>
//           <Button size='small' variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>
//             New Mock Exam
//           </Button>
//         </Box>
//       </Box>
//     );
//   }
// }

























