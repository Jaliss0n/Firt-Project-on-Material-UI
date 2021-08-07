import React from 'react';
import {Button,createTheme,List,Link,ListItem,ListItemText,Toolbar,ThemeProvider,createMuiTheme,makeStyles,CssBaseline,Drawer,Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles((theme)=>({
    root:{
        height:'10vh',
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    btnspa :{
        flexGrow: 1
    },
    grow:{
        flexGrow:30
    },
    title: {
       flexGrow: 1,
    },
    logo:{
        height:'8vh',
        width: 180,
        paddingTop:5
    },
    button: {
        flexGrow:1
    },
    spicon:{
        marginLeft:'20px'
    }
    
}));

const theme = createTheme({
    palette:{        
        primary: {
            main:'#ffffff'
        },
        secondary:{
            main:'#3f51b5'
        }
        
    }
})


function Header() {
    
    

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="static">

                <Toolbar>
                    <a href ='/'>
                        <img src='./images/logo.png' className={classes.logo}/>

                    </a>
                    
                    <div className={classes.grow}/>
                    
                    <ThemeProvider theme={theme}>
                        <Button 
                        aria-controls="simple-menu" 
                        aria-haspopup="true" 
                        onClick={handleClick}
                        variant='text' 
                        color='primary'  
                        className={classes.btnspa}
                        
                    >
                            Produtos
                        </Button>
                    </ThemeProvider>
                    
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>PETROQUIMICOS</MenuItem>
                        <MenuItem onClick={handleClose}>QUIMICOS</MenuItem>
                    </Menu>

                    
                    <div className={classes.btnspa}/>

                    <ThemeProvider theme={theme}>
                        <Button variant='text' color='primary' href='/Sobre' >
                            Quem Somos
                        </Button>
                    </ThemeProvider>

                    <div className={classes.btnspa}/>

                    <ThemeProvider theme = {theme}>
                        <Button variant='contained' color='primary' href='/Contato' >
                            Contato
                        </Button>
                    </ThemeProvider>
                        
                
                </Toolbar>
            </AppBar>

           
        </div>

        
    )

}

export default Header;