import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/TopNav/TopNav';
import AdminCourse from './Components/TopNav/AdminCourse';
import CourseInformation from './Components/CourseDetails/CourseInformation';
import LessonComponent from './Components/Lesson/LessonComponent';
import ThemeComponent from './Components/Themes/ThemeComponent';
import { Divider } from '@mui/material';
import SideNav from './Components/SideNav/SideNav';
import Main from './Components/Main';

function App() {
  return (
    <div >

      {/* <Navbar/> */}
      {/* <AdminCourse/> */}

      <Main />


    </div>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/TopNav/TopNav';
// import AdminCourse from './Components/TopNav/AdminCourse';
// import CourseInformation from './Components/CourseDetails/CourseInformation';

// import SideNav from './Components/SideNav/SideNav';
// import ThemeDetailsWrapper from './Components/CourseDetails/ThemeDetailsWrapper';
// import LessonDetailsWrapper from './Components/CourseDetails/LessonDetailsWrapper';
// import ExamDetailsWrapper from './Components/CourseDetails/ExamDetailsWrapper';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <div style={{ display: 'flex' }}>
//           <SideNav />
//           {/* <CourseInformation/> */}
//           <Routes>
//             <Route path="/admin" element={<AdminCourse />} />
//             <Route path="/course" element={<CourseInformation />} />
//             <Route path="/themes/:themeTitle/:lessonTitle" element={<LessonDetailsWrapper />} />
//             <Route path="/themes/:themeTitle" element={<ThemeDetailsWrapper />} />
//             <Route path="/exams/:examTitle" element={<ExamDetailsWrapper />} />
//             <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

