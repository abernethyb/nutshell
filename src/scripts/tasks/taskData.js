// const { API } = require("../databaseCalls")
import { API, dbResponseData } from "../databaseCalls.js"
import renderTask from "./taskList.js"

const url = "http://localhost:3000"
const table = "tasks"
const expand ="user"





const taskData = {
    getAllTasks: () => {
        API.getData(url, table, expand)
        .then(() => {
            renderTask(dbResponseData)
        }) 
               
    }
}

export default taskData
