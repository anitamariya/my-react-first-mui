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
import { useFormik } from 'formik';
import * as yup from 'yup';


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

const validationSchema = yup.object({
  email: yup.string().when("isEmail", {
    is: '1',
    then: yup.string()
        .email("Please enter valid email")
        .required("email cannot be empty"),
    otherwise: yup.string()
        .required("phonenumber cannot be empty")
        .min(10, 'phonenumber must be at least 10 char'),
}),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function Login() {

  const formik = useFormik({
    initialValues: {
      isEmail: 0,
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [formData,setFormData]=useState({
    "emailorphonenumber": "",
    "password": ""
    
  });
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const handleInputChange=(e)=>{
   
    let temp={}

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
    axios.post('https://api.oopacks.com/api/test/login',formData,{
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
          Login
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                label="Email or Phone"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={handleSubmit}
          >
            Login
          </Button>
          <Grid container spacing={2} justifyContent="flex-end">
            
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
