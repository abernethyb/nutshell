import taskConverter from "./taskDOM.js"

const renderTask = (tasks) => {
    for(const task of tasks) {
        const taskHTML = taskConverter(task)
        const taskLog = document.querySelector(".taskLog")
        taskLog.innerHTML += taskHTML
    }
}

export default renderTask
