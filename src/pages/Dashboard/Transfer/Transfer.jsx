import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validateAccount } from '../../../redux/actions/account';
import { Button, Inputfield, Selectfield } from '../../../reusables';
import { bankList } from '../../../utils/data';
import Container, { TransferContainer } from './styles';
import { accountSelector } from '../../../redux/reducers/account';
import { transferFunds } from '../../../redux/actions/transfers';
import { transferSelector } from '../../../redux/reducers/transfers';
import { TransferFailureModal } from './Modal';

const Index = () => {
  const dispatch = useDispatch();

  const {
    validateBankLoading,
    validateBankError,
    validateBankSuccess,
    accountName,
  } = useSelector(accountSelector);

  const { loading } = useSelector(transferSelector);

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
    reason,
    submitted,
    isValidAccount,
  } = newTransfer;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransfer((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTransfer((prevState) => ({ ...prevState, submitted: true }));
    if (name && account_number && bank_code && amount) {
      dispatch(transferFunds(newTransfer));
    }
  };

  const handleValidateAccount = (e) => {
    e.preventDefault();
    if (account_number.length === 10) {
      setNewTransfer((prevState) => ({
        ...prevState,
        isValidAccount: true,
      }));
      const payload = {
        bank_code,
        account_number,
      };
      dispatch(validateAccount(payload));
    } else if (account_number.length < 10 || account_number.length > 10) {
      setNewTransfer((prevState) => ({
        ...prevState,
        isValidAccount: false,
      }));
    }
  };

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
        <h3>Daily Transfer limit: #10,000,0000</h3>
        <p>
          Min Transaction Amount: <b>#100</b>{' '}
        </p>
        <p>
          Min Transaction Amount: <b>#10,000,000</b>
        </p>
        <br />
        <div className='input__group'>
          <div className='input'>
            <Selectfield
              onValueChange={(e) => {
                setNewTransfer((prevState) => ({
                  ...prevState,
                  bank_code: e.target.value,
                  bank_name: e.target.options[e.target.selectedIndex].text,
                }));
              }}
              placeholder="Select Beneficiary's Bank"
              data={bankList}
            />
            {/* {submitted && !bank_name && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )} */}
          </div>
          {bank_code && (
            <div className='group'>
              <Inputfield
                fieldname='account_number'
                outline
                value={account_number}
                placeholder='Enter Account Number'
                onTextChange={handleChange}
              />
              {!name && (
                <Button
                  onClick={handleValidateAccount}
                  loading={validateBankLoading}
                  primary
                  text='Validate'
                />
              )}
            </div>
          )}
          {validateBankError && (
            <p className='error-msg'>Unable to validate account!</p>
          )}
          {submitted && !account_number && (
            <p className='error-msg'>Beneficiary account number is required</p>
          )}
          {isValidAccount === false &&
            (account_number.length < 10 || account_number.length > 10) && (
              <p className='error-msg'>Invalid Account Number</p>
            )}
          {name && (
            <div className='input'>
              <Inputfield
                fieldname='name'
                outline
                value={name}
                readOnly
                onTextChange={handleChange}
              />
              {submitted && !name && (
                <p className='error-msg'>Beneficiary name is required</p>
              )}
            </div>
          )}
          {bank_code && !name && (
            <p>
              <b> Validate Account Number to Proceed</b>
            </p>
          )}
          <div className='input'>
            <Inputfield
              fieldname='amount'
              outline
              inputType='number'
              value={amount}
              placeholder='Enter Amount between 100 - 10,000,000'
              readOnly={!name ? true : false}
              onTextChange={handleChange}
            />
            {submitted && !amount && (
              <p className='error-msg'>Transfer amount is required</p>
            )}
            {submitted && amount && parseInt(amount) > 10000000 && (
              <p className='error-msg'>Maximum transfer amount is #1000000</p>
            )}
            {submitted && amount && parseInt(amount) < 100 && (
              <p className='error-msg'>Minimum transfer amount is #100</p>
            )}
          </div>
          <div className='input'>
            <Inputfield
              fieldname='reason'
              outline
              value={reason}
              readOnly={!name ? true : false}
              placeholder='reason (Optional)'
              onTextChange={handleChange}
            />
          </div>
          <br />
          <Button
            loading={loading}
            disabled={!name ? true : false}
            full
            dark
            text='Continue'
          />
        </div>
      </TransferContainer>
    </Container>
  );
};
export default Index;
