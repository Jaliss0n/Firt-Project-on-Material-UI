import React from 'react';
import {TextField,Button,withStyles,createTheme,ThemeProvider,makeStyles,Typography} from '@material-ui/core';
import './contato.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme)=>({
    text:{
        width:'200px'
    },
    spicon:{
        marginRight:'10px'
    }

}))

const theme = createTheme({
    palette:{
        primary:{
            main:'#ffffff'
        },
        secondary:{
            main:'#3f51b5'
        }
    },
    
})

const CssTextField = withStyles({
    root: {

      '& .MuiFilledInput-input':{
        color:'white'
      },  
      '& .MuiOutlinedInput-input':{
        color:'white',
      },
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: '#3f51b5',
          borderWidth: 4
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
       
      },
    },
})(TextField);

const WhiteCheckbox = withStyles(theme => ({
    root: {
      color: "white",
      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0
      },
    },
    checked: {}
}))(Checkbox);      
  
  

function Contato() {

    const classes=useStyles();

    return(
        <div class='container'>

            <img src='/images/contato.jpg'/>

            <div class='formulario'>

                <form>

                    <div class='box_1'>

                        <ThemeProvider theme={theme}>
                            <Typography align = 'left' variant='h3' color='primary' >Contate-nos</Typography>

                            <Typography 
                                align = 'left'
                                variant='body1'
                                color='primary'>
                                    Por favor preencha este formulario, e assim que nossa equipe receber responderemos o mais rapaido possivel.
                            </Typography>

                        </ThemeProvider>

                    </div>

                    <div class='box_2'>

                        <ThemeProvider theme={theme}>

                            <Typography align = 'left' variant='body1' color='primary' className={classes.text} >Digite Seu Nome</Typography>

                            <div class='perguntas'>
                                <CssTextField
                                    label = {
                                        <Typography
                                            align = 'left' 
                                            variant='body2' 
                                            color='primary' 
                                        >
                                            Primeiro Nome
                                        </Typography>
                                    }
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                />

                                <CssTextField
                                    label = {
                                        <Typography
                                            align = 'left' 
                                            variant='body2' 
                                            color='primary' 
                                        >
                                            Ultimo Nome
                                        </Typography>
                                    }
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                />

                            </div>
                            
                        </ThemeProvider>

                    </div>

                    <div class='box_2'>

                        <ThemeProvider theme={theme}>

                            <Typography align = 'left' variant='body1' color='primary' className={classes.text} >Digite Seu Email</Typography>
                            
                            <div class='perguntas'>

                                <CssTextField
                                    label = {
                                        <Typography
                                            align = 'left' 
                                            variant='body2' 
                                            color='primary'
                                            
                                        >
                                            Seu Email
                                        </Typography>
                                    }
                                    variant="outlined"
                                    
                                    id="custom-css-outlined-input"
                                    fullWidth
                                />

                            </div>

                        </ThemeProvider>

                    </div>

                    <div class='box_2'>

                        <ThemeProvider theme={theme}>

                            <Typography align = 'left' variant='body1' color='primary' className={classes.text} >Motivo do Contato</Typography>
                            
                            <div class='perguntas'>

                                <FormControl component="fieldset">

                                    <FormGroup row={true} > 

                                    <FormControlLabel
                                        control={<WhiteCheckbox color='primary' />}
                                        label = {
                                            <Typography
                                                align = 'left' 
                                                variant='body2' 
                                                color='primary'
                                                
                                            >
                                                Duvida
                                            </Typography>
                                        }
                                    />

                                    <FormControlLabel
                                        control={<WhiteCheckbox color='primary' />}
                                        label = {
                                            <Typography
                                                align = 'left' 
                                                variant='body2' 
                                                color='primary'
                                                
                                            >
                                                Reclamação
                                            </Typography>
                                        }
                                    />

                                    <FormControlLabel
                                        control={<WhiteCheckbox color='primary' />}
                                        label = {
                                            <Typography
                                                align = 'left' 
                                                variant='body2' 
                                                color='primary'
                                                
                                            >
                                                Outros
                                            </Typography>
                                        }
                                    />

                                    </FormGroup>

                                </FormControl>

                            </div>

                        </ThemeProvider>
                        
                    </div>

                    <div class='box_2'>

                        <ThemeProvider theme={theme}>

                            <Typography align='left' color='primary' variant='body1' className={classes.text}>
                                Sua Mensagem
                            </Typography>

                            <div class='perguntas'>

                                <CssTextField
                                    id="filled-multiline-static"
                                    label={<Typography color='primary' variant='body1'>
                                            Digite aqui sua mensagem...
                                        </Typography> }
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    fullWidth
                                />
                                
                            </div>

                        </ThemeProvider>

                    </div>
                   
                    <hr/>

                    <div class='box_2'>

                        <ThemeProvider theme={theme}>
                            <Button variant='contained' color='secondary' >
                                <SendIcon  className={classes.spicon}/>
                                Enviar
                            </Button>
                        </ThemeProvider>

                    </div>
                    
                </form>

            </div>

        </div>
    )
    
}

export default Contato;