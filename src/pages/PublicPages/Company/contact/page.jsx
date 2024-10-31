import React, { useState } from 'react';
import { AlertMessage } from '@/utils/alertMessage';
import { endpoints } from '@/api/endpoints';
import { httpErrorCodes } from '@/utils/http';
import { useCompany } from '../CompanyPageLayout/companyPageLayout';
import { Container } from '@/components/container/Container';
import { apiClient } from '@/api/apiClients';

const CompanyPageContact = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState({ error: null, success: null });
  const [isLoading, setIsLoading] = useState(false);
  const company = useCompany();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = {
      senderName,
      senderEmail,
      message: description
    };

    try {
      const response = await apiClient.post(`${endpoints.sendMessage}/${company._id}`, formData);
      if (response.status === httpErrorCodes.OK) {
        setSenderName('');
        setSenderEmail('');
        setDescription('');
        setMessage({
          error: null,
          success: 'Message Sent, We will get back to you as soon as possible'
        });
      }
    } catch (error) {
      setMessage({ error: 'Internal Server Error', success: null });
    } finally {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="">
      <Container className=" bg-white max-w-[1184px] mx-auto p-4 flex flex-col gap-4 lg:flex-row items-center justify-center my-4">
        <div className="py-6 px-4 w-[100%] md:w-[80%] ">
          <AlertMessage alert={message} />
          <form method="POST" className="w-full text-left " onSubmit={handleSubmit}>
            <header className="">
              <div className="capitalize p-4 flex flex-col items-center gap-4 md:flex-row text-sm">
                <span>Send Your Message to this Supplier</span>
              </div>
            </header>

            <div className=" w-full flex flex-col gap-4">
              <p className="text-sm mt-3">
                Content<span className="text-danger">*</span>
              </p>
              <textarea
                name="description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-40 text-sm"
                placeholder="Please enter clear details so your supplier will understand better"
              ></textarea>
            </div>
            <div className=" flex flex-col lg:flex-row items-center gap-4">
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm mt-3">
                  Email Address<span className="text-danger">*</span>
                </p>
                <input
                  type="text"
                  name="senderEmail"
                  className=" w-full lg:w-60 text-sm"
                  value={senderEmail}
                  required
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col gap-4">
                <p className="text-sm mt-3">
                  Your Name<span className="text-danger">*</span>
                </p>
                <input
                  type="text"
                  name="senderName"
                  className="w-full lg:w-60 text-sm"
                  value={senderName}
                  required
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-light-green text-white border-none hover:bg-green transition-all duration-500 ease-in-out py-2 px-4 my-5 text-sm w-60 "
            >
              {isLoading ? 'Please Wait...' : 'Send Inquiry Now'}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default CompanyPageContact;
