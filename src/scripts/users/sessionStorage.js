
//ToDo link session storage to store user id and switch isLoggedIn to true

export default {
    storeUser (userId) {
        sessionStorage.setItem('activeUser', userId)
        console.log(userId,"storing user")
    },
    removeUser(){
        sessionStorage.removeItem('activeUser')
    }
}