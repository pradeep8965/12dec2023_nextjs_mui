'use client'
import { LockOutlined } from '@mui/icons-material';
//1. Import area 
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'

let x = createTheme()
//2. Function Defination area 
function Home() {
  return (
   <ThemeProvider theme={x}>
      <Container component="main" maxWidth="xs">
        <Box sx= {{
          marginTop: 8,
          display:"flex",
          flexDirection:"column",
          alignItems: "center"
        }}>
          <Avatar sx={{bgcolor:'secondary.main', m: 1}}>
            <LockOutlined />
          </Avatar>
          <Typography component= "h1" variant= "h4" sx={{color:'black'}}>Sign In</Typography>
          <Box component="form" sx={{mt:1}}>
            <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            />
             <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label='Password'
            name='password'
            autoComplete='Current-Password'
            />
            <FormControlLabel 
            control={<Checkbox value="remember" color='primary'/>} 
            label= "Remember me" 
            />
            <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt:3, mb:2}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
   </ThemeProvider>
  )
}


//3. Export Area 
export default Home;