'use client';

import React from 'react';
import Link from 'next/link';
import { AiFillAppstore, AiOutlineProduct } from 'react-icons/ai';
import { HiBriefcase, HiCalculator, HiOutlineUsers, HiClipboardList } from 'react-icons/hi';
import { FaRegEnvelope, FaFileInvoiceDollar, FaUserGroup } from 'react-icons/fa6';
import { FaLuggageCart } from 'react-icons/fa';
import { BsBack, BsCardHeading, BsCollection, BsColumns } from 'react-icons/bs';
import { FiAlignRight } from 'react-icons/fi';
import { GoGear } from 'react-icons/go';
import { IoIosLogOut } from 'react-icons/io';
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/navigation';

const menuItems = [
  {
    title: 'ADMIN',
    items: [
      {
        icon: AiFillAppstore,
        label: 'Home',
        to: '/admin-dashboard',
        visible: ['Admin']
      },
      {
        icon: AiFillAppstore,
        label: 'Home',
        to: '/company-dashboard',
        visible: ['Seller']
      },

      {
        icon: AiFillAppstore,
        label: 'Home',
        to: '/customer-dashboard',
        visible: ['Customer']
      },
      {
        icon: AiFillAppstore,
        label: 'Home',
        to: '/buyer-dashboard',
        visible: ['Buyer']
      },
      {
        icon: HiBriefcase,
        label: 'Companies',
        to: '/lists/companies',
        visible: ['Admin']
      },
      {
        icon: HiCalculator,
        label: 'Packages',
        to: '/list/packages',
        visible: ['Admin']
      },
      {
        icon: HiOutlineUsers,
        label: 'All Users',
        to: '/list/users',
        visible: ['Admin']
      },
      {
        icon: HiClipboardList,
        label: 'Subscriptions',
        to: '/list/subscriptions',
        visible: ['Admin']
      },
      {
        icon: FaRegEnvelope,
        label: 'Messages',
        to: '/list/sgshs',
        visible: ['Admin', 'Seller', 'Buyer']
      },
      {
        icon: FaLuggageCart,
        label: 'Become A Seller',
        to: '/customer-dashboard/create-company',
        visible: ['Customer']
      },
      {
        icon: AiOutlineProduct,
        label: 'Products',
        to: '/lists/products',
        visible: ['Seller']
      },
      {
        icon: BsCardHeading,
        label: 'Certifications',
        to: '/list/pwwhhw',
        visible: ['Seller']
      },
      {
        icon: BsCollection,
        label: 'Image Gallary',
        to: '/list/pdjjjd',
        visible: ['Seller']
      },
      {
        icon: BsColumns,
        label: 'Public Profile',
        to: '/list/pwjw',
        visible: ['Seller']
      }
    ]
  },
  {
    title: 'ACCOUNT',
    items: [
      {
        icon: FaFileInvoiceDollar,
        label: 'Our Subscriptions',
        to: '/',
        visible: ['Seller']
      },
      {
        icon: FaUserGroup,
        label: 'Our Staff',
        to: '/lists/staff',
        visible: ['Seller']
      }
    ]
  },
  {
    title: 'TECH',
    items: [
      {
        icon: FiAlignRight,
        label: 'Categories',
        to: '/lists/categories',
        visible: ['Admin']
      },
      {
        icon: BsBack,
        label: 'Slider',
        to: '/lists/slider',
        visible: ['Admin']
      },
      {
        icon: GoGear,
        label: 'Setting',
        to: '/lists/editpage',
        visible: ['Seller']
      },
      {
        icon: IoIosLogOut,
        label: 'Logout',
        to: '/logout',
        visible: ['Admin', 'Customer', 'Seller', 'Buyer']
      }
    ]
  }
];

const Menu = () => {
  const { user, logout } = useAuthStore((state) => ({
    user: state.user,
    logout: state.logout
  }));

  const router = useRouter();

  const handleLogout = async () => {
    await logout(router);
  };

  if (!user) return null;
  return (
    <div className="mt-10 text-sm ">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 " key={i.title}>
          {i.items.map((item) => {
            if (item.visible.includes(user?.role)) {
              // Handling Logout separately
              if (item.label === 'Logout') {
                return (
                  <button
                    key={item.label}
                    className="flex items-center lg:justify-start gap-4 py-2 md:px-2 rounded-md  hover:bg-light-green hover:text-white"
                    onClick={handleLogout}
                  >
                    <item.icon size={18} className="w-10 h-10 md:w-6 md:h-6" />
                    <span className="hidden lg:block">{item.label}</span>
                  </button>
                );
              } else {
                // Making to dynamic for the product link
                const dynamicto =
                  item.label === 'Products' && user.id ? `/lists/products/${user.id}` : item.to;

                return (
                  <Link
                    to={dynamicto}
                    key={item.label}
                    prefetch={true}
                    className={
                      'flex group items-center lg:justify-start gap-4 py-2 md:px-2 rounded-md  hover:bg-light-green hover:text-white '
                    }
                  >
                    <item.icon
                      size={18}
                      className="w-6 h-6 text-light-green group-hover:text-white"
                      title={item.label}
                    />
                    <span className="hidden lg:block rounded-md">{item.label}</span>
                  </Link>
                );
              }
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
