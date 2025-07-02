import React from 'react';
import Image from 'next/image';
//icons
import close from './close.svg';
import signUp from './signUp.svg';
import google from './GoogleLogo.svg';
import facebook from './FacebookLogo.svg';
import clear from './clearInput.svg';
import person from './personAdd.svg';

export function CloseIcon() {
  return <Image src={close} alt='' />;
}
export function SignUpIcon() {
  return <Image src={signUp} alt='' />;
}
export function GoogleIcon() {
  return <Image src={google} alt='' />;
}
export function FacebookIcon() {
  return <Image src={facebook} alt='' />;
}

export function ClearIcon() {
  return <Image src={clear} alt='' />;
}

export function PersonAddIcon() {
  return <Image src={person} alt='' />;
}
