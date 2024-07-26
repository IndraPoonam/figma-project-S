// import React, { Component } from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import { styled } from '@mui/material/styles';
// import image from './Assets/view_services.png';
// import banner from './Assets/image_banner-01.jpg.png';

// const buttonStyle = {
//     ':hover': { backgroundColor: '#12629A' },
//     ':active': { backgroundColor: '#12629A' },
// };

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//     position: 'static',
// }));

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'center',
//     textAlign: 'center',
// }));

// const StyledBannerBox = styled(Box)(({ theme }) => ({
//     backgroundImage: `url(${banner})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '746px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
// }));

// const OverlayBox = styled(Box)(({ theme }) => ({
//     backgroundColor: 'rgba(9, 21, 33, 0.75)',
//     textAlign: 'center',
//     width: '450px',
//     height: '201px',
//     marginTop: '6rem',
//     alignItems: 'center',
// }));

// const GetStartedButton = styled(Button)(({ theme }) => ({
//     marginTop: '2rem',
//     color: 'white',
//     width: '200px',
//     height: '55px',
//     border: '2px solid #FFFFFF',
//     gap: '4px',
// }));

// const RequestServiceButton = styled(Button)(({ theme }) => ({
//     marginTop: '2rem',
//     marginLeft: '2rem',
//     color: 'white',
//     backgroundColor: '#3FB1CE',
//     width: '200px',
//     height: '55px',
//     fontSize: '15px',
// }));

// const StyledImage = styled('img')(({ theme }) => ({
//     width: '100%',
//     height: '552.59px',
// }));

// class HomePage extends Component {
//     render() {
//         return (
//             <>
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         overflow: 'hidden',
//                     }}
//                 >
//                     <StyledAppBar sx={{ backgroundColor: '#2D3E50' }}>
//                         <StyledToolbar>
//                             <Typography variant="h6">
//                                 THE METER READING SERVICES
//                             </Typography>
//                         </StyledToolbar>
//                     </StyledAppBar>
//                     <StyledAppBar sx={{ background: '#3FB1CE' }}>
//                         <StyledToolbar>
//                             <Box>
//                                 <Button color="inherit" sx={buttonStyle}>Home</Button>
//                                 <Button color="inherit" sx={buttonStyle}>About Us</Button>
//                                 <Button color="inherit" sx={buttonStyle}>Services</Button>
//                                 <Button color="inherit" sx={buttonStyle}>Testimonials</Button>
//                                 <Button color="inherit" sx={buttonStyle}>Contact</Button>
//                                 <Button color="inherit" sx={buttonStyle}>Request Service</Button>
//                                 <Button color="inherit" sx={buttonStyle}>Log In</Button>
//                             </Box>
//                         </StyledToolbar>
//                     </StyledAppBar>
//                 </Box>
//                 <StyledBannerBox>
//                     <OverlayBox>
//                         <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '42px', marginTop: '2rem' }}>
//                             GET STARTED NOW
//                         </Typography>
//                         <GetStartedButton variant="outlined">
//                             <LocalPhoneIcon /> 718-756-4123
//                         </GetStartedButton>
//                         <RequestServiceButton variant="contained">
//                             Request Service
//                         </RequestServiceButton>
//                     </OverlayBox>
//                 </StyledBannerBox>
//                 <StyledImage
//                     src={image}
//                     alt="Client Testimonials"
//                 />
//             </>
//         );
//     }
// }

// export default HomePage;







