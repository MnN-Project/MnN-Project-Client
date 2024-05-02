import Dropdown from "./Dropdown";
import { cn } from "@/libs/utils";

const Navigation = ({ sticky }) => {
  return (
    <nav className="w-full flex items-start">
      <div className="grow">
        <div className="mx-auto">
          <div className="mb-5 border-2 border-green rounded-3xl">
            <form>
              <div className="flex items-center justify-between h-8.5">
                <div className="relative hidden md:block h-full border-r-2 border-green">
                  <div className="relative h-full group">
                    <div className="relative pr-2.5 pl-5 pb-0.5 cursor-pointer h-full inline-flex items-center">
                      Products
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 ml-1.3 inline-block group-hover:rotate-180 transition-transform duration-200 ease-linear"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    {/* search dropdown */}
                    <div className="rounded-lg overflow-hidden hidden group-hover:block shadow-md bg-white text-dark text-base leading-relaxed whitespace-normal outline-none transition-all duration-300 z-40 absolute top-full left-0 min-w-full w-34 ">
                      <dl className="pb-1.3 text-sm">
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
                <div className="flex-auto h-full text-sm">
                  <div className="relative h-full pb-0.5">
                    <input
                      className="pr-l pl-2.5 text-slate-500 w-full placeholder:text-gray placeholder:text-sm h-full bg-transparent overflow-hidden text-ellipsis align-middle focus:ring-0 border-0"
                      placeholder="Search Products"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 absolute right-[15px] text-dark-gray top-[9px] cursor-pointer text-lg inline-block hover:text-green"
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
                <div className="bg-green h-full shrink-0 rounded-r-3xl -my-0.5 -mr-0.5">
                  <button className="inline-flex w-16.5 h-full border-0 items-center justify-center cursor-pointer ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block text-white"
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
      <div className={cn(`hidden md:flex items-center`)}>
        <Dropdown sticky={sticky} />
      </div>
    </nav>
  );
};

export default Navigation;
