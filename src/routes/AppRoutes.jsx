import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from './paths';
import PublicPagesLayout from '@/pages/PublicPages/PublicPagesLayout';
import Homepage from '@/pages/PublicPages/Homepage/Homepage';
import WhyChooseUs from '@/pages/PublicPages/servicePages/why-choose-us/page';
import AuthPageLayout from '@/pages/PublicPages/AuthPages/AuthPageLayout/AuthPageLayout';
import Login from '@/pages/PublicPages/AuthPages/Login/Login';
import Register from '@/pages/PublicPages/AuthPages/Register/Register';
import VerifyOtp from '@/pages/PublicPages/AuthPages/OTP/VerifyOtp ';
import ProductsCategory from '@/pages/PublicPages/Products/ProductsByCategory/ProductsCats';
import RequestForm from '@/pages/PublicPages/servicePages/requests/page';
import BuyerGuide from '@/pages/PublicPages/servicePages/buyers-guide/page';
import SellerGuide from '@/pages/PublicPages/servicePages/sellers-guide/page';
import Help from '@/pages/PublicPages/servicePages/help/page';
import SubcategoryProducts from '@/pages/PublicPages/Products/ProductsBySubcategory/ProductsBySubCategory';
import Complaint from '@/pages/PublicPages/servicePages/complaint/page';
import AllProducts from '@/pages/PublicPages/Products/AllProducts/AllProducts';
import CategoryPage from '@/pages/PublicPages/Categories/Category';
import ContactUs from '@/pages/PublicPages/servicePages/contact-us/page';
import ForgotPassword from '@/pages/PublicPages/AuthPages/ForgotPassword/ForgotPassword';
import ResetPassword from '@/pages/PublicPages/AuthPages/reset-password/page';
import ResendOTP from '@/pages/PublicPages/AuthPages/resend-otp/page';
import SingleProduct from '@/pages/PublicPages/Products/SingleProductDetails/page';
import CompanyPage from '@/pages/PublicPages/Company/companyHome/page';
import AboutCompanyPage from '@/pages/PublicPages/Company/about-us/page';
import CompanyPageContact from '@/pages/PublicPages/Company/contact/page';
import CompanyPageProducts from '@/pages/PublicPages/Company/products/page';
import CertificatesGallery from '@/pages/PublicPages/Company/certifications/page';
import ProductInquiry from '@/pages/PublicPages/Company/inquiry/page';
import { PrivateRoute } from '.';
import CustomerDashboard from '@/pages/ProtectedPages/user-dashboard/page';
import UpdateProfile from '@/pages/ProtectedPages/user-dashboard/edit-profile/page';
import CreateCompany from '@/pages/ProtectedPages/user-dashboard/create-company/page';
import CompanyDashboard from '@/pages/ProtectedPages/company-dashboard/page';
import UpdateCompanyInfo from '@/pages/ProtectedPages/company-dashboard/update-company/page';
import Pricing from '@/pages/ProtectedPages/lists/pricing/page';
import CompanyLayout from '@/pages/PublicPages/Company/CompanyPageLayout/companyPageLayout';
import CompanyAdminLayoutProtection from '@/pages/ProtectedPages/company-dashboard/CompanyAdminLayout';
import SingleInvoice from '@/pages/ProtectedPages/lists/invoice/SingleInvoiceDetails';
import InvoiceList from '@/pages/ProtectedPages/lists/invoice/InvoiceList';
import Checkout from '@/pages/ProtectedPages/lists/checkout/page';
import PaymentReport from '@/pages/ProtectedPages/lists/payment/page';
import CompanyProductsList from '@/pages/ProtectedPages/lists/product/companyProducts/CompanyProducts';
import AddNewProduct from '@/pages/ProtectedPages/lists/product/add-product/page';
import AdminLayoutProtection from '@/pages/ProtectedPages/admin-dashboard/AdminDashboardLayout';
import AdminDashboard from '@/pages/ProtectedPages/admin-dashboard/mainDashboard/page';
import AllCompanies from '@/pages/ProtectedPages/admin-dashboard/all-companies-List/AllCompanies';
import CreatePackage from '@/pages/ProtectedPages/admin-dashboard/createPackages/CreatePackage';
import EditPackage from '@/pages/ProtectedPages/admin-dashboard/editPackage/EditPackage';

