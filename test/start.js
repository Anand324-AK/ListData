// Import the dependencies for testing
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
// Configure chai
chai.should();
chai.use(chaiHttp);
describe("listdatamaster", () => {
  describe("GET /", () => {
    // Test to get all listdatamaster records
    it("should get all listdatamaster records", (done) => {
      chai
        .request(app)
        .get("/listdatamaster/listdatamaster")
        .end((err, res) => {
        //   res.should.have.status(200);
          res.body.should.be.an("array");
        res.body.length.should.be.eql(0);

          done();
        });
    });
  });
});
