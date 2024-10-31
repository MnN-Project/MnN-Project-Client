import React, { useEffect, useState } from 'react';
import { MdFormatListBulleted } from 'react-icons/md';
import { RiGalleryView } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import { cn } from '@/libs/utils';
import Pagination from '@/components/pagination/Pagination';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { httpErrorCodes } from '@/utils/http';
import { shortenString } from '@/utils/helpers';
import { CompleteCategoryList } from '@/data/categoryData';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@/components/container/Container';
import { paths } from '@/routes';

const SubcategoryProducts = () => {
  // Extract subcategory name from slug

  const { slug } = useParams();

  const params = decodeURIComponent(slug);

  const shortParam = shortenString(params, 20);

  const requiredSubcategory = CompleteCategoryList.map((item) =>
    item.subcategory.find((sub) => sub.name == params)
  ).filter(Boolean);

  const subcategories = CompleteCategoryList.flatMap((item) => item.subcategory);

  const parentCategory = CompleteCategoryList.find((item) =>
    item.subcategory.some((sub) => sub.name === params)
  );

  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem text={'products'} to="/product" />
          <BreadCrumbItem text={shortParam} to={`/product/${params}`} />
        </Breadcrumb>
      </Container>

      <Container className="flex">
        <div className="relative mx-auto block h-full bg-white container-wrapper w-full">
          <div className="w-full md:flex md:gap-2">
            <LeftSection
              params={params}
              subcategories={subcategories}
              tertiaryCats={requiredSubcategory[0]?.tertiaryCategory}
            />
            {/* aside left */}
            <ProductSection params={params} subcategories={parentCategory?.subcategory}>
              <ProductItem params={params} />
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

const LeftSection = ({ params, subcategories, tertiaryCats }) => {
  return (
    <aside className="z-10 hidden h-full bg-white w-[15%] md:block">
      <div className="mb-2xs">
        <dl className="mb-2xs">
          <dd className="text-dark text-xs">
            <Link
              to={`${paths.productsBySubcategory}/${params}`}
              className="block font-bold py-1.3 px-2xs text-wrap capitalize"
            >
              {params}
            </Link>
            {tertiaryCats &&
              tertiaryCats.map((item) => (
                <Link
                  to={'#'}
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
            <h3 className="font-bold">Others</h3>
          </dt>

          {subcategories &&
            subcategories.slice(1, 10).map((item) => (
              <Link
                to={`/product/subcategory/${item.name}`}
                key={item.id}
                className="block font-light py-1.3 px-2xs text-wrap capitalize text-xs"
              >
                {item.name}
              </Link>
            ))}
        </dl>
      </div>

      <div className="mb-2xs">
        <a to="#" className="">
          <img
            width={190}
            height={100}
            src="https://pic.made-in-china.com/61f54j00iTQaZGrdmtWu/Top-Selling-Machinery.jpg"
            alt="Top Selling Machinery"
            title="Top Selling Machinery"
          />
        </a>
      </div>
    </aside>
  );
};

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
                  to={`${paths.singleProductPage}/${item.slug}`}
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

const ProductSection = ({ children, params, subcategories }) => {
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
          <a to="#" className="text-green text-2xs">
            View Related{' '}
            <strong className="hidden text-xs sm:inline">Feed Processing Machinery </strong>
            suppliers {'>'}
          </a>
        </span>
      </div>
      {/* Product List */}
      <div className="z-10 inline-flex border text-xs total-tip py-[5px] px-2xs border-dark-gray text-dark-gray">
        Total <span className="ml-1 inline-block font-bold text-green"></span>{' '}
        <h1 className="mx-1 inline-block font-bold text-green capitalize"> {params}</h1>{' '}
        <span className="hidden sm:inline-block">category from all manufacturers & suppliers</span>
      </div>
      {/* Total Products */}
      <div className="border border-t-0 border-b-0 top refine search-guide border-dark-gray">
        <div className="relative overflow-hidden pt-[15px] pr-[55px]">
          <div className="flex flex-wrap">
            {subcategories &&
              subcategories.slice(0, 4).map((item) => (
                <Link
                  to={`/product/subcategory/${item.name}`}
                  key={item.id}
                  className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
                >
                  {item.name}
                </Link>
              ))}

            {showMore && (
              <>
                {subcategories &&
                  subcategories.slice(4).map((item) => (
                    <Link
                      to={`/product/subcategory/${item.name}`}
                      key={item.id}
                      className="inline-block border text-xs capitalize rounded-[3px] px-2xs ml-2xs h-[28px] leading-[28px] mb-[15px] border-dark-gray"
                    >
                      {item.name}
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
              <a to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Diamond</span>
                <span className="ml-1 hidden sm:block">Member</span>
              </a>
            </div>

            {/* Diamond Member */}
            <div className="relative cursor-pointer mr-s">
              <a to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Gold </span>
                <span className="ml-1 hidden sm:block">Member</span>
              </a>
            </div>
            {/* Gold Member */}
            <div className="relative cursor-pointer mr-s">
              <a to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Silver</span>
                <span className="ml-1 hidden sm:block">Member</span>
              </a>
            </div>
            {/* Audited Supplier */}
            <div className="relative cursor-pointer mr-s">
              <a to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Verified</span>
                <span className="ml-1 hidden sm:block">Sellers</span>
              </a>
            </div>
            {/* Verified Supplier */}
          </div>
        </div>
      </div>
      {/* Member Type */}
      <div className="relative border top-refine2 border-dark-gray h-[55px]">
        <div className="flex h-full items-center justify-between text-xs px-2xs">
          <div className="flex">
            <div className="w-20 overflow-hidden text-ellipsis whitespace-nowrap max-w-[130px] mr-2xs">
              Trading Type:
            </div>
            <div className="">
              <a to="#" rel="nofollow" className="flex items-center">
                <input type="checkbox" className="mr-1 h-3 w-3 w-" />
                <span>Secure Trading Services</span>
              </a>
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
    </main>
  );
};

const ProductItem = ({ toggleProduct, params }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  //re-encode params because of spaces in the subcategory
  const codedParams = encodeURIComponent(params);
  const fetchProducts = async (page = 1, limit = 20) => {
    const response = await apiClient.get(
      `${endpoints.getAllPosts}?subCategory=${codedParams}&page=${page}&limit=${limit}`
    );
    setAllProducts(response.data.data);
    setTotalPages(Math.ceil(response.data.total / limit));
    setCurrentPage(page);
  };

  useEffect(() => {
    if (params) {
      fetchProducts(currentPage);
    }
  }, [currentPage, codedParams]);

  if (!allProducts.length) {
    return (
      <span className="font-semibold text-gray text-2xl text-center">
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
          key={item.id}
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
                  src={item.images[0].url || '/assets/noImage.png'}
                  fill
                  sizes="100%"
                  className="aspect-square"
                  priority="true"
                  alt="product"
                />
              </Link>
              <Link
                to="#"
                className="absolute top-0 right-0 mt-2 mr-2 flex h-7 w-7 items-center justify-center rounded-full group bg-gray"
              >
                <FaRegHeart className="h-4 w-7 fill-white stroke-1 transition-all group-hover:fill-dark-gray" />
              </Link>
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
                    {item.min_order}
                    {item.unit}
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
                  {item.companyId.city} {item.companyId.state} Nigeria{' '}
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

export default SubcategoryProducts;
