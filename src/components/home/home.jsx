import * as React from 'react';
import { Button, 
    Card,
    CardMedia, 
    CardContent, 
    Typography,
    Toolbar,
    Grid
} from "@mui/material";
import helloImg from '../../images/helloImg.jpg';
import backgroundImg from '../../images/backgroundImg.jpg';
import hobbyImg from '../../images/hobbyImg.JPG';
import eduImg from '../../images/eduImg.JPG';
import designImg from '../../images/designImg.jpg';
import SchoolIcon from '@mui/icons-material/School';
import HikingIcon from '@mui/icons-material/Hiking';
import PoolIcon from '@mui/icons-material/Pool';
import BrushIcon from '@mui/icons-material/Brush';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Home = () => {
    return (
        <div style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover'}}>
            
            <Toolbar style={{color: '#6e5b37', backgroundColor: '#edb340'}}>
                <Typography variant="h4">
                    DEMO SITE :)
                </Typography>
            </Toolbar>

            <Grid sx={{
                display: 'grid',
                gridGap: '5%',
                gridTemplateColumns: 'repeat(2, 1fr)',
                }}>

                <Card style={{width: '19rem',
                             height: '23rem',
                             backgroundColor: '#638c62',
                             marginTop: 150,
                             marginLeft: 250}}>
                    <CardMedia sx={{height: '12rem', width: '19rem'}}
                        image= {helloImg}
                    />
                    <CardContent>
                        <Typography variant='h4' >
                            HELLO!
                        </Typography>
                        <Typography 
                            variant='h7' 
                            fontFamily={'Comic Sans MS, Comic Sans, cursive'}
                        >
                            My name is Penina Rockove and I am currently pursuing
                            a bachelors degree in Computer Science. This is my first
                            REACT project!
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{width: '19rem',
                             height: '23rem',
                             backgroundColor: '#b35bc9',
                             marginTop: 150,
                             marginLeft: 30
                             }}>
                    <CardMedia sx={{height: '12rem', width: '19rem'}}
                        image= {hobbyImg}
                    />
                    <CardContent>
                        <Typography variant='h5' margin={1}>
                            <HikingIcon /> Hiking
                        </Typography>
                        <Typography variant='h5' margin={1}>
                            <PoolIcon /> Swimming
                        </Typography>
                        <Typography variant='h5' margin={1}>
                            <BrushIcon /> Painting
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={{width: '19rem',
                             height: '23rem',
                             backgroundColor: '#55c8c9',
                             marginLeft: 250,
                             marginBottom: 150,
                             marginTop: 75
                        }}>
                    <CardMedia sx={{height: '6rem', width: '19rem'}}
                        image= {eduImg}/>
                    <CardContent>
                        <Typography variant='h6'>
                            <SchoolIcon /> Touro University, BA in Computer Science
                        </Typography>
                        <Button 
                            style={{
                                backgroundColor: '#edb340', 
                                color: '#6e5b37',
                                margin: 5
                            }}>
                            <ArrowForwardIcon /> Learn About My College
                        </Button>
                        <Typography variant='h6'>
                            <SchoolIcon /> Bnos Sarah Seminary
                        </Typography>
                        <Typography variant='h6'>
                            <SchoolIcon /> Shevach High School
                        </Typography>
                        <Typography variant='h6'>
                            <SchoolIcon /> Bais Yaakov of Queens Elementary School
                        </Typography>  
                    </CardContent>
                </Card>

                <Card style={{width: '19rem',
                             height: '23rem',
                             backgroundColor: '#c95b55',
                             marginLeft: 30,
                             marginTop: 75
                            }}>
                    <Typography gutterBottom variant='h4'
                        sx={{p: 1, height: '8rem'}} 
                        style={{backgroundImage: `url(${designImg})`}}>
                        <p></p>
                        <i><strong>WORK EXPERIENCE</strong></i>
                    </Typography>
                    <Typography 
                        variant='h6' 
                        sx={{m: 1}} >
                        <ArrowForwardIcon fontSize='small'/> Physical Education Instructor
                    </Typography>
                    <Typography 
                        variant='h6' 
                        sx={{m: 1}} >
                        <ArrowForwardIcon fontSize='small'/> Lifeguard at Twin Oaks and Luxor Estates
                    </Typography>
                    <Typography 
                        variant='h6' 
                        sx={{m: 1}} >
                        <ArrowForwardIcon fontSize='small'/> Secretary at Yeshiva Ketana of Queens
                    </Typography>
                </Card>
            </Grid>
        </div>
    );
}


