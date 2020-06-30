//This module was created by Brendan Abernethy
import newArticle from "./articleFactory.js"
import { API } from "../databaseCalls.js"
import renderArticle from "./articleDOM.js"
//import { API, dbResponseData } from "../databaseCalls.js"

const articleInput = () => {
    
        //userId, title, description, url, date
        let userId = 1
        let title = document.querySelector("#articleTitle").value
        let description = document.querySelector("#synopsis").value
        let url = document.querySelector("#url").value
        let date = document.querySelector("#articleDate").value
        let articleUserInput = newArticle(userId, title, description, url, date)
        console.log("hellofromarticleinput!!", articleUserInput)
        return articleUserInput
    
            
}

const articleEvent = {
    writeArticle () {
        document.querySelector("#saveArticle").addEventListener("click", event => {
            //userId, title, description, url, date
        
            let inputfromArticlequery = articleInput()
            console.log(inputfromArticlequery)
        
            API.postData("http://localhost:3000", "articles", inputfromArticlequery).then(
                () => {
                    document.querySelector(".articleOutput").innerHTML = ""
                   renderArticle()
                }
            )
        
        })
    },
    deleteArticle () {
        document.querySelector(".articleOutput").addEventListener("click", event => {
            console.log(event.target.id)
            if (event.target.id.startsWith("deleteArticleBtn__")) {
                const articleToDelete = event.target.id.split("__")[1]
                console.log(articleToDelete)
                //url, table, ObjectId
                API.deleteData("http://localhost:3000", "articles", articleToDelete).then(
                    () => {
                        document.querySelector(".articleOutput").innerHTML = ""
                       renderArticle()
                    }
                )
            }
        })
    }
} 

export default articleEvent