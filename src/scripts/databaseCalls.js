//url to json server NOTE: Make sure to add slash after to dig deeper
const url="http://localhost:3000"

//calls for everything

const API = {
    // should this be embeded to pull all information by that user
    getUserData (id) {
        return fetch(`${url}`)
    },
    getAllUsers () {
        return fetch(`${url}/users`)
        .then(response => response.json())
    },
    getSingleUser (id) {
        return fetch(`${url}/users/${id}`)
        .then(response => response.json())
    },
    saveUser (newUserObject) {
        return fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newUserObject)
        })
        .then(response => response.json())
    }
}


export default API;