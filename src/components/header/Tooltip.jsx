import { cn } from "@/libs/utils";
const Tooltip = ({ children, className }) => {
  return (
    <div className={cn("pt-2xs absolute z-40 right-0 top-full", className)}>
      <span className="right-[34.1333px] top-[5px] border-t-0 border-b-white absolute border-6 border-transparent"></span>
      <div className="inline-block w-full p-3.7 rounded-md shadow-box bg-white">
        <div className="w-full text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Tooltip;
