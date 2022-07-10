// React Router dependencies
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Components dependencies
import { Dashboard } from "./pages/Dashboard";
import { Homepage } from "./pages/Homepage";
import { Page404 } from "./pages/Page404";
import { Protected } from "./components/Protected";

const App: React.FC = () => {
  return (
    <div className="h-screen max-h-screen flex flex-col justify-between">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
