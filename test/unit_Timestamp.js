/ to run - in console: npm test

// Mocha allows you to use any assertion library you wish. 
// Node.js has a built-in assert module : require('assert');
const chai = require('chai');
const assert = chai.assert;

const Timestamp = require('./../Timestamp');

let valid_date_1 = "2015-12-25";
let valid_date_2 = "";
let valid_date_3 = "";
let valid_unix_1 = "1451001600";
let valid_unix_2 = "1450137600";
let valid_unix_3 = "";
let invalid_date_1 = "nfhtrhrth";
let invalid_date_2 = "";
let invalid_date_3 = "";
let invalid_date_4 = "";
let invalid_date_5 = "";

describe('Unit Test: Timestamp', () => {
  
  describe('valid date', () => {
    it(`${valid_date_1}`, () => {
      let timestamp = new Timestamp(valid_date_1)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Fri, 25 Dec 2015 00:00:00 GMT");
      assert.strictEqual(timestamp.unix, 1451001600000);
    });
    it.skip(`${valid_date_2}`, () => {
      let timestamp = new Timestamp(valid_date_2)
      timestamp.run();
      assert.strictEqual(timestamp.utc, timestamp.utc);
      assert.strictEqual(timestamp.unix, timestamp.unix);
    });
    it.skip(`${valid_date_3}`, () => {
      let timestamp = new Timestamp(valid_date_3)
      timestamp.run();
      assert.strictEqual(timestamp.utc, timestamp.utc);
      assert.strictEqual(timestamp.unix, timestamp.unix);
    });
  });
  
  describe('valid unix', () => {
    it(`${valid_unix_1}`, () => {
      let timestamp = new Timestamp(valid_unix_1)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Fri, 25 Dec 2015 00:00:00 GMT");
      assert.strictEqual(timestamp.unix, 1451001600000);
    });
    it(`${valid_unix_2}`, () => {
      let timestamp = new Timestamp(valid_unix_2)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Tue, Dec 15 00:00:00 2015 GMT");
      assert.strictEqual(timestamp.unix, 1450137600000);
    });
    it.skip(`${valid_unix_3}`, () => {
      let timestamp = new Timestamp(valid_unix_3)
      timestamp.run();
      assert.strictEqual(timestamp.utc, timestamp.utc);
      assert.strictEqual(timestamp.unix, timestamp.unix);
    });
  });
  
  describe('invalid input', () => {
    it(`${invalid_date_1}`, () => {
      let timestamp = new Timestamp(invalid_date_1)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Invalid Date");
      assert.isNull(timestamp.unix);
    });
    it.skip(`${invalid_date_2}`, () => {
      let timestamp = new Timestamp(invalid_date_2)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Invalid Date");
      assert.isNull(timestamp.unix);
    });
    it.skip(`${invalid_date_3}`, () => {
      let timestamp = new Timestamp(invalid_date_3)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Invalid Date");
      assert.isNull(timestamp.unix);
    });
  });
  
});
