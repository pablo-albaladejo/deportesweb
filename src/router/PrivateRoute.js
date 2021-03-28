import { Route, Redirect } from 'react-router-dom';
const profile = JSON.parse(localStorage.getItem('profile'))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !profile?.session_token
      ? <Redirect to='/auth' />
      : <Component {...props} />
  )} />
)
export default PrivateRoute