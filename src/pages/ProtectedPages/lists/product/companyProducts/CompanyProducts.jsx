import React, { useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { CiSearch } from 'react-icons/ci';
import Table from '@/components/tableManager/Table';
import { ProductTableColums } from '@/components/tableManager/ProductColumn';
import ConfirmationModal from '@/components/deleteConfirmation/ConfirmationModal';
import useAuthStore from '@/store/authStore';
import { Link } from 'react-router-dom';
import { paths } from '@/routes';

const CompanyProductsList = () => {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [itemToDelete, setItemToDelete] = useState(null);
  const [searchResult, setSearchResults] = useState([]);

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
      setError(error?.response?.data?.message || 'An error occurred');
    }
  };

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
    data.map((product) => ({
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
        console.error('Failed to delete the product', error);
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

      <div className="w-full  rounded-md p-4 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between my-4 gap-4 rounded-md">
          <p className="hidden md:block text-sm font-bold">All Products</p>

          <div className="w-full md:w-[33%] flex items-center ring-1 ring-dark-gray rounded-md p-1">
            <CiSearch />
            <input
              type="search"
              placeholder="Search..."
              className="border-none h-7 focus:outline-none focus:ring-0 text-sm w-full"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Link
            to={paths.addProduct}
            className=" w-full md:w-[33%] text-center border border-light-green rounded-md  px-3 py-2 transition-all duration-300 ease-in-out bg-light-green text-white hover:bg-white hover:text-light-green text-sm"
          >
            {' '}
            + Add New
          </Link>
        </div>
        <Table
          tableTitle="Latest Products"
          columns={ProductTableColums}
          data={displayedData}
          viewPath={paths.allProducts}
          editPath="/lists/product/edit-product"
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
};

export default CompanyProductsList;
