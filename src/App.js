import { config } from "dotenv";
import "./App.css";
import { fetchUtils, Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import AuthProvider from "./providers/AuthProvider";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";
import TaskEdit from "./components/TaskEdit";

config();
const apiHost = process.env.API_HOST || "localhost";
const apiPort = process.env.API_PORT || "3030";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    options.headers.set("Authorization", `Bearer ${token}`);
  } catch (error) {
    Promise.reject();
  }
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin
      authProvider={AuthProvider}
      dataProvider={restProvider(`http://${apiHost}:${apiPort}`, httpClient)}
    >
      <Resource
        name="tasks"
        list={TaskList}
        create={TaskCreate}
        edit={TaskEdit}
      />
    </Admin>
  );
}

export default App;
