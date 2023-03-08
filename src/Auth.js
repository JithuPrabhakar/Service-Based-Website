import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [input, setInput] = useState({name: "", email: "", password: ""});

    const handleChange = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const resetState = () => {
        setIsSignup(!isSignup)
        setInput({name: "", email: "", password: ""})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                flexDirection={'column'}
                maxWidth={400}
                alignItems='center'
                justifyContent={'center'}
                margin='auto'
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                sx={{
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc"
                    }
                }}
            >
                <Typography variant='h2' padding={3} textAlign='center'>{!isSignup ? "Login" : "SignUp"}</Typography>
                {isSignup && (
                    <TextField name='name' value={input.name} 
                        margin='normal' variant='outlined' placeholder='Name' type={'text'}
                        onChange={handleChange}
                    />
                )}
                <TextField name='email' value={input.email}
                    margin='normal' variant='outlined' placeholder='Email' type={'email'}
                        onChange={handleChange}
                />
                <TextField name='password' value={input.password}
                    margin='normal' variant='outlined' placeholder='Password' type={'password'}
                        onChange={handleChange}
                />
                <Button type='submit' variant='contained' size='large' sx={{ marginTop: 3, borderRadius: 3 }}>{!isSignup ? "Login" : "SignUp"}</Button>
                <Button onClick={resetState} p sx={{ marginTop: 3, borderRadius: 3, color: '#ccc' }}>Click to { isSignup ? "Login" : "SignUp" }</Button>
            </Box>
        </form>
    </div>
  )
}

export default Auth
