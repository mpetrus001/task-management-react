import "./App.css";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="tasks" list={TaskList} create={TaskCreate} />
    </Admin>
  );
}

export default App;
