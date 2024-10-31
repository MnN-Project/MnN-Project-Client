import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormWrapper, Input } from '@/components/formManager/FormWrapper';
import { AlertMessage } from '@/utils/alertMessage';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { httpErrorCodes } from '@/utils/http';
import { Container } from '@/components/container/Container';

const RequestForm = () => {
  const [message, setMessage] = useState({ error: null, success: null });
  const [loading, setLoading] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    productName: Yup.string().trim().required('Please enter the product name*'),
    quantity: Yup.number()
      .positive('Quantity must be a positive number')
      .required('Please enter the quantity*'),
    targetPrice: Yup.number()
      .positive('Target price must be a positive number')
      .required('Please enter your target price*'),
    maxBudget: Yup.number()
      .positive('Max budget must be a positive number')
      .required('Please enter your max budget*'),
    senderName: Yup.string().trim().required('Please enter your full name*'),
    senderEmail: Yup.string()
      .email('Invalid email format')
      .trim()
      .required('Please enter your email address*')
  });

  return (
    <div className="w-full">
      <Container className="py-10">
        <h3 className="text-lg lg:text-3xl font-semibold">Tell Suppliers What you need</h3>
        <p className="text-sm lg:text-md text-dark-gray font-light">
          The more specific your information, the faster response you will get.
        </p>
      </Container>

      <Container className="flex flex-col lg:flex-row items-start gap-4 mb-8">
        <div className="bg-white w-full lg:w-[70%] p-8">
          <AlertMessage alert={message} />
          <h1 className="mb-6 text-dark font-extrabold uppercase text-lg lg:text-2xl">
            PRODUCT INFORMATION
          </h1>
          <Formik
            initialValues={{
              productName: '',
              quantity: '',
              unit: '',
              targetPrice: '',
              currency: '',
              maxBudget: '',
              budgetCurrency: '',
              description: '',
              senderName: '',
              senderEmail: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              try {
                const response = await apiClient.post(endpoints.postRequests, values);

                if (response.status === httpErrorCodes.OK) {
                  setMessage({
                    error: null,
                    success: 'Message Sent, We will get back to you as soon as possible'
                  });
                  resetForm();
                }
              } catch (error) {
                setMessage({ error: 'Something went wrong', success: null });
              } finally {
                setLoading(false);
              }
            }}
          >
            {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
              <FormWrapper onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="flex flex-col lg:flex-row text-md font-light items-start lg:items-center gap-3 mb-3">
                  <label htmlFor="productName" className="w-52 text-sm">
                    Product Name:
                  </label>
                  <Input
                    name="productName"
                    className="flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent w-full text-sm "
                    placeholder="Enter specific product name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productName}
                    error={errors.productName && touched.productName ? errors.productName : null}
                  />
                </div>

                {/* Purchase Quantity */}
                <div className="flex flex-col lg:flex-row text-md font-light items-start lg:items-center gap-3 mb-3">
                  <label htmlFor="quantity" className="w-52 text-sm">
                    Purchase Quantity:
                  </label>
                  <div className="flex flex-col lg:flex-row gap-2 w-full lg:flex-grow">
                    <Input
                      name="quantity"
                      type="number"
                      className="flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent w-full text-sm "
                      placeholder="Eg: 200"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.quantity}
                      error={errors.quantity && touched.quantity ? errors.quantity : null}
                    />
                    <select
                      name="unit"
                      className="flex-auto lg:flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent text-sm"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.unit}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="KG">KG</option>
                      <option value="Gram">Gram</option>
                      <option value="Litres">Litres</option>
                      <option value="Bags">Bags</option>
                      <option value="Pieces">Pieces</option>
                      <option value="Tonnes">Tonnes</option>
                      <option value="Meters">Meters</option>
                      <option value="Truck Load">Truck Load</option>
                      <option value="Container Load">Container Load</option>
                      <option value="Rolls">Rolls</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                {/* Target Price */}
                <div className="flex flex-col lg:flex-row text-md font-light items-start lg:items-center gap-3 mb-3">
                  <label htmlFor="targetPrice" className="w-52 text-sm">
                    Target Price:
                  </label>
                  <div className="flex flex-col lg:flex-row gap-2 w-full lg:flex-grow">
                    <Input
                      name="targetPrice"
                      type="number"
                      className="flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent w-full text-sm "
                      placeholder="Eg: 40000"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.targetPrice}
                      error={errors.targetPrice && touched.targetPrice ? errors.targetPrice : null}
                    />
                    <select
                      name="currency"
                      className="flex-auto lg:flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent text-sm"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.currency}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="₦">₦</option>
                      <option value="$">$</option>
                      <option value="€">€</option>
                      <option value="£">£</option>
                    </select>
                  </div>
                </div>

                {/* Max Budget */}
                <div className="flex flex-col lg:flex-row text-md font-light items-start lg:items-center gap-3 mb-3">
                  <label htmlFor="maxBudget" className="w-52 text-sm">
                    Max Budget:
                  </label>
                  <div className="flex flex-col lg:flex-row gap-2 w-full lg:flex-grow">
                    <Input
                      name="maxBudget"
                      type="number"
                      className="flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent w-full text-sm "
                      placeholder="Eg: 50000"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.maxBudget}
                      error={errors.maxBudget && touched.maxBudget ? errors.maxBudget : null}
                    />
                    <select
                      name="budgetCurrency"
                      className="flex-auto lg:flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent text-sm"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.budgetCurrency}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="₦">₦</option>
                      <option value="$">$</option>
                      <option value="€">€</option>
                      <option value="£">£</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col lg:flex-row text-md font-light items-start lg:items-center gap-3 mb-3">
                  <label htmlFor="description" className="w-52 text-sm">
                    Description:
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe the product you want to source, You may include color, material, size, weight, and certificate requirements etc."
                    className="w-full h-[120px] lg:flex-grow outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent text-sm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  ></textarea>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col lg:flex-row text-md font-light items-start lg:items-center gap-3 mb-10">
                  <label htmlFor="senderName" className="w-52 text-sm">
                    Your Contact Details
                  </label>
                  <div className="flex flex-col lg:flex-row gap-2 w-full lg:flex-grow">
                    <Input
                      name="senderName"
                      className="flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent w-full text-sm "
                      placeholder="Your Full Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.senderName}
                      error={errors.senderName && touched.senderName ? errors.senderName : null}
                    />
                    <Input
                      name="senderEmail"
                      className="flex-1 outline-none rounded-sm focus:outline-none focus:ring-2 ring-gray focus:ring-transparent w-full text-sm "
                      placeholder="Your Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.senderEmail}
                      error={errors.senderEmail && touched.senderEmail ? errors.senderEmail : null}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col lg:flex-row text-md font-light items-start lg:items-center gap-3 mb-3">
                  <label htmlFor="submitButton" className="w-52"></label>
                  <div className="flex-grow text-center w-full">
                    <button
                      type="submit"
                      className="bg-green w-[30%] py-2 rounded-md px-4 text-sm text-white"
                    >
                      {loading ? 'Please wait...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </FormWrapper>
            )}
          </Formik>
        </div>
        <div className="bg-white w-full lg:w-[30%] p-10 flex flex-col">
          <h1 className="text-center text-xl font-semibold">Form Instructions</h1>
          <div className="w-full">
            <div className=" w-30 h-30 rounded-full shadow-2xl bg-white flex items-center justify-center text-sm font-bold mx-auto my-4 cursor-pointer">
              Completeness
            </div>
          </div>
          <p className="text-xs my-2 text-left">
            The more precise information you write, the better response you will get.
          </p>
          <p className="text-xs my-2 text-left">
            Please fill in the required fields before submitting.
          </p>
          <ul>
            <li className="text-xs">
              <span className="text-danger text-xs py-1">*</span> Product Name
            </li>
            <li className="text-xs">
              <span className="text-danger text-xs py-1">*</span> Required Quantity
            </li>
            <li className="text-xs">
              <span className="text-danger text-xs py-1">*</span> Target Price
            </li>
            <li className="text-xs">
              <span className="text-danger text-xs py-1">*</span> Your Budget
            </li>
            <li className="text-xs">
              <span className="text-danger text-xs py-1">*</span> Your Name
            </li>
            <li className="text-xs">
              <span className="text-danger text-xs py-1">*</span> Your Email
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default RequestForm;
