import { cn } from "@/libs/utils";
export const NavLink = ({ id, className, text, href, hyperLink }) => {
  return (
    <li
      key={id}
      className={cn(
        "transition-colors hover:bg-light-gray group py-1.3 hover:text-green duration-200 ease-out -mr-s -ml-2xs pr-s pl-2xs",
        className
      )}
    >
      <a href={href} className="block text-sm whitespace-nowrap">
        <span
          className={cn(
            "text-dark py-3xs group-hover:text-green transition-colors duration-150",
            {
              "text-blue py-3xs group-hover:text-green transition-colors duration-150":
                hyperLink,
            }
          )}
        >
          {text}
          {hyperLink && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </span>
      </a>
    </li>
  );
};

export default NavLink;
