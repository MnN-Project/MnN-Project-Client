import {TbTargetArrow} from "react-icons/tb";

const Aside = ({children}) => {
    return (
        <aside className="relative hidden flex-auto basis-1/4 lg:block">
            <div className="pl-s">
                <div className="mb-2xs">
                    <h2 className="font-bold text-slate-900 text-u-sm">You May Like</h2>
                </div>
                <ul className="overflow-hidden max-h-120 space-y-2">{children}</ul>
                <div className="mt-xs">
                    <span className="text-sm text-slate-500">No desirable products?</span>
                    <a href="#" className="flex h-9 w-full cursor-pointer items-center justify-center border align-middle text-xs transition-colors delay-100 ease-linear px-xs text-green border-green rounded-[3px] mt-1.3 hover:bg-green hover:text-white xl:text-sm">
                        <TbTargetArrow className="inline-block mr-1.3"/>
                        Post Your Request Now
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
