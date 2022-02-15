import React from 'react';
// import { Link } from 'react-router-dom';
// import { AuthLayout } from '../../../layouts';
import { Inputfield, Button } from '../../../reusables';
import Aos from 'aos';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerSelector } from '../../../redux/reducers/auth/register';
// import { registerAccount } from '../../../redux/actions/auth/register';
// import { isEmail } from '../../../utils/utilities';
// import { RegisterSuccessModal } from './Modal';

const Index = () => {
  //   const dispatch = useDispatch();
  React.useEffect(() => {
    Aos.init();
  }, []);

  //   const { error, loading } = useSelector(registerSelector);

  //   const [user, setUser] = React.useState({
  //     fullname: '',
  //     email: '',
  //     password: '',
  //     confirmPass: '',
  //     pin: '',
  //     submitted: false,
  //   });

  //   const [step,setStep] = React.useState(0);

  //   const { fullname, email, password, confirmPass, submitted } = user;

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setUser((prevState) => ({ ...prevState, [name]: value }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setUser((prevState) => ({ ...prevState, submitted: true }));
  //     if (fullname && isEmail(email) && password && password === confirmPass) {
  //       dispatch(registerAccount(user));
  //     }
  //   };
  const [email, setEmail] = React.useState('');
  return (
    <form onSubmit data-aos='fade-left' data-aos-duration='1000'>
      <p>Step 1 of 3</p>
      <div className='input' data-aos='fade-left' data-aos-duration='1000'>
        <Inputfield
          primary
          full
          placeholder='Enter your email here'
          value={email}
          fieldname='email'
          onTextChange={(e) => setEmail(e.target.value)}
        />
        {/* {submitted && !email && (
                <p className='error-msg'>Email is required</p>
              )}
              {submitted && email && !isEmail(email) && (
                <p className='error-msg'>Invalid Email Address</p>
              )} */}
      </div>
      <Button
        data-aos='fade-left'
        data-aos-duration='1000'
        full
        dark
        text='Continue'
      />
      {/* <div className='input'>
              <Inputfield
                primary
                full
                placeholder='Fullname'
                value={fullname}
                fieldname='fullname'
                onTextChange={handleChange}
              />
              {submitted && !fullname && (
                <p className='error-msg'>Fullname is required</p>
              )}
            </div>
            <div className='group'>
              <div className='input'>
                <Inputfield
                  primary
                  // full
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
              <div className='input'>
                <Inputfield
                  primary
                  // full
                  placeholder='Confirm Password'
                  fieldname='confirmPass'
                  value={confirmPass}
                  onTextChange={handleChange}
                  inputType='password'
                />
                {submitted && !confirmPass && (
                  <p className='error-msg'>Confirm password is required</p>
                )}
                {submitted && confirmPass !== password && (
                  <p className='error-msg'>Password does not match</p>
                )}
              </div>
            </div> */}
      {/* {error && <p className='error-msg'>Something went wrong!</p>} */}
      {/* <Button loading={loading} full primary text='Register' /> */}
    </form>
  );
};

export default Index;
