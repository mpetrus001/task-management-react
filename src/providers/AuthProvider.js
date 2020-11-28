import { config } from "dotenv";

config();
const apiHost = process.env.API_HOST || "localhost";
const apiPort = process.env.API_PORT || "3030";

function login({ username, password }) {
  const request = new Request(`http://${apiHost}:${apiPort}/auth/signin`, {
    method: "POST",
    body: JSON.stringify({ email: username, password }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  return fetch(request)
    .then((response) => {
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    })
    .then((auth) => {
      // TODO review how auth tokens are stored
      if (!auth.token) throw new Error("failed to find token on response");
      localStorage.setItem("auth", JSON.stringify(auth));
    });
}

function logout() {
  localStorage.removeItem("auth");
  return Promise.resolve();
}

function checkAuth() {
  return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
}

function checkError(error) {
  const status = error.status;
  if (status === 401 || status === 403) {
    localStorage.removeItem("auth");
    return Promise.reject();
  }
  return Promise.resolve();
}

const AuthProvider = {
  login,
  logout,
  checkAuth,
  checkError,
  getPermissions: (params) => Promise.resolve(),
  getIdentity: () => Promise.resolve(),
};

export default AuthProvider;
