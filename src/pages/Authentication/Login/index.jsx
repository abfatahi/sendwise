import { Checkbox } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';
import { Inputfield, Button } from '../../../reusables';
import Aos from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector } from '../../../redux/reducers/auth/login';
import { loginAccount } from '../../../redux/actions/auth/login';
import { isEmail } from '../../../utils/utilities';

const Index = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { success, error, errors, loading } = useSelector(loginSelector);

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    submitted: false,
  });

  const { email, password, submitted } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prevState) => ({ ...prevState, submitted: true }));
    if (isEmail(email) && password) {
      dispatch(loginAccount(user));
    }
  };

  React.useEffect(() => {
    if (success) {
      Navigate('/');
    }
  }, [success, Navigate]);
  
  return (
    <AuthLayout
      title='Login'
      subtitle={
        <>
          New to Internet Banking? <Link to='/register'>Register Here</Link>
        </>
      }
      content={
        <>
          <form
            onSubmit={handleSubmit}
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <div className='input'>
              <Inputfield
                primary
                full
                placeholder='Email'
                value={email}
                fieldname='email'
                onTextChange={handleChange}
              />
              {submitted && !email && (
                <p className='error-msg'>Email is required</p>
              )}
              {submitted && email && !isEmail(email) && (
                <p className='error-msg'>Invalid Email Address</p>
              )}
            </div>
            <div className='input'>
              <Inputfield
                primary
                full
                placeholder='Password'
                fieldname='password'
                value={password}
                onTextChange={handleChange}
                inputType='password'
              />
              {submitted && !password && (
                <p className='error-msg'>Password is required</p>
              )}
            </div>
            <Checkbox>
              <span style={{ color: '#fff' }}>Remember me</span>
            </Checkbox>
            {error &&
              errors &&
              errors.map((item, index) => {
                return (
                  <p key={index} className='error-msg'>
                    {item.message || item.msg}
                  </p>
                );
              })}
            <Button loading={loading} full dark text='LOGIN' />
          </form>
        </>
      }
    />
  );
};

export default Index;
