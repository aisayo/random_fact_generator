// The API being used: https://api.aakhilv.me/fun/facts 

const bttn = document.querySelector("#random-bttn")
bttn.addEventListener('click', handleClick)

// When the button has been clicked, a JS function called 'handleClick' will be responsible for handling the event.

// Inside 'handleClick()': Make a GET request 

// This returns a response that needs to be parsed into JSON so we can easily use the data

// Console.log the response to show students how we can use dev tools to inspect our app and confirm that things are working as expected:

// function handleClick(){
//     fetch("https://api.aakhilv.me/fun/facts")
//     .then(resp => resp.json())
//     .then(fact => console.log(fact))
// }


// Now that we know we are getting the correct response, manipulate the DOM so that the fact renders in the random fact div. 

// Use a selector method to grab the element from DOM

function handleClick(){
    fetch("https://api.aakhilv.me/fun/facts")
    .then(resp => resp.json())
    .then(fact => {
        console.log(fact)
        const randomFactDiv = document.querySelector(".random-fact-div")

        // change the content inside of the DIV:

        randomFactDiv.textContent = fact[0]

        // we use fact[0] because the text is located inside an array and to grab that first element we use bracket notation and the index number of 0

        // click on the button to demonstrate how each click will make a request to the API and update the page with the new response

    })
}















