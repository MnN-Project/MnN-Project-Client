'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/libs/utils';
import { FiUser } from 'react-icons/fi';
import { TbTargetArrow } from 'react-icons/tb';
import { LoggedInUserPath } from '@/utils/helpers';
import useAuthStore from '@/store/authStore';
import { IoIosLogOut } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const Dropdown = ({ className }) => {
  const { isAuthenticated, user, checkAuth, logout } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [changeToAccount, setChangeToAccount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth(navigate);
      setLoading(false);
    };

    verifyAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        setChangeToAccount(true);
      }
    }
  }, [loading, isAuthenticated]);

  useEffect(() => {
    if (user && isAuthenticated) {
      setChangeToAccount(true);
    }
  }, [user, isAuthenticated]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  if (!isMounted) {
    return (
      <>
        <div className="relative flex text-center">
          <NavHoverLink buttonText="Post Requests" className="hidden text-green sm:block">
            <TbTargetArrow className="relative inline-block stroke-1.2 no-underline text-[23px] text-green" />
          </NavHoverLink>

          <NavHoverLink
            to="/login"
            prefetch={true}
            buttonText="Sign in / Join"
            className="hidden group-hover:text-light-green lg:block"
          >
            <FiUser className="relative inline-block no-underline text-[23px] stroke-0.2 group-hover:text-green" />
          </NavHoverLink>
        </div>
      </>
    );
  }
  return (
    <div className={`${className || ''} text-sm xl:ml-10.5 ml-s`}>
      <div className="wrapper">
        <div className="relative flex text-center">
          <NavHoverLink
            buttonText="Post Requests"
            className="hidden text-green sm:block"
            to="/requests"
          >
            <TbTargetArrow className="relative inline-block stroke-1.2 no-underline text-[23px] text-green" />
          </NavHoverLink>

          {changeToAccount ? (
            <>
              <NavHoverLink
                to={LoggedInUserPath(user)}
                buttonText="Account"
                className=" group-hover:text-light-green"
              >
                <FiUser className="relative inline-block no-underline text-[23px] stroke-0.2 group-hover:text-green" />
              </NavHoverLink>
              <button onClick={handleLogout}>
                <div className="flex flex-col">
                  <IoIosLogOut className="relative inline-block no-underline text-[23px] stroke-0.2 group-hover:text-danger" />
                  <span>Logout</span>
                </div>
              </button>
            </>
          ) : (
            <>
              <div className="group z-50">
                <FiUser className="relative inline-block no-underline w-[22px] h-[22px] stroke-0.5 " />
                <h3 className="cursor-pointer">Join / Log In</h3>

                <div className="hidden group-hover:block absolute top-11 -left-0 w-[200px] text-dark">
                  <div className="flex flex-col w-full h-[120px] bg-white shadow-2xl p-4 gap-4 ring-1 ring-light-green rounded-sm">
                    <Link
                      to="/register"
                      className="bg-light-green text-white border border-light-green shadow-sm rounded-md text-sm px-3 py-1"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className=" text-light-green border border-light-green shadow-sm rounded-md text-sm px-3 py-1"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const NavHoverLink = ({ children, buttonText, className, to }) => {
  return (
    <Link
      to={`${to}`}
      className={cn(
        `inline-flex ${className} flex-col px-3 tracking-tighter font-medium group transition-colors duration-150 ease-out items-center no-underline`
      )}
    >
      {children}
      <div className={'text-xs xl:text-sm text-nowrap group-hover:text-green'}>{buttonText}</div>
    </Link>
  );
};

const Tooltip = ({ children, className }) => {
  return (
    <div className={cn(`pt-2xs absolute ${className} hidden z-40 right-0 top-full`)}>
      <span className="absolute top-1 border-t-0 border-transparent border-b-white right-[34.1333px] border-6"></span>
      <div className="inline-block w-full bg-white text-sm shadow-lg p-xs rounded-[5px]">
        <div className="w-full text-nowrap">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
