import react from 'react'
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import bckgrdImage from '../Assets/cool-background.png'
import logo from '../Assets/TT.png'


const Login=()=> {
    const paperStyle = {padding :20, height :'70vh',width:280, margin :"20px auto"}
    const avatarStyle ={backgroundColor : '#1976d2'}
    const btnstyle ={margin:'10px 0px'}
    const logostyle ={width:'15vh', margin:'0px 90% 0px 0px'}
return( 
<div className='loginPage' style={{ backgroundImage: `url(${bckgrdImage})`}}>
    <img src={logo} style={logostyle}/>
    <Grid>
       <Paper elevation= {10} style={paperStyle}>
        <Grid align = 'center' >
            <Avatar style={avatarStyle}><LockOutlined/></Avatar>
            <h2>Sign in </h2>
            <TextField id="adressTxtField" label="Adresse" variant='standard' placeholder='Entrer votre adresse' fullWidth required/>
            <TextField id="passwordTxtField" label="Mot de passe" variant='standard' placeholder='Entrer votre mot de passe' type='password' fullWidth required/>
            <FormControlLabel
            control={
                <Checkbox 
                name='checkedB'
                color='primary'/>
            }
            label = "Remember me" />
            <Button type='submit' color='primary' style={btnstyle} variant='contained' fullWidth>
                Sign in
            </Button>
            <Typography >Do you have an account ?<Link href="#" >Create one</Link>
            </Typography>
        </Grid>
       </Paper>
    </Grid>
    
</div>)
}
export default Login