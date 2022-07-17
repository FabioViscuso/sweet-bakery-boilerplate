// Import Router utils
import { Navigate, Outlet } from 'react-router-dom';

// Import custom hooks
import { useLogin } from '../../utils/useLogin';

type Props = {
    children?: JSX.Element | JSX.Element[],
}

export const Protected = (props: Props) => {
    const { isLogged } = useLogin()

    if (isLogged === false) {
        return (<Navigate to='/' replace />);
    }

    return (<>
        {props.children ? props.children : <Outlet />}
    </>);
};
