import React, { useState } from 'react';

import { PersonAddIcon, SignUpIcon } from '@/assets/header/icons/HeaderIcons';
import LogInInput from './signUp/LogInInput';
import GoogleAuthButton from './signUp/GoogleAuthButton';

export default function SignUp() {
  const [formRoute, setFormRoute] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onClickLoginBtn() {
    setFormRoute(false);
  }

  function onClickRegisterBtn() {
    setFormRoute(true);
  }

  async function submitHandler(event) {
    event.preventDefault;

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      // response.status === 201 && setFormRoute(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      id='sign-up-window'
      className='absolute top-[74px] right-0 z-[60]
                 w-[350px] p-[10px] rounded-[10px]  
                 flex flex-col items-center gap-[10px]
                 bg-white shadow-lg 
                 border border-main-600'
    >
      <div
        id='choose-btns'
        className='flex p-[10px] items-center gap-[10px] self-center'
      >
        <button
          className='choose-btn flex flex-col items-center gap-[10px] grow shrink-0 basis-0'
          id='logIn'
          type='button'
          onClick={() => onClickLoginBtn()}
        >
          <p
            className={
              (formRoute ? ' ' : 'highlighted-btn ') +
              'm-auto border-b-2 border-white text-black/85 hover:border-main-600'
            }
          >
            Log in
          </p>
        </button>
        <svg
          id='line'
          className='h-[27px] stroke-1 stroke-black/85'
          xmlns='http://www.w3.org/2000/svg'
          width='2'
          height='27'
          viewBox='0 0 2 27'
          fill='none'
        >
          <path d='M1 0V27' stroke='black' strokeOpacity='0.85' />
        </svg>
        <button
          className='choose-btn flex flex-col items-center gap-[10px] grow shrink-0 basis-0'
          id='register'
          type='button'
          onClick={() => onClickRegisterBtn()}
        >
          <p
            className={
              (formRoute ? 'highlighted-btn ' : ' ') +
              'm-auto border-b-2 border-white text-black/85 hover:border-main-600'
            }
          >
            Register
          </p>
        </button>
      </div>
      <p
        id='welcome-msg'
        className='m-auto text-center self-stretch
                text-black/85 text-p/[150%] not-italic font-bold '
      >
        {formRoute
          ? 'Sign up to continue with full access!'
          : 'Welcome back! Wanna get high tonight?'}
      </p>
      <GoogleAuthButton />
      <div className='flex items-center gap-[10px] self-stretch' id='hr'>
        <div className='hr__line w-40 h-[1.5px] bg-black/25'></div>
        <p id='hr__text' className='text-black/25'>
          OR
        </p>
        <div className='hr__line w-40 h-[1.5px] bg-black/25'></div>
      </div>
      <form action={submitHandler}>
        {formRoute && (
          <LogInInput
            inputType='text'
            name='nickname'
            content='Your Name'
            enteredValue={name}
            setEnteredValue={setName}
          />
        )}
        <LogInInput
          inputType='email'
          name='email'
          content='Email'
          enteredValue={email}
          setEnteredValue={setEmail}
        />
        <LogInInput
          inputType='password'
          name='password'
          content='Password'
          enteredValue={password}
          setEnteredValue={setPassword}
        />
        <button
          className='box-border h-[30px] py-0 px-[10px] rounded-[5px]
                    flex justify-center items-center gap-[10px]
                    text-p/[22px] text-white bg-main-600
                    transition-all duration-300 hover:bg-main-700'
          id='submit-btn'
          type='submit'
        >
          <p>{formRoute ? 'Create account' : 'Log in'}</p>
          {formRoute ? <PersonAddIcon /> : <SignUpIcon />}
        </button>
      </form>
    </div>
  );
}

/* <button
        id='facebook'
        className='box-border flex justify-center items-center self-center gap-[10px]
                   w-full h-[30px] py-0 px-[10px] rounded-[5px]
                   border border-main-600 bg-white
                   transition-all duration-300 
                 hover:border-main-700 hover:text-main-600
                   font-bold leading-[150%]'
        type='button'
      >
        <FacebookIcon />
        Sign Up With Facebook
      </button> */
