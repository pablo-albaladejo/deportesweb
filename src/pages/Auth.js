import { useHistory } from "react-router-dom";
import apiFetch, { FETCH_METHODS } from '../utils/apiFetch'

const API_URL = `https://deportesweb.madrid.es/CronosWebApi/api/v1`
const CORS_ANYWHERE = `https://ancient-forest-84722.herokuapp.com`
const BASE_URL = `${CORS_ANYWHERE}/${API_URL}`

function AuthPage() {
  const history = useHistory();

  const doLogin = async () => {
    const result = await apiFetch({
      baseUrl: BASE_URL,
      endPoint: `/account/loginsignup`,
      method: FETCH_METHODS.POST,
      body: { "identifier": "pablofdi@gmail.com" }
    })
    localStorage.setItem('profile', JSON.stringify(result.profile))
  }

  const doLogout = () => {
    localStorage.setItem('profile', JSON.stringify({}))
  }

  const profile = JSON.parse(localStorage.getItem('profile'))

  return (
    <>
      <h1>Auth</h1>

      {!profile?.session_token && <div onClick={() => doLogin()}> LogIn</div>}

      {profile?.session_token && (<>
        <div onClick={() => history.replace('/')}> Home</div>
        <div onClick={() => doLogout()}> LogOut</div>
        <div>{JSON.stringify(JSON.parse(localStorage.getItem('profile')))}</div>
      </>)
      }
    </>
  );
}

export default AuthPage;
