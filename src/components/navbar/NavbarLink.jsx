'use client';

import { Link } from 'react-router-dom';

const NavBarLink = ({ text, className, to }) => {
  return (
    <div className={`flex-[0_0_auto] whitespace-nowrap py-2xs pr-m ${className}`}>
      <div className="relative inline-block">
        <span>
          <Link to={to} className="transition-colors duration-150 ease-out hover:text-green">
            {text}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NavBarLink;
