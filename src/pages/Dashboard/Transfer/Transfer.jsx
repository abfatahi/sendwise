import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Inputfield, Selectfield } from '../../../reusables';
import Container, { TransferContainer } from './styles';
import { transferFunds } from '../../../redux/actions/transfers';
import {
  toggleActiveTab,
  transferSelector,
} from '../../../redux/reducers/transfers';
import { TransferSuccessModal } from './Modal';

const Index = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { loading, error, errors, activeTab } = useSelector(transferSelector);

  const [newTransfer, setNewTransfer] = React.useState({
    sourceCurrency: 'USD',
    targetCurrency: '',
    beneficiary: '',
    sender: user.accountNumber,
    receiver: '',
    amount: '',
    submitted: false,
  });

  const { targetCurrency, beneficiary, receiver, amount, submitted } =
    newTransfer;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewTransfer((prevState) => ({ ...prevState, [name]: value }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTransfer((prevState) => ({ ...prevState, submitted: true }));
    if (targetCurrency && amount && receiver) {
      dispatch(transferFunds(newTransfer));
    }
  };

  return (
    <Container>
      <TransferSuccessModal />
      <h1>Funds Transfer</h1>
      <p>Send money to anyone. it's Quick and Easy</p>
      <TransferContainer onSubmit={handleSubmit}>
        <div className='tab_group'>
          <div
            onClick={() => dispatch(toggleActiveTab('saved'))}
            className={`tab ${activeTab === 'saved' ? 'active' : ''}`}
          >
            Saved Beneficiary
          </div>
          <div
            onClick={() => dispatch(toggleActiveTab('new'))}
            className={`tab ${activeTab === 'new' ? 'active' : ''}`}
          >
            New Beneficiary
          </div>
        </div>
        <br />
        <div className='input__group'>
          <div className='input'>
            Select Balance
            <Selectfield
              onValueChange={(e) => {
                setNewTransfer((prevState) => ({
                  ...prevState,
                  sourceCurrency: e.target.value,
                }));
              }}
              placeholder='USD'
              data={[
                { name: 'USD', value: 'USD' },
                { name: 'EUR', value: 'EUR' },
                { name: 'NGN', value: 'NGN' },
              ]}
            />
          </div>
          {activeTab === 'saved' && (
            <>
              <div className='input'>
                Beneficiary
                <Selectfield
                  onValueChange={(e) => {
                    setNewTransfer((prevState) => ({
                      ...prevState,
                      beneficiary: e.target.value,
                    }));
                  }}
                  placeholder='[ - Select Beneficiary - ]'
                  data={user.beneficiaries}
                />
                {submitted && !beneficiary && (
                  <p className='error-msg'>Beneficiary is required</p>
                )}
              </div>
              <div className='input'>
                Beneficiary Number
                <Inputfield value={receiver} outline placeholder='' readOnly />
                {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
              </div>
            </>
          )}
          {activeTab === 'new' && (
            <>
              <div className='input'>
                Beneficiary Number
                <Inputfield
                  outline
                  placeholder='0000377444'
                  fieldname='receiver'
                  onTextChange={(e) =>
                    setNewTransfer((prevState) => ({
                      ...prevState,
                      receiver: e.target.value,
                    }))
                  }
                />
                {submitted && !receiver && (
                  <p className='error-msg'>Beneficiary is required</p>
                )}
              </div>
              <div className='input'>
                Beneficiary
                <Inputfield outline placeholder='John Doe' />
                {submitted && !beneficiary && (
                  <p className='error-msg'>Beneficiary number is required</p>
                )}
              </div>
            </>
          )}

          <div className='input'>
            Amount
            <Inputfield outline placeholder='0.00' />
            {submitted && !amount && (
              <p className='error-msg'>Amount is required</p>
            )}
          </div>
          <div className='input'>
            Select Target Currency
            <Selectfield
              onValueChange={(e) => {
                setNewTransfer((prevState) => ({
                  ...prevState,
                  targetCurrency: e.target.value,
                }));
              }}
              placeholder='USD'
              data={[
                { name: 'USD', value: 'USD' },
                { name: 'EUR', value: 'EUR' },
                { name: 'NGN', value: 'NGN' },
              ]}
            />
            {submitted && !targetCurrency && (
              <p className='error-msg'>Target currency is required</p>
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
          <br />
          <Button loading={loading} full info text='Continue' />
        </div>
      </TransferContainer>
    </Container>
  );
};
export default Index;
