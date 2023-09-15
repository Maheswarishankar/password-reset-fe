import React from "react";
import { Link } from "react-router-dom";
import {Box} from '@mui/material'
import {Button} from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import {TextField} from "@mui/material";


const ResetPassword = () => {
    const [data, setData] = useState({ password: "" });
    // console.log(data);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = `https://password-rese-be.onrender.com/user/loginhelp/resetpassword`;
            await axios.post(url, data);
            window.location = "/"
        } catch (error) {
            // console.log(error);
            alert("try different Password")
        }
    }

    return (
        <React.Fragment>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Forgot Password</h3>

                <Box sx={{ '& > :not(style)': { m: 0.1 } }}>

                    <div id="password_email" style={{ display: "block" }} >
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Enter Your New password"
                            variant="outlined"
                            name='password'
                            onChange={((e) => { setData({ password: e.target.value }) })}
                            required
                        />
                        <Button type='submit' variant="contained">Reset Password</Button>

                        <div className='register-forgot-pass'>
                            <Link to="/login">
                                <Button variant="contained" color="error">Login</Button>
                            </Link>

                        </div>
                    </div>
                </Box>
            </form>


        </React.Fragment>
    )
}

export default ResetPassword
