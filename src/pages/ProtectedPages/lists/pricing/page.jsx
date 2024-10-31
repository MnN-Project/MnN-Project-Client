import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { paths } from '@/routes/paths';
import { PopupError } from '@/utils/alertMessage';
import { httpErrorCodes } from '@/utils/http';
import { Link, useNavigate } from 'react-router-dom';
import { FaEllipsisVertical } from 'react-icons/fa6';
import useAuthStore from '@/store/authStore';
import ConfirmationModal from '@/components/deleteConfirmation/ConfirmationModal';

const PricingTab = ({
  popular,
  duration,
  planName,
  price,
  planDescription,
  features,
  packageId,
  handleSubmit,
  loading,
  toggleMenu,
  isMenuVisible,
  handleDelete
}) => {
  const { user } = useAuthStore();

  return (
    <div className={`h-full ${popular ? 'border-green bg-white border rounded-lg' : 'bg-white'}`}>
      <div className="relative flex flex-col h-full p-6 rounded-lg border border-gray shadow shadow-dark/5">
        {user && user.role === 'Admin' ? (
          <>
            <button onClick={() => toggleMenu(packageId)} className="absolute top-2 right-2">
              <FaEllipsisVertical />
            </button>
            {isMenuVisible && (
              <div className="absolute top-8 right-3 flex flex-col gap-4 bg-white p-4 rounded-md ring-1 ring-light-gray text-sm shadow-lg">
                <Link to={`${paths.editPackage}/${packageId}`}>Edit</Link>

                <button onClick={(e) => handleDelete(e, packageId)}>Delete</button>
              </div>
            )}
          </>
        ) : null}

        {popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-medium py-1.5 px-3 bg-green text-white rounded-full shadow-sm shadow-dark/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-dark font-semibold mb-1 capitalize">{planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-dark font-bold text-lg">₦</span>
            <span className="text-dark font-bold text-xl">{price.yearly * duration}</span>
            <span className="text-dark-gray font-medium">/ {duration > 1 ? 'Years' : 'Year'}</span>
          </div>
          <div className="text-sm text-dark-gray mb-5">{planDescription}</div>

          <form onSubmit={(e) => handleSubmit(e, packageId)}>
            <button
              type="submit"
              className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-light-green px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-green focus-visible:outline-none focus-visible:ring focus-visible:ring-green/30 transition-colors duration-150"
            >
              {loading ? 'Please Wait...' : 'Purchase Plan'}
            </button>
          </form>
        </div>
        <div className="text-dark font-medium mb-3">Includes:</div>
        <ul className="text-dark-gray text-sm space-y-3 grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-3 h-3 fill-green mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Define prop types for PricingTab
PricingTab.propTypes = {
  popular: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  planName: PropTypes.string.isRequired,
  price: PropTypes.shape({
    yearly: PropTypes.number.isRequired
  }).isRequired,
  planDescription: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  packageId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
};

const Pricing = () => {
  const [duration, setDuration] = useState(1); // Default to 1 year
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [loadingPackages, setLoadingPackages] = useState({});
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState({});

  const [openModal, setOpenModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await apiClient.get(endpoints.getAllPackages);
        setPackages(response.data);
      } catch (error) {
        setError('An Error Occurred');
      }
    };
    fetchPackages();
  }, []);

  // Handle the form submission
  const handleSubmit = async (e, packageId) => {
    e.preventDefault();
    setLoadingPackages((prevState) => ({ ...prevState, [packageId]: true }));

    try {
      const response = await apiClient.post(endpoints.choosePackege, {
        packageId,
        duration
      });
      if (response.status === httpErrorCodes.OK) {
        navigate(`${paths.invoice}/${response.data.invoice}`);
      }
    } catch (error) {
      setError('An Error Occurred!');
    } finally {
      setLoadingPackages((prevState) => ({ ...prevState, [packageId]: false }));
    }
  };

  const toggleMenu = (packageId) => {
    setActiveMenu((prev) => ({ ...prev, [packageId]: !prev[packageId] }));
  };

  const handleDelete = (e, packageId) => {
    e.stopPropagation();
    setItemToDelete(packageId);
    setOpenModal(true); // Open the modal
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        await apiClient.delete(`${endpoints.deletePackage}/${itemToDelete}`);

        // Update the packages state by removing the deleted package
        setPackages((prevPackages) => prevPackages.filter((pkg) => pkg._id !== itemToDelete));
        setOpenModal(false); // Close the modal
        setItemToDelete(null); // Reset the item to delete
      } catch (error) {
        setError('An error occurred while deleting the package');
      }
    }
  };

  return (
    <div>
      {error && <PopupError message={error} />}
      <ConfirmationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        message={'Are you sure you want to delete this Invoice?'}
      />
      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[25rem] m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full p-1 bg-white rounded-lg">
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-green transition-colors duration-150 ease-in-out ${
              duration === 1 ? 'bg-green text-white' : 'text-dark-gray'
            }`}
            onClick={() => setDuration(1)}
          >
            Yearly
          </button>

          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-green transition-colors duration-150 ease-in-out ${
              duration === 2 ? 'bg-green text-white' : 'text-dark-gray'
            }`}
            onClick={() => setDuration(2)}
          >
            2 Years
          </button>

          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-green transition-colors duration-150 ease-in-out ${
              duration === 3 ? 'bg-green text-white' : 'text-dark-gray'
            }`}
            onClick={() => setDuration(3)}
          >
            3 Years <span className="text-green"></span>
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto grid gap-6  lg:grid-cols-3 items-start lg:max-w-none">
        {/* Pricing tab 1 */}
        {packages &&
          packages.map((item) => (
            <PricingTab
              duration={duration}
              key={item._id}
              popular={item.popular}
              planName={item.name}
              price={{ yearly: item.amount }}
              planDescription={item.description}
              features={[
                `${item.feature_1}`,
                `${item.feature_2}`,
                `${item.feature_3}`,
                `${item.feature_4}`
              ]}
              packageId={item._id}
              handleSubmit={handleSubmit}
              loading={loadingPackages[item._id]}
              toggleMenu={toggleMenu}
              isMenuVisible={activeMenu[item._id] || false}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default Pricing;
