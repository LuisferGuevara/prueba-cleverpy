import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../Redux/types';

type RouteProps = {
    children?: React.ReactNode
}

const PrivateRoute: FC<RouteProps> = ({ children, ...rest }): JSX.Element => {
    const logged = useSelector((state: RootState) => state.login);

    return <div {...rest}>{logged.logged ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
