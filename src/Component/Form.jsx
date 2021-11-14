import {useState} from 'react'
import './style.css';

import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {

  const [formData,setFormData]=useState({
    "file": "",
  
    
  });
//   const [open, setOpen] = useState(true);
  const classes = useStyles();

  const handleInputChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }


//   const handleClose = (e) => {
//     setOpen(false);
//   };


  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = new FormData();
   
     form.append('file', formData.file);
  
    
     const headers = {
        'Content-Type': 'application/json',
      }
      axios.put('https://api.oopacks.com/api/test/upload',formData,{
        headers: headers
      })
      .then(function (response) {
       
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    
    console.log(formData);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
          
          <label htmlFor="file">File</label>
              <input type="file" 
              id="file"
              name="file"
              />
           
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            submit
          </Button>
          <Grid container justifyContent="flex-end">
            
            <Grid item>
               
              <Link to="/" variant="body2">
                register here
              </Link>
            </Grid>
          
            <Grid item>
              <Link to="/forgot-password" variant="body2">
                forgot password 
              </Link>
            </Grid>
          
          </Grid>
        </form>
      </div>
    
    </Container>
  );
}
