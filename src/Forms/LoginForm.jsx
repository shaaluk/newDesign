import React from 'react'

const LoginForm = () => {
    return (

        <div className='rightBlock'>
            <div>
                <h1>Welcome Back !</h1>
                <p><b>Start managing your business with our softwares.</b></p>
            </div>

            <div className='inputBox'>
                <label><b>Email ID</b></label> <br />
                <input type='text' className="box1" placeholder='Enter your Email Id' /> <br />
            </div>

            <div className='inputBox'>
                <label><b>Password</b></label> <br />
                <input type='text' className="box1" placeholder='Enter your Password' /><br />
            </div>


            <input type='checkbox' />
            <label>Remember Me</label>

            <div>
                <button className='Loginbtn'>Login</button>
            </div>

            <p className='data1'>Don’t have Account yet? <span className='sign'>Sign-up</span></p>

            <p className='data2'>@2023 All rights Reserved</p>
        </div>
    )
}

export default LoginForm