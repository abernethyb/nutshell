var currentDate = new Date()
var currentTime = new Date().toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
})
var date = currentDate.getDate();
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear();
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
var dateString = monthNames[month] + " " + date + "," + year + " @ " + currentTime;
// console.log(currentTime)

// console.log(dateString)

export default dateString