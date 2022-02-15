/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';

const Container = styled.div`
  width: ${({ full }) => (full ? '100%' : '100%')};
  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.8rem;

    .icon {
      position: absolute;
      right: 0;
      top: 0.9em;
      // transform: translateY(70%);
      margin-right: 1em;
      // width: 1rem;
      cursor: pointer;
      color: #fff;
    }

    input {
      padding: 0 3.5em 0 1em;
      height: 100%;
      border-radius: 3px;
      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      letter-spacing: 0.018em;
      width: 100%;

      ${(props) => css`
        ${props.primary &&
        css`
          border: 1px solid #fff;
          background: transparent;
          color: #fff;
        `}

        ${props.outline &&
        css`
          border: 1px solid #e5e5e5 !important;
          background: transparent;
          color: #000;

          :focus {
            outline: none;
            border: 1px solid #bdbdbd !important;
          }
        `}
      `}

      :focus {
        outline: none;
        border: 2px solid #fff;
      }

      ::placeholder {
        color: #bdbdbd;
        opacity: 0.7;
      }

      :-ms-input-placeholder {
        color: #bdbdbd;
        opacity: 0.7;
      }

      ::-ms-input-placeholder {
        color: #bdbdbd;
        opacity: 0.7;
      }
    }
  }
`;
const Index = ({
  full,
  primary,
  outline,
  inputType,
  placeholder,
  onTextChange,
  fieldname,
  value,
  readOnly,
}) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Container
      full={full}
      primary={primary}
      outline={outline ? outline : undefined}
    >
      <div className='group'>
        {inputType === 'password' ? (
          togglePassword ? (
            <BsEye className='icon' onClick={() => setTogglePassword(false)} />
          ) : (
            <BsEyeSlashFill
              className='icon'
              onClick={() => setTogglePassword(true)}
            />
          )
        ) : (
          ''
        )}
        {inputType === 'password' ? (
          <input
            name={fieldname}
            type={!togglePassword ? 'password' : 'text'}
            placeholder={placeholder}
            onChange={onTextChange}
          />
        ) : inputType === 'number' ? (
          <input
            name={fieldname}
            type='number'
            min='100'
            max='10000000'
            placeholder={placeholder}
            onChange={onTextChange}
            readOnly={readOnly ? true : false}
          />
        ) : (
          <input
            name={fieldname}
            type={inputType}
            placeholder={placeholder}
            onChange={onTextChange}
            value={value}
            readOnly={readOnly ? true : false}
          />
        )}
      </div>
    </Container>
  );
};

export default Index;
