import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import apiFetch, { FETCH_METHODS } from '../utils/apiFetch'
import FacilityInfo from '../componets/facilities/FacilityInfo'

const API_URL = `https://deportesweb.madrid.es/CronosWebApi/api/v1`
const CORS_ANYWHERE = `https://ancient-forest-84722.herokuapp.com`
const BASE_URL = `${CORS_ANYWHERE}/${API_URL}`

function FacilityPage() {
  let { code } = useParams();
  const [info, setInfo] = useState()

  useEffect(() => {
    const fetchCenters = async () => {
      const result = await apiFetch({
        baseUrl: BASE_URL,
        endPoint: `/events/enclosures/${code}/2021-03-29?session_token=`,
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
      setInfo(result[0])
    }
    fetchCenters()
  }, [code])

  return (
    <>
      {!info && (<div>{'loading'}</div>)}
      {info && (<FacilityInfo {...info}/>)}
    </>
  );
}

export default FacilityPage;
