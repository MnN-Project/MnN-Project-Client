import { useState } from 'react';
import * as Yup from 'yup';
import { AlertMessage } from '@/utils/alertMessage';
import { useFormik } from 'formik';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { httpErrorCodes } from '@/utils/http';
import { paths } from '@/routes/paths';
import { setLocalStorageItem } from '@/utils/localStorage';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState();
  const [message, setMessage] = useState({ error: null, success: null });
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .trim()
      .required('Please enter your email address*')
  });

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await apiClient.post(endpoints.forgotPassword, values);
        if (response.status == httpErrorCodes.OK) {
          setMessage({ error: null, success: response.data.message });
          setIsLoading(false);
          formik.resetForm();
        }
      } catch (error) {
        setMessage({ error: error.response?.data?.message, success: null });
        if (error.response.status == httpErrorCodes.CONFLICT) {
          setLocalStorageItem('userEmail', values.email);
          setLocalStorageItem('showOtpPage', true);
          setTimeout(() => {
            navigate(paths.resendOtp);
          }, 2000);
        }
      } finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <>
      <section className="bg-light-gray">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 h-[100dvh] lg:py-0">
          <Link to="/" className="mb-6 flex items-center text-2xl font-semibold text-dark">
            <img
              src="/assets/Logo2.png"
              alt="logo"
              width={200}
              height={120}
              className="w-[250px] h-auto object-cover"
            />
          </Link>
          <div className="w-full rounded-lg border bg-white shadow border-light-gray sm:max-w-md md:mt-0 xl:p-0 ">
            <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
              <div>
                <AlertMessage alert={message} />
                <h1 className="mb-1 text-sm font-bold leading-tight tracking-tight text-dark md:text-2xl">
                  Forgot Your Password?
                </h1>
              </div>
              <form className="space-y-4" method="POST" onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoFocus
                    className={`block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm ${
                      formik.errors.email && formik.touched.email ? 'border-danger' : ''
                    }  `}
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <span className="text-sm font-light text-danger">{formik.errors.email}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-block rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
                >
                  {isLoading ? 'Please Wait...' : 'Submit'}
                </button>
                <Link
                  to="/login"
                  className="ml-3 inline-block text-center text-sm font-medium text-green hover:underline"
                >
                  Return to login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
