import React, { useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { PopupError } from '@/utils/alertMessage';
import { motion } from 'framer-motion';
import { TiTick } from 'react-icons/ti';
import Confetti from 'react-confetti';
import Spinner from '@/components/spinner/page';
import { useWindowSize } from 'react-use';
import { useSearchParams } from 'react-router-dom';

const PaymentReport = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get('reference');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (reference) {
          // Ensure reference exists before API call
          const response = await apiClient.get(`${endpoints.verifyPayment}?reference=${reference}`);
          setMessage(
            response?.data?.message || 'Congratulations, Your Subscription was successful'
          );
        }
      } catch (error) {
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [reference]); // Adjust dependency to just `reference`

  if (loading) return <Spinner />;

  return (
    <main>
      {error && <PopupError message={error} />}

      {/* Confetti animation */}
      {message && <Confetti width={width} height={height} recycle={false} />}

      <div className="flex h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="m-auto bg-light-green max-w-[500px] shadow-md p-8 rounded-md flex flex-col items-center justify-center"
        >
          <div className="h-30 w-30 flex items-center justify-center ring-4 rounded-full ring-white mb-7">
            <TiTick className="text-[60px] text-white" />
          </div>
          <p className="text-md font-light text-white">{message}</p>
        </motion.div>
      </div>
    </main>
  );
};

export default PaymentReport;
