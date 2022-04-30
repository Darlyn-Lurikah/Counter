//document.getElementById("count-el").innerText = 5


//STORING THE DATA
//Getting button element id and saving to var
let countEl = document.getElementById("count-el")
//Setting count to 0 so it starts at 0
let count = 0
//Saving count in a function. Function name goes in HTML
// onclick' attr so the attr knows what func to excecute
function incrementCount() {
    //Incrementing count var by 1 for each click event 
    count = count + 1
    //The inner text of the button element whose ID 'count-el' we 
    // saved to 'countEl' var will change to the current value of 
    // the 'count' var (which increments by 1 every click) 
    countEl.innerText = count
}
//Calling func so it can execute
incrementCount()

//Func to log current number of people to console
//We add 'save()' to save button 'onclick' attr to excecute 
// this func when save button clicked
function save() {
    //Log the current increment of the 'count' var to console
    console.log(count)
}

save()



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
