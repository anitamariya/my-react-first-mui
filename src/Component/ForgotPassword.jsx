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

export default function SignUp() {

  const [formData,setFormData]=useState({
    "emailorphonenumber": "",
    "password": ""
    
  });
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  const handleInputChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });

  const handleClose = (e) => {
    setOpen(false);
  };


  const handleSubmit=(e)=>{
    e.preventDefault();


    const headers = {
      'Content-Type': 'application/json',
    }
    axios.put('https://api.oopacks.com/api/test/forgotpassword',formData,{
      headers: headers
    })
    .then(function (response) {
      // <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      //   <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      //     This is a success message!
      //   </Alert>
      // </Snackbar>
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
         Forgot Password
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="emailorphonenumber"
                label="Email/Phonenumber"
                name="emailorphonenumber"
                value={formData.emailorphonenumber}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Grid>
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Grid container justifyContent="flex-end">
           
          </Grid>
        </form>
      </div>
    
    </Container>
  );
}
