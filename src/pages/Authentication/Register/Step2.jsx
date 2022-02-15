import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { AuthLayout } from '../../../layouts';
import { Inputfield, Button } from '../../../reusables';
import Aos from 'aos';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerSelector } from '../../../redux/reducers/auth/register';
// import { registerAccount } from '../../../redux/actions/auth/register';
// import { isEmail } from '../../../utils/utilities';
// import { RegisterSuccessModal } from './Modal';

const Index = () => {
  const Navigate = useNavigate();
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

  const [user, setUser] = React.useState({
    fullname: '',
    password: '',
    confirmPass: '',
  });

  const { fullname, password, confirmPass } = user;

  const [submitted, setSubmitted] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (fullname && password && password === confirmPass) {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 3000));
      alert('Cool');
      //   dispatch(registerAccount(user));
    }
  };
  return (
    <form onSubmit={handleSubmit} data-aos='fade-left' data-aos-duration='1000'>
      <div className='group'>
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
          value={fullname}
          fieldname='fullname'
          onTextChange={(e) =>
            setUser((prevState) => ({ ...prevState, fullname: e.target.value }))
          }
        />
        {submitted && !fullname && (
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
      <Button loading={loading} full dark text='Register' />
      {/* {error && <p className='error-msg'>Something went wrong!</p>} */}
    </form>
  );
};

export default Index;
