
const url="http://localhost:8088"

const API = {
    getData () {
        return fetch(`${url}`)
        .then(response => response.json)
    }
}


export default API;