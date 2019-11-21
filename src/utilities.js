const readPersonFriend = function(line) {
  return line.split(",");
};


const collectFriends = function(currentFriends, personFriend) {
  const person = personFriend[0],
    friend = personFriend[1];
  const friends = currentFriends[person];
  if (friends) {
    friends.push(friend);
    return currentFriends;
  }
  currentFriends[person] = [friend];
  return currentFriends;
};

const loadFriends = function(text) {
  const lines = text.split("\n");
  const personFriendList = lines.map(readPersonFriend);
  return personFriendList.reduce(collectFriends, {});
};

exports.loadFriends = loadFriends;
exports.collectFriends = collectFriends;
exports.readPersonFriend = readPersonFriend;
