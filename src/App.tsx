// React Router dependencies
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";

// Components dependencies
import { Dashboard } from "./pages/Dashboard";
import { Homepage } from "./pages/Homepage";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </div>
  );
}

export default App;
