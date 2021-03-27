
import { name } from '../../package.json';

export const FETCH_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

const apiFetch =
  ({ baseUrl, endPoint, method, body = null, params = null, headers = null }) =>
    new Promise((resolve, reject) => {
      const isDev = process.env.NODE_ENV === 'development';

      const defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      const opts = {
        method,
        headers: {
          ...defaultHeaders,
          ...headers,
        },
        body: body ? JSON.stringify(body) : null
      };

      const urlParms = params ?
        `?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`
        :
        '';

      const uri = `${baseUrl}${endPoint || ''}${urlParms}`;

      if (isDev) {
        // eslint-disable-next-line no-console
        console.log(`${name}::api::request`, {
          opts,
          uri,
        });
      }

      fetch(uri, opts)
        .then(response => {
          if (response.ok) {
            response.json().then(jsonResponse => {
              // eslint-disable-next-line no-console
              if (isDev) console.log(`${name}::api::jsonResponse`, jsonResponse);
              resolve(jsonResponse);
            }).catch(reject);
          } else {
            response.json()
              .then(errJson => {
                // eslint-disable-next-line no-console
                if (isDev) console.log(`${name}::api::errJson`, errJson);
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({ status: response.status, error: ((errJson.error) ? errJson.error : errJson) });
              }).catch(reject);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          if (isDev) console.log(`${name}::api::error`, error);
          reject(error);
        });
    });

export default apiFetch;
