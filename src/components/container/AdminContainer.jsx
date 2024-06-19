
import React, {useState} from 'react';
import {cn} from "@/libs/utils";
import Logo from "@/assets/svg/logo.svg";
import Dashboard from "@/assets/svg/dashboard.svg";
import Layout from "@/assets/svg/layout.svg";
import Chat from "@/assets/svg/chat.svg";
import Documentation from "@/assets/svg/documentation.svg";
import Customize from "@/assets/svg/customize.svg";
import Search from "@/assets/svg/search.svg";
import Setting from "@/assets/svg/setting.svg";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/arrow-right.svg";
import Notification from "@/components/Notification/Notification";
import ProfileMenu from "@/components/Notification/ProfileMenu";


const ButtonNavLink = ({children, tooltipText, active}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="flex h-16 w-full items-center justify-center relative">
            <span></span>
            <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                type="button"
                className={cn(`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-30 hover:bg-green/10 text-green`, {
                    'bg-green/15': active
                })}>
                {children}
            </button>
            {showTooltip && (
                <div
                    className="tooltip text-xs visible w-[100px] text-white bg-green text-center rounded-md p-1 absolute z-10 -right-[90px] top-1/2 -translate-y-1/2">
                    {tooltipText}
                </div>
            )}
        </div>
    );
};

