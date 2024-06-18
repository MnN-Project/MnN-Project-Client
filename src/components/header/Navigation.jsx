import Dropdown from "./Dropdown";
import {cn} from "@/libs/utils";

const Navigation = ({sticky}) => {
    return (
        <nav className="flex w-full items-start">
            <div className={`${sticky ? 'w-full': 'basis-[587px] sm:basis-full'}`}>
                <div className="mx-auto">
                    <div className="mb-5 rounded-3xl border-2 border-green">
                        <form>
                            <div className="flex items-center justify-between h-8.5">
                                <div className="relative hidden h-full border-r-2 border-green md:block">
                                    <div className="relative h-full group">
                                        <div
                                            className="relative inline-flex h-full cursor-pointer items-center pl-5 pr-2.5 pb-0.5">
                                            Products
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="inline-block h-4 w-4 transition-transform duration-200 ease-linear ml-1.3 group-hover:rotate-180"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </div>
                                        {/* search dropdown */}
                                        <div
                                            className="absolute top-full left-0 z-40 hidden min-w-full overflow-hidden whitespace-normal rounded-lg bg-white text-base leading-relaxed shadow-md outline-none transition-all duration-300 text-dark w-34 group-hover:block">
                                            <dl className="text-sm pb-1.3">
                                                <dd className="px-2.5 py-0.5 hover:bg-gray">
                                                    <a href="#"> Products</a>
                                                </dd>
                                                <dd className="px-2.5 py-1.3 hover:bg-gray">
                                                    <a href="#"> Suppliers</a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                {/* input */}
                                <div className="h-full flex-auto text-sm">
                                    <div className="relative h-full pb-0.5">
                                        <input
                                            className="h-full w-full overflow-hidden text-ellipsis border-0 bg-transparent align-middle placeholder:text-sm text-slate-500 pr-l pl-2.5 placeholder:text-gray focus:ring-0"
                                            placeholder="Search Products"
                                        />
                                       
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="h-full shrink-0 rounded-r-3xl bg-green -my-0.5 -mr-0.5">
                                    <button
                                        className="inline-flex h-full cursor-pointer items-center justify-center border-0 w-16.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="inline-block h-6 w-6 text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* second nav */}
            <div className={cn(`hidden flex-1 justify-end md:flex items-center`)}>
                <Dropdown sticky={sticky}/>
            </div>
        </nav>
    );
};

export default Navigation;
