import { useSelector } from "react-redux"
import { createPortal } from "react-dom"
import { RootState } from "../../store/Store"

const Notification = () => {
    const notificationData = useSelector((state: RootState) => state.uiSlice.notification)
    return (
        <div className="fixed z-50 top-20 left-1/2 translate-x-[-50%] flex flex-col items-center gap-5 p-5 bg-gray-400 bg-opacity-40 rounded-lg">
            <h2 className="font-caveat text-3xl">{notificationData.title}</h2>
            <p className="font-indieflower text-xl">{notificationData.message}</p>
        </div>
    )
}

export const NotificationModal = () => {
    return (
        <>
            {createPortal(<Notification />, document.getElementById('notificationToast') as HTMLElement)}
        </>
    )
}
