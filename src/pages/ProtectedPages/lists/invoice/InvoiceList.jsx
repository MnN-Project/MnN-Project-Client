import React, { useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import Table from '@/components/tableManager/Table';
import { InvoiceTableColums } from '@/components/tableManager/ProductColumn';
import ConfirmationModal from '@/components/deleteConfirmation/ConfirmationModal';
import useAuthStore from '@/store/authStore';
import { PopupError } from '@/utils/alertMessage';
import { dateFormatter } from '@/utils/errorFormatter';
import { Link } from 'react-router-dom';
import { paths } from '@/routes';

const InvoiceList = () => {
  const { user } = useAuthStore();
  const [openModal, setOpenModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [activeuser, setActiveUser] = useState(user);
  const [error, setError] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchActiveUser = async () => {
      try {
        const response = await apiClient.get(`${endpoints.getAUserById}/${user.id}`);
        setActiveUser(response.data);
      } catch (error) {
        setError('Error Occured');
      }
    };

    if (user && user.id) fetchActiveUser();
  }, [user, user.id]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await apiClient.get(
          `${endpoints.getCompanyInvoices}/${activeuser?.companyId?.id}`
        );
        setSubscriptions(response.data);
      } catch (error) {
        setError('An Error Occured');
      }
    };

    if (activeuser && activeuser?.companyId?.id) fetchSubscriptions();
  }, [activeuser && activeuser?.companyId?.id]);

  const getStatus = (item) => {
    if (item.expired) {
      return 'Expired';
    }
    if (item.status === 'unpaid') {
      return 'Inactive';
    }
    return 'Active';
  };

  const transformProductData = subscriptions.map((item) => ({
    id: item._id,
    Invoice: item.invoice,
    'Membership Level': item.subscription_level,
    Amount: item.amount,
    Duration: item.duration > 1 ? `${item.duration} Years` : `${item.duration} Year`,
    'Subscription Date': dateFormatter(item.sub_date),
    'Expiry Date': dateFormatter(item.expiry_date),
    'Created By': `${item.staffId.first_name} ${item.staffId.last_name}`,
    Payment: item.status,
    Status: getStatus(item)
  }));

  const handleDelete = (row) => {
    setItemToDelete(row);
    setOpenModal(true); // Open the modal
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        // Make an API call to delete the item
        await apiClient.delete(`${endpoints.deleteInvoice}/${itemToDelete.id}`);

        // Remove the item from the list
        setSubscriptions((prev) => prev.filter((product) => product._id !== itemToDelete.id));

        setOpenModal(false); // Close the modal
        setItemToDelete(null); // Reset the item to delete
      } catch (error) {
        setError('Failed to delete Invoice');
      }
    }
  };

  return (
    <main>
      {error && <PopupError message={error} />}
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message={'Are you sure you want to delete this Invoice?'}
      />

      <div className="w-full  rounded-md p-4 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between my-4 gap-4 rounded-md">
          <p className=" text-sm font-bold">All Invoices</p>

          <Link
            to={paths.pricingTable}
            className=" w-full md:w-[23%] text-center border border-light-green rounded-md  px-3 py-2 transition-all duration-300 ease-in-out bg-light-green text-white hover:bg-white hover:text-light-green text-sm"
          >
            {' '}
            + Add New
          </Link>
        </div>
        <Table
          tableTitle="Latest Products"
          columns={InvoiceTableColums}
          data={transformProductData}
          viewPath={paths.invoice}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
};

export default InvoiceList;
