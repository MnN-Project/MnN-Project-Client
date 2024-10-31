import {
  EnhancedTextArea,
  FormWrapper,
  Input,
  Select,
  SubmitButton
} from '@/components/formManager/FormWrapper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { AlertMessage, PopupError } from '@/utils/alertMessage';
import { useParams } from 'react-router-dom';

const UpdateCompanyInfo = () => {
  const { slug } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('/assets/companyLogo.png');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ error: null, success: null });
  const [company, setCompany] = useState({
    _id: '',
    name: '',
    companyEmail: '',
    companyAddress: '',
    mission: '',
    vision: '',
    objective: '',
    turnover: '',
    paymentMode: '',
    hotline: '',
    mobilePhone: '',
    nearestPort: '',
    responseTime: '',
    extablishedDate: '',
    businessType: '',
    mainProduct: ''
  });
  const [error, setError] = useState(null);

  // Get the Company by Slug

  useEffect(() => {
    const getCompany = async () => {
      try {
        const response = await apiClient.get(`${endpoints.getCompanyBySlug}/${slug}`);
        setCompany(response.data.data);
      } catch (error) {
        setError(error.response?.data?.message || 'An error occured fetching data');
      }
    };
    if (slug) getCompany();
  }, [slug]);

  // Validation schema
  const validationSchema = Yup.object().shape({
    companyEmail: Yup.string()
      .email('Invalid email format')
      .trim()
      .required('Please enter your email address*'),
    companyAddress: Yup.string().trim().required('Please enter your company address*'),
    name: Yup.string().trim().required('Company Name is required*')
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setSelectedFile(null);
    setPreviewUrl('/assets/companyLogo.png');
  };

  return (
    <main>
      {error && <PopupError message={error} />}

      <Formik
        enableReinitialize={true}
        initialValues={{
          companyEmail: company?.companyEmail || '',
          mission: company?.mission || '',
          vision: company?.vision || '',
          objective: company?.objective || '',
          turnover: company?.turnover || '',
          paymentMode: company?.paymentMode || '',
          hotline: company?.hotline || '',
          companyPhoneNumber: company?.companyPhoneNumber || '',
          companyAddress: company?.companyAddress || '',
          nearestPort: company?.nearestPort || '',
          responseTime: company?.responseTime || '',
          extablishedDate: company?.extablishedDate || '',
          businessType: company.businessType || '',
          mainProduct: company.mainProduct || '',
          name: company.name || '',
          images: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
              formData.append(key, values[key]);
            });

            // If you need to append files separately
            if (selectedFile) {
              formData.append('images', selectedFile);
            }

            await apiClient.put(`${endpoints.updateCompany}/${company?.slug}`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });

            setMessage({ error: null, success: 'Company Info updated Successfully' });
          } catch (error) {
            setMessage({ error: 'Error Updating Company Profile', success: null });
          } finally {
            setLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        {({ handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <div>
              <AlertMessage alert={message} />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="left w-full flex-[2] flex flex-col gap-4">
                  {/* Sections colums*/}
                  {/* first Section */}
                  <div className="bg-white rounded-md shadow">
                    <div className="top border-b border-gray p-4 ">
                      <h2 className="inline-block text-dark font-semibold ">
                        Company Basic Details
                      </h2>
                    </div>
                    <div className="p-4">
                      {/* Input details */}
                      <EnhancedTextArea
                        name="mission"
                        label="Mission statement"
                        placeholder="Enter your company mission statement"
                        value={values.mission}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.mission && touched.mission ? errors.mission : null}
                      />
                      <EnhancedTextArea
                        name="vision"
                        label="Vision statement"
                        placeholder="Enter your company vision statement"
                        value={values.vision}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.vision && touched.vision ? errors.vision : null}
                      />
                      <EnhancedTextArea
                        name="objective"
                        label="Objectives"
                        placeholder="Enter your company's business objectives"
                        value={values.objective}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.objective && touched.objective ? errors.objective : null}
                      />
                    </div>
                  </div>
                  {/* Second Section */}
                  <div className="bg-white rounded-md shadow">
                    <div className="top border-b border-gray p-4 ">
                      <h2 className="inline-block text-dark font-semibold ">
                        Business Information
                      </h2>
                    </div>
                    <div className="p-4">
                      {/* Input details */}
                      <div className="flex flex-col md:flex-row gap-4">
                        <Input
                          name="turnover"
                          label="Annual Turnover"
                          placeholder="Eg: $10M"
                          autoComplete="turnover"
                          value={values.turnover}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.turnover && touched.turnover ? errors.turnover : null}
                        />
                        <Input
                          name="paymentMode"
                          label="Mode of Payment"
                          placeholder="Eg: Bank Transfer, L/C, etc"
                          autoComplete="paymentMode"
                          value={values.paymentMode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.paymentMode && touched.paymentMode ? errors.paymentMode : null
                          }
                        />
                      </div>
                      <div className="flex flex-col md:flex-row gap-4">
                        <Input
                          name="turnover"
                          label="Annual Turnover"
                          placeholder="Eg: $10M"
                          autoComplete="turnover"
                          value={values.turnover}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.turnover && touched.turnover ? errors.turnover : null}
                        />
                        <Input
                          name="paymentMode"
                          label="Mode of Payment"
                          placeholder="Eg: Bank Transfer, L/C, etc"
                          autoComplete="paymentMode"
                          value={values.paymentMode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.paymentMode && touched.paymentMode ? errors.paymentMode : null
                          }
                        />
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <Input
                          name="extablishedDate"
                          label="Date Established"
                          placeholder="Eg: 20th Aug. 2023"
                          autoComplete="extablishedDate"
                          value={values.extablishedDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.extablishedDate && touched.extablishedDate
                              ? errors.extablishedDate
                              : null
                          }
                        />
                        <Select
                          label="Business Type"
                          name="businessType"
                          value={values.businessType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          options={[
                            { value: 'Manufacturing', label: 'Manufacturing' },
                            { value: 'Trading Company', label: 'Trading Company' },
                            { value: 'Wholesaler/Distributor', label: 'Wholesaler/Distributor' },
                            { value: 'Service Provider', label: 'Service Provider' },
                            { value: 'Buying Office', label: 'Buying Office' },
                            { value: 'Sales Agency', label: 'Sales Agency' },
                            { value: 'Retailer', label: 'Retailer' }
                          ]}
                        />
                      </div>
                      <Input
                        name="mainProduct"
                        label="List Main Products"
                        autoComplete="mainProduct"
                        value={values.mainProduct}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.mainProduct && touched.mainProduct ? errors.mainProduct : null
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="right w-full flex-1 flex flex-col gap-4  ">
                  {/* Sections colums */}
                  {/* first Section */}
                  <div className="bg-white rounded-md shadow ">
                    <div className="top border-b border-gray p-4 ">
                      <h2 className="inline-block text-dark font-semibold ">Company Logo</h2>
                    </div>
                    <div className="p-4">
                      {/* Input details */}

                      <div className="w-full relative mb-4">
                        {/* Image Preview */}
                        <div className="mt-2 flex justify-center">
                          <div className="relative">
                            <img
                              src={
                                selectedFile
                                  ? previewUrl
                                  : company.companyLogo || '/assets/companyLogo.png'
                              }
                              alt="Logo Preview"
                              width={100}
                              height={100}
                              className="border border-gray w-[100px] h-[100px] rounded-md object-cover cursor-pointer p-1"
                              onClick={() => document.getElementById('profilePictureInput').click()}
                            />

                            <p className="text-sm text-dark-gray italic">Update Logo</p>
                            {/* Remove Icon */}
                            {selectedFile && (
                              <div
                                onClick={removeImage} // Trigger the remove image function
                                className="absolute top-0 right-0 bg-danger text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
                                title="Remove"
                              >
                                X
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Hidden File Input */}
                        <input
                          type="file"
                          name="images"
                          onChange={(event) => {
                            handleFileChange(event); // Handle file selection
                            setFieldValue('profilePicture', event.currentTarget.files[0]); // Set Formik value
                          }}
                          className="hidden"
                          id="profilePictureInput"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-md shadow ">
                    <div className="top border-b border-gray p-4 ">
                      <h2 className="inline-block text-dark font-semibold ">
                        Company Contact Info
                      </h2>
                    </div>
                    <div className="p-4">
                      {/* Input details */}
                      <Input
                        name="hotline"
                        type="text"
                        label="Hotline"
                        placeholder="0803*****"
                        autoComplete="hotline"
                        value={values.hotline}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.hotline && touched.hotline ? errors.hotline : null}
                      />
                      <Input
                        name="companyEmail"
                        label="Official Email"
                        autoComplete="companyEmail"
                        value={values.companyEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.companyEmail && touched.companyEmail ? errors.companyEmail : null
                        }
                      />
                      <Input
                        name="companyAddress"
                        label="Office Address"
                        autoComplete="companyAddress"
                        value={values.companyAddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.companyAddress && touched.companyAddress
                            ? errors.companyAddress
                            : null
                        }
                      />
                      <Input
                        name="companyPhoneNumber"
                        label="Mobile Phone"
                        placeholder="+234803429****"
                        autoComplete="companyPhoneNumber"
                        value={values.companyPhoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.companyPhoneNumber && touched.companyPhoneNumber
                            ? errors.companyPhoneNumber
                            : null
                        }
                      />
                    </div>
                  </div>

                  {/* Second Section */}
                  <div className="bg-white rounded-md shadow ">
                    <div className="top border-b border-gray p-4 ">
                      <h2 className="inline-block text-dark font-semibold ">
                        Business Accessibility
                      </h2>
                    </div>
                    <div className="p-4">
                      <Input
                        name="nearestPort"
                        label="Nearest Port/Wharf"
                        placeholder="Eg: Apapa"
                        autoComplete="nearestPort"
                        value={values.nearestPort}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.nearestPort && touched.nearestPort ? errors.nearestPort : null
                        }
                      />

                      <Select
                        label="Average Response Time"
                        name="responseTime"
                        value={values.responseTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        options={[
                          { value: 'almost immediately', label: 'Almost Immediately' },
                          { value: 'within 1 day', label: 'Within 1 day' },
                          { value: 'less than 12hrs', label: 'Less than 12hrs' },
                          { value: 'within 24 hrs', label: 'Within 24 hrs' }
                        ]}
                      />
                      <Input
                        name="name"
                        label="Update Company Name"
                        placeholder="Eg: Apapa"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.name && touched.name ? errors.name : null}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-72  mx-auto mt-4">
                <SubmitButton label="Update Details" isLoading={loading} />
              </div>
            </div>
          </FormWrapper>
        )}
      </Formik>
    </main>
  );
};

export default UpdateCompanyInfo;
