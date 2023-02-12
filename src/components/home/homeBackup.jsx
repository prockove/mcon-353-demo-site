import { Button, 
    Card, 
    CardMedia, 
    CardContent, 
    Icon, 
    Components, 
    Box,
    Paper,
    Grid,
    Styled,
    IconButton,
    Typography,
    SkipPreviousIcon,
    PlayArrowIcon,
    SkipNextIcon
} from "@mui/material";
import profilePic from '../../images/profilePic.png';
import backgroundPic from '../../images/silverGlitter.jpg'
import './home.css';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/material/styles';
import { FormatBold } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#689fd9' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));


export const Home = () => {
return (
<div className="homePage">
    <Card className="profileCard">
    <img src={profilePic} alt="pic" sx={{width:20, height: 50}}/>
    <CardMedia>
                        <img src={helloImg}></img>
                    </CardMedia>
      <CardContent className="cardContent">
        <h3>Penina Rockove</h3>
        Hello, I am a current student in Touro University studying Computer Science. 
        This is my first React project!
      </CardContent>
    </Card>

    

    <Icon>SchoolIcon</Icon>
    <a className="collegeButton">
        <Button variant="contained">
            Learn About My College
        </Button>
    </a>

<Card sx={{ display: 'flex' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 .5' }}>
        <h3>Penina Rockove</h3>
        Hello, I am a current student 
        in Touro University studying 
        Computer Science. This is my 
        first React project!
    </CardContent>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: 150, height: 200}}
    image={profilePic}
    alt="pic"
  />
</Card>

    

    <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Item>
                    <h1>HIKING</h1>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <h1>SWIMMING</h1>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <h1>PAINTING</h1>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <h1>FRIENDS</h1>
                </Item>
            </Grid>
        </Grid>
    </Box>
</div>
);
}




