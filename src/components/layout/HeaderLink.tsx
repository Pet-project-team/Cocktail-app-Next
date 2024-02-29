import React, { MouseEventHandler } from 'react';
import Link from 'next/link';

type HeaderLinkProps = {
  linkName: string;
  linkPath: string;
  hasHandle?: boolean;
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function HeaderLink({
  linkName,
  linkPath,
  hasHandle,
  handleClick,
}: HeaderLinkProps) {
  return (
    <li className='nav_el flex p-0 text-[20px]'>
      <Link
        href={linkPath}
        className={
          'flex items-center ' +
          'text-primary-text no-underline font-normal hover:text-highlighted ' +
          'h-[64px] leading-[22px] border-y-2 border-transparent ' +
          'transition-all duration-300 '
          // (isActive ? 'border-b-highlighted text-highlighted' : '')
        }
        onClick={hasHandle ? handleClick : undefined}
      >
        {linkName}
      </Link>
    </li>
  );
}
