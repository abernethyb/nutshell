import newArticle from "./articleFactory.js"
import { API } from "../databaseCalls.js"
import renderArticle from "./articleDOM.js"
//import { API, dbResponseData } from "./databaseCalls.js"

const articleEvent = () => {
    
        //userId, title, description, url, date
        let userId = 1
        let title = document.querySelector("#articleTitle").value
        let description = document.querySelector("#synopsis").value
        let url = document.querySelector("#url").value
        let date = document.querySelector("#articleDate").value
        let articleInput = newArticle(userId, title, description, url, date)
        console.log("hellofromarticleinput!!", articleInput)
        return articleInput
    
            
}

export default articleEvent