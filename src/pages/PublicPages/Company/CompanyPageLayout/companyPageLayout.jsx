import React, { createContext, useContext, useEffect, useState } from 'react';
import CompanyHome from '@/components/companyProfile/CompanyHome';
import Header from '@/components/header/Header';
import { Outlet, useParams } from 'react-router-dom';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import Footer from '@/components/footer/Footer';
import { dateFormatter } from '@/utils/errorFormatter';
import { PopupError } from '@/utils/alertMessage';

const CompanyContext = createContext(null);
export const useCompany = () => useContext(CompanyContext);

const CompanyLayout = () => {
  const { slug } = useParams();
  const [error, setError] = useState(null);

  const [companyDetails, setCompanyDetails] = useState({
    id: '',
    createdAt: ''
  });

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await apiClient.get(`${endpoints.getCompanyBySlug}/${slug}`);
        setCompanyDetails(response.data.data);
      } catch (error) {
        setError(error?.response?.data?.message || 'An error occured');
      }
    };
    if (slug) fetchCompany();
  }, [slug]);

  return (
    <CompanyContext.Provider value={companyDetails}>
      <Header navBarClass="hidden" />
      {error && <PopupError message={error} />}

      {companyDetails?.companyId?.name !== undefined && (
        <CompanyHome
          src={companyDetails?.companyId?.companyLogo || '/assets/companyLogo.png'}
          companyName={companyDetails?.companyId?.name}
          membershipLevel={companyDetails?.subscription_level}
          joinDate={dateFormatter(companyDetails.createdAt)}
          slug={slug}
          verified={companyDetails?.companyId?.verified}
        />
      )}
      <Outlet />
      <Footer />
    </CompanyContext.Provider>
  );
};

export default CompanyLayout;