import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Paper, Container, Link, } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import image from './Assets/view_services.png';
import banner from './Assets/image_banner-01.jpg.png';
import machine from './Assets/image_main.png';
import logo from './Assets/image_logo.png'
// const buttonStyle = {
//   ':hover': { backgroundColor: '#12629A' },
//   ':active': { backgroundColor: '#12629A' },
// };
class HomePage extends Component {
  render() {
    return (
      <>

        {/* <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
          }}>
          <AppBar position="static" sx={{ backgroundColor: '#2D3E50', }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                THE METER READING SERVICES
              </Typography>
            </Toolbar>
          </AppBar>
          <AppBar position="static" sx={{ background: '#3FB1CE' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
              <Box >
                <Button color="inherit" sx={buttonStyle}>Home</Button>
                <Button color="inherit" sx={buttonStyle}>About Us</Button>
                <Button color="inherit" sx={buttonStyle}>Services</Button>
                <Button color="inherit" sx={buttonStyle}>Testimonials</Button>
                <Button color="inherit" sx={buttonStyle}>Contact</Button>
                <Button color="inherit" sx={buttonStyle}>
                  Request Service
                </Button>
                <Button color="inherit" sx={buttonStyle}>Log In</Button>
              </Box>
            </Toolbar>
          </AppBar>

        </Box> */}
        <Box
          sx={{

            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '746px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Box sx={{
            backgroundColor: 'rgba(9, 21, 33, 0.75)',
            textAlign: 'center',
            width: '450px',
            height: '201px',
            mt: '6rem',

            alignItems: 'center',
          }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '42px', mt: '2rem' }}>GET STARTED NOW</Typography>
            <Button variant="outlined" sx={{
              mt: 2,
              color: 'white',
              width: '200px',
              height: '55px',
              border: '2px solid #FFFFFF',
              //   padding: '40px 20px',
              gap: '4px'
            }}>
              < LocalPhoneIcon /> 718-756-4123
            </Button>
            <Button variant='contained' sx={{
              mt: 2, ml: 2, color: 'white', background: '#3FB1CE',
              width: '200px',
              height: '55px',
              fontSize: '15px'
            }}>
              Request Service
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          src={image}
          alt="Client Testimonials"
          sx={{ width: '100%', height: '552.59px' }}
        />


        {/* /////////////////////////////////////////////////// */}
         <Box sx={{width:'100%', height:'1282.5px', border:'2px solid red',backgroundColor: '#E5F4FB',marginBottom:'2rem'}}>
        <Container
          style={{
            backgroundColor: '#E5F4FB',
            marginTop: '2rem',
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontWeight: 'bold',
              marginBottom: '20px',
              color:'#12629A'
            }}
          >
            METER READING SERVICES IN BROOKLYN, NY
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: '20px',
            }}
          >
            Utility companies come in various shapes and sizes, but they all strive for the same result - to deliver energy and water to their customers in an efficient, safe manner. That’s where our meter reading services in Brooklyn, NY and surrounding areas come in. Whether you’re a manager or a property owner, it’s essential that you always <Link href="#">receive accurate readings</Link> to ensure you or your tenants know precisely what’s due... <Link href="#">Read more</Link>
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: 'orange',
              fontWeight: 'bold',
              margin: '20px 0',
            }}
          >
            COMMITTED TO OUR CUSTOMERS
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: '20px',
            }}
          >
            At our reputable meter reading company, we aim to build synergistic relationships with our customer base because we want them to succeed through our service. Just some of the things we offer inspection reports, verifying accuracy of city bills and also meter reading services and more. We’re confident that you will find what you are looking for with our services because we stand behind our work. Feel free to browse our site to learn more about our services. If you have any questions or concerns, please don’t hesitate to contact us at any time. We look forward to hearing from you soon.
          </Typography>
          <Box
            style={{
              width:'100%',
              height:'480.49px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
              marginBottom: '20px',
              border:'3px solid green'
            }}>
         <img   
     
        style={{
          width:'454px',
          height:'480.49px',
        }}
            src={machine}
            alt="machine"
          />
</Box>

          <Typography
            variant="h5"
            align="center"
            style={{
              color: '#E5614B',
              fontWeight: 'bold',
              margin: '20px 0',
            }}
          >
            THE METER READING SERVICE
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{
              // marginBottom: '20px',
              color:'#3FB1CE',
              fontSize:'24px'
            }}
          >
            Mission Statement
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{
              marginBottom: '20px',
            }}
          >
            To provide accurate meter reading service to Building Owners, Property Management Companies and Commercial business throughout New York Metropolitan Area.
          </Typography>
       
   <Typography variant="h6" style={{ color:'#E5614B',fontWeight:'bold', marginBottom: '20px' }}>
          SOME OF OUR CUSTOMERS
        </Typography>
        <Grid container >
          <Grid item xs={12} sm={3} >
            <Box  >
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Abeco Management Corp</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Akam Living Services</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>BCB Property Management</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Charles H. Greenthal Corp</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Comjem Associates</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>First Class Management</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>George Butsikaris Realty Inc</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Gorjian Real Estate Group</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Jack Resnick & Son</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Kaufman Organization</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Lemle & Wolff, Inc</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Livingston Management</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Newmark Knight</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Orsid Realty Corporation</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>Parkoff Management Organization</Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>SL Green Realty Corp</Typography>
            </Box>
          </Grid>
        </Grid>



          <Typography
            variant="body1"
            style={{
            marginTop:'1rem',
            fontSize:'18px'
            }}
          >
            <Link href="#">Contact</Link> our meter reading company for accurate assessments and reliable customer service. Based in Brooklyn, we proudly serve property owners throughout the New York Metropolitan Area.
          </Typography>
        </Container>

  </Box>  
      </>
    );
  }
}

export default HomePage;
