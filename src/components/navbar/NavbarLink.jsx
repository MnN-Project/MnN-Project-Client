"use client";
const NavBarLink = ({text, className}) => {
    return (
        <div className={`flex-[0_0_auto] whitespace-nowrap py-2xs pr-m ${className}`}>
            <div className="relative inline-block">
              <span>
                <a href="#" className="transition-colors duration-150 ease-out hover:text-green">
                  {text}
                </a>
              </span>
            </div>
        </div>
    );
};

export default NavBarLink;
