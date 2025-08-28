const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; //TODO: Test deployment string when hosting site.

export const API_ENDPOINTS = {
  REGISTER_VISITOR: `${API_BASE_URL}${import.meta.env.VITE_REGISTER_VISITOR}`,
};
