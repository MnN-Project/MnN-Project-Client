import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";

const ProfileMenu = () => {
    const [showProfile, setShowProfile ] = useState(false);
    const profileRef = useRef(null);

    const handleShowProfile = () => {
        return setShowProfile(!showProfile);
    }
    const handleCloseProfile = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setShowProfile(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseProfile);
        document.addEventListener('touchstart', handleCloseProfile);
        return () => {
            document.removeEventListener('mousedown', handleCloseProfile);
            document.removeEventListener('touchstart', handleCloseProfile);
        };
    }, []);

    return (
        <>
            <button
                onClick={handleShowProfile}
                className="group-hover:ring-gray inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                 aria-haspopup="menu" aria-expanded="false">
                <div
                    className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
                    <Image
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                        className="max-w-full h-9 w-9 rounded-full shrink-0 object-cover shadow-sm dark:border-transparent"
                        width={36}
                        height={36}
                        alt="avatar"/>
                </div>
            </button>
            {showProfile &&
            <div ref={profileRef} role="menu" tabIndex="0"
                 className="divide-gray border-gray absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none">
                <div className="p-6 text-center" role="none">
                    <div className="relative mx-auto flex size-20 items-center justify-center rounded-full" role="none">
                        <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                               fill
                               sizes="100%"
                               className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                               alt=""/>
                    </div>
                    <div className="mt-3" role="none">
                        <h6 className="font-heading text-dark text-sm font-medium" role="none"> Godwin Macqueen </h6>
                        <p className="text-dark-gray mb-4 font-sans text-xs" role="none"> maya@tairo.io </p>
                        <a href="#" className="w-full text-xs text-dark-gray py-2 px-5 rounded-md border border-gray block" disabled={false} role="none"> Manage Account</a>
                    </div>
                </div>
                <div className="px-6 py-1.5" role="none">
                    <div role="menuitem" tabIndex="-1">
                        <a aria-current="page" href="#"
                           className="router-link-active router-link-exact-active group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                            <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                <Image src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                     fill sizes="100%"  className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                     alt=""/>
                            </div>
                            <div className="ms-2"><h6
                                className="font-heading text-dark text-xs font-medium leading-none"> Mike
                                Miller </h6><p className="text-dark-gray font-sans text-xs"> mike@tairo.io </p>
                            </div>
                        </a>
                    </div>
                    <div role="menuitem" tabIndex="-1">
                        <a aria-current="page" href="#"
                           className="router-link-active router-link-exact-active group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                            <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                <Image src="https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                   fill sizes="100%"  className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                     alt=""/>
                            </div>
                            <div className="ms-2"><h6
                                className="font-heading text-dark text-xs font-medium leading-none"> Claire
                                Baker </h6><p className="text-dark-gray font-sans text-xs"> claire@tairo.io </p></div>
                        </a>
                    </div>
                    <div role="menuitem" tabIndex="-1">
                        <a aria-current="page" href="#"
                           className="router-link-active router-link-exact-active group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 text-muted-500">
                            <div className="relative inline-flex size-9 items-center justify-center rounded-full">
                                <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                     fill sizes="100%" className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                                     alt=""/>
                            </div>
                            <div className="ms-2">
                                <h6 className="font-heading text-dark text-xs font-medium leading-none"> Alan
                                    Baxter </h6>
                                <p className="text-dark-gray font-sans text-xs"> godwin@MNN </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="p-6" role="none">
                    <button type="button" className="w-full block py-2 px-5 rounded-md border border-gray text-xs" role="none"> Logout
                    </button>
                </div>
            </div>
            }
        </>
    )
};

export default ProfileMenu;