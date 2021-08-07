import React from 'react';
import {IconButton,createTheme,ThemeProvider,makeStyles,Typography} from '@material-ui/core';
import './home.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MapIcon from '@material-ui/icons/Map';

const useStyles = makeStyles((theme)=>({
    root:{
        height:'90vh',
        display:'flex'
    },
    grow:{
        flexGrow:1
    },
    margin:{
        margin:0
    }
}))

const theme = createTheme({
    palette:{
        primary:{
            main:'#ffffff'
        },
        secondary:{
            main:'#ffffff'
        }
    }
})

function Home() {

    const classes = useStyles();

    return(
        <div class='banner'>
            <video autoPlay='true' muted loop>
                <source src='./video/World.mp4' type='video/mp4' />
            </video>

            
            <div class='footer'>

                <div class='titulo'>
                    <ThemeProvider theme={theme}>
                        <Typography variant = 'h4' color = 'primary' >Fale Conosco</Typography>
                    </ThemeProvider>
                        
                </div>

                <div class='icons'>
                    <ThemeProvider theme={theme}>

                        <IconButton size='smal' className={classes.margin} >
                            <InstagramIcon color='primary'/>
                        </IconButton>

                        <IconButton size='smal' className={classes.margin} >
                            <LinkedInIcon color='primary'/>
                        </IconButton>

                        <IconButton size='smal' className={classes.margin} >
                            <EmailIcon color='primary'/>
                        </IconButton>

                        <IconButton size='smal' className={classes.margin} >
                            <PhoneIcon color='primary'/>
                        </IconButton>

                        <IconButton size='smal' className={classes.margin} >
                            <MapIcon color='primary'/>
                        </IconButton>
                
                    </ThemeProvider>
                </div>

            </div>
            
        </div>
    )
}

export default Home;