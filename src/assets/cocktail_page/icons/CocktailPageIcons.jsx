import React from 'react';
import Image from 'next/image';

import previousIcon from './previous-icon.svg';
import nextIcon from './next-icon.svg';

import twitterIcon from './twitter.svg';
import facebookIcon from './facebook.svg';
import copyIcon from './content_copy.svg';

import cartIcon from './cart.svg';
import addIcon from './addNew.svg';

//nav icons
export function PreviousIcon() {
  return (
    <Image className='transition-all duration-300' src={previousIcon} alt='' />
  );
}
export function NextIcon() {
  return (
    <Image className='transition-all duration-300' src={nextIcon} alt='' />
  );
}

//share icons
export function TwitterIcon() {
  return <Image src={twitterIcon} alt='' />;
}
export function FacebookIcon() {
  return <Image src={facebookIcon} alt='' />;
}
export function CopyIcon() {
  return <Image src={copyIcon} alt='' />;
}

//ingredients links icons

export function CartIcon() {
  return <Image src={cartIcon} alt='' />;
}
export function AddIcon() {
  return (
    <Image
      className='add-button__Image w-[12px] h-[12px]'
      src={addIcon}
      alt=''
    />
  );
}
