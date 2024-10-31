import { useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { PopupError } from '@/utils/alertMessage';
import { dateFormatter } from '@/utils/errorFormatter';
import { Link, useParams } from 'react-router-dom';
import { paths } from '@/routes';

const SingleInvoice = () => {
  const { invoice } = useParams();
  const [error, setError] = useState(null);
  const [invoiceDetails, setInvoiceDetails] = useState({
    _id: '',
    subscription_level: ''
  });

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await apiClient.get(`${endpoints.fetchInvoice}/${invoice}`);

        setInvoiceDetails(response.data);
      } catch (error) {
        setError(`${error?.response?.data?.message || 'An error occured'}`);
      }
    };

    if (invoice) fetchInvoice();
  }, [invoice]);

  return (
    <main>
      {error && <PopupError message={error} />}
      <div className="mx-4 mb-4 p-4 rounded-lg bg-white ring-1 ring-gray sm:p-6 sm:mx-6 lg:p-8 lg:m-6 grid grid-cols-12 lg:grid-cols-10">
        <div className="col col-span-12">
          <div className=" flex flex-col-reverse md:flex-row items-start justify-between gap-4">
            {invoiceDetails?.email !== undefined ? (
              <div className="left font-extrabold text-lg">
                Invoice: <span># {invoice} </span>
              </div>
            ) : (
              <div className="left font-extrabold text-lg text-danger">Fake Invoice</div>
            )}

            <div className="right">
              <div className="mt-3 text-dark text-2xs">
                <img
                  src="/assets/Logo2.png"
                  alt="logo"
                  width={200}
                  height={120}
                  className="w-[150px] h-auto object-cover"
                />
                <div className="font-semibold my-2">Made-N-Nigeria Inc.</div>
                <div className=" mt-1 font-medium">
                  <p className="text-xs font-semibold">
                    Head Office:{' '}
                    <span className="font-light text-xs xs:text-wrap">
                      {' '}
                      No 4 Olabode Street Ajao Estate,Lagos Nigeria
                    </span>
                  </p>
                  <p className="text-xs font-semibold">
                    Branch Office:{' '}
                    <span className="font-light text-xs xs:text-wrap">
                      {' '}
                      No 4 Takoradi Street, GRA Apapa, Lagos Nigeria
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:w-72">
            <div className="mb-4 font-bold uppercase">Bill to</div>
            <address className="text-dark-gray font-medium capitalize">
              {invoiceDetails?.companyId?.name || ''}
            </address>
            <p className="text-dark-gray font-medium capitalize">
              {invoiceDetails?.companyId?.companyAddress || ''}
            </p>
            <p className="text-xs font-semibold">
              Date:{' '}
              <span className="font-light text-sm xs:text-wrap my-3">
                {dateFormatter(invoiceDetails?.createdAt)}
              </span>
            </p>
          </div>

          {/* Table*/}
          <div className="mt-6 flex flex-col">
            <div className="overflow-x-auto border-b border-gray">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-light-gray text-dark">
                      <tr>
                        <th
                          scope="col"
                          className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                        >
                          Item
                        </th>
                        <th
                          scope="col"
                          className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                        >
                          Rate
                        </th>
                        <th
                          scope="col"
                          className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                        >
                          Duration
                        </th>
                        <th
                          scope="col"
                          className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                        >
                          Ordered By
                        </th>
                        <th
                          scope="col"
                          className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    {invoiceDetails?.email !== undefined ? (
                      <tbody>
                        <tr>
                          <td className="whitespace-nowrap text-sm p-4 font-normal">
                            <div className="font-semibold capitalize">
                              {invoiceDetails?.subscription_level}ship Subscription
                            </div>
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark-gray">
                            ₦{' '}
                            {invoiceDetails?.amount && invoiceDetails?.duration
                              ? (invoiceDetails.amount / invoiceDetails.duration).toFixed(2)
                              : 'N/A'}
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark">
                            {invoiceDetails?.duration}{' '}
                            {invoiceDetails?.duration > 1 ? 'Years' : 'Year'}
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark capitalize">
                            {invoiceDetails?.staffId?.first_name}{' '}
                            {invoiceDetails?.staffId?.last_name}
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark-gray">
                            {invoiceDetails?.amount}
                          </td>
                          <td
                            className={`whitespace-nowrap p-4 font-normal capitalize ${invoiceDetails?.status === 'unpaid' ? 'text-danger' : 'text-light-green'}`}
                          >
                            {invoiceDetails?.status}
                          </td>
                        </tr>
                      </tbody>
                    ) : null}
                  </table>
                </div>
              </div>
            </div>
          </div>
          {invoiceDetails?.email !== undefined ? (
            <div className="mt-6 sm:ml-auto sm:w-72 sm:text-right">
              <div className="flex justify-between sm:text-right mt-3">
                <div className="text-sm font-semibold text-dark uppercase">Total</div>
                <div className="text-sm font-semibold text-dark">₦ {invoiceDetails?.amount}</div>
              </div>

              {invoiceDetails?.status !== 'paid' ? (
                <div className="py-4 md:py-3 flex justify-end">
                  <Link
                    to={`${paths.checkout}?invoice=${invoiceDetails?.invoice}`}
                    className="bg-light-green text-white py-2 px-3 rounded-md hover:bg-green"
                  >
                    Checkout
                  </Link>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default SingleInvoice;
