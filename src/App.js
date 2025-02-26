import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Rotate from "./pages/Rotate";
import Scale from "./pages/Scale";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="rotate" element={<Rotate />} />
          <Route path="scale" element={<Scale />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
