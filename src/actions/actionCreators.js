import 'whatwg-fetch';

function checkStatus(resp) {
  if (resp.status >= 200 && resp.status < 300) {
    return resp
  } else {
    var error = new Error(resp.statusText)
    error.resp = response
    throw error
  }
}

function parseJSON(resp) {
  return resp.json();
}

export function getMediums() {
  return dispatch =>
    fetch('https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7', {
      method: 'get',
      headers: {
        'ws-api': '2.1'
      }
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => dispatch({ data, type: 'Success' }))
    .catch((err) => console.error(err));
}
