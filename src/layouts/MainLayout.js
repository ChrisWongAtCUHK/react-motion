import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
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
