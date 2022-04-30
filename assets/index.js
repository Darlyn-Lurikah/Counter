//document.getElementById("count-el").innerText = 5


//STORING THE DATA
//Getting button element id and saving to var
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//Setting count to 0 so it starts at 0
let count = 0
//Saving count in a function. Function name goes in HTML
// onclick' attr so the attr knows what func to excecute
function incrementCount() {
    //Incrementing count var by 1 for each click event 
    count += 1
    //The inner text of the button element whose ID 'count-el' we 
    // saved to 'countEl' var will change to the current value of 
    // the 'count' var (which increments by 1 every click) 
    countEl.textContent = count
}
//Calling func so it can execute
incrementCount()

//Func to log current number of people to console
//We add 'save()' to save button 'onclick' attr to excecute 
// this func when save button clicked
function save() {
    //Save current count increment plus a  -
    let saveCount = count + " - "
    //Set text content of targeted HTML IDs element (so the Paragraph) to the 
    //saved increment of the counter. But as we used += we take the current value 
    //and add the new saved value on, and so on 
    saveEl.textContent += saveCount
    //Reseting the count to 0 if the count increment is more than 0 when the save button is clicked
    // the first time and the value is saved to 'previous entries' 
    if (count > 0 ) {
        //Reset count to 0
        count = 0
        //Change HTML text to reflect the count reset
        countEl.textContent = count
    }
    console.log(saveCount)
}
//Calling func so it can exceute 
save()

//STRINGS PRACTICE
// let username = "Darlyn"
// let notif = "You have three new notifications"
// let messageToUser = username + ", " + notif
// console.log(messageToUser)
//Below - Print message to inner text on screen 
// let welcomeEl = document.getElementById("welcome-el")
// let Myname = "Darlyn"
// let greeting = "This is where cute babes gather "
// let myGreeting = greeting + Myname

// welcomeMessage = welcomeEl.innerText = myGreeting

// welcomeMessage = welcomeMessage + " :)"
// welcomeEl.innerText =  welcomeEl.innerText + " :)"
// // --Using += is just saying take current value add whats being 
// // --given onto it 
// welcomeEl.innerText += " :)"

// console.log(welcomeMessage)


//String will always win over numbers. So the below will concat into a string of '410'
// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints  
// console.log(totalPoints)



// FUNCTION PRACTICE
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// countdown()

// function number() {
//     let forty = 42 
//     console.log(forty)
// }

// number()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totaltime() {
//     time = lap1 + lap2 + lap3 
//     console.log(time)
// }

// totaltime()

// //---Incrementing laps by 1 
// let lapsCompleted = 0

// function lapsCount() {
    
//     lapsCompleted = lapsCompleted + 1

//     console.log(lapsCompleted)
// }

// lapsCount()
// lapsCount()
// lapsCount()
