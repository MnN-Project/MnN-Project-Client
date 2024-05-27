import {cn} from "@/libs/utils";

const Tooltip = ({children, className}) => {
    return (
        <div className={cn("pt-2xs absolute z-40 right-0 top-full", className)}>
            <span
                className="absolute border-t-0 border-transparent border-b-white right-[34.1333px] top-[5px] border-6"></span>
            <div className="inline-block w-full rounded-md bg-white p-3.7 shadow-box">
                <div className="w-full text-sm">{children}</div>
            </div>
        </div>
    );
};

export default Tooltip;
