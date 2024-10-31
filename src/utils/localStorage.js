const isClient = typeof window !== 'undefined';

export const setLocalStorageItem = (keyType, payload) => {
  if (isClient) {
    localStorage.setItem(keyType, JSON.stringify(payload)); // Store as stringified JSON
  }
};

export const getLocalStorageItem = (keyType) => {
  if (isClient) {
    const value = localStorage.getItem(keyType);
    return value ? JSON.parse(value) : null; // Parse JSON string back to object
  }
  return null;
};

export const removeLocalStorageItem = (keyType) => {
  if (isClient) {
    localStorage.removeItem(keyType);
  }
};
