import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Rotate from "./pages/Rotate";
import Scale from "./pages/Scale";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLayout />}>
          <Route exact path="rotate" element={<Rotate />} />
          <Route exact path="scale" element={<Scale />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
