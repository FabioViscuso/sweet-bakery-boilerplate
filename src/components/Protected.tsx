import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../utils/useLogin';

export const Protected = ({ children }: any/* define the proper type */) => {
    const { login } = useLogin()

    if (login === false) {
        return (<Navigate to='/' replace />);
    }

    return (<>
        {children ? children : <Outlet />}
    </>);
};