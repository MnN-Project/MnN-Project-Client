import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { endpoints } from '@/api/endpoints';
import { setLocalStorageItem } from '@/utils/localStorage';
import { httpErrorCodes } from '@/utils/http';
import { AlertMessage } from '@/utils/alertMessage';
import { paths } from '@/routes/paths';
import { Link, useNavigate } from 'react-router-dom';
import { apiClient } from '@/api/apiClients';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState({ error: null, success: null });
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .trim()
      .required('Please enter your email address*'),
    password: Yup.string().trim().required('Please enter your password'),
    // .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },

    validationSchema,

    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await apiClient.post(endpoints.register, values);
        if (response.status == httpErrorCodes.OK) {
          setLocalStorageItem('userEmail', values.email);
          setMessage({ error: null, success: response.data.message });
          // setIsLoading(false);
          setLocalStorageItem('showOtpPage', true);
          setTimeout(() => {
            navigate(paths.otp);
          }, 2000);
        }
      } catch (err) {
        setMessage({ error: err.response?.data?.message, success: null });
        if (err.response?.data?.message == httpErrorCodes.UNVERIFIED) {
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
  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  // Handle Google Auth
  // const handleGoogleSubmit = async (e) =>{
  //   e.preventDefault()
  //   try {
  //     const response = await apiClient.get(endpoints.googleLogin)
  //     console.log(response)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <section className="bg-gray-50 h-dvh">
        <div className="mx-auto h-full px-4 py-6 max-w-[1280px] lg:grid lg:grid-cols-12 lg:gap-20">
          <div className="mr-auto hidden flex-col justify-between lg:col-span-5 lg:flex xl:col-span-6 xl:mb-0">
            <div className="pt-8">
              <Link to="/" className="mb-6 flex items-center text-2xl font-semibold text-dark">
                <img
                  src="/assets/Logo2.png"
                  alt="logo"
                  width={200}
                  height={120}
                  priority="true"
                  className="w-[250px] h-auto object-cover"
                />
              </Link>
              <div className="flex">
                <svg
                  className="mr-2 block h-5 w-5 shrink-0 fill-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h3 className="mb-2 font-bold leading-4 text-slate-900">Get started quickly</h3>
                  <p className="mb-2 font-light text-slate-600">
                    Integrate with Business Oriented platform.
                  </p>
                </div>
              </div>
              <div className="flex pt-8">
                <svg
                  className="mr-2 block h-5 w-5 shrink-0 fill-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h3 className="mb-2 font-bold leading-4 text-slate-900">
                    Support any business model
                  </h3>
                  <p className="mb-2 font-light text-slate-600">
                    Place your business that you dont want to share with the world in private.
                  </p>
                </div>
              </div>
              <div className="flex pt-8">
                <svg
                  className="mr-2 block h-5 w-5 shrink-0 fill-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h3 className="mb-2 font-bold leading-4 text-slate-900">
                    Join millions of businesses
                  </h3>
                  <p className="mb-2 font-light text-slate-600">
                    Made in Nigeria is trusted by ambitious startups and enterprises of every size.
                  </p>
                </div>
              </div>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/about-us" className="text-sm text-slate-700 hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-slate-700 hover:underline">
                    Term &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-slate-700 hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-sm text-slate-700 hover:underline">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/complaint" className="text-sm text-slate-700 hover:underline">
                    Complaint
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-slate-700 hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mb-6 text-center md:hidden">
            <Link
              to="/"
              className="mb-6 justify-center flex items-center text-2xl font-semibold text-dark"
            >
              <img
                src="/assets/Logo2.png"
                alt="logo"
                width={200}
                height={120}
                className="w-[250px] h-auto object-cover"
                priority="true"
              />
            </Link>
          </div>
          {/* left */}
          <div className="mx-auto w-full sm:max-w-lg md:mt-0 lg:col-span-7 xl:col-span-6 ">
            <div className="rounded-md border bg-white p-6 border-gray shadow-lg">
              <AlertMessage alert={message} />
              <h1 className="text-sm font-bold -leading-[6px] text-dark lg:text-xl">
                Create your Free Account
              </h1>
              {/* <form method="get" onSubmit={handleGoogleSubmit}>
                <div className="mt-4 items-center space-y-4 sm:space-x-4 sm:space-y-0 sm:flex">
                  <button type="submit"  className="inline-flex w-full items-center justify-center rounded-lg border px-5 py-2 text-sm font-medium border-gray">
                      <svg
                        className="mr-2 block h-5 w-5"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_13183_10121)">
                          <path
                            d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                            fill="#3F83F8"
                          ></path>
                          <path
                            d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                            fill="#FBBC04"
                          ></path>
                          <path
                            d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                            fill="#EA4335"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_13183_10121">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0.5)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      Sign up with Google
                  </button>
                </div>
              </form> */}
              {/* <div className="mt-4 flex items-center">
                <div className="w-full h-0.5 bg-gray"></div>
                <div className="px-5 text-center">or</div>
                <div className="w-full h-0.5 bg-gray"></div>
              </div> */}
              <form className="mt-4" method="POST" onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    id="email"
                    autoFocus
                    className={`block w-full rounded-lg border bg-light-gray border-gray text-dark p-2.5 focus:ring-green focus:border-green sm:text-sm ${
                      formik.errors.email && formik.touched.email ? 'border-danger' : ''
                    }`}
                    placeholder=""
                    required=""
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <span className="text-sm font-light text-danger">{formik.errors.email}</span>
                  )}
                </div>
                <div className="mt-4 lg:mt-2 relative">
                  <label htmlFor="password" className="mb-2 block text-sm font-medium">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="password"
                    id="password"
                    placeholder=""
                    className="block w-full rounded-lg border bg-light-gray p-[10px] border-gray focus-within:border-green focus:ring-green sm:text-sm"
                    required=""
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
                  <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    autoComplete="confirm-password"
                    id="confirm-password"
                    placeholder=""
                    className="block w-full rounded-lg border bg-light-gray p-[10px] border-gray focus-within:border-green focus:ring-green sm:text-sm"
                    required=""
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
                <div className="mt-4 flex flex-start lg:mt-6">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded-sm border text-green focus:ring-3 focus:ring-green"
                      required
                    />
                  </div>
                  <div className="ml-3 text-xs text-dark-gray">
                    <label htmlFor="terms" className="font-light">
                      By signing up, you are creating a MNN account, and you agree to MNN{' '}
                      <Link className="font-medium text-green" to="#">
                        Terms of Use
                      </Link>
                      and{' '}
                      <Link className="font-medium text-green" to="#">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg px-5 text-white py-[10px] bg-green hover:bg-light-green focus:ring-green lg:mt-6"
                >
                  {isLoading ? 'Loading...' : 'Create an account'}
                </button>
                <p className="mt-4 text-sm text-dark-gray">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-green">
                    Sign in here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          {/* right */}
        </div>
      </section>
    </>
  );
};

export default Register;
