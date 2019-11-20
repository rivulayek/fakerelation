const assert = require('assert');
const utilities = require('../src/utilities.js');
const readPersonFriend = utilities.readPersonFriend;

describe("readPersonFriend",() =>{
  it("should give a list of strings seperated by coma",() => {
    const actual = readPersonFriend("a,b");
    const expected = ["a","b"];
    assert.deepStrictEqual(actual,expected);
  });
});
