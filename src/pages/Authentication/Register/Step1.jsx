import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthLayout } from '../../../layouts';
import { Inputfield, Button } from '../../../reusables';
import Aos from 'aos';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerSelector } from '../../../redux/reducers/auth/register';
// import { registerAccount } from '../../../redux/actions/auth/register';
import { isEmail } from '../../../utils/utilities';
// import { RegisterSuccessModal } from './Modal';

const Index = () => {
  //   const dispatch = useDispatch();
  const Navigate = useNavigate();
  React.useEffect(() => {
    Aos.init();
  }, []);

  //   const { error, loading } = useSelector(registerSelector);

  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (isEmail(email)) {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 3000));
      setLoading(false);
      Navigate('/register/step-2');
      // dispatch(registerAccount(user));
    }
  };
  return (
    <form onSubmit={handleSubmit} data-aos='fade-left' data-aos-duration='1000'>
      <p>Step 1 of 2</p>
      <div className='input'>
        <Inputfield
          primary
          full
          placeholder='Enter your email here'
          value={email}
          fieldname='email'
          onTextChange={(e) => setEmail(e.target.value)}
        />
        {submitted && !email && <p className='error-msg'>Email is required</p>}
        {submitted && email && !isEmail(email) && (
          <p className='error-msg'>Invalid Email Address</p>
        )}
      </div>
      <Button loading={loading} full dark text='Continue' />
      {/* {error && <p className='error-msg'>Something went wrong!</p>} */}
    </form>
  );
};

export default Index;
