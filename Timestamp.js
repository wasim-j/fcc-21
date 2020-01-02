module.exports = class {
  constructor(input = ""){
    this.input = input;
  }
  utc_validation(){
    return this.input_valid_date = new Date(this.input).toString() !== "Invalid Date";
  }
  utc_set(){
    let date = new Date(this.input);
    this.unix = date.getTime();
    this.utc = date.toUTCString();
  }
  unix_validation(){
    return this.input_valid_unix = /^-?[0-9]+$/.test(this.input);
  }
  unix_set(){
    let date = new Date(parseInt(this.input));
    this.unix = date.getTime() * 1000;
    this.utc = date.toUTCString();
  }
  invalid_set(){
    this.unix = null;
    this.utc = "Invalid Date";
  }
  now_set(){
    let date = new Date();
    this.unix = date.getTime();
    this.utc = date.toUTCString();
  }
  run(){
    // conditional chains
    (this.input.length === 0) ? this.now_set() :
    (this.unix_validation()) ? this.unix_set() :
    (this.utc_validation()) ? this.utc_set() : this.invalid_set();
    return;
  }
}