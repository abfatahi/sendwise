import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Inputfield, Button } from '../../../reusables';
import Aos from 'aos';
import { isEmail } from '../../../utils/utilities';

const Index = () => {
  const Navigate = useNavigate();
  React.useEffect(() => {
    Aos.init();
  }, []);

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
      localStorage.setItem('email', email);
      Navigate('/register/step-2');
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
