import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../Redux/types';
type RouteProps = {
    children?: React.ReactNode

}

const PublicRoute: FC<RouteProps> = ({ children, ...rest }): JSX.Element => {
    const logged = useSelector((state: RootState) => state.login);

    return <div {...rest}>{!logged.logged ? children : <Navigate to="/home" />}</div>;
};

export default PublicRoute;
