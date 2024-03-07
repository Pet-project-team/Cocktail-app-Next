'use client';
import React from 'react';

interface CocktailPageTabProps {
  tabName: string;
  comparedTab: number;
  tabValue: number;
  setComparedTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function CocktailPageTab({
  tabName,
  comparedTab,
  tabValue,
  setComparedTab,
}: CocktailPageTabProps) {
  return (
    <button
      className={
        'nav-info-button box-border h-[36px] flex cursor-pointer transition-all duration-300 text-p/[150%] m-auto hover:text-main-600' +
        ' ' +
        (comparedTab === tabValue
          ? 'border-b-2 border-b-main-600 text-main-600'
          : 'text-black/85')
      }
      type='button'
      onClick={() => {
        setComparedTab(tabValue);
      }}
    >
      {tabName}
    </button>
  );
}
