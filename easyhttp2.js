/** 
* EasyHTTP Library
* Library for making HTTP requests
* 
* @version 2.0.0
* @author Peter Christensen
* @license UtahStateUniversity
*
**/

class EasyHTTP {
  // make http get request
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  // Make http post request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  // Make an HTTP PUT Request
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  // Make an HTTP delete request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted...'))
      .catch(err => reject(err))
    })
  }
}
