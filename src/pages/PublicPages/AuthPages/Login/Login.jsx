import { Formik } from 'formik';
import * as Yup from 'yup';
import useAuthStore from '@/store/authStore';
import { FormWrapper, Input, SubmitButton } from '@/components/formManager/FormWrapper';
import { PopupError } from '@/utils/alertMessage';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuthStore();

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .trim()
      .required('Please enter your email address*'),
    password: Yup.string().trim().required('Please enter password')
  });

  return (
    <section className="bg-light-gray">
      {error !== 'Not authenticated' && error && <PopupError message={error} />}

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
        <div className="w-full rounded-lg border bg-white border-light-gray sm:max-w-md md:mt-0 xl:p-0 shadow-lg">
          <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
            <h1 className="text-lg font-bold leading-tight tracking-tight text-dark md:text-2xl">
              Login
            </h1>

            {/* Formik Wrapper */}
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                await login(values, navigate);
              }}
            >
              {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
                <FormWrapper onSubmit={handleSubmit}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="email"
                    className=" bg-light-gray focus:ring-green focus:border-green "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    error={errors.email && touched.email ? errors.email : null}
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password ? errors.password : null}
                  />
                  <SubmitButton label="Sign In" isLoading={isLoading} />
                  <p className="text-sm font-light text-dark-gray">
                    Don&apos;t have an account?
                    <Link to="/register" className="font-medium text-green hover:underline mx-2">
                      Sign up here
                    </Link>
                  </p>
                  <p className="text-sm font-light text-dark-gray">
                    Forgotten Password?
                    <Link
                      to="/forgot-password"
                      className="font-medium text-green hover:underline mx-2"
                    >
                      Click Here
                    </Link>
                  </p>
                </FormWrapper>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
