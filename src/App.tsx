// React Router dependencies
import { Route, Routes } from "react-router";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/navigation/Footer";

// Components dependencies
import { Shop } from "./pages/Shop";
import { Homepage } from "./pages/Homepage";
import { Page404 } from "./pages/Page404";
import { Protected } from "./components/navigation/Protected";

const App = () => {
  return (
    <div className="h-screen max-h-screen flex flex-col justify-between">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Shop />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
