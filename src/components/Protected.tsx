import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../utils/useLogin';

type Props = {
    children?: JSX.Element | JSX.Element[],
}

export const Protected = (props: Props) => {
    const { login } = useLogin()

    if (login === false) {
        return (<Navigate to='/' replace />);
    }

    return (<>
        {props.children ? props.children : <Outlet />}
    </>);
};