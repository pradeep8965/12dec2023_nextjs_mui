'use client'
import { CameraAltSharp, CameraswitchOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
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
        </AppBar>*/
        <Container component='main' >
            <Box
                sx={{
                    bgcolor:'backgroud',
                    pt: 12,
                    pb: 6,
                }}>
                <Container maxWidth='sm'>
                    <Typography component='h1' variant='h2'
                        gutterBottom
                        align='center'
                        color='text.primary'
                        sx={{mb:1}}
                        fontSize={70}
                        fontFamily={{}}
                        fontStyle={{}}
                        fontWeight={{}}
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
                        sx={{ pt:8 }}
                        direction="row"
                        spacing={10}
                        justifyContent="center"
                     >
                        <Button  variant="outlined">Nature's Miracle</Button>
                        <Button  variant="contained">About Adventures </Button>
                    </Stack>
                </Container>
            </Box>
        </Container>
        <Container maxWidth='md' >
           <Grid container spacing='20'>
                <Grid item xs={4} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://media.istockphoto.com/id/622013488/photo/chinese-water-dragon.jpg?s=612x612&w=0&k=20&c=AXYA9calwRrnu3ouzU57Ub5xYaCxFxWDE7zYNsTKKAg="
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color='success'>Share</Button>
                        <Button variant="outlined" size="small">Learn More</Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/622013488/photo/chinese-water-dragon.jpg?s=612x612&w=0&k=20&c=AXYA9calwRrnu3ouzU57Ub5xYaCxFxWDE7zYNsTKKAg="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color='success'>Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/622013488/photo/chinese-water-dragon.jpg?s=612x612&w=0&k=20&c=AXYA9calwRrnu3ouzU57Ub5xYaCxFxWDE7zYNsTKKAg="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color='success'>Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSXQJEDiFXOSPnyoTjjQUpU3raHmZp60L0A&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Snake
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Snakes have long forked tongue which is used to 
                            detect food in nearby place or to 
                            stay away from their enemies.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="inherit">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSXQJEDiFXOSPnyoTjjQUpU3raHmZp60L0A&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Snake
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Snakes have long forked tongue which is used to 
                            detect food in nearby place or to 
                            stay away from their enemies.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="inherit">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>    
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSXQJEDiFXOSPnyoTjjQUpU3raHmZp60L0A&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Snake
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Snakes have long forked tongue which is used to 
                            detect food in nearby place or to 
                            stay away from their enemies.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="inherit">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://c4.wallpaperflare.com/wallpaper/121/838/467/art-artistic-graphic-design-wallpaper-preview.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Jaguar
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Jaguars are the largest of South America's
                            big cats and the third largest 
                            cats in the world.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="warning">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://c4.wallpaperflare.com/wallpaper/121/838/467/art-artistic-graphic-design-wallpaper-preview.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Jaguar
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Jaguars are the largest of South America's 
                            big cats and the third largest 
                            cats in the world.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="warning">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://c4.wallpaperflare.com/wallpaper/121/838/467/art-artistic-graphic-design-wallpaper-preview.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Jaguar
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Jaguars are the largest of South America's 
                            big cats and the third largest 
                            cats in the world.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="warning">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYXftLyfvqzbNe9uIiUdDQ0ixuGP6Pi8H1A&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Eagle
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            The Eagle has a wide range that spans from Alaska in the west to Labrador Island in the east, from northern Canada to Northern Mexico.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYXftLyfvqzbNe9uIiUdDQ0ixuGP6Pi8H1A&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Eagle
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            The Eagle has a wide range that spans from Alaska in the west to Labrador Island in the east, from northern Canada to Northern Mexico.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYXftLyfvqzbNe9uIiUdDQ0ixuGP6Pi8H1A&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontWeight="800">
                            Eagle
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            The Eagle has a wide range that spans from Alaska in the west to Labrador Island in the east, from northern Canada to Northern Mexico.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="primary">Share</Button>
                            <Button variant="outlined" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                
           </Grid>
        </Container>
    </ThemeProvider>
  )
}
