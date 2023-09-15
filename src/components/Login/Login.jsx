import React from 'react'
import './Login.css'
import { TextField } from '@mui/material'
import {Box} from '@mui/material'
import {Button} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://password-rese-be.onrender.com/user/login";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.token);
            window.location = "/main";
            // console.log(res);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }

    };
  return (
    <React.Fragment>
   
    <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>

            <div id="password_email" style={{ display: "block" }} >
                <TextField
                    id="outlined-basic"
                    type="email"
                    label="Enter Your Email"
                    variant="outlined"
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    variant="outlined"
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                    required
                />
                {error && <div className='error_msg'>{error}</div>}
                <Button type='submit' variant="contained">Login</Button>

                <div className='register-forgot-pass'>
                    <Link to="/register">
                        <Button variant="contained" color="error">Register</Button>
                    </Link>

                    {/* <NavLink  to="/loginhelp"> */}
                    <a href="loginhelp">Forgot Password ?</a>
                    {/* </NavLink> */}

                </div>
            </div>
        </Box>
    </form>


</React.Fragment>
  )
}

export default Login