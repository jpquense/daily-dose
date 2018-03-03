'use strict';

const MOCK_GRATITUDE_LIST = {
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

const MOCK_DAY_PLAN = {
	"goalList": [
        {
            "id": "1111111",
            "plan1": "I am going to work 5 hrs",
            "plan2": "I am going to work 5 hrs",
            "plan3": "I am going to work 5 hrs",
            "date": "May 3, 2018",
            "publishedAt": 1470016976609
        },
        {
            "id": "2222222",
            "plan1": "I am going to eat 65 hrs",
            "plan2": "I am going to eat 65 hrs",
            "plan3": "I am going to eat 65 hrs",
            "date": "May 3, 2018",
            "publishedAt": 1470012976609
        },
        {
            "id": "333333",
            "plan1": "I am going to walk 65 miles",
            "plan2": "I am going to walk 65 miles",
            "plan3": "I am going to walk 65 miles",
            "date": "May 3, 2018",
            "publishedAt": 1470011976609
        },
        {
            "id": "4444444",
            "plan1": "I am going to code all day and then walk 65 miles",
            "plan2": "I am going to code all day and then walk 65 miles",
            "plan3": "I am going to code all day and then walk 65 miles",
            "date": "May 3, 2018",
            "publishedAt": 1470009976609
        }
    ]
};

const MOCK_LOVE_NOTES = {
	"loveNotes": [
        {
            "id": "1111111",
            "note1": "Let my teacher have all the happiness in the world",
            "note2": "Let my teacher have all the happiness in the world",
            "note3": "Let my teacher have all the happiness in the world",
            "date": "May 3, 2018",
            "publishedAt": 1470016976609
        },
        {
            "id": "2222222",
            "note1": "Bless that guy who cut me off at work with all the pizza he wants",
            "note2": "Bless that guy who cut me off at work with all the pizza he wants",
            "note3": "Bless that guy who cut me off at work with all the pizza he wants",
            "date": "May 3, 2018",
            "publishedAt": 1470012976609
        },
        {
            "id": "333333",
            "note1": "Bless my wife with a fun day",
            "note2": "Bless my wife with a fun day",
            "note3": "Bless my wife with a fun day",
            "date": "May 3, 2018",
            "publishedAt": 1470011976609
        },
        {
            "id": "4444444",
            "note1": "Let my boss have a lovely evening with his family",
            "note2": "Let my boss have a lovely evening with his family",
            "note3": "Let my boss have a lovely evening with his family",
            "date": "May 3, 2018",
            "publishedAt": 1470009976609
        }
    ]
};

const MOCK_MEDITATIONS = {
	"loveNotes": [
        {
            "id": "1111111",
            "one-minute": "FILE WITH AUDIO TRACK",
            "two-minute": "FILE WITH AUDIO TRACK",
            "three-minute": "FILE WITH AUDIO TRACK",
        },
        {
            "id": "2222222",
            "one-minute": "FILE WITH AUDIO TRACK",
            "two-minute": "FILE WITH AUDIO TRACK",
            "three-minute": "FILE WITH AUDIO TRACK",
        },
        {
            "id": "333333",
            "one-minute": "FILE WITH AUDIO TRACK",
            "two-minute": "FILE WITH AUDIO TRACK",
            "three-minute": "FILE WITH AUDIO TRACK",
        },
        {
            "id": "4444444",
            "one-minute": "FILE WITH AUDIO TRACK",
            "two-minute": "FILE WITH AUDIO TRACK",
            "three-minute": "FILE WITH AUDIO TRACK",
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