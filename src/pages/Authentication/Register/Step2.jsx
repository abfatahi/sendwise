import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Inputfield, Button } from '../../../reusables';
import Aos from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import { registerSelector } from '../../../redux/reducers/auth/register';
import { registerAccount } from '../../../redux/actions/auth/register';
import { RegisterSuccessModal } from './Modal';

const Index = () => {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem('email');
  const Navigate = useNavigate();
  React.useEffect(() => {
    Aos.init();
  }, []);

  const { error, errors, loading } = useSelector(registerSelector);

  const [user, setUser] = React.useState({
    fullName: '',
    password: '',
    email: userEmail,
    confirmPass: '',
  });

  const { fullName, password, confirmPass } = user;

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (fullName && password && password === confirmPass) {
      dispatch(registerAccount(user));
    }
  };
  return (
    <form onSubmit={handleSubmit} data-aos='fade-left' data-aos-duration='1000'>
      <RegisterSuccessModal />
      <div className='label-group'>
        <FaChevronCircleLeft
          onClick={() => Navigate(-1)}
          style={{ color: '#fff', cursor: 'pointer' }}
        />
        <p>Step 2 of 2</p>
      </div>
      <div className='input'>
        <Inputfield
          primary
          full
          placeholder='Enter your fullname here'
          value={fullName}
          fieldname='fullName'
          onTextChange={(e) =>
            setUser((prevState) => ({ ...prevState, fullName: e.target.value }))
          }
        />
        {submitted && !fullName && (
          <p className='error-msg'>Fullname is required</p>
        )}
      </div>
      <div className='input'>
        <Inputfield
          primary
          full
          inputType='password'
          placeholder='Set your password'
          value={password}
          fieldname='password'
          onTextChange={(e) =>
            setUser((prevState) => ({ ...prevState, password: e.target.value }))
          }
        />
        {submitted && !password && (
          <p className='error-msg'>Password is required</p>
        )}
      </div>
      <div className='input'>
        <Inputfield
          primary
          full
          inputType='password'
          placeholder='confirm your password'
          value={confirmPass}
          fieldname='confirmPass'
          onTextChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              confirmPass: e.target.value,
            }))
          }
        />
        {submitted && !confirmPass && (
          <p className='error-msg'>Confirm password is required</p>
        )}
        {submitted && confirmPass && confirmPass !== password && (
          <p className='error-msg'>Password does not match</p>
        )}
      </div>
      {error &&
        errors &&
        errors.map((item, index) => {
          return (
            <p key={index} className='error-msg'>
              {item.message || item.msg}
            </p>
          );
        })}
      <Button loading={loading} full dark text='Register' />
    </form>
  );
};

export default Index;
