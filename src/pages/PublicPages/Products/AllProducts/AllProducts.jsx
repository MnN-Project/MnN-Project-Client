import React, { useEffect, useState } from 'react';
import { cn } from '@/libs/utils';
import { MdFormatListBulleted } from 'react-icons/md';
import { RiGalleryView } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import Pagination from '@/components/pagination/Pagination';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { httpErrorCodes } from '@/utils/http';
import { CompleteCategoryList } from '@/data/categoryData';
import { Container } from '@/components/container/Container';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem text={'products'} to="/product" />
        </Breadcrumb>
      </Container>

      <Container className="flex">
        <div className="relative mx-auto block h-full bg-white container-wrapper w-full">
          <div className="w-full md:flex md:gap-2">
            <LeftSection />
            {/* aside left */}
            <ProductSection>
              <ProductItem />
            </ProductSection>
            {/* Main Product content */}
            <RightSection />
            {/* aside right */}
          </div>
        </div>
      </Container>
    </>
  );
};

const LeftSection = () => (
  <aside className="z-10 hidden h-full bg-white w-[15%] md:block">
    <div className="mb-2xs">
      <dl className="mb-2xs">
        <dt className="pt-[6px]">
          <h3 className="font-bold text-dark">Category</h3>
        </dt>
        <dd className="text-dark text-xs">
          {CompleteCategoryList?.map((item) => (
            <Link
              to={`/product/category/${item.name}`}
              key={item.id}
              className="block font-light py-1.3 px-2xs text-wrap capitalize"
            >
              {item.name}
            </Link>
          ))}
        </dd>
      </dl>
      <dl className="mb-2xs">
        <dt className="py-[6px]">
          <h3 className="font-bold">Hot Demands</h3>
        </dt>

        <dd className="text-dark text-xs">
          {CompleteCategoryList.slice(0, 2).map((category) =>
            category.subcategory.map((item) => (
              <Link
                to={`/product/subcategory/${item.name}`}
                key={item.id}
                className="block font-light py-1.3 px-2xs text-wrap capitalize"
              >
                {item.name}
              </Link>
            ))
          )}
        </dd>
      </dl>
    </div>
    {/* <div className="mb-2xs text-2xs">
        Min. Order
        <input
          type="text"
          className="inline-block w-[48px] text-2xs ml-2xs py-[3px] px-[5px] h-[20px] rounded-[3px]"
        />
        <button className="block border ml-[5px] px-[9px] h-[26px] rounded-[3px] border-light-dark-gray bg-gray">
          OK
        </button>
      </div> */}

    {/* <div className="mb-2xs">
        <a to="#" className="">
          <Image
            width={190}
            height={100}
            src="https://pic.made-in-china.com/61f54j00iTQaZGrdmtWu/Top-Selling-Machinery.jpg"
            alt="Top Selling Machinery"
            title="Top Selling Machinery"
          />
        </a>
      </div> */}
  </aside>
);
const RightSection = () => {
  const [userInterests, setUserInterests] = useState([]);
  const [popularSearch, setPopularSearch] = useState([]);
  const [emptyVisitIds, setEmptyVisitIds] = useState(false);

  useEffect(() => {
    const fetchInterest = async () => {
      try {
        // Check if userInterests are already in localStorage
        const savedInterests = localStorage.getItem('userInterests');

        if (savedInterests) {
          // Use the cached interests if available
          setUserInterests(JSON.parse(savedInterests));
        } else {
          // If not, fetch the interests from the API
          const response = await apiClient.get(endpoints.userInterests);

          // Save the response data to localStorage
          localStorage.setItem('userInterests', JSON.stringify(response.data));

          // Update state with the fetched data
          setUserInterests(response.data);
        }
      } catch (error) {
        if (error.status === httpErrorCodes.BAD_REQUEST) {
          setEmptyVisitIds(true);
        }
      }
    };

    fetchInterest();
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await apiClient.get(endpoints.getAllPosts);
      setPopularSearch(response.data.data);
    };

    fetchProducts();
  }, []);

  return (
    <aside className="hidden h-full bg-white w-[15%] lg:block lg:pt-0">
      <div className="mb-2xs">
        <h3 className="font-bold py-[7px] text-dark">You May Like</h3>
        <ul className="border border-gray py-[9px]">
          {!userInterests.length || emptyVisitIds ? (
            <span className="inline-block w-4 h-4 border-2 border-t-2 border-gray-300 border-t-blue-500 rounded-full animate-spin">
              ..
            </span>
          ) : (
            userInterests.slice(0, 10).map((item) => (
              <li key={item._id} className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
                <Link
                  to={`/product/${item.title}`}
                  className="block break-words max-h-[31px] text-[11px]"
                >
                  {item.title}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
      {/* top */}
      <div className="mb-2xs">
        <h3 className="font-bold py-[7px] text-dark">Popular Searches</h3>
        <ul className="border border-gray py-[9px] mb-2xs">
          {!popularSearch.length ? (
            <span className="inline-block w-4 h-4 border-2 border-t-2 border-gray-300 border-t-blue-500 rounded-full animate-spin">
              ..
            </span>
          ) : (
            popularSearch.slice(0, 15).map((item, i) => (
              <li key={i + 1} className="block overflow-hidden text-ellipsis py-[5px] px-[9px]">
                <Link
                  to={`/product/${item.slug}`}
                  className="block break-words max-h-[31px] text-[11px]"
                >
                  {item.title}
                </Link>
              </li>
            ))
          )}
        </ul>
        <div className="mb-2xs">
          <Link to="#" className="">
            <img
              width={190}
              height={100}
              src="https://www.micstatic.com/mic-search/img/rfq_right_side.jpg?_v=1715328973821"
              alt="Top Selling Machinery"
              title="Top Selling Machinery"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
};

const ProductSection = ({ children }) => {
  const [toggleProduct, setToggleProduct] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { toggleProduct })
  );

  function handleGallery() {
    return setToggleProduct(false);
  }

  function handleList() {
    return setToggleProduct(true);
  }

  return (
    <main className="flex h-full flex-1 flex-col lg:p-4 w-full lg:w-[70%]">
      <div className="z-30 flex items-center justify-between list-tab h-[36px]">
        <ul className="border border-b-white bg-white border-dark-gray -mb-[2px]">
          <li className="relative mr-[3px]">
            <a className="block text-xs font-bold px-s h-[34px] leading-[31px]">Product List</a>
          </li>
        </ul>
        <span className="inline mr-2xs">
          <Link to="#" className="text-green text-2xs">
            <strong className="hidden text-xs sm:inline">All Products and their </strong>
            suppliers {'>'}
          </Link>
        </span>
      </div>
      {/* Product List */}
      <div className="z-10 inline-flex border text-xs total-tip py-[5px] px-2xs border-dark-gray text-dark-gray">
        Total <span className="ml-1 inline-block font-bold text-green"> 45,977</span>{' '}
        <h1 className="mx-1 inline-block font-bold text-green"> Fully Nigerian made products </h1>{' '}
        <span className="hidden sm:inline-block">
          guaranteed from about 4,597 manufacturers & suppliers
        </span>
      </div>
      {/* Total Products */}
      <div className="border border-t-0 border-b-0 top refine search-guide border-dark-gray">
        <div className="relative overflow-hidden pt-[15px] pr-[55px]">
          <div className="flex flex-wrap">
            {CompleteCategoryList &&
              CompleteCategoryList.slice(0, 4).map((category) => (
                <Link
                  to={`/product/category/${category.name}`}
                  key={category.id}
                  className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
                >
                  {category.name}
                </Link>
              ))}
            {showMore && (
              <>
                {CompleteCategoryList &&
                  CompleteCategoryList.slice(4).map((category) => (
                    <Link
                      to={`/product/category/${category.name}`}
                      key={category.id}
                      className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
                    >
                      {category.name}
                    </Link>
                  ))}
              </>
            )}
          </div>
          <button className="absolute inline text-xs top-[18px] right-[10px]" onClick={toggleMore}>
            {showMore ? 'Less' : 'More'}
          </button>
        </div>
      </div>
      {/* Multi List Search */}
      <div className="relative border border-b-0 top-refine border-dark-gray">
        <div className="flex items-center justify-start py-1 h-[35px] px-2xs -mb-[1px]">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs w-[130px] mr-2xs">
            Member Type:
          </div>
          <div className="flex items-center text-xs">
            <div className="relative cursor-pointer mr-s">
              <Link to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Diamond</span>
                <span className="ml-1 hidden sm:block">Member</span>
              </Link>
            </div>
            {/* Diamond Member */}
            <div className="relative cursor-pointer mr-s">
              <Link to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Gold </span>
                <span className="ml-1 hidden sm:block">Member</span>
              </Link>
            </div>
            {/* Gold Member */}
            <div className="relative cursor-pointer mr-s">
              <Link to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Audited</span>
                <span className="ml-1 hidden sm:block">Supplier</span>
              </Link>
            </div>
            {/* Audited Supplier */}
          </div>
        </div>
      </div>
      {/* Member Type */}
      <div className="relative border top-refine2 border-dark-gray h-[55px]">
        <div className="flex h-full items-center justify-between text-xs px-2xs">
          <div className="flex">
            <div className="w-20 overflow-hidden text-ellipsis whitespace-nowrap max-w-[130px] mr-2xs">
              All Products:
            </div>
            <div className="">
              <Link to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>100% Made in Nigeria</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center py-[2px]">
            <span className="mr-1">View:</span>
            <button className="mr-1 h-[17px] w-[17px]" onClick={handleList}>
              <MdFormatListBulleted
                className={cn('w-[17px] h-[17px]', {
                  'stroke-green': toggleProduct
                })}
              />
            </button>
            <button className="ml-1 h-[17px] w-[17px]" onClick={handleGallery}>
              <RiGalleryView
                className={cn('w-[17px] h-[17px]', {
                  'stroke-green': !toggleProduct
                })}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Trading Type */}
      <div
        className={cn(
          `w-full h-full relative ${
            toggleProduct ? 'flex-col flex-nowrap mt-1' : 'search-list flex flex-wrap mt-1'
          }`
        )}
      >
        {childrenWithProps}
      </div>
      {/* Product Item*/}

      {/* Pagination */}
      {/* <div className="px-2xs text-xs">
        <span>Not seen what you are looking for</span>
        <h4 className="font-semibold">Post your request</h4>
        <p>Post request and get quotation quickly</p>
        <form action="" className="mt-4 w-full flex flex-col sm:flex-row">
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden rounded-md border sm:border-r-0 w-full sm:rounded-r-none border-dark-gray px-3 pt-3 shadow-sm sm:max-w-[233px]"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              className="peer text-xs h-8 w-full border-none bg-transparent p-0 placeholder:text-xs placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Sourcing Request
            </span>
          </label>
          <button
            type="submit"
            className="group w-full sm:max-w-[233px] mt-4 sm:mt-0 relative inline-block focus:outline-none"
          >
            <span className="relative bg-green hover:bg-light-green w-full sm:rounded-l-none rounded-md inline-block border-2 border-green px-3 py-3 text-xs font-semibold uppercase text-white group-active:text-opacity-75">
              Post Sourcing Request
            </span>
          </button>
        </form>
      </div> */}
      {/* Sourcing Request */}
    </main>
  );
};

const ProductItem = ({ toggleProduct }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (page = 1, limit = 20) => {
    const response = await apiClient.get(`${endpoints.getAllPosts}?page=${page}&limit=${limit}`);
    setAllProducts(response.data.data);
    setTotalPages(Math.ceil(response.data.total / limit));
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  if (loading) {
    return <span className="font-semibold text-gray text-2xl text-center"> Loading...</span>;
  }
  if (!allProducts.length) {
    return (
      <span className="font-semibold text-gray text-xl text-center">
        {' '}
        We are sorry!!, No products found
      </span>
    );
  }

  return (
    <>
      {allProducts.map((item) => (
        <div
          className={cn(
            `${
              toggleProduct
                ? 'w-full flex px-2xs pt-1.3 pb-2 xs:bg-green/5 bg-white'
                : 'basis-1/2 xs:basis-1/3 md:basis-1/3 xl:basis-1/4 p-3 hover:border-gray'
            }  border-white border transition-colors duration-200`
          )}
          key={item._id}
        >
          <div
            className={cn(`relative ${toggleProduct ? 'flex w-full' : 'h-[298px]'} rounded-md `)}
          >
            <div
              className={cn(
                `relative bg-white ${toggleProduct ? 'h-full xl:w-1/3' : 'h-1/2 w-full'}`
              )}
            >
              <Link
                to={`/product/${item.slug}`}
                className={cn('w-full min-w-[7.813rem] h-[7.813rem] relative xl:h-full block')}
              >
                <img
                  src={item.images[0]?.url || '/assets/noImage.png'}
                  fill
                  sizes="100%"
                  className="aspect-square"
                  priority="true"
                  alt="product"
                />
              </Link>
              <a
                to="#"
                className="absolute top-0 right-0 mt-2 mr-2 flex h-7 w-7 items-center justify-center rounded-full group bg-gray"
              >
                <FaRegHeart className="h-4 w-7 fill-white stroke-1 transition-all group-hover:fill-dark-gray" />
              </a>
              {/* favorite */}
            </div>
            {/* image */}
            <div className={cn(`${toggleProduct ? 'w-full block px-2 lg:px-3' : 'w-full'}`)}>
              <h2 className="overflow-hidden text-ellipsis mt-2xs">
                <Link
                  to={`/product/${item.slug}`}
                  className={cn(
                    `capitalize hover:text-green hover:underline ${
                      toggleProduct ? 'font-semibold text-xs' : 'text-xs line-clamp-2'
                    }`
                  )}
                >
                  {item.title}
                </Link>
              </h2>
              <div className="text-xs mt-[5px]">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  <span className="text-xs text-dark-gray xl:text-sm">Price:</span>{' '}
                  <strong>
                    {item.currency} {item.price}
                  </strong>
                </p>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  <span className="text-xs text-dark-gray lg:text-sm">Min Order:</span>{' '}
                  <strong>
                    {item.min_order} {item.unit}
                  </strong>
                </p>
                {toggleProduct && (
                  <p className="hidden overflow-hidden text-ellipsis text-xs capitalize mt-1.3 mb-3.7 sm:block">
                    {item.companyId.name}
                  </p>
                )}
              </div>
              {!toggleProduct && (
                <Link
                  to={`/company/${item.companyId.slug}`}
                  className="mt-2 inline-flex items-center justify-center rounded-md text-xs text-white transition-colors bg-green h-[26px] w-[126px] hover:bg-light-green lg:mt-5"
                >
                  <span className="mr-1 text-lg">&#9993;</span> Contact Now
                </Link>
              )}
              {/* Button */}
            </div>
            {/* product description */}
            {toggleProduct && (
              <div className="hidden w-2/5 sm:block">
                <h2 className="text-xs font-semibold mt-3.5 capitalize ">{item.companyId.name}</h2>
                <span className="block text-xs mt-2xs capitalize">
                  {item.companyId.city} {item.companyId.state} Nigeria
                </span>
                <span className="block text-xs mt-2xs">{item.companyId.certificationNo} </span>
                <Link
                  to={`/company/${item.companyId.slug}`}
                  className="mt-2 inline-flex items-center justify-center rounded-md text-xs text-white transition-colors bg-green h-[26px] w-[126px] hover:bg-light-green lg:mt-5"
                >
                  <span className="mr-1 text-lg">&#9993;</span> Contact Now
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={fetchProducts} />
    </>
  );
};

export default AllProducts;
