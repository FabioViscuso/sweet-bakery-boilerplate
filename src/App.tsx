// React Router dependencies
import { Route, Routes } from "react-router";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/navigation/Footer";
// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "./store/slices/uiSlice";
import { loginActions } from "./store/slices/loginSlice";
// Components dependencies
import { Shop } from "./pages/Shop";
import { Homepage } from "./pages/Homepage";
import { Page404 } from "./pages/Page404";
import { Protected } from "./components/navigation/Protected";
import { NotificationModal } from "./components/UI/NotificationModal";
import { User } from "./pages/User";
//Types
import { RootState } from "./store/Store";

const App = () => {
  const notification = useSelector((state: RootState) => state.uiSlice.notification)
  const showNotification = notification.visible
  const dispatch = useDispatch();

  // run one time to check for existing auth data
  useEffect(() => {
    const localAuthData: { email: string, token: string } = JSON.parse(localStorage.getItem('auth') as any)
    if (localAuthData && typeof localAuthData !== 'undefined') {
      dispatch(loginActions.login({ email: localAuthData.email, token: localAuthData.token }))
    }
  })

  // clear the notification after 3000ms by hiding component and resetting state
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(uiSliceActions.hideNotification())
      dispatch(uiSliceActions.resetNotificationState())
    }, 3000);

    return () => {
      clearTimeout(id)
    }
  }, [showNotification, dispatch])

  return (
    <>
      <Navbar />
      {showNotification && <NotificationModal />}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route element={<Protected />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
