import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSubCategoryStore from '@/store/subcategoryStore';
import useTertiaryCategory from '@/store/tertiaryCategoryStore';

const SubSubcategoryForm = ({ type, data }) => {
  const { subcategories, fetchSubCategories } = useSubCategoryStore();
  const { createTerCategory, updateTerCategory } = useTertiaryCategory();

  useEffect(() => {
    fetchSubCategories();
  }, [fetchSubCategories]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Title is required*'),
    subCategory: Yup.string().trim().required('Select Parent SubCategory*')
  });

  const initialValues = {
    name: type === 'update' && data ? data.name : '',
    subCategory: type === 'update' && data ? data.subCategory : ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (type === 'create') {
        await createTerCategory(values);
      } else if (type === 'update' && data) {
        await updateTerCategory(data._id, values);
      }

      formik.resetForm();
    }
  });
  return (
    <div className="w-full rounded-lg border bg-white border-light-gray">
      <div className="p-6 space-y-2 sm:p-8 md:space-y-4">
        <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
          {type === 'create' ? 'Create Tertiary Category' : 'Edit Tertiary Category'}
        </h1>
        <form className="space-y-4" method="POST" onSubmit={formik.handleSubmit}>
          <div className="flex items-center">
            <label htmlFor="title" className="mr-2">
              Title
            </label>
            <div className="flex-grow">
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
              {formik.errors.title && formik.touched.name && (
                <span className="text-sm font-light text-danger">{formik.errors.name}</span>
              )}
            </div>
          </div>
          <div>
            <div className="max-h-48 overflow-y-auto">
              <div className=" flex items-center">
                <label htmlFor="parent" className="mr-1">
                  Parent Subcategory
                </label>

                <select
                  name="subCategory"
                  id="parent"
                  className={
                    'block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm flex-grow'
                  }
                  value={formik.values.subCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Select One
                  </option>
                  {subcategories &&
                    subcategories.map((cat) => (
                      <option className="capitalize" value={cat.id} key={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {formik.errors.subCategory && formik.touched.subCategory && (
              <span className="text-sm font-light text-danger">{formik.errors.subCategory}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
          >
            {type === 'create' ? 'Create' : 'Update'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubSubcategoryForm;
