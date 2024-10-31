'use client';
import { cn } from '@/libs/utils';
import { useState, useEffect } from 'react';
import { CompleteCategoryList } from '@/data/categoryData';
import { Link } from 'react-router-dom';

export const NavLink = () => {
  const [topValue, setTopValue] = useState(-121);

  useEffect(() => {
    function handleScroll() {
      const newTopValue = -121 - window.scrollY;
      setTopValue(newTopValue >= 0 ? newTopValue : 0);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {CompleteCategoryList?.map((category) => (
        <li
          className={cn(
            'transition-all duration-200 group hover:bg-light-gray -mr-s -ml-2xs pr-s pl-2xs'
          )}
          key={category.id}
        >
          <Link
            to={`/product/category/${category.name}`}
            className="block whitespace-nowrap text-sm group py-1.3 hover:text-green"
          >
            <span
              className={cn(
                'text-dark py-3xs group-hover:text-green transition-colors duration-150 capitalize'
              )}
            >
              {category.name}
            </span>
          </Link>
          <div
            className="hidden group-hover:block p-s w-[630px] absolute left-full -ml-[1px] z-50 bg-white min-h-[535px] max-h-[635px] border border-light-gray shadow-nav overflow-y-auto"
            style={{ top: `${topValue}px` }}
          >
            <div className="-mx-2xs">
              <div className="flex flex-col">
                <div className="grid grid-cols-3 gap-4">
                  {/* SubCategories */}

                  {category.subcategory.map((subcat) => (
                    <div className="text-sm h-[181px] px-2xs" key={subcat.id}>
                      <Link to={`/product/subcategory/${subcat.name}`}>
                        <h3 className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold py-2xs capitalize">
                          {subcat.name}
                        </h3>
                      </Link>
                      <div className="flex flex-col">
                        {/* Sub-subcategory */}
                        {subcat.tertiaryCategory.map((tertiary) => (
                          <Link to={'/product'} className="capitalize pb-2xs" key={tertiary.id}>
                            {tertiary.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <a to="#" className="text-sm font-medium mb-2xs text-blue">
                  More Categories
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default NavLink;
