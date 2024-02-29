import React from 'react';
import Image from 'next/image';
import logo from './logo.svg';

export default function Logo() {
  return (
    <Image className='w-[127px] h-[32px]' src={logo} alt='logo' height='32' />
  );
}
