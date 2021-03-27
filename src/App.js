/* import { useEffect, useState } from 'react'
import apiFetch, { FETCH_METHODS } from './utils/apiFetch'; */
import FacilityPreview from './componets/facilities/FacilityPreview.js';
import facilities from './mocks/facilities.js'

/* const API_URL = `https://deportesweb.madrid.es/CronosWebApi/api/v1`
const CORS_ANYWHERE = `https://ancient-forest-84722.herokuapp.com`
const BASE_URL = `${CORS_ANYWHERE}/${API_URL}`
 */
function App() {
  /*   const [centers, setCenters] = useState()
  
    useEffect(() => {
      const fetchCenters = async () => {
        const result = await apiFetch({
          baseUrl: BASE_URL,
          endPoint: `/events/enclosures/29/2021-03-29?session_token=`,        
          method: FETCH_METHODS.GET,
          headers: {
            'User-Agent': 'android/i2a',
            'Host': 'deportesweb.madrid.es',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'cache-control': 'no-cache',
            'Access-Control-Allow-Origin': '*',
          }
        })
        setCenters(result)
      }
      fetchCenters()
    }, []) */

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!facilities && (
        <div>{'LOADING'}</div>
      )}
      <div style={{ width: '100%', maxWidth: 600 }}>
        {facilities && facilities.map(facility => <FacilityPreview {...facility} />)}
      </div>
    </div >
  );
}

export default App;
