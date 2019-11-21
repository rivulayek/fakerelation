const utilities = require("./utilities.js");
const loadFriends = utilities.loadFriends;

const findRelation = function(friends, name, friendsTree, persons) {
  if (friends.includes(persons[1])) {
    friendsTree.path.push(friends.slice());
    friends.push(name);
    console.log("its working", friends);
    return;
  }
  if (friends.includes(name)) {
    friends.push(name);
    console.log(friends, "push");
    return;
  }
  friends.push(name);
  console.log(friends);
  let array = friendsTree[name] || 0;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    findRelation(friends, array[i], friendsTree, persons);
    friends.pop();
    console.log("pop friends", friends);
  }
  return friendsTree;
};

const getRelationChain = function(args, friendsText) {
  const friends = [];
  const name = args[0];
  const persons = args.slice();
  const friendsTree = loadFriends(friendsText);
  friendsTree.path = [];
  console.log(friendsTree);
  const relations = findRelation(friends, name, friendsTree, persons);
  return friendsTree.path;
};

exports.getRelationChain = getRelationChain;
exports.findRelation = findRelation;
