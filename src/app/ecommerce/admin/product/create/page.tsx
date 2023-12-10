'use client'
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'


let ThemeObject = createTheme()
export default function page() {
  return (
    <ThemeProvider theme={ThemeObject}>
        <Container>
            <CssBaseline/>
                <Box>
                pradeep
                </Box>
             </Container>
    </ThemeProvider>
    
  )
}

