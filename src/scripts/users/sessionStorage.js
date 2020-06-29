

export default {
    storeUser (userId) {
        sessionStorage.setItem('activeUser', userId)
        console.log(userId,"storing user")
    },
    removeUser(){
        sessionStorage.removeItem('activeUser')
    }
}