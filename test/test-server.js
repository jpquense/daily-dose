const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

// small code test or individual functions
// const functiontotest = require('../server');

// integration test for http calls
// test GET request to see if 200 status is returned and index.html
describe('/', function(){
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