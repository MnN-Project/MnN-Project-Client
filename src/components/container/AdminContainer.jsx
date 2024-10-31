import React, { useEffect, useState } from 'react';
import { cn } from '@/libs/utils';
import Logo from '@/assets/FavLogo.png';
import Notification from '@/components/Notification/Notification';
import ProfileMenu from '@/components/Notification/ProfileMenu';
import useAuthStore from '@/store/authStore';
import { LoggedInUserPath } from '@/utils/helpers';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { httpErrorCodes } from '@/utils/http';
import Spinner from '../spinner/page';
import { Link } from 'react-router-dom';
import { MdDashboard, MdDashboardCustomize } from 'react-icons/md';
import { BsArrowRight, BsChat, BsChatDots, BsLayoutSidebar, BsList } from 'react-icons/bs';
import { RiGalleryFill } from 'react-icons/ri';
import { paths } from '@/routes';

export const ButtonNavLink = ({ children, tooltipText, active, to }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-center relative">
      <span></span>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        type="button"
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-30 hover:bg-green/10 text-green',
          {
            'bg-green/15': active
          }
        )}
      >
        <Link to={`${to}`}>{children}</Link>
      </button>
      {showTooltip && (
        <div className="tooltip text-xs visible w-[100px] text-white bg-green text-center rounded-md p-1 absolute z-10 -right-[90px] top-1/2 -translate-y-1/2">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

const DropdownListItem = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [activeUser, setActiveUser] = useState(null);
  const [dropdowns, setDropdowns] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await apiClient.get(`${endpoints.getAUserById}/${user?.id}`);
      if (response.status === httpErrorCodes.OK) {
        setActiveUser(response.data);
      }
    };
    if (user?.id && isAuthenticated) fetchUser();
  }, [user]);

  useEffect(() => {
    if (user) {
      setDropdowns([
        {
          id: 1,
          isOpen: false,
          label: 'Company',
          visibility: ['Admin', 'Seller'],
          subItems: [
            {
              id: 101,
              label: 'All Companies',
              link: paths.allCompaniesList,
              visibility: ['Admin']
            },
            {
              id: 102,
              label: 'Create Company',
              link: `${paths.createCompany}`,
              visibility: ['Adminsxxxxx']
            },
            {
              id: 103,
              label: 'Update Company Info',
              link: activeUser?.companyId?.slug
                ? `${paths.updateCompany}/${activeUser.companyId.slug}`
                : '#',
              visibility: ['Seller']
            }
          ]
        },
        {
          id: 2,
          isOpen: false,
          label: 'Subscriptions',
          visibility: ['Admin', 'Seller'],
          subItems: [
            {
              id: 201,
              label: 'Pricing Table',
              link: `${paths.pricingTable}`,
              visibility: ['Admin', 'Seller']
            },
            {
              id: 202,
              label: 'Create Package',
              link: paths.createPackage,
              visibility: ['Admin']
            },
            {
              id: 203,
              label: 'Invoice List',
              link: `${paths.invoice}`,
              visibility: ['Admin', 'Seller']
            }
          ]
        },
        {
          id: 3,
          isOpen: false,
          label: 'Products',
          visibility: ['Admin', 'Seller'],
          subItems: [
            {
              id: 301,
              label: 'All Products',
              link: '/lists/product/all-products',
              visibility: ['Admin']
            },
            {
              id: 302,
              label: 'Our Products',
              link: `${paths.companyProducts}/${user?.id}`,
              visibility: ['Seller']
            },
            {
              id: 303,
              label: 'Create Products',
              link: paths.addProduct,
              visibility: ['Admin', 'Seller']
            }
          ]
        },
        {
          id: 4,
          isOpen: false,
          label: 'Categories',
          visibility: ['Admin'],
          subItems: [
            {
              id: 401,
              label: 'All Categories',
              link: '/lists/category',
              visibility: ['Admin']
            },

            {
              id: 403,
              label: 'All Subcategories',
              link: '/lists/subcategories',
              visibility: ['Admin']
            },
            {
              id: 405,
              label: 'Tertiary Categories',
              link: '/lists/sub-subcategory',
              visibility: ['Admin']
            }
          ]
        },
        {
          id: 5,
          isOpen: false,
          label: 'Sliders',
          visibility: ['Admin'],
          subItems: [
            {
              id: 501,
              label: 'All Sliders',
              link: '/lists/slider',
              visibility: ['Admin']
            }
          ]
        },
        {
          id: 6,
          isOpen: false,
          label: 'Messages',
          visibility: ['Admin', 'Seller'],
          subItems: [
            {
              id: 601,
              label: 'Inbox',
              link: '/lists/messages',
              visibility: ['Admin', 'Seller']
            },
            {
              id: 602,
              label: 'Product Requests',
              link: '/lists/requests',
              visibility: ['Admin', 'Seller']
            },
            {
              id: 603,
              label: 'Create Message',
              link: '/lists/messages/create',
              visibility: ['Admin', 'Seller']
            }
          ]
        },
        {
          id: 7,
          isOpen: false,
          label: 'Documents',
          visibility: ['Admin', 'Seller'],
          subItems: [
            {
              id: 701,
              label: 'All Documents',
              link: '/lists/document',
              visibility: ['Admin', 'Seller']
            },
            {
              id: 702,
              label: 'Upload Document',
              link: '/lists/document/upload',
              visibility: ['Seller']
            }
          ]
        },
        {
          id: 8,
          isOpen: false,
          label: 'Public Profile',
          visibility: ['Seller'],

          subItems: [
            {
              id: 801,
              label: `${activeUser?.companyId?.slug ? 'Public Profile' : ''}`,
              link: activeUser?.companyId?.slug ? `/company/${activeUser.companyId.slug}` : '#',
              visibility: ['Seller']
            }
          ]
        },
        {
          id: 9,
          isOpen: false,
          label: 'Gallery',
          visibility: ['Seller'],
          subItems: [
            {
              id: 901,
              label: 'All Photos',
              link: '#',
              visibility: ['Seller']
            },
            {
              id: 902,
              label: 'Upload Photos',
              link: '/lists/upload-photo',
              visibility: ['Seller']
            }
          ]
        },
        {
          id: 11,
          isOpen: false,
          label: 'Our Staff',
          visibility: ['Admin', 'Sellersssss'],
          subItems: [
            {
              id: 101,
              label: 'All Staff',
              link: '/lists/sliders',
              visibility: ['Admin', 'Sellerssss']
            },
            {
              id: 102,
              label: 'Add Staff',
              link: '/lists/create-slider',
              visibility: ['Admin', 'Sellersss']
            }
          ]
        },
        {
          id: 12,
          isOpen: false,
          label: 'Getting Started',
          visibility: ['Customer'],
          subItems: [
            {
              id: 101,
              label: 'Update Profile',
              link: '/dashboard/edit-profile',
              visibility: ['Customer']
            },
            {
              id: 102,
              label: 'Become a Seller',
              link: '/dashboard/create-company',
              visibility: ['Customer']
            }
          ]
        }
      ]);
    }
  }, [activeUser, user?.id]);

  const handleToggle = (id) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === id ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
      )
    );
  };

  return (
    <ul>
      {dropdowns.map((dropdown) => {
        if (dropdown.visibility.includes(user?.role)) {
          return (
            <li key={dropdown.id} className="mb-1 group min-h-[2rem]">
              <a
                to="#"
                className="relative flex items-center justify-between top-0.5"
                onClick={() => handleToggle(dropdown.id)}
              >
                <span className="relative inline-flex items-center gap-2 font-sans text-sm hover:text-green transition-colors duration-300 text-dark-gray">
                  {dropdown.isOpen && (
                    <span className="bg-light-green absolute -start-3 top-2 h-1 w-1 rounded-full"></span>
                  )}
                  <span className="capitalize">{dropdown.label}</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className={`h-4 w-4 transition-transform duration-200 ${dropdown.isOpen ? 'rotate-90' : '-rotate-90'}`}
                  viewBox="0 0 24 24"
                >
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
                  {dropdown.subItems.map((subItem) => {
                    if (subItem.visibility.includes(user?.role)) {
                      return (
                        <li key={subItem.id} className="flex h-8 w-full items-center">
                          <Link
                            to={`${subItem.link}`}
                            className="flex w-full items-center transition-colors duration-300 text-dark-gray ps-3 hover:text-green focus:text-green"
                          >
                            <span className="font-sans text-xs">{subItem.label}</span>
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

const AdminContainer = ({ children }) => {
  const [sidepanel, setSidepanel] = useState(false);
  const handleSidepanel = () => setSidepanel(!sidepanel);

  const { user, isAuthenticated, isLoading } = useAuthStore();

  const [activeUser, setActiveUser] = useState(null);

  // Fetch user details after authentication
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiClient.get(`${endpoints.getAUserById}/${user?.id}`);
        if (response.status === httpErrorCodes.OK) {
          setActiveUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (user?.id && isAuthenticated) {
      fetchUser();
    }
  }, [user]);

  // If loading, show a loading state
  if (isLoading) return <Spinner />;

  // If not authenticated, render null (although the redirect should already be triggered)
  if (!isAuthenticated) return null;

  return (
    <div className="pb-10 bg-light-gray">
      <div className="pointer-events-none fixed top-0 flex h-full start-0 z-[60] xl:z-10">
        <div
          className={`pointer-events-auto relative z-20 flex h-full flex-col border-r bg-light-gray transition-all duration-300 border-green w-[80px] ${!sidepanel && '-translate-x-full xl:translate-x-0'}`}
        >
          <div className="flex h-16 w-full items-center justify-center">
            <Link to={`${LoggedInUserPath(user)}`} className="flex items-center justify-center p-2">
              <img src={Logo} alt="Logo" className="w-[45px] h-[40px]" />
            </Link>
          </div>

          <div>
            <div className="flex h-16 w-full items-center justify-center">
              <ButtonNavLink to={`${LoggedInUserPath(user)}`} tooltipText="Dashboard" active>
                <MdDashboard className="w-5 h-5" />
              </ButtonNavLink>
            </div>
            <div className="flex h-16 w-full items-center justify-center relative">
              <ButtonNavLink to="#" tooltipText="Messages">
                <BsLayoutSidebar className="w-5 h-5" />
              </ButtonNavLink>
            </div>
            <div className="flex h-16 w-full items-center justify-center">
              <ButtonNavLink to="#" tooltipText="Public Profile">
                <MdDashboardCustomize className="w-5 h-5" />
              </ButtonNavLink>
            </div>
            <div className="flex h-16 w-full items-center justify-center">
              <ButtonNavLink to="#" tooltipText="Our Team">
                <BsChat className="w-5 h-5" />
              </ButtonNavLink>
            </div>
            <div className="flex h-16 w-full items-center justify-center">
              <ButtonNavLink to="#" tooltipText="Documents">
                <BsList className="w-5 h-5" />
              </ButtonNavLink>
            </div>

            {/*   end*/}
          </div>

          <div className="mt-auto">
            <div className="flex h-16 w-full items-center justify-center">
              <ButtonNavLink to="#" tooltipText="Image Galery">
                <RiGalleryFill className="w-5 h-5" />
              </ButtonNavLink>
            </div>
            <div className="flex h-16 w-full items-center justify-center">
              <ButtonNavLink to="#" tooltipText="Our Subscriptions">
                <BsChatDots className="w-5 h-5" />
              </ButtonNavLink>
            </div>

            <div className="flex h-16 w-full items-center justify-center">
              <span></span>
              <div className="inline-flex items-center justify-center text-right group">
                <div className="relative h-10 w-10 text-left">
                  <button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary-500 group-hover:ring-offset-4 dark:ring-offset-muted-800"
                    aria-expanded="false"
                  >
                    <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full">
                      <img
                        src={activeUser?.images?.[0]?.url || '/assets/avater.png'}
                        className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                        alt="avatar"
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
          className={`pointer-events-auto ${sidepanel ? 'w-[220px]' : 'w-[220px] translate-x-[calc(-100%_-_80px)]'} relative z-10 h-full border-r bg-white transition-all duration-300 border-green`}
        >
          <div className="flex h-screen flex-col">
            <div className="flex h-16 w-full items-center px-6">
              <Link to={LoggedInUserPath(user)}>
                <div className="text-lg font-light capitalize font-heading text-dark">
                  Dashboard
                </div>
              </Link>
              <button
                onClick={handleSidepanel}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 text-dark ms-auto hover:bg-muted-100 hover:text-muted-600 xl:hidden"
              >
                <div
                  className={
                    'relative h-10 w-10 rounded-full flex items-center justify-center hover:bg-green/20 transition-colors duration-300'
                  }
                >
                  <BsArrowRight className="rotate-180 h-5 w-5 stroke-dark-gray" />
                </div>
              </button>
            </div>
            {/*end*/}
            <div className="relative h-full w-full overflow-y-auto slimscroll">
              <div className="px-6 pb-8">
                <DropdownListItem />
              </div>
              <div className="pointer-events-none fixed bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent w-[212px] dark:from-muted-800"></div>
            </div>
          </div>
        </div>
        {/* Second sidebar menu right*/}
      </div>
      <div
        onClick={handleSidepanel}
        className={`bg-green/10 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden ${sidepanel ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}
      ></div>
      {/* complete left navbar*/}
      <div
        className={`bg-light-gray relative min-h-screen w-full overflow-x-hidden px-2 sm:px-4 transition-all duration-300 xl:px-10 ${sidepanel ? 'xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]' : 'xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]'}`}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative z-50 mb-1 md:mb-5 flex h-16 items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center -ms-3"
              onClick={handleSidepanel}
            >
              <div className={`${sidepanel && 'scale-90'} relative h-5 w-5`}>
                <span
                  className={`${sidepanel && '-rotate-45 rtl:rotate-45 top-1 max-w-[75%]'}  top-0.5 bg-green absolute block h-0.5 w-full transition-all duration-300`}
                ></span>
                <span
                  className={`${sidepanel && 'opacity-0 translate-x-4'} bg-green absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300`}
                ></span>
                <span
                  className={`${sidepanel && 'rotate-45 rtl:-rotate-45 bottom-1 max-w-[75%]'} bottom-0 bg-green absolute block h-0.5 w-full transition-all duration-300`}
                ></span>
              </div>
            </button>

            <h1 className="font-heading text-2xl font-light leading-normal text-dark-gray hidden md:block capitalize">
              {activeUser?.companyId?.name ? (
                <>
                  {activeUser.companyId.name}{' '}
                  <span className="text-xs font-semibold text-gold ml-2">
                    {' '}
                    {activeUser.companyId.membershipLevel}
                  </span>
                </>
              ) : (
                `Welcome${activeUser?.first_name ? ' ' + activeUser.first_name : ''}`
              )}
            </h1>

            <div className="ms-auto"></div>
            <div className="flex items-center gap-2 h-16">
              <div className="group inline-flex items-center justify-center text-right">
                <div className="relative h-9 w-9 text-left">
                  <Notification />
                </div>
              </div>
              <div className="group inline-flex items-center justify-center text-right">
                <div className="relative h-9 w-9 text-left">
                  <ProfileMenu />
                </div>
              </div>
              {/* Profile */}
            </div>
          </div>
          {/* Show in Mobile only */}
          <div className="md:hidden text-center mb-5">
            <h1 className="font-heading text-2xl font-light leading-normal text-dark-gray capitalize">
              {activeUser?.companyId?.name ? (
                <>
                  {activeUser.companyId.name} <br />{' '}
                  <p className="text-xs font-semibold text-gold">
                    {' '}
                    {activeUser.companyId.membershipLevel}
                  </p>
                </>
              ) : (
                `Welcome${activeUser?.first_name ? ' ' + activeUser.first_name : ''}`
              )}
            </h1>
          </div>
        </div>
        {children}
      </div>
      {/* end */}
    </div>
  );
};

export default AdminContainer;
