'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const {app, runServer, closeServer} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

// small code test or individual functions
// const functiontotest = require('../server');

// integration test for http calls
// test GET request to see if 200 status is returned and index.html
describe('home.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should return html and 200 status', function() {
        return chai.request(app)
            .get('/')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});

// test GET request to '/gratitude-list.html see if 200 status and gratitude-list.html are served
describe('gratitudes.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve gratitudes.html', function() {
        return chai.request(app)
            .get('/gratitudes')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});

// test GET request to '/day-plan.html see if 200 status is returned and day-plan.html
describe('goals.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve goals.html', function() {
        return chai.request(app)
            .get('/goals')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});

// test GET request to '/love-notes.html see if 200 status and love-notes.html are served
describe('signup.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve signup.html', function() {
        return chai.request(app)
            .get('/signup')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});

// test GET request to / see if 200 status and love-notes.html are served
describe('/', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve login.html', function() {
        return chai.request(app)
            .get('/')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});