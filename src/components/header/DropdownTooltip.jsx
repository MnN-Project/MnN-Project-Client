import { cn } from "@/libs/utils";
const DropdownTooltip = ({ children, className }) => {
  return (
    <div className={cn(`px-3.7 text-sm`, className)}>
      <div className="wrapper">
        <div className="relative inline-block group">{children}</div>
      </div>
    </div>
  );
};

export default DropdownTooltip;
