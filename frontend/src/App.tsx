import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/employee" element={<EmployeePage />} />
        <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
