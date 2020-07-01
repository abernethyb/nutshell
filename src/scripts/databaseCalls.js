//This module was created by Brendan Abernethy
//These are empty arrays used to store data from the fetch call below.  This variable could be any data in the app, so always do an API call in or before the functionality you attempt to achieve.
const url = "http://localhost:3000" ; //This variable is not doing anything and may cause problems
let dbResponseData = []

//API object.
const API = {
    //fetch call function.  accepts url, table, and another table (expand) as parameters
    getData(url, table, expand) {
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
    },
    //newObject is the object created by factory function.  please ensure factory function matches objects in example.json
    postData(url, table, newObject) {
        return fetch(`${url}/${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(response => response.json())
    },
    //objectId is id of object you desire to delete
    deleteData: (url, table, ObjectId) => {
        return fetch(`${url}/${table}/${ObjectId}`, {
            method: "DELETE"
        }).then(response => response.json());
    },
    //objectId is id of object you desire to edit.  editedObject is ID of new object created from factory function.  It is the object after it has been edited, but this will be done via the same factory function used in postData.
    editData: (url, table, ObjectId, editedObject) => {
		return fetch(`${url}/${table}/${ObjectId}`, {
			method: "PUT",
        	headers: {
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify(editedObject)
        }).then(response => response.json())
    },
    //this is redundant but it works.  You could invoke getData(url/users). -Brendan
    getAllUsers () {
        return fetch(`${url}/users`)
        .then(response => response.json())
    },
    //this is also redundant.  You can invoke postData(url/users/newUserObject). -Brendan
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


export { API, dbResponseData }


//We can get rid of lines 3 and 49 through 54 in the future.