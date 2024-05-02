import Link from "next/link";
import { cn } from "@/libs/utils";
 
const NavHoverLink = ({ children, buttonText, className }) => {
  return (
    <Link
      href="/login"
      className={cn(
        "inline-flex flex-col transition-colors duration-150 ease-out items-center no-underline",
        className
      )}
    >
      {children}
      <div className={`text-sm`}>{buttonText}</div>
    </Link>
  );
};

export default NavHoverLink;
