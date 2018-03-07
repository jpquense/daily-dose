'use strict';

// talk about jwt with mentor
// add users and login and authenticated

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/login.html');
// });

// app.get('/home', (req, res) => {
//     res.sendFile(__dirname + '/home.html');
// });

// app.get('/gratitudes', (req, res) => {
//     res.sendFile(__dirname + '/gratitudes.html');
// });

// app.get('/goals', (req, res) => {
//     res.sendFile(__dirname + '/goals.html');
// });

// both run and close server access the same server object
// so "server" is declared here and when runServer runs 
// it is assigned its value
let server
// this function starts my server and returns a Promise
// it assigns an object value to server
function runServer() {
    const port = process.env.PORT || 8080;
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve(server);
        }).on('error', err => {
            reject(err)
        });
    });
}

// this function accesses server object create by runServer
// it closes the server and returns a manually created Promise
function closeServer() {
    return new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

// if server.js is called directly with `node server.js`, this block of code
// runs. but I also export the runServer command so other code like my test
// code can also start the server as needed

if (require.main === module) {
    runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
