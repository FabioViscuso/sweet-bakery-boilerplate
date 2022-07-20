// React Router dependencies
import { Route, Routes } from "react-router";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/navigation/Footer";
// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "./store/slices/uiSlice";
// Components dependencies
import { Shop } from "./pages/Shop";
import { Homepage } from "./pages/Homepage";
import { Page404 } from "./pages/Page404";
import { Protected } from "./components/navigation/Protected";
import { NotificationModal } from "./components/UI/NotificationModal";
//Types
import { RootState } from "./store/Store";

const App = () => {
  const notification = useSelector((state: RootState) => state.uiSlice.notification)
  const showNotification = notification.visible
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(uiSliceActions.hideNotification())
    }, 3000);

    return () => {
      clearTimeout(id)
    }
  }, [showNotification])

  return (
    <>
      <Navbar />
      {showNotification && <NotificationModal />}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route element={<Protected />}>
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
