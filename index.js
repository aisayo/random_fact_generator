// Currently the page is just a static page meaning that it renders some HTML for structure and CSS for styling

// Our goal is going to be to add some user events so that the page becomes more dynamic and allows our users to interact with it so that when a user clicks the button, a random fact renders. 

// This is going to happen under the hood with a request made to an API that provided random facts. 

// The API we are going to use is: https://api.aakhilv.me/fun/facts 

// The first thing we need to do is select the button from the web page and store it inside of a variable so we can continue to reference that piece.

// Here we are using the ID property that was added to the button element as a reference

const bttn = document.querySelector("#random-bttn")

// We will then use a built in JS function to attach an event of 'click' so that when our user clicks on the button, we can inject our own JS to make something happen

bttn.addEventListener('click', handleClick)

// After the button has been clicked, a JS function called 'handleClick' will be responsible for the logic that determines what we want to do upon that click.

// In this case, we first make a GET request to the API using the fetch method 

// That will give us a response packed in a version that is really hard to parse through to grab values, so here we take the response and turn into a JavaScript format called JSON which is easier to work with

// Console.log the response to show students how we can use dev tools to inspect our app and confirm that things are working as expected

// function handleClick(){
//     fetch("https://api.aakhilv.me/fun/facts")
//     .then(resp => resp.json())
//     .then(fact => console.log(fact))
// }


// Now that we know we are getting the correct response, we want to perform some DOM manipulation so that the fact renders inside of the random fact div. 

// First let's use a selector method to grab that element from our DOM

function handleClick(){
    fetch("https://api.aakhilv.me/fun/facts")
    .then(resp => resp.json())
    .then(fact => {
        console.log(fact)
        const randomFactDiv = document.querySelector(".random-fact-div")
        // throw in a console.log to make sure we grab the correct element
        //console.log(randomFactDiv)

        // to change the content inside of the DIV, we need to update the textContent with our new fact so we will use the .textContent method:

        randomFactDiv.textContent = fact[0]

        // we do fact[0] because the text is an element inside of an array and to grab that first element we use bracket notation and the index number of 0

    })
}















// Harry Potter Idea

// The base URL for the API that is going to be used is: https://wizard-world-api.herokuapp.com/

// the endpoint is /Houses

// The goal will be to allow a user to enter a house name and make a request for the house details using the URL:

// https://wizard-world-api.herokuapp.com/Houses?name=${}

// First we are going to walk students through how to use a form with JS 

// Select the form using a combo of selector method and id 

// console.log the form to show students how to confirm the correct piece of the web is selected. Discuss how console.log can be used to help inspect values while building


// Attach an event listener of the type submit to the form so we can interject our own JS when a user submits the form instead of relying on the HTML form performing its own natural behavior 

// Create a function handleSubmit that will be responsible for running some logic when the form is submitted by the user. Create a console.log and select the input field a user will enter their query in to make sure we grab the value 

// function handleSubmit(e) {
//     const query = document.querySelector("#search").value
//     console.log(query)
// }

// enter some text in the form and submit to demonstrate the default behavior of an HTML form. add an event.preventDefault() to stop this reload and see the log inside the dev tools console 

// function handleSubmit(event) {
//     event.preventDefault()
//     const query = document.querySelector("#search").value
//     console.log(query)
// }

// After the query from the user is saved inside of a variable, demonstrate using the variable and the endpoint with fetch() to make a request to retrieve the data

// function handleSubmit(event) {
//     event.preventDefault()
//     const query = document.querySelector("#search").value
//     console.log(query)
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
// }