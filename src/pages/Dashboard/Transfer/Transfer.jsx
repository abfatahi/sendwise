import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { validateAccount } from '../../../redux/actions/account';
import { Button, Inputfield, Selectfield } from '../../../reusables';
// import { bankList } from '../../../utils/data';
import Container, { TransferContainer } from './styles';
import { accountSelector } from '../../../redux/reducers/account';
import { transferFunds } from '../../../redux/actions/transfers';
import {
  toggleActiveTab,
  transferSelector,
} from '../../../redux/reducers/transfers';
import { TransferFailureModal } from './Modal';

const Index = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem('user'));
  const {
    // validateBankLoading,
    // validateBankError,
    validateBankSuccess,
    accountName,
  } = useSelector(accountSelector);

  const { loading, activeTab } = useSelector(transferSelector);

  const [newTransfer, setNewTransfer] = React.useState({
    bank_name: '',
    bank_code: '',
    name: '',
    account_number: '',
    amount: '',
    reason: '',
    submitted: false,
    isValidAccount: null,
  });

  const {
    // bank_name,
    bank_code,
    name,
    account_number,
    amount,
    // reason,
    // submitted,
    // isValidAccount,
  } = newTransfer;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewTransfer((prevState) => ({ ...prevState, [name]: value }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTransfer((prevState) => ({ ...prevState, submitted: true }));
    if (name && account_number && bank_code && amount) {
      dispatch(transferFunds(newTransfer));
    }
  };

  // const handleValidateAccount = (e) => {
  //   e.preventDefault();
  //   if (account_number.length === 10) {
  //     setNewTransfer((prevState) => ({
  //       ...prevState,
  //       isValidAccount: true,
  //     }));
  //     const payload = {
  //       bank_code,
  //       account_number,
  //     };
  //     dispatch(validateAccount(payload));
  //   } else if (account_number.length < 10 || account_number.length > 10) {
  //     setNewTransfer((prevState) => ({
  //       ...prevState,
  //       isValidAccount: false,
  //     }));
  //   }
  // };

  React.useEffect(() => {
    if (validateBankSuccess) {
      setNewTransfer((prevState) => ({
        ...prevState,
        name: accountName,
      }));
    }
  }, [setNewTransfer, validateBankSuccess, accountName]);

  return (
    <Container>
      <TransferFailureModal />
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
                  bank_code: e.target.value,
                  bank_name: e.target.options[e.target.selectedIndex].text,
                }));
              }}
              placeholder='USD'
              data={[
                { name: 'USD', value: 'USD' },
                { name: 'EUR', value: 'EUR' },
                { name: 'NGN', value: 'NGN' },
              ]}
            />
            {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
          </div>
          {activeTab === 'saved' && (
            <>
              <div className='input'>
                Beneficiary
                <Selectfield
                  onValueChange={(e) => {
                    setNewTransfer((prevState) => ({
                      ...prevState,
                      bank_code: e.target.value,
                      bank_name: e.target.options[e.target.selectedIndex].text,
                    }));
                  }}
                  placeholder='[ - Select Beneficiary - ]'
                  data={user.beneficiaries}
                />
                {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
              </div>
              <div className='input'>
                Beneficiary Number
                <Inputfield outline placeholder='0837478974' />
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
                <Inputfield outline placeholder='0000377444' />
                {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
              </div>
              <div className='input'>
                Beneficiary
                <Inputfield outline placeholder='John Doe' />
                {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
              </div>
            </>
          )}

          <div className='input'>
            Amount
            <Inputfield outline placeholder='0.00' />
            {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
          </div>
          <div className='input'>
            Select Target Currency
            <Selectfield
              onValueChange={(e) => {
                setNewTransfer((prevState) => ({
                  ...prevState,
                  bank_code: e.target.value,
                  bank_name: e.target.options[e.target.selectedIndex].text,
                }));
              }}
              placeholder='USD'
              data={[
                { name: 'USD', value: 'USD' },
                { name: 'EUR', value: 'EUR' },
                { name: 'NGN', value: 'NGN' },
              ]}
            />
            {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
          </div>
          <br />
          <Button
            loading={loading}
            disabled={!name ? true : false}
            full
            info
            text='Continue'
          />
        </div>
      </TransferContainer>
    </Container>
  );
};
export default Index;
