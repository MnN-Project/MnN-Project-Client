'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/libs/utils';
import Logo from './Logo';
import Navigation from './Navigation';
import Navbar from '../navbar/Navbar';
import { FaRegUser } from 'react-icons/fa6';
import { TbTargetArrow } from 'react-icons/tb';
import { CompleteCategoryList } from '@/data/categoryData';
import useAuthStore from '@/store/authStore';
import { LoggedInUserPath } from '@/utils/helpers';
import { IoIosArrowForward, IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ className, navBarClass, ...props }) => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [changeToAccount, setChangeToAccount] = useState(false);
  const [sidepanel, setSidepanel] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  const [dropdowns, setDropdowns] = useState(CompleteCategoryList);

  const handleSidepanel = () => {
    setSidepanel(!sidepanel);
    setDropdowns(dropdowns.map((dropdown) => ({ ...dropdown, isOpen: false })));
    setActiveId(null);
  };

  const handleToggle = (id) => {
    setDropdowns(
      dropdowns.map((dropdown) =>
        dropdown.id === id ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
      )
    );
    setActiveId(id);
  };

  const handleDropdownReset = useCallback(
    (event) => {
      if (!event.target.closest('.menu-item')) {
        setDropdowns(dropdowns.map((dropdown) => ({ ...dropdown, isOpen: false })));
        setActiveId(null);
      }
    },
    [dropdowns]
  );

  useEffect(() => {
    if (sidepanel) {
      document.addEventListener('click', handleDropdownReset);
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (user && isAuthenticated) {
      setChangeToAccount(true);
    }
  }, [user, isAuthenticated]);

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <>
      <header
        className={cn('pt-2 lg:pt-5 w-full bg-white container-wrapper', className, {
          'fixed top-0 right-0 left-0 z-40 shadow-md transition-all duration-200 ease-linear':
            sticky
        })}
        {...props}
      >
        <div className="flex flex-col items-start lg:flex-row mt-3">
          <div
            className={cn(
              'flex justify-center items-center w-full lg:w-1/4 mb-3.7 lg:mb-0 lg:justify-start'
            )}
          >
            <button onClick={handleSidepanel} className="p-2 lg:hidden mr-4">
              <GiHamburgerMenu className={'h-6'} />
            </button>
            <div className="flex-1 flex justify-start">
              <Logo />
            </div>
          </div>

          <Navigation sticky={sticky} />
        </div>
        <Navbar sticky={sticky} navBarClass={navBarClass} />
      </header>
      {/* Drawer */}

      <div
        className={`bg-white w-[350px] transition-transform ${
          sidepanel ? 'translate-x-0' : 'translate-x-[-350px]'
        } fixed top-0 flex h-full start-0 z-[100]`}
      >
        <div className="flex relative h-screen flex-col w-full px-4">
          <div className="flex items-center justify-between w-full pt-[30px] pb-[10px] mb-4">
            <Logo />
            <button onClick={handleSidepanel} className={'cursor-pointer'}>
              <IoIosArrowForward className={'w-6 h-6 rotate-180 stroke-green font-bold'} />
            </button>
          </div>
          {/* Collapse */}
          <div className="relative">
            <div className="justify-between items-center flex-wrap flex w-full mx-auto">
              <div className="basis-full grow">
                <div className="overflow-hidden transition-all duration-300">
                  <div className="overflow-y-auto overflow-x-hidden max-h-[75vh]">
                    <div className="py-2">
                      <h3 className="font-bold text-dark-gray">Selected Categories</h3>

                      {dropdowns.slice(0, 6).map((item) => (
                        <div key={item.id}>
                          {item.subcategory ? (
                            <div className="mt-1">
                              {/* Link */}
                              <button
                                type="button"
                                onClick={() => handleToggle(item.id)}
                                className={`py-2 font-light px-3 w-full text-start text-md hs-dropdown-toggle flex gap-2 rounded-md hover:bg-light-gray ${
                                  activeId === item.id && 'bg-light-gray'
                                }`}
                              >
                                {item.name}
                                <svg
                                  className={`w-4 h-4 ms-auto transition-transform ${
                                    item.isOpen ? 'rotate-180' : '-rotate-90'
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                              {/* End Link */}

                              {/* Dropdown Menu */}
                              <div
                                className={`${
                                  item.isOpen ? 'opacity-1 block' : 'opacity-0 hidden'
                                } relative pt-1 ps-7 z-10 w-full block top-full text-sm transition-[opacity,margin] duration-150 after:h-[calc(100%-0.25rem)] after:bg-dark-gray`}
                              >
                                {/* Link */}
                                {item.subcategory.map((subItem) => (
                                  <Link
                                    key={subItem.id}
                                    className="group flex items-center px-3 py-2 border-l border-gray"
                                    to={`/product/subcategory/${subItem.name}`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                                {/* End Link */}
                              </div>
                              {/* End Dropdown Menu */}
                            </div>
                          ) : (
                            <Link
                              key={item.id}
                              onClick={() => handleToggle(item.id)}
                              className="flex text-sm px-3 py-2 font-medium rounded-md gap-2 items-center w-full"
                              to="#"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}

                      {showMore && (
                        <>
                          {dropdowns.slice(6).map((item) => (
                            <div key={item.id}>
                              {item.subcategory ? (
                                <div className="mt-1">
                                  {/* Link */}
                                  <button
                                    type="button"
                                    onClick={() => handleToggle(item.id)}
                                    className={`py-2 font-light px-3 w-full text-start text-md hs-dropdown-toggle flex gap-2 rounded-md hover:bg-light-gray ${
                                      activeId === item.id && 'bg-light-gray'
                                    }`}
                                  >
                                    {item.name}
                                    <svg
                                      className={`w-4 h-4 ms-auto transition-transform ${
                                        item.isOpen ? 'rotate-180' : '-rotate-90'
                                      }`}
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="m6 9 6 6 6-6" />
                                    </svg>
                                  </button>
                                  {/* End Link */}

                                  {/* Dropdown Menu */}
                                  <div
                                    className={`${
                                      item.isOpen ? 'opacity-1 block' : 'opacity-0 hidden'
                                    } relative pt-1 ps-7 z-10 w-full block top-full text-sm transition-[opacity,margin] duration-150 after:h-[calc(100%-0.25rem)] after:bg-dark-gray`}
                                  >
                                    {/* Link */}
                                    {item.subcategory.map((subItem) => (
                                      <Link
                                        key={subItem.id}
                                        className="group flex items-center px-3 py-2 border-l border-gray"
                                        to={`/product/subcategory/${subItem.name}`}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                    {/* End Link */}
                                  </div>
                                  {/* End Dropdown Menu */}
                                </div>
                              ) : (
                                <Link
                                  key={item.id}
                                  onClick={() => handleToggle(item.id)}
                                  className="flex text-sm px-3 py-2 font-medium rounded-md gap-2 items-center w-full"
                                  to="#"
                                >
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                      <div className="text-end pr-2">
                        <button
                          className=" text-md inline text-end text-green "
                          onClick={toggleMore}
                        >
                          {showMore ? '...Less' : 'More...'}
                        </button>
                      </div>
                    </div>
                  </div>
                  {changeToAccount ? (
                    <div className=" flex  gap-4 mt-6 w-full">
                      <button
                        className="bg-light-green text-white rounded-md hover:bg-green flex px-3 py-2 "
                        onClick={handleSidepanel}
                      >
                        <Link
                          to={LoggedInUserPath(user)}
                          className="mx-auto flex items-center lg:hidden"
                        >
                          <TbTargetArrow className="text-xl mr-2" />
                          <h3 className="text-sm">Account </h3>
                        </Link>
                      </button>
                      <button onClick={handleLogout}>
                        <div className="flex flex-col">
                          <IoIosLogOut className="relative inline-block no-underline text-[23px] stroke-0.2 group-hover:text-danger" />
                          <span>Logout</span>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className=" flex  gap-4 mt-6 w-full">
                      <button
                        className="bg-light-green text-white rounded-md hover:bg-green flex px-3 py-2 "
                        onClick={handleSidepanel}
                      >
                        <Link to="/requests" className="mx-auto flex items-center lg:hidden">
                          <TbTargetArrow className="text-xl mr-2" />
                          <h3 className="text-sm">Post Request </h3>
                        </Link>
                      </button>
                      <div className="border border-light-green text-light-green rounded-md hover:bg-light-green hover:text-white px-3 py-2  ">
                        <Link to="/login" className="flex items-center lg:hidden">
                          <FaRegUser className="text-xl text-light-green mr-2" />
                          <h3 className="text-sm">Sign / Join </h3>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {/* End Collapse */}
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </div>
      </div>

      <div
        onClick={handleSidepanel}
        className={`bg-green/10 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden ${
          sidepanel ? 'opacity-1' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
      {/* End Drawer */}
    </>
  );
};

export default Header;
