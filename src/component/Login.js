import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Button, ButtonBase, Card, Checkbox, createMuiTheme, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Loader from 'react-loader-spinner';

const useStyles = makeStyles(theme => ({
    root: { 
      padding:'-10px', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      card : {
        maxWidth : "300"
      },
      paper: {
        padding: theme.spacing(4),
        margin: 'auto',
        maxWidth: 500,
      },    
      image: {
        width: 128,
        height: 128,
      },
      margin: {
        margin: theme.spacing(0),
      },
      textField: {
        width: '25ch',
      },
      img: {
        with:'50',
        height:'50'
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '400px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(1),
      },
    },
  }));
  const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#6fbf73',
          main: '#4caf50',
          dark: '#357a38',
          contrastText: '#fff',
        },
        secondary: {
          light: '#b7deb8',
          main: '#a5d6a7',
          dark: '#739574',
          contrastText: '#000',
        },
      },
    });
export default function Login({ setToken }) {
    const [setRespoonse] = useState();
    const classes = useStyles(theme);
    const [userName,setUserName] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const [showPassword,setShowPassword] = useState(false);
    const [loading,setLoading] = useState(false);

    function onSubmit(){
        if(userName!==undefined && userName!=="" && password!==undefined && password!==""){
          setLoading(true);  
          var obj = {
                userName : userName,
                password : password
            };
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            };
            /*fetch('http://localhost:8080/token', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ response: data});                
            });*/
            fetch('internal-customerportal-968449556.ap-southeast-2.elb.amazonaws.com:8080/token', requestOptions)
            //fetch('http://localhost:8080/token', requestOptions)
            .then(async response => {
                setLoading(false);
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                const status = await response.ok;
                // check for error response
                if (!status) {
                    // get error message from body or default to response status
                    //const error = (data && data.message) || response.status;
                    //return Promise.reject(error);
                    setError("Username or password is invalid");
                }else{
                    //alert("sucess :: "+data.token);
                    setToken(data.token);
                    setRespoonse(data.token);
                    setError("");
                }
                //this.setState({ postId: data.id })
            })
            .catch(error => {
              setLoading(false);  
               // this.setState({ errorMessage: error.toString() });
               setError('There was an error, please try again later', error);
            });
        }else{
            if(userName===undefined)
                setUserName("");
            if(password===undefined)
                setPassword("");
        }
    }
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <div style={{backgroundColor:'#F6F6F6'}}>
      {loading && <Loader
       type="Circles"
        style={style}
        alignItems="center"
        color="#00A273"
        height={100}
        width={100}
        timeout={3000}
      />}
      {!loading && 
    <React.Fragment>
      <CssBaseline />
      <Container style={{width :'100%'}}>
      <div className={classes.root} style={{width :'100%'}}>
      <Paper className={classes.paper}>
        <Grid container spacing={6} style={{backgroundColor:'#F6F6F6'}}>
          <Grid item >
            <ButtonBase className={classes.image} >
              <img className={classes.img} width="610" height="610" alt="complex" src="/logo.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item xs direction="column">
              <Grid item xs>
                <Card style={{padding:20,marginTop:'20%',marginRight:30,marginLeft:25}}>
                <FormGroup column>
                <h2>Welcome, login to MyAccount</h2>
                <p id="errorMsg" style={{color:"red"}}>{error}</p>
                <FormControl  variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                <OutlinedInput
                    id="username"
                    label="Login"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                    variant="outlined"
                    error={userName === ""}
                    helperText={userName === "" ? 'Username should not be empty!' : ' '}
                    required
                />
                {userName==="" && 
    <FormHelperText error id="accountId-error">
      Username should not be empty
    </FormHelperText>
    }
                </FormControl>
                <br/>
                <FormControl  variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput 
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    error={password === ""}
                    helperText={password === "" ? 'Password should not be empty!' : ' '}
                    required
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            onClick={(event)=>setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      
                />
                 {password==="" && 
    <FormHelperText error id="accountId-error">
      Password should not be empty
    </FormHelperText>
    }
                </FormControl>
                 <FormControlLabel
                control={
                <Checkbox
                    name="checkedB"
                    style={{color:"#00A273"}}
                />
                }
                label="Remember me"
                />
                <div>
                    <div style={{float:"left",marginTop:15}}>
                    <Link to="/" style={{marginTop:'100'}}>Forogt password</Link>
                    </div>
                    <div style={{float:"right"}}>
                    <Button  disabled 
                    variant="contained" 
                    >
                    REGISTER
                    </Button>
                    <Button 
                    type="submit"
                    variant="contained" 
                    onClick = {onSubmit}
                    style={{background:"#00A273",color:"white"}}>
                    LOGIN
                    </Button>
                    </div>
                </div>
                <div>
                    <p>By logging into the system you accept the terms and condition</p>
                </div>
                <div>
                <Link to='/'> Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/'> Home</Link> &nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to='/'> Home</Link> &nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to='/'> Home</Link> &nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to='/'> Home</Link>
                </div>
                </FormGroup>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
      </Container>
    </React.Fragment>
}
    </div>
  );
}