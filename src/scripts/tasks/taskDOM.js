const taskConverter = {
    taskEntry (obj) {
        const taskHTMLRepresentation = 
        `
        <div id="task__${obj.id}" class="singleTask">
            <div class="task__header">
                <div class="completeBy">
                    <p>Complete by: ${obj.completeBy}</p>
                </div>
                <div class="taskDeleteButton">
                    <button id="deleteTask__${obj.id}" class="deleteBtn" type="button">&times;</button>
                </div>
            </div> 
            <div class="taskBody">
                <div class="task__checkbox">
                    <input type="checkbox" class="checkbox">
                </div>
                <div class="task__description">
                    <h3>${obj.title}</h3>
                </div>   
            </div>
        </div>
        `
        return taskHTMLRepresentation
    }
}

export default taskConverter;