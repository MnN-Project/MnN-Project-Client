"use client";
import AdminContainer from "@/components/container/AdminContainer";

const Invoice = () => {
  return (
    <AdminContainer>
      <main>
        <div className="mx-4 mb-4 p-4 rounded-lg bg-white ring-1 ring-gray sm:p-6 sm:mx-6 lg:p-8 lg:m-6 grid grid-cols-12 lg:grid-cols-10">
          <div className="col col-span-10">
            <div className="sm:flex w-full sm:justify-between">
              <div className="font-bold text-2xl sm:text-[30px] text-dark">
                Invoice #0852
              </div>
              <div className="sm:text-right ">
                <div className="sm:ml-auto h-10 w-10">Brand Logo</div>
                <div className="mt-3 text-dark">
                  <div className="font-semibold text-md">
                    MNN Inc.
                  </div>
                  <div className="text-sm mt-1 font-medium">
                    291 N 4th St, Victoria Island, CA 95112, NG
                  </div>
                </div>
                <div className="mt-3 text-sm font-medium">
                  August 1, 2021
                </div>
              </div>
            </div>
            <div className="mt-6 sm:w-72">
              <div className="mb-4 font-bold uppercase">
                Bill to
              </div>
              <address className="text-dark-gray font-medium">
                Dangote Inc., Lagos, Ikoyi 3864 Johnson Street, Nigeria
                VAT Code: AA-1234567890
              </address>
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
                            Price
                          </th>
                          <th
                            scope="col"
                            className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                          >
                            Qty
                          </th>
                          <th
                            scope="col"
                            className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                          >
                            Off
                          </th>
                          <th
                            scope="col"
                            className="p-4 uppercase text-left text-xs font-semibold tracking-wider"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="whitespace-nowrap text-sm p-4 font-normal">
                            <div className="font-semibold">
                              Pixel Design System
                            </div>
                            <div className="text-dark-gray">
                              Building Products
                            </div>
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark-gray">
                            $128.00
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark">
                            1
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark">
                            50%
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark-gray">
                            $64.00
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap text-sm p-4 font-normal">
                            <div className="font-semibold">
                            Volt Dashboard Template
                            </div>
                            <div className="text-dark-gray">
                              Textile Product
                            </div>
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark-gray">
                            $245.00
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark">
                            1
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark">
                            50%
                          </td>
                          <td className="whitespace-nowrap p-4 font-normal text-dark-gray">
                            $75.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:ml-auto sm:w-72 sm:text-right">
              <div className="flex justify-between sm:text-right">
                <div className="text-sm font-medium text-dark-gray uppercase">
                  Subtotal
                </div>
                <div className="text-sm font-semibold text-dark">
                  $415.00
                </div>
              </div>
              <div className="flex justify-between sm:text-right mt-3">
                <div className="text-sm font-medium text-dark-gray uppercase">
                  Tax rate
                </div>
                <div className="text-sm font-semibold text-dark">
                  5%
                </div>
              </div>
              <div className="flex justify-between sm:text-right mt-3">
                <div className="text-sm font-medium text-dark-gray uppercase">
                  Discount
                </div>
                <div className="text-sm font-semibold text-dark">
                  $64.00
                </div>
              </div>
              <div className="flex justify-between sm:text-right mt-3">
                <div className="text-sm font-semibold text-dark uppercase">
                  Total
                </div>
                <div className="text-sm font-semibold text-dark">
                  $351.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AdminContainer>
  );
};

export default Invoice;
