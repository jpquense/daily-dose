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
describe('index.html page', function(){
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
describe('gratitude-list.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve gratitude-list.html', function() {
        return chai.request(app)
            .get('/gratitude-list')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});

// test GET request to '/day-plan.html see if 200 status is returned and day-plan.html
describe('day-plan.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve day-plan.html', function() {
        return chai.request(app)
            .get('/day-plan')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});

// test GET request to '/love-notes.html see if 200 status and love-notes.html are served
describe('love-notes.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve love-notes.html', function() {
        return chai.request(app)
            .get('/love-notes')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});

// test GET request to '/love-notes.html see if 200 status and love-notes.html are served
describe('meditation.html page', function(){
    before(function() {
        return runServer();
    });
    after(function() {
        return closeServer();
    });
    it('should serve meditation.html', function() {
        return chai.request(app)
            .get('/meditation')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});