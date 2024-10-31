import { apiClient } from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { paths } from '@/routes/paths';
import { LoggedInUserPath } from '@/utils/helpers';
import { httpErrorCodes } from '@/utils/http';
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem
} from '@/utils/localStorage';
import { create } from 'zustand';

const handleLogin = async (loginDetails, navigate, set) => {
  try {
    set({ isLoading: true });
    const { data: response } = await apiClient.post(endpoints.login, loginDetails);

    const user = response.data;
    const accessToken = response.accessToken;

    setLocalStorageItem('user', JSON.stringify(user));
    setLocalStorageItem('accessToken', accessToken);

    //  Update User
    set({ user: user, isAuthenticated: true, isLoading: false, error: null });

    // Redirect to the right Dashboard
    navigate(LoggedInUserPath(user));
  } catch (error) {
    set({
      user: null,
      error: error?.response?.data?.message || 'Internal Server error',
      isAuthenticated: false,
      isLoading: false
    });

    if (error?.response?.data?.message === httpErrorCodes.UNVERIFIED) {
      setLocalStorageItem('userEmail', loginDetails.email);
      setLocalStorageItem('showOtpPage', true);
      setTimeout(() => {
        navigate(paths.resendOtp);
      }, 1000);
    }
  }
};

const handleLogout = async (navigate, user, set) => {
  set({ isLoading: true, error: null });

  try {
    // Send logout request if backend requires it
    await apiClient.post(endpoints.logout);
    // Remove token and user from localStorage
    removeLocalStorageItem('accessToken');
    removeLocalStorageItem('user');

    // Reset user state
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    navigate(paths.index);
  } catch (error) {
    set({
      isLoading: false,
      error: error.response?.data?.message ?? 'Logout failed'
    });
  }
};

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  setError: (error) => set({ error }),
  isLoading: false,

  //  Login Action,
  login: async (LoginDetails, navigate) => handleLogin(LoginDetails, navigate, set),

  logout: async (navigate, user) => handleLogout(navigate, user, set),

  // Update User Role
  updateUserRole: (newRole) => {
    set((state) => {
      const updatedUser = { ...state.user, role: newRole };
      setLocalStorageItem('user', JSON.stringify(updatedUser));
      return { user: updatedUser };
    });
  },

  checkAuth: async (navigate) => {
    set({ isLoading: true });
    try {
      const token = getLocalStorageItem('accessToken');
      const user = getLocalStorageItem('user') ? JSON.parse(getLocalStorageItem('user')) : null;

      if (!token || !user) {
        set({
          isAuthenticated: false,
          user: null,
          isLoading: false
        });
        return;
      }

      // Send a request to validate the token
      const { data } = await apiClient.post(endpoints.validateAuth);

      if (data.tokenExpired) {
        removeLocalStorageItem('accessToken');
        removeLocalStorageItem('user');
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Session expired. Please log in again.'
        });
        navigate(paths.login); // Redirect to login page
        return;
      }

      set({
        user: data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: 'Not authenticated' || error.message
      });
      removeLocalStorageItem('accessToken');
      removeLocalStorageItem('user');
    }
  }
}));

export default useAuthStore;
