import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CompanyHome = ({ src, companyName, membershipLevel, slug, joinDate, verified, ...props }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const menuLinks = [
    {
      id: 1,
      label: 'Home',
      url: `/company/${slug}`
    },
    {
      id: 2,
      label: 'About Us',
      url: `/company/${slug}/about-us`
    },
    {
      id: 3,
      label: 'Products',
      url: `/company/${slug}/products`
    },
    {
      id: 4,
      label: 'Certifications',
      url: `/company/${slug}/certifications`
    },
    {
      id: 5,
      label: 'Contact Us',
      url: `/company/${slug}/contact`
    }
  ];
  return (
    <>
      <div
        className="p-4 bg-[#E6ECF2] text-dark sticky top-0 z-40 flex flex-col md:flex-row gap-4"
        {...props}
      >
        <div className="items-center md:items-start justify-center w-full md:w-fit h-[80px] flex  p-2">
          <img
            src={src}
            alt="Company logo"
            width={60}
            height={40}
            className="w-80px h-16 object-cover "
          />
        </div>

        <div className="flex-grow">
          <h2 className="text-md lg:text-3xl font-light text-wrap capitalize">{companyName}</h2>
          <div className="flex  gap-4 text-xs">
            <p className="capitalize font-semibold">{membershipLevel}</p>
            <span className="text-danger">Member Since: {joinDate}</span>
            {verified && (
              <span
                className="ring-1 ring-light-gray p-1 rounded-sm cursor-pointer w-fit"
                title="Have fulfilled all inspections as required by our standards"
              >
                ✔ Verified Supplier
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="bg-dark-gray px-0 text-xs md:text-sm md:px-10 flex flex-wrap gap-1 md:gap-4 sticky top-28 z-40">
        {menuLinks.map((item) => {
          // Check if the current route matches the menu link URL
          const isActive = pathname === item.url;

          return (
            <Link
              to={item.url}
              className={`text-white p-2 hover:bg-dark rounded-sm transition-all duration-300 ease-in-out ${isActive ? 'bg-dark' : ''}`}
              key={item.id}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CompanyHome;
