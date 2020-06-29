//This module was created by Brendan Abernethy
import { API, dbResponseData } from "../databaseCalls.js"



const renderArticle = () => {

    API.getData("http://localhost:3000", "articles", "user").then(
    () => {
        console.log("hello from articleDOM! Hello?"),
            dbResponseData.forEach(
                (res) => {
                    console.log(res)
                        document.querySelector(".article__output").innerHTML += `
                    <div id="article__$./fixlater{obj.id}" class="singleArticle">
                        <div class="article__header">
                            <div class="article__user">
                                ${res.user.username}
                                                </div>
                            <div class="article__date">
                            ${res.date}
                                                </div>
                            <div class="article__deleteButton">
                                <button id="deleteArticleBtn" class="deleteBtn" type="button">&times;</button>
                            </div>
                        </div>
                        <div class="articleTitle">
                            <h3>
                                <a href="$./fixlater{obj.id}" alt="$./fixlater{obj.id}">Florida Man Arrested</a>
                            </h3>
                        </div>
                        <div class="article__description">
                            <p>Local Florida man is arrested for operating motorized beer cooler while intoxicated.</p>
                        </div>
                    </div>
                    
                    `
                        }
                    )

                }
            )
    

    
    
}
export default renderArticle