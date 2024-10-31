'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AlertMessage } from '@/utils/alertMessage';
import useCategoryStore from '@/store/categoryStore';

const CategoryForm = ({ type, data }) => {
  const { createCategory, updateCategory, isLoading } = useCategoryStore();
  const [message, setMessage] = useState({ error: null, success: null });

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Title is required*')
  });

  const formik = useFormik({
    initialValues: {
      name: data?.name || ''
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        if (type === 'create') {
          await createCategory(values); // Create category
          setMessage({ error: null, success: 'Category created successfully!' });
        } else if (type === 'update') {
          await updateCategory(data.id, values); // Update category with its ID
          setMessage({ error: null, success: 'Category updated successfully!' });
        }
        formik.resetForm();
      } catch (error) {
        // Handle and display error message
        setMessage({
          error: error.response?.data?.message || 'Something went wrong.',
          success: null
        });
      }
    }
  });

  return (
    <div className="w-full rounded-lg border bg-white border-light-gray">
      <div className="p-6 space-y-2 sm:p-8 md:space-y-4">
        <AlertMessage alert={message} />
        <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
          {type === 'create' ? 'Create Category' : 'Update Category'}
        </h1>
        <form className="space-y-4" method="POST" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="title"
              className={`block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm ${
                formik.errors.name && formik.touched.name ? 'border-danger' : ''
              }`}
              placeholder="Enter Title"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <span className="text-sm font-light text-danger">{formik.errors.name}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
          >
            {isLoading
              ? 'Please Wait...'
              : type === 'create'
                ? 'Create Category'
                : 'Update Category'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