export const AppRoutes = () => (
  <Routes>
    <Route path={paths.index} element={<PublicPagesLayout />}>
      <Route path={paths.index} element={<Homepage />} />
      <Route path={paths.WhyChooseUs} element={<WhyChooseUs />} />
      <Route path={paths.allProducts} element={<AllProducts />} />
      <Route path={`${paths.productsByCategory}/:slug`} element={<ProductsCategory />} />
      <Route path={`${paths.productsBySubcategory}/:slug`} element={<SubcategoryProducts />} />
      <Route path={`${paths.singleProductPage}/:slug`} element={<SingleProduct />} />
      <Route path={`${paths.categories}/:slug`} element={<CategoryPage />} />
      <Route path={paths.request} element={<RequestForm />} />
      <Route path={paths.buyersuide} element={<BuyerGuide />} />
      <Route path={paths.sellerGuide} element={<SellerGuide />} />
      <Route path={paths.help} element={<Help />} />
      <Route path={paths.complaint} element={<Complaint />} />
      <Route path={paths.contact} element={<ContactUs />} />
    </Route>

    {/* Company Route */}
    <Route path={paths.companyIndex} element={<CompanyLayout />}>
      <Route path={`${paths.companyIndex}/:slug`} element={<CompanyPage />} />
      <Route path={`${paths.companyIndex}/:slug/about-us`} element={<AboutCompanyPage />} />
      <Route path={`${paths.companyIndex}/:slug/contact`} element={<CompanyPageContact />} />
      <Route path={`${paths.companyIndex}/:slug/products`} element={<CompanyPageProducts />} />
      <Route path={`${paths.companyIndex}/:slug/:productSlug`} element={<ProductInquiry />} />
      <Route
        path={`${paths.companyIndex}/:slug/certifications`}
        element={<CertificatesGallery />}
      />
    </Route>
    {/* Auth Pages */}
    <Route path={paths.index} element={<AuthPageLayout />}>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.register} element={<Register />} />
      <Route path={paths.otp} element={<VerifyOtp />} />
      <Route path={paths.resendOtp} element={<ResendOTP />} />
      <Route path={paths.forgotPassword} element={<ForgotPassword />} />
      <Route path={`${paths.resetPassword}/:userId/:token`} element={<ResetPassword />} />
    </Route>

    {/* Protected / user*/}

    <Route path={paths.dashboard} element={<PrivateRoute />}>
      <Route path={paths.customerDashboard} element={<CustomerDashboard />} />
      <Route path={paths.editProfile} element={<UpdateProfile />} />
      <Route path={paths.createCompany} element={<CreateCompany />} />

      <Route path={paths.pricingTable} element={<Pricing />} />
      <Route path={paths.sellerDashboard} element={<CompanyAdminLayoutProtection />}>
        <Route path={paths.sellerDashboard} element={<CompanyDashboard />} />
        <Route path={`${paths.updateCompany}/:slug`} element={<UpdateCompanyInfo />} />
        <Route path={paths.invoice} element={<InvoiceList />} />
        <Route path={`${paths.invoice}/:invoice`} element={<SingleInvoice />} />
        <Route path={`${paths.checkout}`} element={<Checkout />} />
        <Route path={`${paths.paymentReport}`} element={<PaymentReport />} />
        <Route path={`${paths.companyProducts}/:userId`} element={<CompanyProductsList />} />
        <Route path={paths.addProduct} element={<AddNewProduct />} />
      </Route>

      <Route path={paths.adminDashboard} element={<AdminLayoutProtection />}>
        <Route path={paths.adminDashboard} element={<AdminDashboard />} />
        <Route path={paths.allCompaniesList} element={<AllCompanies />} />
        <Route path={paths.createPackage} element={<CreatePackage />} />
        <Route path={`${paths.editPackage}/:packageId`} element={<EditPackage />} />
      </Route>
    </Route>
  </Routes>
);
