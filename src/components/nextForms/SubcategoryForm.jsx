import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSubCategoryStore from '@/store/subcategoryStore';
import useCategoryStore from '@/store/categoryStore';

const SubcategoryForm = ({ type, data }) => {
  const { categories, fetchCategories } = useCategoryStore();
  const { createSubCategory, updateSubCategory } = useSubCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Define initialValues based on type
  const initialValues = {
    name: type === 'update' && data ? data.name : '', // Populate with existing data if type is 'update'
    categoryId: type === 'update' && data ? data.category : ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Title is required*'),
    categoryId: Yup.string().trim().required('Select Parent Category*')
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (type === 'create') {
        await createSubCategory(values);
      } else if (type === 'update' && data) {
        await updateSubCategory(data.id, values);
      }
      formik.resetForm();
    }
  });

  return (
    <div className="w-full rounded-lg border bg-white border-light-gray">
      <div className="p-6 space-y-2 sm:p-8 md:space-y-4">
        <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
          {type === 'create' ? 'Create Subcategory' : 'Edit Subcategory'}
        </h1>
        <form className="space-y-4" method="POST" onSubmit={formik.handleSubmit}>
          <div className="flex items-center">
            <label htmlFor="name" className="mr-2 text-xs">
              Title
            </label>
            <div className="flex-grow">
              <input
                type="text"
                name="name"
                id="name"
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
          </div>
          <div>
            <div className="max-h-48 overflow-y-auto">
              <div className="flex items-center">
                <label htmlFor="categoryId" className="mr-1 text-xs">
                  Parent Category
                </label>
                <select
                  name="categoryId"
                  id="categoryId"
                  className={
                    'block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm flex-grow'
                  }
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Select One
                  </option>
                  {categories &&
                    categories.map((cat) => (
                      <option className="capitalize" value={cat.id} key={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {formik.errors.categoryId && formik.touched.categoryId && (
              <span className="text-sm font-light text-danger">{formik.errors.categoryId}</span>
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

export default SubcategoryForm;
