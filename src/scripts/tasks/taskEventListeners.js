//Task Event Listener

import renderTask from "./taskList.js"
import taskData from "./taskData.js"
import { API, dbResponseData } from "../databaseCalls.js"
import dateString from "../dateStamp.js"
import { activeSession } from "../users/loginCalls.js"
import createTask from "./taskFactory.js"
import renderArticle from "../articles/articleDOM.js"
//import { API, dbResponseData } from "../databaseCalls.js"


const url = "http://localhost:3000"
const table = "tasks"
const expand = "user"

const taskInput = () => {

    //userId, title, date
    let userId = activeSession.id
    let title = document.querySelector("#taskTitle").value
    let expectCompleteBy = document.querySelector("#taskDate").value
    let complete = document.querySelector(".checkbox").value
    let taskUserInput = createTask(userId, title, expectCompleteBy, complete)
    return taskUserInput


}
const taskEvent = {
    taskEventListener() {

        document.querySelector("#saveTask").addEventListener("click", event => {

            let inputfromTaskQuery = taskInput()

            API.postData(url, table, inputfromTaskQuery).then(() => {
                // Then reloads container with updated data
                $('.taskLog').empty()
                taskData.getAllTasks()
                document.querySelector(".taskValue1").value = ''
                document.querySelector(".taskValue2").value = ''
            })

        })
    },

    deleteTask() {
        document.querySelector(".taskLog").addEventListener("click", event => {

            if (event.target.id.startsWith("deleteTaskBtn__")) {
                const taskToDelete = event.target.id.split("__")[1]
                API.deleteData(url, table, taskToDelete).then(() => {
                    // Reloads tasks after the delete
                    $('.taskLog').empty()
                    taskData.getAllTasks()
                })

            }
        })


    }
}

export default taskEvent
