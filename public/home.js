'use strict';

const MOCK_DATA = {
	"gratitudeList": [
        {
            "id": "1111111",
            "item1": "I am grateful for my friend taking me out to lunch.",
            "item2": "I am grateful for my friend taking me out to lunch.",
            "item3": "I am grateful for my friend taking me out to lunch.",
            "date": "May 3, 2018",
            "publishedAt": 1470016976609
        },
        {
            "id": "2222222",
            "item1": "Grateful for a new car!",
            "item2": "Grateful for a new car!",
            "item3": "Grateful for a new car!",
            "date": "May 3, 2018",
            "publishedAt": 1470012976609
        },
        {
            "id": "333333",
            "item1": "I am grateful for karate class.",
            "item2": "I am grateful for karate class.",
            "item3": "I am grateful for karate class.",
            "date": "May 3, 2018",
            "publishedAt": 1470011976609
        },
        {
            "id": "4444444",
            "item1": "I am grateful for thinkful",
            "item2": "I am grateful for thinkful",
            "item3": "I am grateful for thinkful",
            "date": "May 3, 2018",
            "publishedAt": 1470009976609
        }
    ]
};

const MOCK_DATA_GOALS = {
    "goals": [
        {
            "id": "1111111",
            "plan1": "I am going to work 5 hrs",
            "plan2": "I am going to work 5 hrs",
            "plan3": "I am going to work 5 hrs",
            "date": "June 6, 2018",
            "publishedAt": 1470016976609
        },
        {
            "id": "2222222",
            "plan1": "I am going to eat 65 hrs",
            "plan2": "I am going to eat 65 hrs",
            "plan3": "I am going to eat 65 hrs",
            "date": "March 30, 2018",
            "publishedAt": 1470012976609
        },
        {
            "id": "333333",
            "plan1": "I am going to walk 65 miles",
            "plan2": "I am going to walk 65 miles",
            "plan3": "I am going to walk 65 miles",
            "date": "January 5, 2018",
            "publishedAt": 1470011976609
        },
        {
            "id": "4444444",
            "plan1": "I am going to code all day and then walk 65 miles",
            "plan2": "I am going to code all day and then walk 65 miles",
            "plan3": "I am going to code all day and then walk 65 miles",
            "date": "December 2, 2018",
            "publishedAt": 1470009976609
        }
    ]
};

const MOCK_DATA_USERS = {
    "users": [
        {
            "id": "1111111",
           "name": {
               "first-name": "John",
               "last-name": "Smith"
           },
           "gender": "Male",
            "bithday": "June 6, 2018",
            "reason-joined": "I have such a hard time prioritizing my life",
            "joined": 1470016976609
        },
        {
            "id": "222222",
           "name": {
               "first-name": "John",
               "last-name": "Smith"
           },
           "gender": "Male",
            "bithday": "June 6, 2018",
            "reason-joined": "I have such a hard time prioritizing my life",
            "joined": 1470016976609
        },
        {
            "id": "333333",
           "name": {
               "first-name": "John",
               "last-name": "Smith"
           },
           "gender": "Male",
            "bithday": "June 6, 2018",
            "reason-joined": "I have such a hard time prioritizing my life",
            "joined": 1470016976609
        },
        {
            "id": "444444",
           "name": {
               "first-name": "John",
               "last-name": "Smith"
           },
           "gender": "Male",
            "bithday": "June 6, 2018",
            "reason-joined": "I have such a hard time prioritizing my life",
            "joined": 1470016976609
        }
    ]
};

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementaion will change. Instead of using a
// timeout function that returns mock data, it will 
// use jQuery's AJAX functionality to make a call 
// to the server and then run the callbackFn
function getGratitudeList(callbackFN) {
    // we use a `setTimeout` to make this asynchronous
    // as it will be with a real ajax call.
        setTimeout(function() { callbackFN(MOCK_DATA)}, 100);
}

// this function stays the same when we connect
// to real API layer
function displayGratitudeList(data) {
    data.gratitudeList.forEach((list, index) => {
        console.log(list, index);
        $('body').append(`
            <h2>Gratitude list from: ${list.date}</h2>
            <ol>
                <li>${list.item1}</li>
                <li>${list.item2}</li>
                <li>${list.item3}</li>
            </ol>
        `); 
    });
}

// this function can stay the same even when we
// are connection to real API
function getAndDisplayGratitudeList() {
	getGratitudeList(displayGratitudeList);
}

function getGoalList(callbackFN) {
    // we use a `setTimeout` to make this asynchronous
    // as it will be with a real ajax call.
        setTimeout(function() { callbackFN(MOCK_DATA)}, 100);
}

// this function stays the same when we connect
// to real API layer
function displayGoalList(data) {
    data.goalList.forEach((list, index) => {
        console.log(list, index);
        $('body').append(`
            <h2>Goal list from: ${list.date}</h2>
            <ol>
                <li>${list.plan1}</li>
                <li>${list.plan2}</li>
                <li>${list.plan3}</li>
            </ol>
        `); 
    });
}

// this function can stay the same even when we
// are connection to real API
function getAndDisplayGoalList() {
	getGoalList(displayGoalList);
}

function getLoveNotes(callbackFN) {
    // we use a `setTimeout` to make this asynchronous
    // as it will be with a real ajax call.
        setTimeout(function() { callbackFN(MOCK_DATA)}, 100);
}

// this function stays the same when we connect
// to real API layer
function displayLoveNotes(data) {
    data.loveNotes.forEach((list, index) => {
        console.log(list, index);
        $('body').append(`
            <h2>Love Notes from: ${list.date}</h2>
            <ol>
                <li>${list.note1}</li>
                <li>${list.note2}</li>
                <li>${list.note3}</li>
            </ol>
        `); 
    });
}

// this function can stay the same even when we
// are connection to real API
function getAndDisplayLoveNotes() {
	getLoveNotes(displayLoveNotes);
}

//  on page load do this
$(function() {
    getAndDisplayGratitudeList();
    getAndDisplayGoalList();
    getAndDisplayLoveNotes();
})