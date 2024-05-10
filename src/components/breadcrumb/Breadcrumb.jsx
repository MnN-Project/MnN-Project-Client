import { cn } from "../../libs/utils";



const Breadcrumb = ({id, className, children, small}) => {

  return (
    <div className="relative container-wrapper block">
      <div
        className={cn(
          `${className}`,
          { "py-1 px-2xs lg:px-s flex gap-4 relative md:px-m": small },
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}



export default Breadcrumb
