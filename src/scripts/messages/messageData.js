// const { API } = require("../databaseCalls")
import { API, dbResponseData } from "../databaseCalls.js"
import renderMessage from "./messageList.js"

const url = "http://localhost:8088"
const table = "messages"
const expand ="user"


let element = document.getElementById("chatLog");


const messageData = {
    getAllMessages: () => {
        API.getData(url, table, expand)
        .then(() => {
            renderMessage(dbResponseData)
        }) 
        .then(() => {
        element.scrollTop = element.scrollHeight - element.clientHeight
        })       
    }
}

export default messageData
