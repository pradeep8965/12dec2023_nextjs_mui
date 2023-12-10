'use client'
import { LockOutlined } from '@mui/icons-material';
//1. Import area 
import { Avatar, Box, Container, ThemeProvider, Typography, createTheme } from '@mui/material'

let x = createTheme()
//2. Function Defination area 
function Home() {
  return (
   <ThemeProvider theme={x}>
      <Container>
        <Box>
          <Avatar sx={{bgcolor:'secondary.main', m: 1}}>
            <LockOutlined />
          </Avatar>
          <Typography component= "h1" variant= "h1" sx={{color:'red'}}>pradeep 1</Typography>
          <div style={{color:'green'}}>pradeep2</div>
          <Typography style={{color:'bule'}}>pradeep3</Typography>
        </Box>
      </Container>
   </ThemeProvider>
  )
}


//3. Export Area 
export default Home;