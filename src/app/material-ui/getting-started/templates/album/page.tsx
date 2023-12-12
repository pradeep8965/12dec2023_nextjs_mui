'use client'
import { CameraAltSharp, CameraswitchOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, Container, CssBaseline, Stack, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React from 'react'

const themeObject = createTheme()
export default function page() {
  return (
    <ThemeProvider theme={themeObject}>
        <CssBaseline/>
        <AppBar>
            <Toolbar>
                <CameraAltSharp/>
                <Typography component="h1" variant='h5' sx={{ml:3}}  fontWeight="bold">
                Album layout
                </Typography>
            </Toolbar>
        </AppBar>
        <Container component='main'>
            <Box
                sx={{
                    bgcolor:'backgroud',
                    pt: 18,
                    pb: 6,
                }}>
                <Container maxWidth='sm'>
                    <Typography component='h1' variant='h2'
                        gutterBottom
                        align='center'
                        color='text.primary'
                     >
                        The Nature
                    </Typography>
                    <Typography component="h1" variant='h4'
                        align='center'
                        color='text.secondary'
                     >
                        "Every morning was a cheerful invitation to make my life of equal simplicity, and I may say innocence, with Nature herself." –Henry David !
                    </Typography>
                    <Stack 
                        sx={{ pt: 6 }}
                        direction="row"
                        spacing={10}
                        justifyContent="center"
                     >
                        <Button  variant="outlined">Nature's Miracle</Button>
                        <Button  variant="contained">Biking Adventures </Button>
                    </Stack>
                </Container>
            </Box>
        </Container>
    </ThemeProvider>
  )
}
