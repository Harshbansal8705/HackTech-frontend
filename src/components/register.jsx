import React, {useState} from "react";
import "./styles/register.css"
import { useFormik } from "formik";
import * as Yup from "yup";
// import "yup-phone";
import OtpInput from 'react-otp-input';
import { MuiOtpInput } from 'mui-one-time-password-input'
import Card from '@mui/material/Card';  
// import { Typography, colors } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Typography, colors } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';


const Register = ()=>{
    // const [otp, setOtp] = useState('');
    // const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
      setOtp(newValue)
    }

    const [otp, setOtp] = React.useState('');
    const[otpModal, setOtpModal]= useState(false);

    const handleOTP  = ()=>{
setOtpModal(true);
    }

    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showConfPassword, setShowConfPassword] = React.useState(false);

    const handleClickShowConfPassword = () => setShowConfPassword((show) => !show);

    const handleMouseDownConfPassword = (event) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
          name: "",
          instiEmail:"",
          rollNo:"",
          depart:"",         
          password: "",
          confirmPass: "",
        },
        validationSchema: Yup.object({
          name: Yup.string().required("Required!"),
          depart: Yup.string().required("Required!"),
          rollNo: Yup.string().required("Required!"),
          instiEmail: Yup.string().email("Invalid email address").required("Required!"),
          password: Yup.string().min(8, "Must be atleast 8 characters long!")
            .required("Required!"),
          confirmPass: Yup.string()
            .min(8, "Must be atleast 8 characters long")
            .oneOf([Yup.ref("password")], "Password does not match!")
            .required("Required!"),
        }),
        
        onSubmit: (values) => {
          console.log("the value is", values);
        },
      });
      const isMobile = useMediaQuery("(max-width: 920px)");
      const divStyle = {
        // backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/2262760763/display_1500/stock-photo-three-dimensional-render-of-blue-wavy-object-2262760763.jpg')",
        backgroundImage: "url('/bg_img.png')",
        // backgroundImage: { Bg_img },
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',

        height: '100%',
    };
    
    return (
<>
{/* <h1>register</h1> */}
<div className="register-modal-container">
    {/* <h2>Register</h2> */}
    <form onSubmit>
    <div style={divStyle}>
    <div id='register_main' style={{ marginTop: '0rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card sx={{ marginTop: '5rem', marginBottom: "1rem", width: '70vw', height: '100%', boxShadow: "inherit" }}>
    <div className='register_main' style={{ display: 'flex' }}>
    {!isMobile && <div className='left'>

{/* <img style={{ width: '35vw', height: '75vh', paddingTop:"10%" }} className='left_image' src={""} alt="" /> */}

</div>}    
{!otpModal && <>
<div style={!isMobile ? { justifyContent:"center", alignContent:"ceter", marginLeft: '2rem', display: 'flex', flexDirection: 'column' } : { marginLeft: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={{ color:"#296dd0", textAlign:"center", fontSize: '3rem', fontWeight: '800', fontFamily: 'sans-serif', marginTop: '1.5rem' }} className='right_heading'>Register</h1>
                                {/* {regPageCount > 1 && (<ArrowBackIosNewIcon onClick={handleBack} style={{ fontSize: "large", cursor: "pointer" }} />)} */}

    <TextField  id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} sx={{ marginTop: '1rem', width: '28vmax' }} label="Name" variant="outlined" />
    {formik.errors.name && formik.touched.name ? (
              <p
                style={{
                  color: "red",
                  fontSize: "11px",
                  textAlign: "right",
                  marginRight:"13%",
                  position:"absolute",
                  width:"28%",
                  marginTop:"-5.5%"

                }}
              >
                {formik.errors.name}
              </p>
            ) : null}
            {errors.name && <div className="error">{errors.name[0]}</div>}
    <TextField  id="instiEmail" value={formik.values.instiEmail} onChange={formik.handleChange} onBlur={formik.handleBlur} sx={{ marginTop: '1rem', width: '28vmax' }} label="Institute Email" variant="outlined" />
    {formik.errors.instiEmail && formik.touched.instiEmail ? (
              <p
                style={{
                  color: "red",
                  fontSize: "11px",
                  textAlign: "right",
                  marginRight:"13%",
                  position:"absolute",
                  width:"28%",
                  marginTop:"5.7%"

                }}
              >
                {formik.errors.instiEmail}
              </p>
            ) : null}
            {errors.instiEmail && <div className="error">{errors.instiEmail[0]}</div>}
    
    <TextField  id="rollNo" value={formik.values.rollNo} onChange={formik.handleChange} onBlur={formik.handleBlur} sx={{ marginTop: '1rem', width: '28vmax' }} label="Roll Number" variant="outlined" />
    {formik.errors.rollNo && formik.touched.rollNo ? (
              <p
                style={{
                  color: "red",
                  fontSize: "11px",
                  textAlign: "right",
                  marginRight:"13%",
                  position:"absolute",
                  width:"28%",
                  marginTop:"17%"

                }}
              >
                {formik.errors.rollNo}
              </p>
            ) : null}
            {errors.rollNo && <div className="error">{errors.rollNo[0]}</div>}
    <TextField  id="depart" value={formik.values.depart} onChange={formik.handleChange} onBlur={formik.handleBlur} sx={{ marginTop: '1rem', width: '28vmax' }} label="Department" variant="outlined" />
    {formik.errors.depart && formik.touched.depart ? (
              <p
                style={{
                  color: "red",
                  fontSize: "11px",
                  textAlign: "right",
                  marginRight:"13%",
                  position:"absolute",
                  width:"28%", 
                  marginTop:"28.5%"

                }}
              >
                {formik.errors.depart}
              </p>
            ) : null}
            {errors.depart && <div className="error">{errors.depart[0]}</div>}

                                  
                                    <Button onClick={handleOTP} type="submit" sx={{ marginTop: '1.5rem', background: '#296dd0', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Verify with OTP</Button>


    </div></>}

    {otpModal &&   (<>
    
    <MuiOtpInput value={otp} onChange={handleChange} style={{ marginTop: '0.8rem', maxWidth: '15rem', gap: '10px' }} />
   
    <Button type="submit" sx={{ position:"absolute", marginTop: '11.5rem', background: '#296dd0', padding: '0.8rem', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Register</Button>

    </> ) }

    </div>
    </Card>
    </div>
    </div>
    </form>
</div>
</>
    );
}

export default Register;