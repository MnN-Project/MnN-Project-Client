import React, { useEffect, useState } from 'react';
import useAuthStore from '@/store/authStore';
import { LoggedInUserPath } from '@/utils/helpers';
import UserCard from '@/components/userCards/UserCard';
import { AiFillProduct } from 'react-icons/ai';
import { FaUserTie, FaRegEnvelope } from 'react-icons/fa';
import { BsCashStack } from 'react-icons/bs';
import EventCalendar from '@/components/eventCalendar/EventCalendar';
import Table from '@/components/tableManager/Table';
import { CiSearch } from 'react-icons/ci';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import ConfirmationModal from '@/components/deleteConfirmation/ConfirmationModal';
import { ProductTableColums } from '@/components/tableManager/ProductColumn';
import { useNavigate } from 'react-router-dom';
import { PopupError } from '@/utils/alertMessage';

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const [openModal, setOpenModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null); // Store the item to delete
  const [unreadOrders, setUnreadOrders] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResults] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    if (isAuthenticated && user?.role && user.role !== 'Seller') {
      const pathhd = LoggedInUserPath(user);
      navigate(pathhd);
    }
  }, [user, isAuthenticated, navigate]);

  // Fetch Products
  const fetchProducts = async (searchQuery = '') => {
    try {
      const url = `${endpoints.getcompanyProductsByUser}/${user.id}`;
      const response = await apiClient.get(searchQuery ? `${url}/?search=${searchQuery}` : url);
      if (searchQuery) {
        setSearchResults(response.data);
      } else {
        setProducts(response.data);
        setSearchResults([]); // Reset search results when not searching
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'An Error occured');
    }
  };

  // Fetch products on component mount or when user changes
  useEffect(() => {
    if (!isLoading && isAuthenticated && user?.id) {
      fetchProducts();
    }
  }, [user, isAuthenticated, isLoading]);

  // Search products based on query
  useEffect(() => {
    const validQuery = /^[a-zA-Z0-9\s]+$/;
    if (query.length > 2 && validQuery.test(query)) {
      fetchProducts(query);
    } else {
      // If the query is less than 3 characters, fetch all products
      if (!isLoading && isAuthenticated && user?.id) {
        fetchProducts();
      }
    }
  }, [query]);

  const transformProductData = (data) =>
    data.slice(0, 6).map((product) => ({
      id: product._id, // hidden in Table
      slug: product.slug, // Hidden in Table
      Title: product.title,
      Category: product.category,
      price: `${product.currency} ${product.price}`,
      'Min Order': `${product.min_order} ${product.unit}`,
      'Created By': `${product.createdBy.first_name} ${product.createdBy.last_name}`
    }));

  // Determine which data to display
  const displayedData =
    searchResult.length > 0 ? transformProductData(searchResult) : transformProductData(products);

  // Fetch Company Total Orders
  useEffect(() => {
    const fetechOrders = async () => {
      const response = await apiClient.get(
        `${endpoints.getOrdersByCompanyId}/${products[0]?.companyId?._id}`
      );
      setUnreadOrders(response.data.totalUnread);
    };

    if (products[0]) fetechOrders();
  }, [products]);

  //  Fetch all messages
  useEffect(() => {
    const fetechMessages = async () => {
      const response = await apiClient.get(
        `${endpoints.getMessagesByCompanyId}/${products[0]?.companyId?._id}`
      );
      setUnreadMessages(response.data.totalUnread);
    };

    if (products[0]) fetechMessages();
  }, [products]);

  const handleDelete = (row) => {
    setItemToDelete(row);
    setOpenModal(true); // Open the modal
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        // Make an API call to delete the item
        await apiClient.delete(`${endpoints.deleteProduct}/${itemToDelete.id}`);

        // Remove the item from the list
        setProducts((prev) => prev.filter((product) => product._id !== itemToDelete.id));

        setOpenModal(false); // Close the modal
        setItemToDelete(null); // Reset the item to delete
      } catch (error) {
        setError(error?.response?.data?.message || 'An Error occured');
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
        message={`Are you sure you want to delete "${itemToDelete?.Title}"?`}
      />
      {/* cards */}
      <div className=" flex items-center justify-between gap-4 flex-wrap">
        <UserCard
          title="Total Products"
          subTitle="Published Products"
          value={products.length || 0}
          icon={AiFillProduct}
          bgColor="bg-green/10"
          iconColor="text-light-green"
        />
        <UserCard
          title="Total Staff"
          subTitle="Staff members"
          value="0"
          icon={FaUserTie}
          bgColor="bg-blue/10"
          iconColor="text-blue"
        />
        <UserCard
          title="New Order"
          subTitle="Product Requests"
          value={unreadOrders.length || 0}
          icon={BsCashStack}
          bgColor="bg-danger/10"
          iconColor="text-danger"
        />
        <UserCard
          title="New Messages"
          subTitle="messages"
          value={unreadMessages.length || 0}
          icon={FaRegEnvelope}
          bgColor="bg-dark/15"
          iconColor="text-dark"
        />
      </div>

      <div className="flex gap-4 items-start flex-col xl:flex-row mt-4">
        {/* LEFT */}
        <div className="w-full  rounded-md p-4 bg-white">
          <div className="flex items-center justify-between my-4 gap-4">
            <p className="text-sm font-bold">Latest Products</p>

            <div className="flex items-center ring-1 ring-dark-gray rounded-md p-1">
              <CiSearch />
              <input
                type="search"
                placeholder="Search..."
                className="border-none h-7 focus:outline-none focus:ring-0 text-sm"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <Table
            tableTitle="Latest Products"
            columns={ProductTableColums}
            data={displayedData}
            viewPath={'/product'}
            editPath="/lists/product/edit-product"
            onDelete={handleDelete}
          />
        </div>

        <div className="w-full xl:w-1/3 md:flex flex-col gap-8 bg-white rounded-md hidden">
          <EventCalendar />
        </div>
      </div>
    </main>
  );
};

export default CompanyDashboard;
