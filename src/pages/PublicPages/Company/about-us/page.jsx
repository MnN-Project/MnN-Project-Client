import React from 'react';
import { useCompany } from '../CompanyPageLayout/companyPageLayout';
import { Container } from '@/components/container/Container';

const AboutCompanyPage = () => {
  const companyDetails = useCompany();

  return (
    <section className="">
      <Container>
        <div className="relative my-8">
          <div className="w-full text-center mb-4 ">
            <h1 className="font-bold leading-3 text-3xl my-3">About Our Company</h1>
            <p className="text-sm text-dark">Established: {companyDetails?.extablishedDate}</p>
          </div>
          <div className=" flex flex-col md:flex-row flex-wraps gap-4">
            <div className="text-center text-sm p-4 bg-white  rounded-md max-h-[350px] overflow-y-auto flex-1 ">
              <h2 className="text-md font-semibold mb-4">Mission</h2>
              {companyDetails?.mission}
            </div>
            <div className="text-center text-sm p-4 bg-white  rounded-md max-h-[350px] overflow-y-auto flex-1 ">
              <h2 className="text-md font-semibold mb-4">Vision</h2>
              {companyDetails?.vision}
            </div>
            <div className="text-center text-sm p-4 bg-white  rounded-md max-h-[350px] overflow-y-auto flex-1 ">
              <h2 className="text-md font-semibold mb-4">Objectives</h2>
              {companyDetails?.objective}
            </div>
          </div>
        </div>

        <div className=" p-0 flex flex-col md:flex-row gap-6 items-start mb-4">
          <div className="flex-1 bg-white shadow w-full p-6">
            <h1 className="text-lg font-semibold capitalize text-dark-gray">Major Contact</h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
              <img
                src="/assets/avater.png"
                width={80}
                height={80}
                className="object-cover w-[100px] h-[100px]"
                alt="cover Image"
              />
              <div className="flex flex-col">
                <p className="text-sm font-bold">Mr John Okoro</p>
                <p className="text-sm font-bold">Managing Director</p>
              </div>
            </div>
            <div className="left flex-1 relative w-full group mt-4">
              <p className="font-light text-sm">
                Hotline: <span className="text-xs font-semibold"> {companyDetails?.hotline}</span>
              </p>
              <p className="font-light text-sm">
                {' '}
                Mobile:<span className="text-xs font-semibold"> {companyDetails?.mobilePhone}</span>
              </p>
              <p className="font-light text-sm">
                {' '}
                Email: <span className="text-xs font-semibold">{companyDetails?.companyEmail}</span>
              </p>
            </div>
          </div>

          <div className=" flex-[3] bg-white shadow w-full p-6">
            <h1 className="text-lg font-semibold capitalize mb-4">Company Details</h1>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray ">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">
                Factory Address:
              </h1>
              <p className="text-sm flex-grow text-left"> {companyDetails?.companyAddress}</p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">Business Type:</h1>
              <p className="text-sm flex-grow text-left"> {companyDetails?.businessType}</p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">Main Products:</h1>
              <p className="text-sm flex-grow text-left"> {companyDetails?.mainProduct}</p>
            </div>

            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">
                CAC Registeration No:
              </h1>
              <p className="text-sm flex-grow text-left">22662272772</p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">Nafdac</h1>
              <p className="text-sm flex-grow text-left">203458438</p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">
                Average Response Time
              </h1>
              <p className="text-sm flex-grow text-left"> {companyDetails?.responseTime}</p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">
                Terms of Payment:
              </h1>
              <p className="text-sm flex-grow text-left">{companyDetails?.paymentMode}</p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">Nearest Port::</h1>
              <p className="text-sm flex-grow text-left"> {companyDetails?.nearestPort}</p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap:4 md:gap-10 border-b border-gray">
              <h1 className="text-xs font-semibold capitalize w-full md:w-[30%]">
                Annual Output Value::
              </h1>
              <p className="text-sm flex-grow text-left"> {companyDetails?.turnover}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCompanyPage;