const DropdownListItem = () => {
    const [dropdowns, setDropdowns] = useState([
        {id: 1, isOpen: false, label: 'Personal', subItems: ['Profile', 'my sales', 'Expected revenue']},
        {id: 2, isOpen: false, label: 'Finance', subItems: ['Last Month', 'Reoccurring Rates', 'Payout']},
        {id: 3, isOpen: false, label: 'Business', subItems: ['Flight', 'Status Board', 'Company Board']}
    ]);
    const [activeId, setActiveId] = useState(null);

    const handleToggle = (id) => {
        setDropdowns(dropdowns.map(dropdown =>
            dropdown.id === id ? {...dropdown, isOpen: !dropdown.isOpen} : dropdown
        ));
        setActiveId(id);
    };

    return (
        <ul>
            {dropdowns.map(dropdown => (
                <li key={dropdown.id} className="mb-1 group min-h-[2rem]">
                    <a href="#" className="relative flex items-center justify-between top-0.5"
                       onClick={() => handleToggle(dropdown.id)}>
                        <span
                            className="relative inline-flex items-center gap-2 font-sans text-sm hover:text-green transition-colors duration-300 text-dark-gray">
                           {activeId === dropdown.id &&
                               <span className="bg-light-green absolute -start-3 top-2 h-1 w-1 rounded-full"></span>}
                            <span className="capitalize">{dropdown.label}</span>
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className={`h-4 w-4 transition-transform duration-200 ${dropdown.isOpen ? 'rotate-90' : '-rotate-90'}`}
                            viewBox="0 0 24 24">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m15 18l-6-6 6-6"
                            />
                        </svg>
                    </a>
                    <div
                        className={`transition-all duration-150 ${dropdown.isOpen ? 'max-h-max overflow-visible opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
                    >
                        <ul className="py-2">
                            {dropdown.subItems.map((subItem, index) => (
                                <li key={index} className="flex h-8 w-full items-center">
                                    <a href="#"
                                       className="flex w-full items-center transition-colors duration-300 text-dark-gray ps-3 hover:text-green focus:text-green">
                                        <span className="font-sans text-xs">{subItem}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    )
}
const AdminContainer = ({children}) => {
    const [sidepanel, setSidepanel] = useState(false);
    const handleSidepanel = () => {
        return setSidepanel(!sidepanel);
    }
    return (
        <div className="pb-20 bg-light-gray">
            <div className="pointer-events-none fixed top-0 flex h-full start-0 z-[60] xl:z-10">
                <div
                    className={`pointer-events-auto relative z-20 flex h-full flex-col border-r bg-white transition-all duration-300 border-green w-[80px] ${!sidepanel && '-translate-x-full lg:translate-x-0'}`}>
                    <div className="flex h-16 w-full items-center justify-center">
                        <a href="#" className="flex items-center justify-center">
                            <Logo className="h-10 text-green"/>
                        </a>
                    </div>

                    <div>
                        <div className="flex h-16 w-full items-center justify-center">
                            <ButtonNavLink tooltipText="Dashboard" active>
                                <Dashboard className="w-5 h-5"/>
                            </ButtonNavLink>
                        </div>
                        <div className="flex h-16 w-full items-center justify-center relative">
                            <ButtonNavLink tooltipText="Layout">
                                <Layout className="w-5 h-5"/>
                            </ButtonNavLink>
                        </div>
                        <div className="flex h-16 w-full items-center justify-center">
                            <ButtonNavLink tooltipText="Chat">
                                <Chat className="w-5 h-5"/>
                            </ButtonNavLink>
                        </div>
                        <div className="flex h-16 w-full items-center justify-center">
                            <ButtonNavLink tooltipText="Documentation">
                                <Documentation className="w-5 h-5"/>
                            </ButtonNavLink>
                        </div>
                        {/*   end*/}
                    </div>

                    <div className="mt-auto">
                        <div className="flex h-16 w-full items-center justify-center">
                            <ButtonNavLink tooltipText="Customize">
                                <Customize className="w-5 h-5"/>
                            </ButtonNavLink>
                        </div>
                        <div className="flex h-16 w-full items-center justify-center">
                            <ButtonNavLink tooltipText="Search">
                                <Search className="w-5 h-5"/>
                            </ButtonNavLink>
                        </div>
                        <div className="flex h-16 w-full items-center justify-center">
                            <ButtonNavLink tooltipText="Setting">
                                <Setting className="w-5 h-5"/>
                            </ButtonNavLink>
                        </div>
                        <div className="flex h-16 w-full items-center justify-center">
                            <span></span>
                            <div className="inline-flex items-center justify-center text-right group">
                                <div className="relative h-10 w-10 text-left">
                                    <button
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary-500 group-hover:ring-offset-4 dark:ring-offset-muted-800"
                                        id="headlessui-menu-button-33"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                    >
                                        <div
                                            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full">
                                            <Image
                                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                                                className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                                alt="avatar"
                                                fill
                                                sizes="100%"
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*    end*/}
                    </div>
                </div>
                {/* First sidebar */}
                <div
                    className={`pointer-events-auto ${sidepanel ? 'w-[220px]' : 'w-[220px] translate-x-[calc(-100%_-_80px)]'} relative z-10 h-full border-r bg-white transition-all duration-300 border-green`}>
                    <div className="flex h-screen flex-col">
                        <div className="flex h-16 w-full items-center px-6">
                            <div className="text-lg font-light capitalize font-heading text-dark">
                                Dashboard
                            </div>
                            <button
                                onClick={handleSidepanel}
                                type="button"
                                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 text-dark ms-auto hover:bg-muted-100 hover:text-muted-600 xl:hidden"
                            >
                                <div
                                    className={`relative h-10 w-10 rounded-full flex items-center justify-center hover:bg-green/20 transition-colors duration-300`}>
                                    <ArrowLeft className="rotate-180 h-5 w-5 stroke-dark-gray"/>
                                </div>
                            </button>
                        </div>
                        {/*end*/}
                        <div className="relative h-full w-full overflow-y-auto slimscroll">
                            <div className="px-6 pb-8">
                                <DropdownListItem/>
                            </div>
                            <div
                                className="pointer-events-none fixed bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent w-[212px] dark:from-muted-800"></div>
                        </div>
                    </div>
                </div>
                {/* Second sidebar menu right*/}
            </div>
            <div onClick={handleSidepanel}
                 className={`bg-green/10 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden ${sidepanel ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}></div>
            {/* complete left navbar*/}
            <div
                className={`bg-light-gray relative min-h-screen w-full overflow-x-hidden px-2 sm:px-4 transition-all duration-300 xl:px-10 ${sidepanel ? 'xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]' : 'xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]'}`}>
                <div className="mx-auto w-full max-w-7xl">
                    <div className="relative z-50 mb-5 flex h-16 items-center gap-2">
                        <button type="button" className="flex h-10 w-10 items-center justify-center -ms-3"
                                onClick={handleSidepanel}>
                            <div className={`${sidepanel && 'scale-90'} relative h-5 w-5`}>
                                <span
                                    className={`${sidepanel && '-rotate-45 rtl:rotate-45 top-1 max-w-[75%]'}  top-0.5 bg-green absolute block h-0.5 w-full transition-all duration-300`}></span>
                                <span
                                    className={`${sidepanel && 'opacity-0 translate-x-4'} bg-green absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300`}></span>
                                <span
                                    className={`${sidepanel && 'rotate-45 rtl:-rotate-45 bottom-1 max-w-[75%]'} bottom-0 bg-green absolute block h-0.5 w-full transition-all duration-300`}></span>
                            </div>
                        </button>
                        <h1 className="font-heading text-2xl font-light leading-normal text-dark-gray hidden md:block">Ecommerce</h1>
                        <div className="ms-auto"></div>
                        <div className="flex items-center gap-2 h-16">
                            <div className="group inline-flex items-center justify-center text-right">
                                <div className="relative h-9 w-9 text-left">
                                    <Notification/>
                                </div>
                            </div>
                            {/*Notification button*/}
                            {/*<button type="button"*/}
                            {/*        className="border-light-gray hover:ring-gray flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">*/}
                            {/*    <svg*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        aria-hidden="true"*/}
                            {/*        role="img"*/}
                            {/*        className="icon text-dark-gray h-5 w-5"*/}
                            {/*        viewBox="0 0 256 256">*/}
                            {/*        <g fill="currentColor">*/}
                            {/*            <path*/}
                            {/*                d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32Zm64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32Z"*/}
                            {/*                opacity=".2"*/}
                            {/*            />*/}
                            {/*            <path*/}
                            {/*                d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40Zm0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Z"*/}
                            {/*            />*/}
                            {/*        </g>*/}
                            {/*    </svg>*/}
                            {/*</button>*/}
                            {/*Activity menu Button*/}
                            <div className="group inline-flex items-center justify-center text-right">
                                <div className="relative h-9 w-9 text-left">
                                    <ProfileMenu/>
                                </div>
                            </div>
                            {/* Profile */}
                        </div>
                    </div>
                </div>
                    {children}
            </div>
            {/* end */}
        </div>
    )
};

export default AdminContainer;