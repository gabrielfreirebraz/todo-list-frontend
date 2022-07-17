export const TOKEN_KEY = '@bolttech-token';
export const isAuth = function () {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = function () {
  return localStorage.getItem(TOKEN_KEY);
};

export const login = function (token) {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = function () {
  localStorage.removeItem(TOKEN_KEY);
};
