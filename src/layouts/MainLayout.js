import { Outlet } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

const MainLayout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Motion</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/rotate">Rotate</a>
            </li>
            <li>
              <a href="/scale">Scale</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <footer>
        <p>© 2025 React Motion</p>
      </footer>
    </div>
  );
};

export default MainLayout;
