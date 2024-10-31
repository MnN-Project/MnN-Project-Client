import { TfiMenuAlt } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

export const NavList = ({ children }) => {
  return (
    <nav className="relative hidden basis-1/4 lg:block mt-3">
      <div className="pr-s">
        <Link to="/categories/Agricultural%20Produce">
          <span className="text-0">
            <TfiMenuAlt className="inline-block font-extralight mr-1.3 -mt-1.25" />
            <strong>Categories</strong>
          </span>
        </Link>
        <ul className="pt-3.7">{children}</ul>
      </div>
    </nav>
  );
};
