import { endpoints } from '@/api/endpoints';
import { getLocalStorageItem, removeLocalStorageItem } from '@/utils/localStorage';
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { httpErrorCodes } from '@/utils/http';
import { AlertMessage } from '@/utils/alertMessage';
import Spinner from '@/components/spinner/page';
import { paths } from '@/routes/paths';
import { Link, useNavigate } from 'react-router-dom';
import { apiClient } from '@/api/apiClients';

const VerifyOtp = () => {
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ error: null, success: null });
  const [showPage, setShowPage] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getOtpPage = getLocalStorageItem('showOtpPage');
    if (!getOtpPage) {
      navigate(paths.login);
    } else {
      setShowPage(true);
    }
  }, [navigate]);

  useEffect(() => {
    const email = getLocalStorageItem('userEmail');
    if (email) {
      setUserEmail(email);
      const fetchUserId = async () => {
        try {
          const res = await apiClient.post(endpoints.getUserId, { email });
          setUserId(res.data.userId);
        } catch (error) {
          console.log(error);
          setMessage({ error: 'Internal Server error', success: null });
        }
      };
      fetchUserId();
    }
  }, []);

  const validateOTP = Yup.object({
    firstOTP: Yup.number().required('First OTP is required'),
    secondOTP: Yup.number().required('Second OTP is required'),
    thirdOTP: Yup.number().required('Third OTP is required'),
    fourthOTP: Yup.number().required('Fourth OTP is required'),
    userId: Yup.string().required('User ID is required')
  });

  const formik = useFormik({
    initialValues: {
      firstOTP: '',
      secondOTP: '',
      thirdOTP: '',
      fourthOTP: '',
      userId: ''
    },
    validationSchema: validateOTP,
    onSubmit: async (values) => {
      const otp = `${values.firstOTP}${values.secondOTP}${values.thirdOTP}${values.fourthOTP}`;
      const transformedValues = {
        otp,
        userId: values?.userId
      };
      try {
        setIsLoading(true);
        const response = await apiClient.post(endpoints.verifyOtp, transformedValues);
        if (response.status === httpErrorCodes.OK) {
          removeLocalStorageItem('userEmail');
          removeLocalStorageItem('showOtpPage');
          setIsLoading(false);
          setMessage({ error: null, success: 'OTP verified successfully,' });
          setTimeout(() => {
            navigate(paths.login);
          }, 2000);
        }
      } catch (error) {
        setMessage({ error: error.response?.data?.message.toString(), success: null });
        setIsLoading(false);
      }
    }
  });
  useEffect(() => {
    if (userId && formik.values.userId !== userId) {
      formik.setFieldValue('userId', userId);
    }
  }, [userId, formik.values.userId, formik]);

  const inputsRef = useRef([]);
  useEffect(() => {
    const form = document.getElementById('otp-form');
    const inputs = inputsRef.current;
    const submit = form?.querySelector('button[type=submit]');

    if (!form || !submit) return;

    const handleKeyDown = (e) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'Tab' &&
        !e.metaKey
      ) {
        e.preventDefault();
      }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        const index = inputs.indexOf(e.target);
        if (e.key === 'Backspace' && index > 0 && inputs[index].value === '') {
          inputs[index - 1].value = '';
          inputs[index - 1].focus();
        } else if (e.key === 'Delete' && index < inputs.length - 1 && inputs[index].value === '') {
          inputs[index + 1].value = '';
          inputs[index + 1].focus();
        }
      }
    };

    const handleInput = (e) => {
      const { target } = e;
      const index = inputs.indexOf(target);
      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          submit.focus();
        }
      }
    };

    const handleFocus = (e) => {
      e.target.select();
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text');
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split('');
      inputs.forEach((input, index) => (input.value = digits[index]));
      submit.focus();
    };

    inputs.forEach((input) => {
      if (input) {
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeyDown);
        input.addEventListener('focus', handleFocus);
        input.addEventListener('paste', handlePaste);
      }
    });

    return () => {
      inputs.forEach((input) => {
        if (input) {
          input.removeEventListener('input', handleInput);
          input.removeEventListener('keydown', handleKeyDown);
          input.removeEventListener('focus', handleFocus);
          input.removeEventListener('paste', handlePaste);
        }
      });
    };
  }, []);

  const handlePattern = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      formik.setFieldValue(name, value);
      if (e.target.nextSibling && value) {
        e.target.nextSibling.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  if (!showPage) {
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
        <div className="mx-auto max-w-md rounded-xl bg-white px-4 py-10 text-center shadow sm:px-8">
          <AlertMessage alert={message} />
          <header className="mb-8">
            {userEmail && (
              <p className="text-[15px] text-green">Enter the 4-digit code sent to {userEmail}</p>
            )}
          </header>
          <form id="otp-form" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-3">
              {['firstOTP', 'secondOTP', 'thirdOTP', 'fourthOTP'].map((name, index) => (
                <input
                  key={name}
                  type="text"
                  name={name}
                  autoFocus={index === 0}
                  className="h-14 w-14 appearance-none rounded border p-4 text-center text-2xl font-extrabold outline-none text-dark bg-light-gray border-gray hover:border-gray focus:border-green focus:ring-green focus:bg-white focus:ring-2"
                  pattern="[0-9]*"
                  onChange={handlePattern}
                  maxLength="1"
                  ref={(el) => (inputsRef.current[index] = el)}
                />
              ))}
            </div>
            <div className="mx-auto mt-4 max-w-[260px]">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="inline-flex w-full justify-center whitespace-nowrap rounded-lg text-sm font-medium text-white shadow-sm transition-colors duration-150 bg-green px-3.5 py-2.5 shadow-light-green/10 hover:bg-green focus:ring-green focus:outline-none focus:ring focus-visible:ring-green focus-visible:outline-none focus-visible:ring"
              >
                {isLoading ? 'Loading...' : 'Verify Account'}
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-slate-500">
            Didn&apos;t receive code?
            <Link className="font-medium text-green hover:text-light-green" to="/resend-otp">
              Resend otp?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
