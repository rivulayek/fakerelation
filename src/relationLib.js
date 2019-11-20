const utilities = require('./utilities.js');
const loadFriends = utilities.loadFriends;

const findRelation = function(friends,name,friendsTree,persons) {
  if(friends.includes(persons[1])) {
    return persons;
  }
  if(friends.includes(name)) {
    return persons;
  }
  friends.push(name)
  let array = friendsTree[name] || 0;
  let length = array.length;
  for(let i =0; i < length; i++) {
    persons = findRelation(friends,array[i],friendsTree,persons);
    if(friends.includes(persons[1])) {
      persons.push(name);
      break;
    }
  }
  return persons;
};

const getRelationChain = function(args,friendsText) {
  const friends = [];
  const name = args[0];
  const persons = args.slice();
  const friendsTree = loadFriends(friendsText);
  const relations = findRelation(friends,name,friendsTree,persons);
  return relations;
};

exports.getRelationChain = getRelationChain;
exports.findRelation = findRelation;
