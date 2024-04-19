import { cn } from "../../libs/utils";
const Container = ({ id, className, children }) => {
  return (
    <section className="relative z-10 container-wrapper">
      <div
        className={cn(
          "bg-white py-s mt-s px-m flex shadow-sm relative",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
