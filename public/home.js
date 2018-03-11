'use strict';

const MOCK_GRATITUDES = {
	"gratitudes": [
        {
            "id": "1111111",
            "content": "I am grateful for my friend taking me out to lunch.",
            "publishedAt": 1470016976609,
            "date": "May 3, 1999"
        },
        {
            "id": "222222",
            "content": "I am grateful for my friend taking me out to lunch.",
            "publishedAt": 1470016976609,
            "date": "May 3, 1999"
        },
        {
            "id": "333333",
            "content": "I am grateful for my friend taking me out to lunch.",
            "publishedAt": 1470016976609,
            "date": "May 3, 1999"
        },
        {
            "id": "4444444",
            "content": "I am grateful for my friend taking me out to lunch.",
            "publishedAt": 1470016976609,
            "date": "May 3, 1999"
        }
    ]
};

// const MOCK_GOALS = {
// 	"goals": [
//         {
//             "id": "1111111",
//             "goal-list": [
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend."
//             ],
//             "publishedAt": 1470016976609
//         },
//         {
//             "id": "2222222",
//             "goal-list": [
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend."
//             ],
//             "publishedAt": 1470016976609
//         },
//         {
//             "id": "3333333",
//             "goal-list": [
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend."
//             ],
//             "publishedAt": 1470016976609
//         },
//         {
//             "id": "444444",
//             "goal-list": [
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend.",
//                 "I will go out to lunch with my friend."
//             ],
//             "publishedAt": 1470016976609
//         },
//     ]
// };

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

function displayGratitudesModal(data) {
    const listLength = data.gratitudes.length;

    $('.js-modal').html(`
        <header>
        <h2 class="js-modal-header">I am grateful for . . . </h2>
        </header>
        <div class="modal-body">
            <div class="row">
                <div class="count col-12">
                    <h3>Gratitude Count: ${listLength}</h3>
                </div>
                <form class="count">
                <label class="col-4" for="gratitudes">How many gratitudes do you want to view?</label>
                <input class="col-4" type="number" placeholder="1" id="gratitudes" min="1" max="${listLength}">
                <button class="col-4 js-modal-btn-submit" type="submit" ">Get Gratitudes</button>
                </form>
            </div>    
            <div class="js-grat-list grat-list">
            </div>
        </div>
        <footer>
            <button class="js-modal-btn-exit">Exit</button>
        </footer>
    `);
    $('.modal').slideDown('fast');
}

function displayGratitudesList(data) {
    console.log('displayGratitudesList ran');
    
    $('.js-grat-list').html(`
            <h3 class="col-12 list-header">Look how great my life is!</h3>
            <button class="js-modal-btn-close">Close</button>
            <ol class="js-list"></ol>
    `);
    data.gratitudes.forEach((element, index) => {
        console.log(`<li class="index${index}">I am grateful for ${element.content}</li>`);   
        $('.js-list').append(`
        <li class="index${index}">I am grateful for ${element.content}<button class='update'>Update</button><button class='remove'>Delete</button><hr></li>
        `); 
    });

    $('.js-grat-list').slideDown('fast');
}

function getAndDisplayGratitudesModal() {
	getGratitudes(displayGratitudesModal);
}

function getAndDisplayGratitudesList() {
	getGratitudes(displayGratitudesList);
}

// listener events

$('.js-gratitude-btn').click(function() {
    getAndDisplayGratitudesModal();
}); 

$('.modal').on('click', '.js-modal-btn-exit', function() {
    $('.modal').slideUp('fast');
}); 

$('.modal').on('click', '.js-modal-btn-submit', function() {
    getAndDisplayGratitudesList();
}); 

$('.modal').on('click', '.js-modal-btn-close', function() {
    $('.js-grat-list').slideUp('fast');
}); 