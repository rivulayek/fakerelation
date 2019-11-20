const fs = require('fs');
const lib = require('./src/relationLib.js');
const getRelationChain = lib.getRelationChain;

const main = function(args) {
  const friendsText = fs.readFileSync('./friends.txt','utf-8');
  const message = getRelationChain(args,friendsText);
  console.log(message);
};

main(process.argv.slice(2));
