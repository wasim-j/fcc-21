// to run - in console: npm test

// Mocha allows you to use any assertion library you wish. 
// Node.js has a built-in assert module : require('assert');
const chai = require('chai');
const assert = chai.assert;

const Timestamp = require('./../Timestamp');

let valid_date_1 = "2016-11-20";
let valid_date_2 = "December 17, 1995 03:24:00";
let valid_date_3 = "1995-12-17T03:24:00";
let valid_unix_1 = "1479663089000";
let valid_unix_2 = "6479000";
let valid_unix_3 = "9479666879";
let invalid_date_1 = "jjdumuf";
let invalid_date_2 = "frege";
let invalid_date_3 = "gegeg";
let invalid_date_4 = "egege";
let invalid_date_5 = "ggegegt";

describe('Unit Test: Timestamp', () => {
  
  describe('valid date', () => {
    it(`${valid_date_1}`, () => {
      let timestamp = new Timestamp(valid_date_1)
      timestamp.run();
      assert.strictEqual(timestamp.utc, timestamp.utc);
      assert.strictEqual(timestamp.unix, timestamp.unix);
    });
    it(`${valid_date_2}`, () => {
      let timestamp = new Timestamp(valid_date_2)
      timestamp.run();
      assert.strictEqual(timestamp.utc, timestamp.utc);
      assert.strictEqual(timestamp.unix, timestamp.unix);
    });
    it(`${valid_date_3}`, () => {
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
      assert.strictEqual(timestamp.utc, timestamp.utc);
      assert.strictEqual(timestamp.unix, timestamp.unix);
    });
    it(`${valid_unix_2}`, () => {
      let timestamp = new Timestamp(valid_unix_2)
      timestamp.run();
      assert.strictEqual(timestamp.utc, timestamp.utc);
      assert.strictEqual(timestamp.unix, timestamp.unix);
    });
    it(`${valid_unix_3}`, () => {
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
    it(`${invalid_date_2}`, () => {
      let timestamp = new Timestamp(invalid_date_2)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Invalid Date");
      assert.isNull(timestamp.unix);
    });
    it(`${invalid_date_3}`, () => {
      let timestamp = new Timestamp(invalid_date_3)
      timestamp.run();
      assert.strictEqual(timestamp.utc, "Invalid Date");
      assert.isNull(timestamp.unix);
    });
  });
  
});