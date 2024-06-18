import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";

const Notification = () => {
    const [showNotification, setShowNotification] = useState(false);
    const notifyRef = useRef(null);
    const handleShowNotification = () => {
        return setShowNotification(!showNotification);
    }
    const handleCloseNotification = (event) => {
        if (notifyRef.current && !notifyRef.current.contains(event.target)) {
            setShowNotification(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseNotification);
        document.addEventListener('touchstart', handleCloseNotification);
        return () => {
            document.removeEventListener('mousedown', handleCloseNotification);
            document.removeEventListener('touchstart', handleCloseNotification);
        };
    }, []);

    return (
        <>
            <button onClick={handleShowNotification} type="button"
                    className="group-hover:ring-gray inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
                                                      <span
                                                          className="border-gray flex h-9 w-9 items-center justify-center rounded-full border bg-white">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              aria-hidden="true"
                                                              role="img"
                                                              className="icon text-dark-gray h-5 w-5"
                                                              viewBox="0 0 256 256">
                                                          <g fill="currentColor">
                                                            <path
                                                                d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12Z"
                                                                opacity=".2"
                                                            />
                                                            <path
                                                                d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Zm-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"/>
                                                          </g>
                                                          </svg>
                                                      </span>
            </button>
            {showNotification &&
                <div ref={notifyRef} role="menu" tabIndex="0"
                     className="divide-gray border-gray absolute end-0 mt-2 w-72 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none">
                    <div className="p-4" role="none">
                        <div className="relative flex items-center justify-between" role="none"><h4
                            className="font-heading text-dark text-xs uppercase"
                            role="none"> Notifications </h4>
                            <a aria-current="page" href="#" className="text-green text-sm font-semibold"
                               role="none"> View
                                All </a>
                        </div>
                    </div>
                    <div className="p-4" role="none">
                        <div role="menuitem" tabIndex="-1">
                            <a aria-current="page" href="#"
                               className="router-link-active router-link-exact-active group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                                <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                    <Image fill sizes="100%"
                                           src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                           className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                           alt=""/>
                                </div>
                                <div className="ms-2"><h6
                                    className="font-heading text-darktext-xs font-semibold leading-tight"> Helen
                                    Mariakis <span
                                        className="text-dark-gray font-normal"> left a comment </span>
                                </h6><p className="text-dark-gray font-sans text-xs"> 1 hour ago </p></div>
                            </a></div>
                        <div role="menuitem" tabIndex="-1">
                            <a aria-current="page" href="#"
                               className="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                                <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                    <Image fill sizes="100%"
                                           src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                           className="max-w-full rounded-full object-cover shadow-sm" alt=""/>
                                </div>
                                <div className="ms-2">
                                    <h6 className="font-heading text-dark text-xs font-semibold leading-tight"> Clarissa
                                        Perez
                                        <span
                                            className="text-muted-500 dark:text-muted-400 font-normal"> uploaded a file </span>
                                    </h6>
                                    <p className="text-muted-400 font-sans text-xs"> 2 hours ago </p></div>
                            </a>
                        </div>
                        <div role="menuitem" tabIndex="-1"><a aria-current="page" href="#"
                                                              className="router-link-active router-link-exact-active group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                            <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                <Image fill sizes="100%"
                                       src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                       className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                       alt=""/>
                            </div>
                            <div className="ms-2"><h6
                                className="font-heading text-dark text-xs font-semibold leading-tight"> Mike
                                Miller <span
                                    className="text-dark-gray  font-normal"> left a comment </span></h6>
                                <p className="text-dark-gray font-sans text-xs"> 3 hours ago </p></div>
                        </a></div>
                        <div role="menuitem" tabIndex="-1"><a aria-current="page" href="#"
                                                              className="router-link-active router-link-exact-active group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                            <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                <Image fill sizes="100%"
                                       src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                       className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                       alt=""/>
                            </div>
                            <div className="ms-2"><h6
                                className="font-heading text-dark text-xs font-semibold leading-tight"> Lana
                                Henriks <span
                                    className="text-dark-gray dark:text-muted-400 font-normal"> sent you a message </span>
                            </h6><p className="text-dark-gray font-sans text-xs"> Yesterday </p></div>
                        </a></div>
                        <div role="menuitem" tabIndex="-1"><a aria-current="page" href="#"
                                                              className="router-link-active router-link-exact-active group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                            <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                <Image fill sizes="100%"
                                       src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                                       className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                       alt=""/>
                            </div>
                            <div className="ms-2"><h6
                                className="font-heading text-dark text-xs font-semibold leading-tight"> Dan
                                Walker <span
                                    className="text-dark-gray font-normal"> left a comment </span></h6>
                                <p className="text-dark-gray font-sans text-xs"> Yesterday </p></div>
                        </a></div>
                    </div>
                </div>}
        </>
    );
}

export default Notification;