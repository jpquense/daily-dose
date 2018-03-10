'use strict';

const MOCK_GRATITUDES = {
	"gratitudes": [
        {
            "id": "1111111",
            "list": [
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch."
            ],
            "publishedAt": 1470016976609
        },
        {
            "id": "22222222",
            "list": [
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch."
            ],
            "publishedAt": 1470016976609
        },
        {
            "id": "3333333",
            "list": [
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch."
            ],
            "publishedAt": 1470016976609
        },
        {
            "id": "4444444",
            "list": [
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch.",
                "I am grateful for my friend taking me out to lunch."
            ],
            "publishedAt": 1470016976609
        },

    ]
};

const MOCK_GOALS = {
	"goals": [
        {
            "id": "1111111",
            "goal-list": [
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend."
            ],
            "publishedAt": 1470016976609
        },
        {
            "id": "2222222",
            "goal-list": [
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend."
            ],
            "publishedAt": 1470016976609
        },
        {
            "id": "3333333",
            "goal-list": [
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend."
            ],
            "publishedAt": 1470016976609
        },
        {
            "id": "444444",
            "goal-list": [
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend.",
                "I will go out to lunch with my friend."
            ],
            "publishedAt": 1470016976609
        },
    ]
};

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementaion will change. Instead of using a
// timeout function that returns mock data, it will 
// use jQuery's AJAX functionality to make a call 
// to the server and then run the callbackFn
function getGratitudes(callbackFN) {
    // we use a `setTimeout` to make this asynchronous
    // as it will be with a real ajax call.
        setTimeout(function() { callbackFN(MOCK_GRATITUDES)}, 100);
}

function displayGratitudes(data) {
    let listLength = 0;
    
    data.gratitudes.forEach((obj, idx) => {
        listLength += obj.list.length;
    })
    console.log(data.gratitudes, listLength);
    // $('.js-modal-header').val('My Gratitudes');
    // $('.js-list-length').val(`I was grateful ${listLength} times!`);
    // // $('.js-modal-btn-max').attr(max, listLength);
    $('.js-modal').html(`
        <header>
        <h2 class="js-modal-header">I am grateful for . . . </h2>
        </header>
        <div class="modal-body row">
            <div class="count col-12">
                <h3>Gratitude Count: ${listLength}</h3>
            </div>
            <form class="count">
            <label class="col-4" for="gratitudes">How many gratitudes do you want to view?</label>
            <input class="col-4" type="number" placeholder="1" id="gratitudes" min="1" max="${listLength}">
            <button class="col-4 js-modal-btn-max" type="submit" ">Get Gratitudes</button>
            </form>
            <div class="js-grat-list">

            </div>
        </div>
        <footer>
            <button class="js-modal-btn-close">Close</button>
        </footer>
    `);
    $('.modal').slideDown('fast');
}

function getAndDisplayGratitudes() {
	getGratitudes(displayGratitudes);
}


$('.js-gratitude-btn').click(function() {
    getAndDisplayGratitudes();
}); 

$('.modal').on('click', '.js-modal-btn-close', function() {
    $('.modal').slideUp('fast');
}); 