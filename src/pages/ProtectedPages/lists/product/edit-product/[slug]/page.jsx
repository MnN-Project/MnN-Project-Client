'use client';

import React, { useEffect, useState } from 'react';
import Editor from '@/components/editor/Editor';
import UploadImage from '@/components/file/UploadImage';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Select from '@/components/ui/Select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import apiClient from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { AlertMessage } from '@/utils/alertMessage';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CompleteCategoryList } from '@/dummy/categoryDummy/categoryData';

const EditProduct = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [message, setMessage] = useState({ error: null, success: null });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const selectedCategoryObj = CompleteCategoryList.find((cat) => cat.name === selectedCategory);
  const selectedSubCategoryObj = selectedCategoryObj?.subcategory?.find(
    (subCat) => subCat.name === selectedSubCategory
  );

  useEffect(() => {
    const fetchProduct = async () => {
      setIsFetching(true);
      try {
        const response = await apiClient.get(`${endpoints.getProductBySlug}/${params.slug}`);
        setProduct(response.data.data);
      } catch (error) {
        setMessage({ error: 'Internal Server Error', success: null });
      } finally {
        setIsFetching(false);
      }
    };
    fetchProduct();
  }, [params.slug]);

  useEffect(() => {
    if (product && product._id) {
      formik.setValues({
        title: product.title || '',
        price: product.price || '',
        currency: product.currency || '',
        unit: product.unit || '',
        description: product.description || '',
        condition: product.condition || '',
        min_order: product.min_order || '',
        category: product.category || '',
        subCategory: product.subCategory || '',
        subSubCategory: product.subSubCategory || '',
        images: product.images.map((img) => img.url) || []
      });

      setSelectedCategory(product.category || '');
      setSelectedSubCategory(product.subCategory || '');
    }
  }, [product]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required('Product title is required*'),
    price: Yup.number().required('Price is required*'),
    currency: Yup.string().required('Currency is required*'),
    unit: Yup.string().required('Unit is required*'),
    description: Yup.string().required('Description is required*'),
    condition: Yup.string().required('Condition is required*'),
    min_order: Yup.number().required('Minimum order is required*'),
    category: Yup.string().required('Main category is required*'),
    subCategory: Yup.string().required('Primary category is required*'),
    subSubCategory: Yup.string().required('Subcategory is required*')
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      currency: '',
      unit: '',
      description: '',
      condition: '',
      min_order: '',
      category: '',
      subCategory: '',
      subSubCategory: '',
      images: []
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const formData = new FormData();

        Object.keys(values).forEach((key) => {
          if (key === 'images') {
            values.images.forEach((fileItem) => {
              if (!fileItem.file.name.endsWith('.webp')) {
                formData.append('images', fileItem.file);
              }
            });
          } else {
            formData.append(key, values[key]);
          }
        });

        await apiClient.put(`${endpoints.updateProduct}/${product._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setMessage({ error: null, success: 'Product updated successfully' });
      } catch (error) {
        setMessage({ error: 'Internal Server Error', success: null });
      } finally {
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      {/* Products Grid */}
      <AlertMessage alert={message} />
      <form method="post" onSubmit={formik.handleSubmit}>
        <div className="mt-s grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-4">
            {/* Products Card */}
            <div className="flex bg-white shadow border border-gray rounded-xl flex-col">
              {/* Header */}
              <div className="py-3 px-5 border-b border-gray flex items-center justify-between gap-5">
                <h2 className="inline-block font-semibold text-dark">Edit New Product</h2>
              </div>
              {/* End Header */}

              {/* Body */}
              <div className="p-s">
                {/* Input */}
                <div className={'mt-4'}>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Enter product name"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.title && formik.touched.title && (
                    <span className="text-sm font-light text-danger">{formik.errors.title}</span>
                  )}
                </div>
                {/* End Input */}

                {/* Input Grid */}
                <div className=" flex flex-col md:flex-row  gap-4 dw1oe h9n6m p4k2b">
                  {/* Input */}
                  <div className={'mt-4 flex-1'}>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="text"
                      name="price"
                      placeholder="eg. 1000000"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.price && formik.touched.price && (
                      <span className="text-sm font-light text-danger">{formik.errors.price}</span>
                    )}
                  </div>
                  {/* End Input */}

                  {/* Input */}
                  <div className={'mt-4 flex-1'}>
                    <Label htmlFor="currency">Currency</Label>
                    <div className="relative w-full">
                      <Select
                        id="currency"
                        name="currency"
                        value={formik.values.currency}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        options={[
                          { value: '', label: 'Choose One' },
                          { value: '₦', label: '₦' },
                          { value: '$', label: '$' },
                          { value: '£', label: '£' },
                          { value: '€', label: '€' }
                        ]}
                      />
                    </div>
                    {formik.errors.currency && formik.touched.currency && (
                      <span className="text-sm font-light text-danger">
                        {formik.errors.currency}
                      </span>
                    )}
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className={'mt-4 flex-1'}>
                    <Label htmlFor="unit">Per</Label>

                    <div className="relative w-full">
                      <Select
                        id="unit"
                        name="unit"
                        value={formik.values.unit}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        options={[
                          { value: '', label: 'choose' },
                          { value: 'kg', label: 'Kg' },
                          { value: 'gram', label: 'Gram' },
                          { value: 'unit', label: 'Unit' },
                          { value: 'tonne', label: 'Tonne' },
                          { value: 'bag', label: 'Bag' },
                          { value: 'length', label: 'Length' },
                          { value: 'others', label: 'Others' }
                        ]}
                      />
                    </div>
                    {formik.errors.unit && formik.touched.unit && (
                      <span className="text-sm font-light text-danger">{formik.errors.unit}</span>
                    )}
                  </div>
                  {/* End Input */}
                </div>
                {/* End Input Grid */}

                {/* Textarea Input */}
                <div className="mt-3">
                  <Label htmlFor="description">Description</Label>

                  {/* Editor */}
                  <Editor
                    value={formik.values.description}
                    onChange={(content) => {
                      formik.setFieldValue('description', content);
                    }}
                    onBlur={() => formik.setFieldTouched('description', true)}
                  />

                  {/* End Tiptap */}
                </div>
                {/* End Textarea Input */}
              </div>
              {/* End Body */}
            </div>
            {/* End Products Card */}

            {/* Media Card */}
            <div className="flex mt-4 shadow bg-white rounded-lg border border-gray overflow-hidden flex-col">
              {/* Header */}
              <div className="flex items-center justify-between gap-5 border-b border-light-gray px-5 py-3 ">
                <h2 className="inline-block font-semibold">Product Image</h2>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="p-5">
                {/* Drag 'n Drop */}
                <div>
                  <UploadImage
                    files={formik.values.images}
                    onupdatefiles={(fileItems) => formik.setFieldValue('images', fileItems)}
                  />
                </div>
                {/* End Drag 'n Drop */}
                <p className="text-sm text-dark-gray inline-block mt-4">
                  Add up to 3 images to your product.
                </p>
              </div>
              {/* End Body */}
            </div>
          </div>
          {/* End Col */}

          <div className="lg:col-span-2">
            <div className="lg:top-5 lg:sticky">
              {/* Product Pricing Card */}
              <div className="flex flex-col bg-white overflow-hidden rounded-lg border border-gray shadow">
                {/* Header */}
                <div className="py-3 px-5 flex items-center justify-between border-b border-gray">
                  <h2 className="inline-block font-semibold">More Options</h2>
                </div>
                {/* End Header */}

                {/* Body */}
                <div className="p-5">
                  <Label htmlFor="condition">Condition</Label>
                  {/* Select */}
                  <div className="relative">
                    <Select
                      id="condition"
                      name="condition"
                      value={formik.values.condition}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      options={[
                        { value: '', label: 'choose' },
                        { value: 'solid', label: 'Solid' },
                        { value: 'liquid', label: 'Liquid' },
                        { value: 'gas', label: 'Gas' },
                        { value: 'pellets', label: 'Pellets' },
                        { value: 'powder', label: 'Powedered' },
                        { value: 'granules', label: 'Granules' },
                        { value: 'brand new', label: 'Brand New' },
                        { value: 'Others', label: 'Others' }
                      ]}
                    />
                  </div>
                  {/* End Select */}

                  {/* Input */}
                  <div>
                    <Label htmlFor="vendor">Min. Order</Label>
                    <div className="relative w-full">
                      <Input
                        id="min_order"
                        type="text"
                        name="min_order"
                        placeholder="Enter min order quantity"
                        value={formik.values.min_order}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.errors.min_order && formik.touched.min_order && (
                      <span className="text-sm font-light text-danger">
                        {formik.errors.min_order}
                      </span>
                    )}
                  </div>
                  {/* End Input */}

                  {/* Links List */}
                  <div className="mt-4">
                    <p>
                      <span className=" inline-flex items-center gap-2 text-sm">
                        <svg
                          className="block w-4 h-4 fill-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <Link className="text-green text-sm font-medium" href="#">
                          Set {'Compare to'} price
                        </Link>
                      </span>
                    </p>
                    <p>
                      <span className=" inline-flex items-center gap-2 text-sm">
                        <svg
                          className="block w-4 h-4 fill-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <Link className="text-green text-sm font-medium" href="#">
                          Bulk discount pricing
                        </Link>
                      </span>
                    </p>
                  </div>
                  {/* End Links List */}
                </div>
                {/* End Body */}
              </div>
              {/* End Product Pricing Card */}

              {/* Organization Card */}
              <div className="flex mt-5 border border-gray rounded-lg overflow-hidden shadow bg-white flex-col ">
                {/* Header */}
                <div className="py-3 px-5 flex justify-between items-center border-b border-gray gap-5">
                  <h2 className="inline-block font-semibold">Category</h2>
                </div>
                {/* End Header */}

                {/* Body */}
                <div className="p-5">
                  {/* Input */}
                  <div className="mt-2">
                    <Label htmlFor="category">Main Category</Label>
                    {/* Select */}
                    <div className="relative">
                      <Select
                        id="category"
                        name="category"
                        value={formik.values.category}
                        onChange={(e) => {
                          const selectedValue = e.target.value;
                          setSelectedCategory(selectedValue);
                          formik.setFieldValue('category', selectedValue);
                          formik.setFieldValue('subCategory', ''); // Reset subCategory
                          formik.setFieldValue('subSubCategory', ''); // Reset subSubCategory
                        }}
                        onBlur={formik.handleBlur}
                        options={[
                          { value: '', label: 'Choose One' },
                          ...CompleteCategoryList.map((category) => ({
                            value: category.name,
                            label: category.name
                          }))
                        ]}
                      />

                      {formik.errors.category && formik.touched.category && (
                        <span className="text-sm font-light text-danger">
                          {formik.errors.category}
                        </span>
                      )}
                    </div>
                    {/* End Select */}
                  </div>
                  {/* End Input */}
                  <div className="mt-2">
                    <Label htmlFor="subCategory">Primary category</Label>

                    {/* Select */}
                    <div className="relative">
                      <Select
                        id="subCategory"
                        name="subCategory"
                        value={formik.values.subCategory}
                        onChange={(e) => {
                          const selectedValue = e.target.value;
                          setSelectedSubCategory(selectedValue);
                          formik.setFieldValue('subCategory', selectedValue);
                          formik.setFieldValue('subSubCategory', '');
                        }}
                        onBlur={formik.handleBlur}
                        options={[
                          { value: '', label: 'Choose One' },
                          ...(selectedCategoryObj?.subcategory?.map((subCategory) => ({
                            value: subCategory.name,
                            label: subCategory.name
                          })) || [])
                        ]}
                      />
                    </div>
                    {/* End Select */}
                    {formik.errors.subCategory && formik.touched.subCategory && (
                      <span className="text-sm font-light text-danger">
                        {formik.errors.subCategory}
                      </span>
                    )}
                  </div>
                  {/* End Input */}

                  {/* End Input */}
                  <div className="mt-2">
                    <Label htmlFor="collections">Subcategory</Label>

                    {/* Select */}
                    <div className="relative">
                      <Select
                        id="subSubCategory"
                        name="subSubCategory"
                        value={formik.values.subSubCategory}
                        onChange={(e) => {
                          const selectedValue = e.target.value;
                          formik.setFieldValue('subSubCategory', selectedValue);
                        }}
                        onBlur={formik.handleBlur}
                        options={[
                          { value: '', label: 'Choose One' },
                          ...(selectedSubCategoryObj?.tertiaryCategory?.map((terCategory) => ({
                            value: terCategory.name,
                            label: terCategory.name
                          })) || [])
                        ]}
                      />
                    </div>
                    {/* End Select */}
                    {formik.errors.subSubCategory && formik.touched.subSubCategory && (
                      <span className="text-sm font-light text-danger">
                        {formik.errors.subSubCategory}
                      </span>
                    )}
                    <p className="text-xs tracking-tighter inline-block text-dark-gray mt-1">
                      This helps to improve the visibility of your product
                    </p>
                  </div>
                  {/* End Input */}
                </div>
                {/* End Body */}
              </div>
              {/* End Organization Card */}
            </div>
          </div>

          {/* End Col */}
        </div>
        <div className="flex items-center justify-center lg:justify-start my-4 ">
          <button
            type="submit"
            className="bg-green p-2 w-[155px]  border-none rounded-md text-white text-sm"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Update Product'}
          </button>
        </div>
      </form>
      {/* End Products Grid */}
    </div>
  );
};

export default EditProduct;
