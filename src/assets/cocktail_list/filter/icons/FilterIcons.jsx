import React from 'react';
import Image from 'next/image';
//icons
import searchIcon from './searchIcon.svg';
import clearIcon from './clearFilter.svg';
import filterIcon from './filterIcon.svg';
import addIcon from './addNew.svg';

export function SearchIcon() {
  return (
    <Image id='search-icon' className='w-[30px]' src={searchIcon} alt='' />
  );
}
export function ClearIcon() {
  return <Image src={clearIcon} alt='' />;
}
export function FilterIcon() {
  return <Image src={filterIcon} alt='' />;
}
export function AddIcon() {
  return <Image src={addIcon} alt='' />;
}
