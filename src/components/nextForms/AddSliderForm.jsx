import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import apiClient from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import useCategoryStore from '@/store/categoryStore';
import { AlertMessage } from '@/utils/alertMessage';
import Image from 'next/image';

const AddSliderForm = ({ data, type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [files, setFiles] = useState([]);
  const [formError, setFormError] = useState(null);
  const { categories, fetchCategories } = useCategoryStore();
  const [message, setMessage] = useState({ error: null, success: null });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required('Title is required*'),
    categoryId: Yup.string().required('Category is required*')
  });

  const formik = useFormik({
    initialValues: {
      title: data?.title || '',
      categoryId: data?.categoryId._id || ''
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsLoading(true);
      setFormError(null); // Reset form error before submission

      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('categoryId', values.categoryId.toString());

      // Append selected image files
      files.forEach((file) => {
        formData.append('images', file);
      });
      try {
        if (type === 'create') {
          await apiClient.post(endpoints.createSlider, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          setMessage({ error: null, success: 'Slider Created Successfully' });
          formik.resetForm();
          setImagePreviews([]);
          setFiles([]);
        } else if (type === 'update') {
          await apiClient.put(`${endpoints.updateSlider}/${data._id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          setMessage({ error: null, success: 'Slider updated successfully!' });
        }
      } catch (error) {
        setMessage({
          error: error.message || 'An error occurred. Please try again.',
          success: null
        });
      } finally {
        setIsLoading(false);
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        }
      }
    }
  });

  // Handle image file selection
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
  };

  // Handle image removal
  const handleRemoveImage = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full rounded-lg border bg-white border-light-gray">
      <AlertMessage alert={message} />
      <div className="p-6 space-y-2 sm:p-8 md:space-y-4">
        <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
          {type === 'create' ? 'Create Slider' : 'Update Slider'}
        </h1>
        <form className="space-y-4" method="POST" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="title"
                id="title"
                className={`block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm ${
                  formik.errors.title && formik.touched.title ? 'border-danger' : ''
                }`}
                placeholder="Enter Slider Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && formik.touched.title && (
                <span className="text-sm font-light text-danger">{formik.errors.title}</span>
              )}
            </div>

            <div className="flex-1">
              <select
                name="categoryId"
                id="category"
                className={`block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm ${
                  formik.errors.categoryId && formik.touched.categoryId ? 'border-danger' : ''
                }`}
                value={formik.values.categoryId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories &&
                  categories.map((cat) => (
                    <option className="capitalize" value={cat.id} key={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
              {formik.errors.categoryId && formik.touched.categoryId && (
                <span className="text-sm font-light text-danger">{formik.errors.categoryId}</span>
              )}
            </div>
          </div>

          {/* Custom styled file input */}
          <div className="space-y-4">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-green rounded-lg shadow-md tracking-wide uppercase border border-green cursor-pointer hover:bg-light-gray hover:text-dark">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 2.29A10 10 0 1112 20V13H8v7a10 10 0 114.88-17.71zm.62 4.42L9.59 14.12 6.12 10.66 3.7 13.07l6.3 6.31 10-10.01z" />
              </svg>
              <span className="mt-2 text-base leading-normal">Select Images</span>
              <input type="file" className="hidden" multiple onChange={handleImageChange} />
            </label>

            {/* Display selected image previews with remove buttons */}
            <div className="flex flex-wrap gap-4">
              {imagePreviews.map((src, index) => (
                <div key={index} className="relative w-20 h-20">
                  <img
                    src={src}
                    alt={`Preview ${index + 1}`}
                    width={10}
                    height={10}
                    className="w-10 h-10 lg:w-full lg:h-full object-cover rounded-lg "
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-danger text-white rounded-full p-1 hover:bg-light-red focus:outline-none text-2xs"
                    onClick={() => handleRemoveImage(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Display form error if present */}
          {formError && <p className="text-sm text-danger">{formError}</p>}

          <button
            type="submit"
            className="w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
          >
            {isLoading ? 'Please Wait...' : type === 'create' ? 'Create Slider' : 'Update Slider'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSliderForm;
