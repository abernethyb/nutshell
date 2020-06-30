import renderArticle from "./articles/articleDOM.js"
import articleEvent from "./articles/articleEventListeners.js"

console.log('Hello World')


//renderArticle is located in articleDom.js.  It is a function that iterates through the articles table in the database and renders them to the DOM
renderArticle()

//articleEvent is located in articleEventListener.js.  It is a function that calls an event listener on the saveArticle button and uses a post method to put user data into the articles table of the database.
articleEvent()




