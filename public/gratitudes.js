'use strict';

const MOCK_GRATITUDE_LIST = {
	"gratitudes": [
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

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementaion will change. Instead of using a
// timeout function that returns mock data, it will 
// use jQuery's AJAX functionality to make a call 
// to the server and then run the callbackFn
function getGratitudeList(callbackFN) {
    // we use a `setTimeout` to make this asynchronous
    // as it will be with a real ajax call.
        setTimeout(function() { callbackFN(MOCK_GRATITUDE_LIST)}, 100);
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

//  on page load do this
$(function() {
	getAndDisplayGratitudeList();
})