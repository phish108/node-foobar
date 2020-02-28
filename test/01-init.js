/* eslint-env node, mocha */
/* eslint-disable require-jsdoc */

const chai = require("chai");
const expect = chai.expect;

const greeting = require("../index.js");

describe( "sanitize tool names", function() {
    it("getting started", () => {
        result = greeting();
        expect(result).to.equal("hello world");
    });

    // it("greet phish", () => {
    //     result = greeting("phish");
    //     expect(result).to.equal("hello phish");
    // })
});