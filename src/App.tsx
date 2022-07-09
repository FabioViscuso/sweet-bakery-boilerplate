// React Router dependencies
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Components dependencies
import { Dashboard } from "./pages/Dashboard";
import { Homepage } from "./pages/Homepage";
import { Page404 } from "./pages/Page404";

const App: React.FC = () => {
  return (
    <div className="h-screen max-h-screen">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
