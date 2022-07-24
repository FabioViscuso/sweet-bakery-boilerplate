import { useLogin } from "../utils/useLogin"
import { useDispatch } from "react-redux"
import { uiSliceActions } from "../store/slices/uiSlice"

export const User = () => {
    const dispatch = useDispatch()
    const { username, token, passwordInput } = useLogin()

    const changePasswordHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const newPassword = passwordInput.current!.value
        if (newPassword.length >= 6) {
            fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ idToken: token, password: newPassword, returnSecureToken: true })
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error('Something went wrong')
                    }
                    // dispatch success notification
                    dispatch(uiSliceActions.pushNotificationState({
                        visible: true,
                        status: 'success',
                        title: `Good!`,
                        message: 'You updated your password'
                    }))
                }).catch((err: any) => {
                    // dispatch error notification
                    dispatch(uiSliceActions.pushNotificationState({
                        visible: true,
                        status: 'error',
                        title: `Ops`,
                        message: err.message
                    }))
                })
        } else {
            // dispatch error notification
            dispatch(uiSliceActions.pushNotificationState({
                visible: true,
                status: 'error',
                title: `Problem with your password`,
                message: 'Your password is not long enough'
            }))
        }
        passwordInput.current!.value = ''
    }

    return (
        <div className="flex flex-col min-h-screen items-center px-2">
            <h1 className="font-caveat text-4xl mb-10">Hello, {username}</h1>
            <form onSubmit={changePasswordHandler} className="flex flex-col gap-5 items-center">
                <label htmlFor="changepassword" className="text-gray-800 text-xl font-indieflower leading-tight tracking-normal">Change password</label>
                <input type='password' id="changepassword" name="changepassword" ref={passwordInput} minLength={6} className="text-gray-600 focus:outline-none focus:border focus:border-pink-300 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="New Password Here" />
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 transition duration-150 ease-in-out hover:bg-pink-300 bg-pink-200 rounded text-gray-900 hover:text-gray-900 px-8 py-2 text-md">Submit</button>
            </form>
        </div>
    )
}
