import React, { useEffect, useState } from 'react';
import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';

import SingleProductSlider, { PromotionLink } from '@/components/slider/SingleProductSlider';
import ProductCardSlider from '@/components/slider/ProductCardSlider';
import parse from 'html-react-parser';

import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { dateFormatter } from '@/utils/errorFormatter';
import Spinner from '@/components/spinner/page';
import { httpErrorCodes } from '@/utils/http';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container } from '@/components/container/Container';
import { BsArrowRight, BsBuildings } from 'react-icons/bs';
import { IoWarningOutline } from 'react-icons/io5';
import { MdOutlinePolicy } from 'react-icons/md';
import { FiTruck } from 'react-icons/fi';

const SingleProduct = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [product, setProduct] = useState({
    images: [],
    title: '',
    category: {
      name: ''
    },
    companyId: {
      city: '',
      companyAddress: '',
      companyEmail: '',
      companyPhoneNumber: '',
      createdAt: '',
      description: '',
      id: '',
      images: [],
      name: '',
      overallRatingsAverage: 0,
      slug: '',
      state: '',
      verified: false
    }
  });

  const [userInterests, setUserInterests] = useState([]);
  const [popularSearch, setPopularSearch] = useState([]);
  const [emptyVisitIds, setEmptyVisitIds] = useState(false);
  const [companyProducts, setCompanyProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(`${endpoints.fetchSinglePostBySlug}/${slug}`);

        if (response.status === httpErrorCodes.OK) {
          setProduct(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  useEffect(() => {
    const fetchCompanyProducts = async () => {
      if (product?.companyId?.id) {
        const response = await apiClient.get(
          `${endpoints.getCompanyPosts}/${product.companyId.id}`
        );
        setCompanyProducts(response.data);
      }
    };

    fetchCompanyProducts();
  }, [product]);

  if (loading) {
    return <Spinner />;
  }

  if (slug !== 'undefined') {
    return (
      <div className="bg-light-gray">
        <Container className="w-full mx-auto">
          <Breadcrumb>
            <BreadCrumbItem
              small
              to={`/product/category/${product?.category}`}
              text={`${product?.category}`}
            />
            <BreadCrumbItem small to="#" text={`${product?.title}`} />
          </Breadcrumb>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            {/*gap-4 */}
            <div className=" w-full rounded-lg lg:col-span-3">
              {/*max-h-[568px]*/}
              <SingleProductSlider
                Images={product.images ? product.images : '/assets/noImage.png'}
                title={product?.title}
                price={product.price}
                currency={product.currency}
                units={product.unit}
                minOrder={product.min_order}
                to={`/company/${product?.companyId?.slug}/${product?.slug}`}
              />

              <Link
                to="#"
                className="hidden lg:block capitalize mt-auto p-4 w-full text-xs text-blue bg-white"
              >
                Report incorrect product information
              </Link>
              {/* report incorrect product information*/}
              <section className="sm:mt-4 lg:col-span-3 lg:bg-white">
                <h2 className="uppercase text-xs py-2 lg:py-4 lg:px-2 lg:text-sm border-b-2 border-light-gray">
                  product details
                </h2>
                <div className="bg-white">
                  <div className="flex items-center justify-between p-2 lg:hidden">
                    <h2>Description</h2>
                    <BsArrowRight className="w-6 h-6" />
                  </div>
                  <div className="lg:py-6 lg:mx-4">
                    <ul className="list-inside list-disc block p-2 text-xs sm:text-sm">
                      <li className="list-none">
                        {product?.description ? parse(product.description) : ''}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/*Product Details*/}
              <ProductCardSlider
                headingText="You may also Like"
                products={emptyVisitIds ? 'Please Wait..' : userInterests}
              />
              <video
                src="/assets/leaderBoard.mp4"
                controls
                autoPlay
                loop
                className="my-2 w-full h-auto"
              >
                <track src="your-captions-file.vtt" kind="captions" srcLang="en" label="English" />
              </video>

              <ProductCardSlider
                headingText="Customers who viewed this also viewed these products"
                products={popularSearch}
              />
              {/* Product Item */}
            </div>
            {/* Aside Section */}
            <Aside product={product} />
          </div>
          <div className="w-full">
            <div className="w-full rounded-lg">
              {Array.isArray(companyProducts) && companyProducts.length > 0 && (
                <ProductCardSlider
                  large
                  headingText="More items from this seller"
                  products={companyProducts}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    navigate.push('/404');
  }
};

const Aside = ({ product }) => {
  return (
    <div className="max-h-[568px] rounded-lg sm:mt-s lg:mt-0">
      {/* <h2 className="uppercase text-xs py-2 mb-2 lg:hidden">Delivery & Returns</h2> */}
      <section className="bg-white p-2">
        <h3 className="text-sm font-semibold">Disclaimer</h3>
        <div className="mt-2">
          <div className="">
            <article className="py-2 flex items-start">
              <div className="mr-2 shrink-0">
                <BsBuildings className="w-6 h-6 " />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h3 className="uppercase text-xs">Public Notice</h3>
                </div>
                <div className="text-xs">
                  <p>
                    This website acts as a platform connecting Nigerian manufacturers with buyers.
                    We do not own, produce, or control the goods offered by the manufacturers listed
                    on our platform. Any transactions, communications, or engagements between buyers
                    and manufacturers are conducted independently of this website
                  </p>
                </div>
              </div>
            </article>
            <article className="py-2 flex items-start">
              <div className="mr-2 shrink-0">
                <FiTruck className="w-6 h-6" />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h3 className="uppercase text-xs">Product Descriptions</h3>
                </div>
                <div className="text-xs">
                  <p>
                    Product descriptions, pricing, and availability are provided by the
                    manufacturers. We do not verify or endorse the accuracy of the product
                    information and are not responsible for any discrepancies, errors, or omissions.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/*Select menu*/}
        <article className="py-2 flex items-start">
          <div className="mr-2 shrink-0">
            <MdOutlinePolicy className="w-6 h-6" />
          </div>
          <div className="w-full">
            <h3 className="uppercase text-xs">Buyer Responsibility</h3>
            <div className="flex justify-between w-full">
              <p className="text-2xs">
                It is the responsibility of the users to perform due diligence before entering into
                any transaction with manufacturers. We recommend that buyers verify the credentials
                and product quality directly with the manufacturers
              </p>
            </div>
          </div>
        </article>
      </section>
      {/*top section aside*/}
      <div className="hidden lg:block mt-s bg-white p-2 sticky top-20">
        <div className="pb-2 border-b-2 border-light-gray">
          <Link
            to={`/company/${product?.companyId?.slug}`}
            className="flex items-center justify-between"
          >
            <h2 className="uppercase text-sm">seller information</h2>
            <BsArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="pb-2">
          <div className=" flex flex-col">
            <p className="py-2 text-lg capitalize font-semibold">
              {product?.companyId.name}{' '}
              <span className="capitalize text-2xs">{product?.companyId.membershipLevel}</span>{' '}
            </p>
            <span className=" my-2">
              {product?.companyId.verified ? (
                <span
                  className=" ring-1 ring-green text-green rounded-md p-1"
                  title="This Seller has undergone all due verifications and KYC"
                >
                  {' '}
                  ✅Verified Seller
                </span>
              ) : (
                ''
              )}
            </span>
          </div>

          <div className=" flex items-end justify-between">
            <p className="text-xs inline-block pr-2">
              <span className="flex items-center gap-2">
                <span className="block capitalize">Location: {product?.companyId.city}</span>
                <span className="block capitalize">{product?.companyId.state}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="block capitalize">Member Since: </span>
                <span className="block capitalize">
                  {dateFormatter(product?.companyId.createdAt)}
                </span>
              </span>
            </p>
            <Link
              to={`/company/${product?.companyId.slug}`}
              className="uppercase text-xs text-white p-2 bg-green hover:bg-light-green transition-colors rounded-sm"
            >
              Visit Page
            </Link>
          </div>
          <div className="mt-4">
            <h2 className="text-xs mb-2">
              Seller Performance{' '}
              <IoWarningOutline className="w-6 h-6 inline-block stroke-gray hover:stroke-danger" />
            </h2>
            <PromotionLink to="#" text="Order Fulfillment Rate: Excellent" small />
            <PromotionLink to="#" text="Quality Score: Good" small />
            <PromotionLink to="#" text="Customer Rating: Good" small />
          </div>
        </div>
      </div>
      {/*bottom section aside*/}
      {/* <div className="hidden w-full lg:block mt-s bg-white p-2">
        <div className="flex">
          <div className="h-24 w-24 mr-2 relative shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              fill
              sizes="100%"
              alt="img"
            />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-sm">60CM Height 29.8CM...</h3>
            <span className="font-semibold lg:text-xs">&#8358;25,000.00</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm line-through text-dark-gray">&#8358;32,000</span>
              <span className="before:content-['-'] text-xs text-green bg-light-green/10 min-h-5 px-0.5">
                20%
              </span>
            </div>
          </div>
        </div>
        <form action="" className="mt-2 block">
          <button className="py-2 px-2 w-full rounded-md text-white uppercase text-xs bg-light-green hover:bg-green transition-colors">
            add to cart
          </button>
        </form>
      </div> */}
      {/*Add to cart aside*/}
    </div>
  );
};

export default SingleProduct;
