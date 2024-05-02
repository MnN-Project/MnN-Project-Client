import { TbTargetArrow } from "react-icons/tb";
const Aside = ({ children }) => {
  return (
    <aside className="flex-auto basis-1/4 relative hidden lg:block">
      <div className="pl-s">
        <div className="mb-2xs">
          <h2 className="font-bold text-slate-900 text-u-sm">You May Like</h2>
        </div>
        <ul className="max-h-120 overflow-hidden space-y-2">{children}</ul>
        <div className="mt-xs">
          <span className="text-slate-500 text-sm">No desirable products?</span>
          <a
            href="#"
            className="align-middle h-9 px-xs cursor-pointer text-green border border-green rounded-[3px] mt-1.3 w-full text-xs xl:text-sm flex items-center justify-center hover:text-white hover:bg-green transition-colors delay-100 ease-linear"
          >
            <TbTargetArrow className="inline-block mr-1.3 " />
            Post Your Request Now
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
