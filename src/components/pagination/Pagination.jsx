const Pagination = () => {
    return (
        <div className="flex w-full flex-wrap items-center number per-page mt-s mb-[60px]">
            <div className="inline-block text-xs nmber_per_page px-2xs">
                Show:
                <a href="#" className="px-2">10</a>
                <i>|</i>
                <a href="#" className="px-2 font-semibold text-green">30</a>
                <i>|</i>
                <a href="#" className="px-2">50</a>
            </div>
            <div
                className="2xs:mt-0 flex flex-1 text-xs pagination_num intems-center space-x-2 mt-s sm:ml-[32px] lg:text-sm xl:ml-16">
                <strong className="block px-2 font-semibold leading-[28px] text-green">1</strong>
                <a href="#"
                   className="block rounded-sm border px-2 leading-[28px] h-[28px] bg-light-gray border-dark-gray">2</a>
                <a href="#"
                   className="block rounded-sm border px-2 leading-[28px] h-[28px] bg-light-gray border-dark-gray">3</a>
                <a href="#"
                   className="block rounded-sm border px-2 leading-[28px] h-[28px] bg-light-gray border-dark-gray">4</a>
                <strong className="block px-2 leading-[28px]">...</strong>
                <a href="#"
                   className="block rounded-sm border px-2 leading-[28px] h-[28px] bg-light-gray border-dark-gray">246</a>
                <a href="#"
                   className="block rounded-sm border px-2 font-semibold text-white transition-colors duration-200 leading-[28px] h-[28px] bg-green border-gray hover:bg-light-green">Next <i
                    className="text-sm">&#8594;</i></a>
            </div>
        </div>
    )
};

export default Pagination;