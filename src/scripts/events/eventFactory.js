//This module was created by Brendan Abernethy

//this function creates a new event entry
//userId, title, location, date
const newEvent = (userId, title, location, date) => ({
    userId: userId,
    title: title,
    location: location,
    date: date
})

export default newEvent


// {
//     "userId": 3,
//     "title": "Cleanup day at Billy's house",
//     "location": "Billy's house, 123 Main street, Bucksnort, TN 37140",
//     "date": "2020-08-1",
//     "id": 1
//   },