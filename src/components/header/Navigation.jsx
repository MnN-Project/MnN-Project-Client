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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="absolute inline-block h-6 w-6 cursor-pointer text-lg right-[15px] text-dark-gray top-[9px] hover:text-green"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                            />
                                        </svg>
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
