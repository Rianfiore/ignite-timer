import { NavBar } from "components";
import { Home } from "pages";
import "./App.scss"

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}
