const setToken = (tokens) => {
  if (tokens.accessToken) {
    localStorage.setItem("accessToken", tokens.accessToken);
  }
  if (tokens.refreshToken) {
    localStorage.setItem("refreshToken", tokens.refreshToken);
  }
};

const getToken = (tokenName) => {
  return localStorage.getItem(tokenName);
};

const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export { setToken, getToken, clearTokens };

// const setCookie = (tokens) => {
//   document.cookie = `accessToken=${tokens.accessToken}; max-age=${
//     1 * 24 * 60 * 60
//   }; path=/; secure; samesite=strict`;
//   document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${
//     30 * 24 * 60 * 60
//   }; path=/; secure; samesite=strict`;
// };

// const getCookie = (cookieName) => {
//   return document.cookie
//     .split(";")
//     .find((token) => token.trim().split("=")[0] === cookieName)
//     ?.split("=")[1];
// };

// export { setCookie, getCookie };
