import { TfiMenuAlt } from "react-icons/tfi";
const NavList = ({ children }) => {
  return (
    <nav className="basis-1/4 relative hidden lg:block"> {/*removed [flex-auto] */}
      <div className="relative pr-s">
        <a href="#">
          <span className="text-0">
            <TfiMenuAlt className="inline-block font-extralight mr-1.3 -mt-1.25" />
            <strong>Categories</strong>
          </span>
        </a>
        <ul className="pt-3.7">{children}</ul>
      </div>
    </nav>
  );
};

export default NavList;
