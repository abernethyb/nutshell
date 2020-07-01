//This module was created by Brendan Abernethy
import { API, dbResponseData } from "../databaseCalls.js"


//function to render articles to DOM
const renderArticle = () => {
    //fetch call to get most recent data
    API.getData("http://localhost:3000", "articles", "user").then(
    () => {
        console.log("hello from articleDOM! Hello?"),
        //loop to iterate through database response
            dbResponseData.forEach(
                (res) => {
                    console.log(res)
                        document.querySelector(".articleOutput").innerHTML += `
                    <div id="article__${res.id}" class="singleArticle">
                        <div class="article__header">
                            <div class="article__user">
                                ${res.user.username}
                                                </div>
                            <div class="article__date">
                            ${res.date}
                                                </div>
                            <div class="article__deleteButton">
                                <button id="deleteArticleBtn__${res.id}" class="deleteBtn" type="button">&times;</button>
                            </div>
                        </div>
                        <div class="articleTitle">
                            <h3>
                                <a href="${res.url}" alt="${res.title}">${res.title}</a>
                            </h3>
                        </div>
                        <div class="article__description">
                            <p>${res.description}</p>
                        </div>
                    </div>
                    
                    `
                        }
                    )

                }
            )
    

    
    
}
export default renderArticle