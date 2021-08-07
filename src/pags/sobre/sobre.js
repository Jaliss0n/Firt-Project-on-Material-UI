import React from 'react';
import {IconButton,Grid,Paper,createTheme,ThemeProvider,makeStyles,CssBaseline,Typography} from '@material-ui/core';
import './sobre.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MapIcon from '@material-ui/icons/Map';


const useStyles = makeStyles((theme)=>({
    root:{
        zIndex: 1,
        height:'50vh',
        paddingLeft:'20%',
        paddingRight:'20%',
        marginTop: '140px'
    },
    corpo:{
        padding: '3%',
        color:'white',
        backgroundColor:'#3f51b5',
        opacity:0.9,
        
    }
}))

const theme = createTheme({

    palette:{
        primary:{
            main:'#ffffff'
        }
    },

    typography:{
        body1:{
            marginBottom:'3%'
        }
    }
})

function Sobre() {

    const classes = useStyles();
    

    return(
        <div class='container'>

            <CssBaseline/>

            <img src='/images/sobre.jpg' />

            <Grid container className={classes.root}>

                <Paper className={classes.corpo} elevation={24}>
                        
                    <Typography align='left' variant='h3' >
                        Quem somos ?
                    </Typography>

                    <ThemeProvider theme={theme}>

                        <Typography align='left' variant='body1' >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </Typography>

                        <Typography align='left' variant='body1'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </Typography>

                        <Typography align='left' variant='body1'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </Typography>

                    </ThemeProvider>

                    <ThemeProvider theme={theme}>

                        <IconButton size='medium' >
                            <InstagramIcon size='medium' color='primary'/>
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
                   
                </Paper>
            </Grid>
        </div>
    );

}

export default Sobre;