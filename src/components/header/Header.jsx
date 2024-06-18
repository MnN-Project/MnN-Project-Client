"use client";
import React, {useCallback, useEffect, useState} from "react";
import {cn} from "@/libs/utils";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Navbar from "../navbar/Navbar";
import ArrowLeft from "@/assets/svg/arrow-right.svg"
import HamburgerMenu from '@/assets/svg/hamburger-menu.svg';


const Header = ({className, ...props}) => {
    const [sidepanel, setSidepanel] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const [dropdowns, setDropdowns] = useState([
        {id: 1, isOpen: false, label: 'Overview', subItems: ['Overview', 'Order Details']},
        {id: 2, isOpen: false, label: 'Products', subItems: ['Overview', 'Products Details', 'Add Product']},
        {id: 3, isOpen: false, label: 'Business', subItems: ['Overview', 'Payouts']},
        {id: 4, isOpen: false, label: 'Classic'},
    ]);

    const handleSidepanel = () => {
        setSidepanel(!sidepanel);
        setDropdowns(dropdowns.map(dropdown => ({...dropdown, isOpen: false})));
        setActiveId(null);
    }

    const handleToggle = (id) => {
        setDropdowns(dropdowns.map(dropdown =>
            dropdown.id === id ? {...dropdown, isOpen: !dropdown.isOpen} : dropdown
        ));
        setActiveId(id);
    };

    const handleDropdownReset = useCallback((event) => {
        if (!event.target.closest('.menu-item')) {
            setDropdowns(dropdowns.map(dropdown => ({...dropdown, isOpen: false})));
            setActiveId(null);
        }
    }, [dropdowns]);

    useEffect(() => {
        if (sidepanel) {
            document.addEventListener('click', handleDropdownReset);
        } else {
            document.removeEventListener('click', handleDropdownReset);
        }
        return () => {
            document.removeEventListener('click', handleDropdownReset);
        };
    }, [sidepanel, handleDropdownReset]);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 123) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={cn(`pt-2 lg:pt-5 w-full bg-white container-wrapper ${className}`, {
                    "fixed top-0 right-0 left-0 z-40 shadow-md transition-all duration-200 ease-linear":
                    sticky
                })}
                {...props}
            >
                <div className="flex flex-col items-start lg:flex-row">
                    <div
                        className={cn(`flex justify-start items-center w-full lg:w-1/4 mb-3.7 lg:mb-0 lg:justify-start`)}>
                        <button onClick={handleSidepanel} className="p-2 mr-2 lg:hidden">
                            <HamburgerMenu className={`h-6`}/>
                        </button>
                        <Logo text="made in nigeria"/>
                    </div>
                    <Navigation sticky={sticky}/>
                </div>
                <Navbar sticky={sticky}/>
            </header>
            {/* Drawer*/}
            <div
                className={`bg-white w-[350px] transition-transform ${sidepanel ? 'translate-x-0' : 'translate-x-[-350px]'} fixed top-0 flex h-full start-0 z-[100]`}>
                <div className="flex relative h-screen flex-col w-full px-4">
                    <div className="flex items-center justify-between w-full py-[10px]">
                        <a href="#" className="font-bold text-2xl">Brand</a>
                        <button onClick={handleSidepanel} className={`cursor-pointer`}>
                            <ArrowLeft className={`w-6 h-6 rotate-180 stroke-green`}/>
                        </button>
                    </div>
                    {/* Collapse*/}
                    <div className="relative">
                        <div className="justify-between items-center flex-wrap flex w-full mx-auto">
                            <div className="basis-full grow">
                                <div className="overflow-hidden transition-all duration-300">
                                    <div className="overflow-y-auto overflow-x-hidden max-h-[75vh]">
                                        <div className="py-2">
                                            {dropdowns.map(item => (
                                                <>
                                                    {item.subItems ?
                                                        (<div className="mt-1">
                                                            {/*Link*/}
                                                            <button type="button"
                                                                    onClick={() => handleToggle(item.id)}
                                                                    className={`py-2 font-medium px-3 w-full text-start text-sm hs-dropdown-toggle flex gap-2 rounded-md hover:bg-light-gray ${activeId === item.id && 'bg-light-gray'}`}>
                                                                Products
                                                                <svg
                                                                    className={`w - 4 h-4 ms-auto transition-transform ${item.isOpen ? 'rotate-180' : '-rotate-90'}`}
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="m6 9 6 6 6-6"/>
                                                                </svg>
                                                            </button>
                                                            {/*End Link*/}

                                                            {/*Dropdown Menu*/}
                                                            <div
                                                                className={`${item.isOpen ? 'opacity-1 block' : 'opacity-0 hidden'} relative pt-1 ps-7 z-10 w-full block top-full text-sm transition-[opacity,margin] duration-150 after:h-[calc(100%-0.25rem)] after:bg-dark-gray`}>
                                                                {/*Link*/}
                                                                {item.subItems.map((subItem, index) => (
                                                                    <a key={index}
                                                                       className="group flex items-center px-3 py-2 border-l border-gray"
                                                                       href="#">
                                                                        {subItem}
                                                                    </a>
                                                                ))}
                                                                {/*End Link*/}

                                                            </div>
                                                            {/*End Dropdown Menu*/}
                                                        </div>)
                                                        :
                                                        (<a key={item.id} onClick={() => handleToggle(item.id)}
                                                            className="flex text-sm px-3 py-2 font-medium rounded-md gap-2 items-center w-full"
                                                            href="#">
                                                            {item.label}
                                                        </a>)

                                                    }
                                                </>

                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/*End Collapse*/}
                            </div>
                        </div>

                    </div>
                    {/*    End Collapse*/}

                </div>
            </div>
            <div onClick={handleSidepanel}
                 className={`bg-green/10 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden ${sidepanel ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}></div>
            {/*    End Drawer */}
        </>
    );
};

export default Header;
