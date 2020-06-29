

sessionData = {
    storeUser (id) {
        sessionStorage.setItem(activeUser, id)
    },
    removeUser(){
        sessionStorage.removeItem(activeUser)
    }
}