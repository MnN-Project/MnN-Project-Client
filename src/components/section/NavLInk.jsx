"use client";
import {cn} from "@/libs/utils";
import {useState, useEffect} from "react";

export const NavLink = () => {
    const [topValue, setTopValue] = useState(-121);

    useEffect(() => {
        function handleScroll() {
            const newTopValue = -121 - window.scrollY;
            setTopValue(newTopValue >= 0 ? newTopValue : 0);
        }

        function handleScrollToTop() {
            if (window.scrollY === 0) {
                setTopValue(-121);
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollToTop);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollToTop);
        };
    }, []);

    return (
        <>
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
        <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
          Manufacturing & Processing Machinery
        </span>
                </a>
                <div
                    className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`}
                    style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* first */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
        <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
          Consumer Electronics 
        </span>
                </a>
                <div
                    className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`}
                    style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* second */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Component & Industrial Equipment
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Three */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Electrical & Electronics
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Four */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Construction & Decoration
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* five */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Light Industry
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Six */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Motorcycle Parts & Accessories
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Seven */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Accessories and Apparels
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Eight */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Lights & Lighting
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Nine */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Recreation
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Ten */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Transportation
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* eleven */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Arts & Crafts
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Twelve */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Medicine & Health
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* Thirteen */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Printing & Packaging
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* fourteen */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3 hover:text-green">
                    <span className={cn("text-dark py-3xs group-hover:text-green transition-colors duration-150")}>
                      Computer Products
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* fifteen */}
            <li className={cn(`transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs`)}>
                <a href="#" className="block whitespace-nowrap text-sm group py-1.3">
                    <span className={cn("text-blue py-3xs transition-colors duration-150")}>
                      More Categories
                    </span>
                </a>
                <div className={`hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto`} style={{top: `${topValue}px`}}>
                    <div className="-mx-2xs">
                        <div className="flex flex-col">
                            <div className="flex">
                                {/* line child */}
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Agriculture
                                            Machinery</h3>
                                        <a href="#" className="capitalize pb-2xs">Agricultural Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Feed Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Live Stock Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Tiller</a>
                                        <a href="#" className="capitalize pb-2xs">Harvesting Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                    <div className="text-sm h-[181px] px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Machine
                                            Tools</h3>
                                        <a href="#" className="capitalize pb-2xs">CNC Machine Tools</a>
                                        <a href="#" className="capitalize pb-2xs">Lathe</a>
                                        <a href="#" className="capitalize pb-2xs">Milling Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Grinding Machine</a>
                                        <a href="#" className="capitalize pb-2xs">Drilling Machine</a>
                                    </div>
                                </div>
                                <div className="w-1/3 px-2xs">
                                    <div className="text-sm px-2xs">
                                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs">Other
                                            Machinery & Parts</h3>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Foods Beverages and
                                            Ce...</a>
                                        <a href="#" className="capitalize pb-2xs">Metallic Processing Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Laser Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Mould</a>
                                        <a href="#" className="capitalize pb-2xs">Textile Machinery & Parts</a>
                                        <a href="#" className="capitalize pb-2xs">Paper Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Chemical Equipment & Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Cutting & Fold-Bend Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Mixing Equipment</a>
                                        <a href="#" className="capitalize pb-2xs">Rubber Machinery</a>
                                        <a href="#" className="capitalize pb-2xs">Machinery For Garment,Shoes, A...</a>
                                        <a href="#" className="capitalize pb-2xs">Crushing and Culling Machine</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium mb-2xs text-blue">More Categories</a>
                        </div>
                    </div>
                </div>
            </li>
            {/* sixteen */}
        </>
    );
};

export default NavLink;
