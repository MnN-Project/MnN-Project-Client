import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { httpErrorCodes } from '@/utils/http';
import { AlertMessage } from '@/utils/alertMessage';
import Spinner from '@/components/spinner/page';
import { paths } from '@/routes/paths';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [renderPage, setRenderPage] = useState(false);
  const [message, setMessage] = useState({ error: null, success: null });
  const [changePasswordMesg, setChangePasswordMes] = useState({ error: null, success: null });
  const [spinner, setSpinner] = useState(true);
  const navigate = useNavigate();

  // Verify userId and token before rendering the page.
  const params = useParams();

  useEffect(() => {
    const validateLink = async () => {
      try {
        const response = await apiClient.post(
          `${endpoints.verifyPasswordLink}/${params.userId}/${params.token}`
        );
        if (response.status === httpErrorCodes.OK) {
          setRenderPage(true);
        }
      } catch (error) {
        if (error.status === httpErrorCodes.UNPROCESSABLE_ENTITY) {
          setMessage({ error: error?.response?.data?.message, success: null });
        } else {
          if (['invalid token', 'jwt expired'].includes(error?.response?.data?.message)) {
            setMessage({ error: 'This link is Invalid or expired', success: null });
          } else {
            setMessage({ error: 'Internal Server Error', success: null });
          }
        }
      } finally {
        setSpinner(false);
      }
    };

    validateLink();
  }, [params.userId, params.token]);

  const validationSchema = Yup.object().shape({
    password: Yup.string().trim().required('Please enter your password'),
    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password')
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },

    validationSchema,

    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await apiClient.post(
          `${endpoints.resetPassword}/${params.userId}/${params.token}`,
          values
        );
        if (response.status == httpErrorCodes.OK) {
          setChangePasswordMes({ error: null, success: response.data.message });
          setIsLoading(false);
          setTimeout(() => {
            navigate(paths.login);
          }, 2000);
        }
      } catch (err) {
        setChangePasswordMes({ error: err.response?.data?.message, success: null });
        setIsLoading(false);
      }
    }
  });

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  if (spinner) {
    return <Spinner />;
  }

  return (
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

        {message.error && (
          <div className="w-full rounded-lg border bg-white shadow border-light-gray sm:max-w-md md:mt-0 xl:p-0">
            <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
              <AlertMessage alert={message} />
              <div className="">
                <Link
                  to="/forgot-password"
                  className="inline-block w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
                >
                  Back To Reset Password
                </Link>
              </div>
            </div>
          </div>
        )}

        {renderPage && (
          <div className="w-full rounded-lg border bg-white shadow border-light-gray sm:max-w-md md:mt-0 xl:p-0 ">
            <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
              <div>
                <AlertMessage alert={changePasswordMesg} />
                <h1 className="mb-1 text-lg font-bold leading-tight text-dark md:text-2xl">
                  Change Password
                </h1>
              </div>
              <form className="mt-4" method="POST" onSubmit={formik.handleSubmit}>
                <div className="mt-4 lg:mt-2 relative">
                  <label htmlFor="password" className="mb-2 block text-sm text-dark">
                    New Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="new-password"
                    autoFocus
                    id="password"
                    className={`block w-full rounded-lg border placeholder:text-sm bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm  ${
                      formik.errors.password && formik.touched.password ? 'border-danger' : ''
                    } `}
                    placeholder="*******"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <span className="text-sm font-light text-danger">{formik.errors.password}</span>
                  )}
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute inset-y-0 right-0 flex items-center p-3 mt-5 border-0"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="w-5 h-5 text-light-green" />
                    ) : (
                      <FaEye className="w-5 h-5 text-dark-gray" />
                    )}
                  </button>
                </div>

                <div className="mt-4 lg:mt-2 relative">
                  <label htmlFor="confirmPassword" className="mb-2 block text-sm text-dark">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    autoComplete="new-password"
                    id="confirmPassword"
                    className={`block w-full rounded-lg border text-sm bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm  ${
                      formik.errors.confirmPassword && formik.touched.confirmPassword
                        ? 'border-danger'
                        : ''
                    }`}
                    placeholder="*******"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <span className="text-sm font-light text-danger">
                      {formik.errors.confirmPassword}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleToggleConfirmPassword}
                    className="absolute inset-y-0 right-0 flex items-center p-3 mt-5 border-0"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="w-5 h-5 text-light-green" />
                    ) : (
                      <FaEye className="w-5 h-5 text-dark-gray" />
                    )}
                  </button>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg px-5 text-center text-sm font-medium text-white bg-green py-2.5 hover:bg-light-green focus:ring-green focus:outline-none focus:ring-4"
                  >
                    {isLoading ? 'Please wait...' : 'Reset Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResetPassword;
