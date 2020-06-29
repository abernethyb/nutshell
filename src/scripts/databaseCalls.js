//This module was created by Brendan Abernethy
//These are empty arrays used to store data from the fetch call below
let dbResponseData = []


//API object.
const API = {
    //fetch call function.  accepts url, table, and another table (expand) as parameters
    getData(url, table, expand) {
        console.log("is getData even running?")
        return fetch(`${url}/${table}?_expand=${expand}`).then(
            (response) => {
                return response.json()
            }
        )
            .then(
                (responseArray) => {
                    dbResponseData = responseArray
                }
            )
    }
}

export {API, dbResponseData}