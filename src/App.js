import { useEffect, useState } from 'react'
import apiFetch, { FETCH_METHODS } from './utils/apiFetch';

const API_URL = `https://deportesweb.madrid.es/CronosWebApi/api/v1`

function App() {
  const [centers, setCenters] = useState()

  useEffect(() => {
    const fetchCenters = async () => {
      const result = await apiFetch({
        baseUrl: API_URL,
        endPoint: `/events/enclosures/29/2021-03-29?session_token=`,
        method: FETCH_METHODS.GET,
        headers: {
          'User-Agent': 'android/i2a',
          'Host': 'deportesweb.madrid.es',
          'Connection': 'Keep-Alive',
          'Accept-Encoding': 'gzip',
          'cache-control': 'no-cache',
        }
      })
      setCenters(result)
    }
    fetchCenters()
  }, [])

  return (
    <div>
      {!centers && (
        <div>{'LOADING'}</div>
      )}
      {centers && (
        <div>{JSON.stringify(centers)}</div>
      )}
    </div>
  );
}

export default App;
