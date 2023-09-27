import React from 'react';
import Main from './Main';
import './SignUp.css';
const SignUp = () => {
  return (
    <Main>
      <div className='mainBlock'>
        <div>
          <h1>Sign-up</h1>
          <p className='head1'> Start managing your business with our softwares.</p>
        </div>

        <div className='boxDetails'>
          <div className='boxIn'>
          <label>Name</label>  <br/>
          <input type='text' className='box' placeholder='Enter Name'/> 
          </div>

          <div className='boxIn'>
          <label>Email Id</label>  <br/>
          <input type='email' className='box' placeholder='Enter email Id'/> <br/>
          </div>

          <div className='boxIn'>
          <label>Password </label> <br/>
          <input type='password' className='box'placeholder='Password'/>  <br/>
          </div>

          <div className='boxIn'>
          <label>Confirm Password</label> <br/>
          <input type='password' className='box' placeholder='Password'/> <br/>
          </div>

          <div className='boxIn'>
          <label>Phone Number</label> <br/>
          <input type='tel' className='box' placeholder='Phone Number'/>
          </div>


          <div>
                <button className='Accbtn'>Create Account</button>
           </div>

           <p className='data1'>If you have account. <span className='sign'>Sign-up</span></p>

           <p className='data3'>@2023 All rights Reserved</p>
        </div>

      </div>
    </Main>
  )
}

export default SignUp
