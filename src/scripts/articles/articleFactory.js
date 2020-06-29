//This module was created by Brendan Abernethy

//this function creates a new article entry
//userId, title, description, url, date
const newArticle = (userId, title, description, url, date) => ({
    userId: userId,
    title: title,
    description: description,
    url: url,
    date: date
})

export default newArticle