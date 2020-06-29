// import recordEntry from "./createEntry.js"
// const getUserInput = () => {
//     let date = document.querySelector("#date").value
//     let concepts = document.querySelector("#concepts").value
//     let entry = document.querySelector("#entry").value
//     let mood = document.querySelector("#mood").value
//     let newEntry = recordEntry(date, concepts, entry, mood)
//     return newEntry
    
// }

// export default getUserInput


// document.querySelector(".saveEntry").addEventListener("click", event => {

//     let theUserInputFromUserinputFunction = getUserInput()
//     console.log(theUserInputFromUserinputFunction)


//     API.saveJournalEntry(theUserInputFromUserinputFunction).then(
//         () => {
//             API.getJournalData().then(
//                 () => {
//                     DOMPush.journalList(entries)
//                 }
//             )
//         }
//     )



// })